// Writes public/sitemap.xml and public/robots.txt from the locale routes in lib/i18n/config.ts.
// The static export does not emit app/sitemap.ts or app/robots.ts, so they are plain files in public/.
//
//   node scripts/discovery.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { localePath, localizedRoutes, locales, siteUrl } from '../lib/i18n/config.ts';

const root = new URL('..', import.meta.url);

// lastmod is the date of the release the site describes, so it moves only when a release does.
export function releaseDate(manifest = JSON.parse(readFileSync(new URL('release/manifest.json', root), 'utf8'))) {
  const date = String(manifest.publishedAt ?? '').slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('release/manifest.json has no valid publishedAt date');
  return date;
}

const escape = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export function sitemap(lastModified = releaseDate()) {
  const urls = localizedRoutes.flatMap((route) => {
    const alternates = locales.map(
      (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${escape(siteUrl + localePath(l, route))}"/>`,
    );
    const changefreq = route.startsWith('/docs/') ? 'weekly' : 'monthly';
    const priority = route === '/' ? '1.0' : route === '/docs/' ? '0.9' : '0.7';
    return locales.map((locale) =>
      [
        '  <url>',
        `    <loc>${escape(siteUrl + localePath(locale, route))}</loc>`,
        ...alternates,
        `    <lastmod>${lastModified}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n'),
    );
  });
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
}

export function robots() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  writeFileSync(new URL('public/sitemap.xml', root), sitemap());
  writeFileSync(new URL('public/robots.txt', root), robots());
  console.log(`discovery: wrote sitemap.xml (${localizedRoutes.length * locales.length} urls) and robots.txt`);
}
