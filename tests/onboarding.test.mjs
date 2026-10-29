import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { parseChangelog } from '../scripts/release.mjs';

const root = new URL('../', import.meta.url);
const built = new URL('dist/client/', root);
const source = (path) => readFile(new URL(path, root), 'utf8');
const manifest = JSON.parse(await source('release/manifest.json'));

// CI runs `npm test` before the build, so the built-output checks skip when there is no build,
// unless CLAIMS_REQUIRE_BUILD=1 (the workflow sets it for the step after the build).
const hasBuild = existsSync(built);
const buildOptions = { skip: !hasBuild && process.env.CLAIMS_REQUIRE_BUILD !== '1' && 'run `npm run build` first' };
const html = (path) => readFile(new URL(path, built), 'utf8');
const visible = (page) =>
  page
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ');

const newPages = ['docs/troubleshooting', 'changelog'];

test('public/og.png is a 1200x630 PNG', async () => {
  const png = await readFile(new URL('public/og.png', root));
  assert.equal(png.subarray(1, 4).toString('latin1'), 'PNG');
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
});

test('shares a card: open graph and twitter metadata on every page, from one helper', async () => {
  const index = await source('lib/i18n/index.ts');
  assert.match(index, /card: 'summary_large_image'/);
  assert.match(index, /url: '\/og\.png', width: 1200, height: 630/);
  for (const fn of ['rootMetadata', 'pageMetadata']) assert.match(index, new RegExp(`export function ${fn}`));
  assert.equal((index.match(/\.\.\.social\(/g) ?? []).length, 2, 'rootMetadata and pageMetadata both use it');
});

test('the built pages carry og:title, og:image and twitter:card', buildOptions, async () => {
  for (const path of ['index.html', 'tr/index.html', 'pricing/index.html', 'compare/index.html', 'changelog/index.html']) {
    const page = await html(path);
    assert.match(page, /<meta property="og:title" content="[^"]+"/, path);
    assert.match(page, /<meta property="og:image" content="https:\/\/taksim\.edgee\.tech\/og\.png"/, path);
    assert.match(page, /<meta name="twitter:card" content="summary_large_image"/, path);
  }
  const trHome = await html('tr/index.html');
  assert.match(trHome, /<meta property="og:locale" content="tr_TR"/);
});

test('describes the app for search: SoftwareApplication JSON-LD on home and pricing, paid plans as pre-order', buildOptions, async () => {
  for (const path of ['index.html', 'pricing/index.html', 'tr/index.html', 'tr/pricing/index.html']) {
    const page = await html(path);
    const blocks = [...page.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    assert.equal(blocks.length, 1, path);
    const data = JSON.parse(blocks[0][1].replaceAll('\\u003c', '<'));
    assert.equal(data['@type'], 'SoftwareApplication');
    assert.equal(data.operatingSystem, 'Windows, macOS');
    assert.deepEqual(data.offers.map((o) => [o.name, o.price]), [['Developer', 0], ['Pro', 12], ['Team', 18]]);
    assert.deepEqual(data.offers.map((o) => o.availability.replace('https://schema.org/', '')), ['InStock', 'PreOrder', 'PreOrder']);
    assert.equal(data.softwareVersion, manifest.version);
    assert.equal('aggregateRating' in data, false);
  }
});

test('sitemap lastmod is the release date from the manifest, for every URL', async () => {
  const date = manifest.publishedAt.slice(0, 10);
  const sitemap = await source('public/sitemap.xml');
  const marks = [...sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
  assert.equal(marks.length, sitemap.match(/<url>/g).length);
  for (const mark of marks) assert.equal(mark, date);
  const { releaseDate } = await import('../scripts/discovery.mjs');
  assert.equal(releaseDate(), date);
  assert.throws(() => releaseDate({}), /publishedAt/);
});

test('troubleshooting and changelog exist in both languages and the sitemap', async () => {
  const { localizedRoutes } = await import('../lib/i18n/config.ts');
  const sitemap = await source('public/sitemap.xml');
  for (const page of newPages) {
    assert.ok(localizedRoutes.includes(`/${page}/`), page);
    assert.ok(sitemap.includes(`<loc>https://taksim.edgee.tech/${page}/</loc>`), page);
    assert.ok(sitemap.includes(`<loc>https://taksim.edgee.tech/tr/${page}/</loc>`), `tr ${page}`);
  }
  const llms = await source('release/llms.template.txt');
  assert.ok(llms.includes('https://taksim.edgee.tech/docs/troubleshooting'));
  assert.ok(llms.includes('https://taksim.edgee.tech/changelog'));
  assert.match(await source('components/pages/docs-home.tsx'), /t\.helpBody/);
  const { en } = await import('../lib/i18n/en.ts');
  assert.match(en.docs.helpBody, /\(\/docs\/troubleshooting\)/);
});

test('the built troubleshooting and changelog pages exist', buildOptions, async () => {
  for (const base of ['', 'tr/']) {
    for (const page of newPages) assert.ok(existsSync(new URL(`${base}${page}/index.html`, built)), `${base}${page}`);
  }
  const sitemap = await readFile(new URL('sitemap.xml', built), 'utf8');
  for (const page of newPages) assert.ok(sitemap.includes(`/${page}/`) && sitemap.includes(`/tr/${page}/`), page);
});

test('every troubleshooting entry gives a command, and the commands are the same in both languages', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  const ids = ['gateway', 'judge', 'mode', 'budget', 'update', 'macPath', 'uninstall'];
  assert.deepEqual(Object.keys(en.troubleshooting.items), ids);
  assert.deepEqual(Object.keys(tr.troubleshooting.items), ids);
  const page = await source('components/pages/troubleshooting.tsx');
  assert.match(page, /const order = \['gateway', 'judge', 'mode', 'budget', 'update', 'macPath', 'uninstall'\] as const;/);
  const counts = { gateway: 3, judge: 2, mode: 3, budget: 3, update: 4, macPath: 3, uninstall: 2 };
  for (const id of ids) {
    assert.equal(en.troubleshooting.items[id].steps.length, counts[id], id);
    assert.equal(tr.troubleshooting.items[id].steps.length, counts[id], id);
    const block = page.slice(page.indexOf(`  ${id}: [`), page.indexOf('\n  ],', page.indexOf(`  ${id}: [`)));
    assert.equal((block.match(/command:/g) ?? []).length, counts[id], `${id} commands`);
  }
  // The topics the guide has to cover.
  for (const needle of ['taksim gateway status', 'taksim judge status', 'taksim routing subscription status', 'taksim budget status', '--allow-unsigned', '.local/bin', 'taksim uninstall --dry-run']) {
    assert.ok(page.includes(needle), needle);
  }
  assert.match(page, /Downloaded installer has no valid Authenticode signature/);
  assert.match(en.troubleshooting.items.mode.note, /Code tab cannot be routed/);
});

test('the quick start has "Turn on savings" with both paths, the check and a manual checksum install', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  const parts = (await Promise.all(['components/turn-on-savings.tsx', 'components/manual-install.tsx'].map(source))).join('\n');
  for (const needle of ['taksim mode economy', 'taksim claude', 'taksim routing subscription on', 'taksim report weekly', 'Get-FileHash', 'shasum -a 256', 'SHA256SUMS.txt']) {
    assert.ok(parts.includes(needle), needle);
  }
  assert.equal(en.quickStart.savings.title, '4. Turn on savings');
  assert.equal(tr.quickStart.savings.title, '4. Tasarrufu açın');
  assert.match(en.quickStart.savings.subscriptionBody, /\[plan terms note\]\(\/docs#subscriptions-and-api-keys\)/);
  for (const path of ['components/pages/quick-start.tsx', 'components/pages/getting-started.tsx']) {
    const page = await source(path);
    assert.match(page, /<TurnOnSavings /, path);
    assert.match(page, /<ManualInstall /, path);
  }
  assert.ok(!parts.includes('releases/latest/download'), 'the installer URL comes from the manifest, not page copy');
});

test('the built quick start shows the savings commands and the manual install', buildOptions, async () => {
  for (const path of ['docs/quick-start/index.html', 'tr/docs/quick-start/index.html', 'docs/getting-started/index.html']) {
    const text = visible(await html(path));
    assert.ok(text.includes('taksim mode economy'), path);
    assert.ok(text.includes('taksim routing subscription on'), path);
    assert.ok(text.includes('taksim report weekly'), path);
    assert.ok(text.includes('Get-FileHash'), path);
    assert.match(await html(path), /<details>\s*<summary>[^<]*(?:checksum|sağlama)/i, path);
  }
});

test('labels macOS a preview that has not been tested on Mac hardware', buildOptions, async () => {
  for (const path of ['clients/index.html', 'docs/quick-start/index.html', 'docs/getting-started/index.html']) {
    assert.ok(visible(await html(path)).includes('Preview: not yet tested on Mac hardware'), path);
  }
  assert.ok(visible(await html('tr/clients/index.html')).includes('Önizleme: henüz Mac donanımında test edilmedi'));
});

test('parses a product changelog into plain summaries with the details kept apart', () => {
  const fixture = `# Changelog

## Unreleased

- Not released yet.

## 1.2.3 — 2026-01-02

- \`taksim thing\` (refs #12): does the thing, e.g. quickly. It also does more. See [Docs](docs/X.md#a) (#34, refs #56).
  Continued line.
  - nested point (refs #7)
- Second change.

## 1.2.2 — 2026-01-01

- Older.
`;
  const [top, older] = parseChangelog(fixture, 5);
  assert.equal(top.version, '1.2.3');
  assert.equal(top.date, '2026-01-02');
  assert.equal(older.version, '1.2.2');
  assert.equal(top.items.length, 2);
  assert.equal(top.items[0].summary, '`taksim thing`: does the thing, e.g. quickly.');
  assert.equal(top.items[0].details, 'It also does more. See Docs. Continued line.');
  assert.deepEqual(top.items[0].points, ['nested point']);
  assert.deepEqual(top.items[1], { summary: 'Second change.', details: '', points: [] });
  assert.equal(parseChangelog(fixture, 1).length, 1);
});

test('the committed changelog data starts at the current release and carries no private references', async () => {
  const data = JSON.parse(await source('data/changelog.json'));
  assert.equal(data.schema, 'taksim.changelog.v1');
  assert.equal(data.entries.length, 5);
  assert.equal(data.entries[0].version, manifest.version);
  assert.match(data.entries[0].date, /^\d{4}-\d{2}-\d{2}$/);
  for (const entry of data.entries) assert.ok(entry.items.length > 0, entry.version);
  const text = JSON.stringify(data);
  assert.doesNotMatch(text, /#\d+\b|refs? #/);
  assert.doesNotMatch(text, /\]\(docs\//);
  // Regenerating from the product repository must give the same file: TAKSIM_CHANGELOG=<path to CHANGELOG.md at the release>.
  if (process.env.TAKSIM_CHANGELOG) {
    const fresh = parseChangelog(await readFile(process.env.TAKSIM_CHANGELOG, 'utf8'), 5);
    assert.deepEqual(fresh, data.entries);
  }
});

test('the built changelog shows the current release first, with details collapsed', buildOptions, async () => {
  for (const path of ['changelog/index.html', 'tr/changelog/index.html']) {
    const page = await html(path);
    const first = page.match(/<h2[^>]*>(\d+\.\d+\.\d+)/)?.[1];
    assert.equal(first, manifest.version, path);
    assert.match(page, /<details>\s*<summary>/, path);
    assert.doesNotMatch(page, /<details open/, path);
  }
});
