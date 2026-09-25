import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = path.join(process.cwd(), 'dist');
const failures = [];
const highRiskSlugs = new Set([
  'daily-drawdown-limit', 'funded-account', 'prop-firm-challenge', 'consistency-rule', 'risk-per-trade',
  'win-rate', 'profit-factor', 'loss-aversion', 'profit-target', 'overall-drawdown-limit',
]);

function structuredDataFrom(html, file) {
  const blocks = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  const nodes = [];
  for (const block of blocks) {
    try {
      const parsed = JSON.parse(block[1]);
      nodes.push(...(Array.isArray(parsed['@graph']) ? parsed['@graph'] : [parsed]));
    } catch {
      failures.push(`${file}: invalid JSON-LD`);
    }
  }
  return nodes;
}

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(fullPath) : [fullPath];
  }));
  return files.flat();
}

const pages = (await filesUnder(root)).filter((file) => file.endsWith('index.html') && file !== path.join(root, 'index.html'));
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  const relativeFile = path.relative(root, file);
  const slug = relativeFile.split(path.sep)[0];
  const expectedCanonical = `https://proplogai.com/glossary/${slug}`;
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  if (h1Count !== 1) failures.push(`${relativeFile}: expected 1 H1, found ${h1Count}`);
  if (/PropLog AI|Propol AI|Propol Coach|PROPLOG AI/i.test(html)) failures.push(`${relativeFile}: legacy brand spelling`);
  if (!/<time\s+datetime="\d{4}-\d{2}-\d{2}"/i.test(html)) failures.push(`${relativeFile}: missing visible ISO date`);
  if (!/<meta\s+property="article:modified_time"\s+content="\d{4}-\d{2}-\d{2}"/i.test(html)) failures.push(`${relativeFile}: missing article:modified_time`);
  if (!html.includes(`<link rel="canonical" href="${expectedCanonical}">`)) failures.push(`${relativeFile}: canonical must match the no-slash public URL`);
  if (!html.includes(`<meta property="og:url" content="${expectedCanonical}">`)) failures.push(`${relativeFile}: og:url must match the no-slash public URL`);
  if (highRiskSlugs.has(slug)) {
    if (!html.includes('datetime="2026-09-20"')) failures.push(`${relativeFile}: missing Batch D revision date`);
    if (!html.includes('Sources checked')) failures.push(`${relativeFile}: missing visible sources section`);
    if (!/<a\s+href="https:\/\//i.test(html)) failures.push(`${relativeFile}: missing external HTTPS source link`);
  }
  const nodes = structuredDataFrom(html, relativeFile);
  const types = new Set(nodes.flatMap((node) => Array.isArray(node['@type']) ? node['@type'] : [node['@type']]));
  for (const type of ['WebPage', 'DefinedTerm', 'BreadcrumbList']) {
    if (!types.has(type)) failures.push(`${relativeFile}: missing ${type} schema`);
  }
  const page = nodes.find((node) => node['@type'] === 'WebPage');
  if (page && (!page.url || !page.name || !page.description || !/^\d{4}-\d{2}-\d{2}$/.test(page.dateModified ?? '') || !page.mainEntity)) {
    failures.push(`${relativeFile}: incomplete WebPage schema`);
  }
  const term = nodes.find((node) => node['@type'] === 'DefinedTerm');
  if (term && (!term.name || !term.description || !term.url || term.inDefinedTermSet?.['@type'] !== 'DefinedTermSet')) {
    failures.push(`${relativeFile}: incomplete DefinedTerm schema`);
  }
  const breadcrumbs = nodes.find((node) => node['@type'] === 'BreadcrumbList');
  if (breadcrumbs && (!Array.isArray(breadcrumbs.itemListElement) || breadcrumbs.itemListElement.length !== 3)) {
    failures.push(`${relativeFile}: BreadcrumbList must contain 3 items`);
  }
}

const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
if (pages.length !== 35) failures.push(`expected 35 term pages, found ${pages.length}`);
if (urls.length !== new Set(urls).size) failures.push('sitemap contains duplicate URLs');
if (urls.filter((url) => url.endsWith('/daily-drawdown-limit')).length !== 1) failures.push('daily-drawdown-limit must appear exactly once in sitemap');

const collectionHtml = await readFile(path.join(root, 'index.html'), 'utf8');
if (!collectionHtml.includes('<link rel="canonical" href="https://proplogai.com/glossary">')) failures.push('index.html: canonical must use the no-slash public URL');
const collectionNodes = structuredDataFrom(collectionHtml, 'index.html');
const collectionTypes = new Set(collectionNodes.map((node) => node['@type']));
if (!collectionTypes.has('CollectionPage') || !collectionTypes.has('DefinedTermSet')) {
  failures.push('index.html: missing CollectionPage or DefinedTermSet schema');
}
const termSet = collectionNodes.find((node) => node['@type'] === 'DefinedTermSet');
if (!termSet || !Array.isArray(termSet.hasDefinedTerm) || termSet.hasDefinedTerm.length !== 35) {
  failures.push('index.html: DefinedTermSet must contain 35 terms');
}

if (failures.length) {
  console.error(`Build validation failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Build validation passed: glossary collection schema plus ${pages.length} term pages with visible dates, WebPage, DefinedTerm and BreadcrumbList schema; ${urls.length} unique sitemap URLs; exactly one H1 per term page.`);
