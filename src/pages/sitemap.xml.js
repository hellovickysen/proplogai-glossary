import { glossaryTerms } from '../data/glossary-terms.js';

export async function GET(context) {
  const site = String(context.site || 'https://proplogai.com').replace(/\/$/, '');
  const lastmod = new Date().toISOString().split('T')[0];
  const urls = [
    { loc: `${site}/glossary`, changefreq: 'weekly', priority: '0.8' },
    ...glossaryTerms.map((term) => ({
      loc: `${site}/glossary/${term.slug}`,
      changefreq: 'monthly',
      priority: '0.6',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
