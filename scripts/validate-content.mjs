import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { glossaryPageUpdatedAt, glossaryTerms } from '../src/data/glossary-terms.js';

const root = process.cwd();
const failures = [];
const requiredFields = ['slug', 'title', 'shortDefinition', 'category', 'fullContent'];
const highRiskSlugs = new Set([
  'daily-drawdown-limit',
  'funded-account',
  'prop-firm-challenge',
  'consistency-rule',
  'risk-per-trade',
  'win-rate',
  'profit-factor',
  'loss-aversion',
  'profit-target',
  'overall-drawdown-limit',
]);

if (!/^\d{4}-\d{2}-\d{2}$/.test(glossaryPageUpdatedAt)) {
  failures.push('glossaryPageUpdatedAt must be an ISO date');
}

function findDuplicates(values) {
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return [...counts].filter(([, count]) => count > 1).map(([value]) => value);
}

for (const field of requiredFields) {
  for (const [index, term] of glossaryTerms.entries()) {
    if (typeof term[field] !== 'string' || term[field].trim() === '') {
      failures.push(`glossary term ${index + 1} is missing ${field}`);
    }
  }
}

for (const slug of findDuplicates(glossaryTerms.map((term) => term.slug))) {
  failures.push(`duplicate slug: ${slug}`);
}
for (const title of findDuplicates(glossaryTerms.map((term) => term.title.toLowerCase()))) {
  failures.push(`duplicate title: ${title}`);
}

const slugs = new Set(glossaryTerms.map((term) => term.slug));
const requiredGuides = new Map([
  ['revenge-trading', '/blogs/revenge-trading-prop-firm'],
  ['drawdown', '/blogs/daily-drawdown-calculator'],
  ['overtrading', '/blogs/overtrading-prop-firm-challenges'],
  ['consistency-rule', '/blogs/prop-firm-consistency-calculator'],
  ['overall-drawdown-limit', '/blogs/daily-drawdown-calculator'],
  ['daily-drawdown-limit', '/blogs/daily-drawdown-calculator'],
  ['trading-journal', '/blogs/prop-firm-trading-journal'],
]);
const requiredBodyLinks = new Map([
  ['trading-journal', ['/blogs/trading-journal-template', '/glossary/trade-review']],
]);
const allowedVisuals = new Set(['trading-journal-loop']);
for (const term of glossaryTerms) {
  if (term.updatedAt && !/^\d{4}-\d{2}-\d{2}$/.test(term.updatedAt)) {
    failures.push(`${term.slug}: updatedAt must be an ISO date`);
  }
  if (term.aliases && (!Array.isArray(term.aliases) || term.aliases.some((alias) => typeof alias !== 'string' || !alias.trim()))) {
    failures.push(`${term.slug}: aliases must be non-empty strings`);
  }
  if (term.visual && !allowedVisuals.has(term.visual)) failures.push(`${term.slug}: unsupported visual ${term.visual}`);
  for (const related of term.relatedTerms ?? []) {
    if (!slugs.has(related)) failures.push(`${term.slug}: unknown related term ${related}`);
  }
  if (term.guide && (!/^\/blogs\/[a-z0-9-]+$/.test(term.guide.href ?? '') || typeof term.guide.label !== 'string' || !term.guide.label.trim())) {
    failures.push(`${term.slug}: guide requires a no-slash blog href and non-empty label`);
  }
  if (highRiskSlugs.has(term.slug)) {
    if (term.updatedAt !== '2026-09-20') failures.push(`${term.slug}: Batch D revision date is missing`);
    if (!Array.isArray(term.sourceIds) || term.sourceIds.length === 0) failures.push(`${term.slug}: sourceIds are required`);
    if (!Array.isArray(term.sources) || term.sources.length === 0) failures.push(`${term.slug}: visible sources are required`);
    if (term.sources?.some((source) => !source.id || !source.label || !/^https:\/\//.test(source.url ?? '') || !/^\d{4}-\d{2}-\d{2}$/.test(source.checkedOn ?? ''))) {
      failures.push(`${term.slug}: source entries require id, label, HTTPS URL, and checkedOn`);
    }
    if (term.sources && term.sourceIds && term.sources.some((source) => !term.sourceIds.includes(source.id))) {
      failures.push(`${term.slug}: visible source ID is absent from sourceIds`);
    }
  }
}

for (const [slug, href] of requiredGuides) {
  const term = glossaryTerms.find((item) => item.slug === slug);
  if (term?.guide?.href !== href) failures.push(`${slug}: missing required guide relationship ${href}`);
}

for (const [slug, hrefs] of requiredBodyLinks) {
  const term = glossaryTerms.find((item) => item.slug === slug);
  for (const href of hrefs) {
    if (!term?.fullContent?.includes(`href="${href}"`)) failures.push(`${slug}: missing required body link ${href}`);
  }
}
if (glossaryTerms.find((term) => term.slug === 'trading-journal')?.visual !== 'trading-journal-loop') {
  failures.push('trading-journal: interactive journal-loop visual is required');
}

const blockedHighRiskWording = [
  /typically 4-5%/i,
  /typically 0\.5% to 2%/i,
  /typically 30-40%/i,
  /typically 70-90%/i,
  /80-90% of traders fail/i,
  /roughly twice as intense/i,
  /above 1\.5 is considered strong/i,
  /with real capital/i,
];
for (const term of glossaryTerms.filter((item) => highRiskSlugs.has(item.slug))) {
  const text = `${term.shortDefinition} ${term.fullContent} ${term.proplogConnection ?? ''}`;
  for (const pattern of blockedHighRiskWording) {
    if (pattern.test(text)) failures.push(`${term.slug}: contains blocked Batch D wording ${pattern}`);
  }
}

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(fullPath) : [fullPath];
  }));
  return files.flat();
}

const forbiddenBrands = [/\bPropLog AI\b/g, /\bPropol AI(?: Coach)?\b/g, /\bPropol Coach\b/g, /\bPROPLOG AI\b/g];
for (const scanRoot of [path.join(root, 'src'), path.join(root, 'public')]) {
  for (const file of await filesUnder(scanRoot)) {
    if (!/\.(astro|html|js|jsx|json|md|mdx|svg|ts|tsx|txt|xml)$/i.test(file)) continue;
    const lines = (await readFile(file, 'utf8')).split(/\r?\n/);
    for (const [index, line] of lines.entries()) {
      for (const pattern of forbiddenBrands) {
        pattern.lastIndex = 0;
        if (pattern.test(line)) {
          failures.push(`${path.relative(root, file).replaceAll('\\', '/')}:${index + 1}: legacy brand spelling`);
        }
      }
    }
  }
}

if (failures.length) {
  console.error(`Content validation failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Content validation passed: ${glossaryTerms.length} terms, ${slugs.size} unique slugs, valid page revision date, all related terms valid, no legacy brand spellings.`);
