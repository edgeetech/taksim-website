import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const built = new URL('dist/client/', root);
const source = (path) => readFile(new URL(path, root), 'utf8');

// CI runs `npm test` before the build, so the built-output checks skip when there is no build,
// unless CLAIMS_REQUIRE_BUILD=1 (the workflow sets it for the step after the build).
const hasBuild = existsSync(built);
const buildOptions = { skip: !hasBuild && process.env.CLAIMS_REQUIRE_BUILD !== '1' && 'run `npm run build` first' };

const html = (path) => readFile(new URL(path, built), 'utf8');
const visible = (page) =>
  page
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');

test('the hero no longer shows the illustrative ledger numbers', async () => {
  assert.equal(existsSync(new URL('components/ledger-stream.tsx', root)), false);
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  for (const dict of [en, tr]) {
    assert.equal('ledger' in dict, false);
    assert.doesNotMatch(JSON.stringify(dict), /1,612\.40|1\.612,40/);
  }
  for (const path of ['components/pages/home.tsx', 'app/globals.css']) {
    assert.doesNotMatch(await source(path), /LedgerStream|1,612|\.ledger-|hero-visual/, path);
  }
});

test('hero chips link only to pages that exist, so /proof appears once its route does', async () => {
  const { localizedRoutes } = await import('../lib/i18n/config.ts');
  const home = await source('components/pages/home.tsx');
  assert.match(home, /\.filter\(\(chip\) => \(localizedRoutes as readonly string\[\]\)\.includes\(chip\.route\)\)/);
  assert.match(home, /route: '\/benchmark\/'/);
  assert.match(home, /route: '\/proof\/'/);
  assert.ok(localizedRoutes.includes('/benchmark/'));
});

test('publishes /compare in both languages, the sitemap and the navigation', async () => {
  const { localizedRoutes } = await import('../lib/i18n/config.ts');
  assert.ok(localizedRoutes.includes('/compare/'));
  const sitemap = await source('public/sitemap.xml');
  assert.ok(sitemap.includes('<loc>https://taksim.edgee.tech/compare/</loc>'));
  assert.ok(sitemap.includes('<loc>https://taksim.edgee.tech/tr/compare/</loc>'));
  const chrome = await source('components/site-chrome.tsx');
  assert.equal(chrome.match(/href\('\/compare'\)/g).length, 3, 'header, mobile menu and footer');
  for (const [path, locale] of [
    ['app/(en)/compare/page.tsx', 'en'],
    ['app/tr/compare/page.tsx', 'tr'],
  ]) {
    assert.match(await source(path), new RegExp(`pageMetadata\\('${locale}', '/compare/', 'compare'\\)`), path);
  }
});

test('every competitor cell has copy and at least one public source in both languages', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  const { compareColumns, compareRowIds, compareSources, compareAsOf } = await import('../lib/compare.ts');
  assert.equal(compareAsOf, '2026-10-30');
  for (const dict of [en, tr]) {
    assert.deepEqual(Object.keys(dict.compare.rows), [...compareRowIds]);
    for (const id of compareRowIds) {
      for (const column of compareColumns) {
        assert.ok(dict.compare.rows[id].cells[column].trim(), `${id}.${column}`);
        if (column === 'taksim') continue;
        const links = compareSources[id][column];
        assert.ok(links.length >= 1, `${id}.${column} needs a source`);
        for (const link of links) assert.match(link, /^https:\/\/[a-z.-]+\//, `${id}.${column}`);
      }
    }
  }
  assert.match(en.compare.asOf, /^As of 30 Oct 2026\.$/);
  assert.match(tr.compare.asOf, /30 Eki 2026/);
  assert.equal(en.compare.freeSentence, 'If `/model sonnet` is enough for your work, use it; it is free.');
});

test('/compare states where Taksim is weaker, including that routing was not cheaper than always-Sonnet', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  const { report, copyTokens, fillKnown } = await import('../lib/benchmark/report.ts');
  const labels = (dict) => ({
    notMeasured: dict.home.pilot.notMeasured,
    undefinedPerAccepted: dict.home.pilot.undefinedPerAccepted,
  });
  const items = fillKnown(en.compare.limits.items, copyTokens(report, 'en', labels(en)));
  assert.match(items[0], /^Routing was not cheaper than always-Sonnet in our pilot\./);
  assert.ok(items[0].includes('Always-Sonnet cost $4.19 with 53 of 58 runs accepted'));
  assert.ok(items[0].includes('Taksim routed cost $4.65 with 54 of 58'));
  assert.ok(report.cold.taksim.totalUsd.value > report.cold.sonnet.totalUsd.value);
  assert.match(en.compare.limits.items.join(' '), /unsigned/);
  assert.match(en.compare.limits.items.join(' '), /not been tested on Mac hardware/);
  assert.equal(tr.compare.limits.items.length, en.compare.limits.items.length);
  assert.match(en.home.hero.chips.benchmark, /not cheaper than always-Sonnet/);
  assert.match(tr.home.hero.chips.benchmark, /her zaman Sonnet.ten daha ucuz değil/);
});

test('competitor facts stay within what the sources say', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const text = JSON.stringify(en.compare);
  // Nothing claims a competitor sends prompts; Not Diamond's own data dictionary is cited for what it sends.
  assert.doesNotMatch(text, /sends? (?:your )?prompts|uploads? (?:your )?(?:code|prompts)/i);
  assert.match(en.compare.rows.local.cells.notDiamond, /prompt content only if an admin opts in/);
  assert.match(en.compare.rows.nativeAudit.cells.taksim, /^Coming; not in this release\./);
  assert.doesNotMatch(text, /open[ -]source|SOC ?2|ISO[ /]?27001/i);
});

test('the built home page has no illustrative total and links to the benchmark', buildOptions, async () => {
  const { localizedRoutes } = await import('../lib/i18n/config.ts');
  for (const [path, prefix] of [
    ['index.html', ''],
    ['tr/index.html', '/tr'],
  ]) {
    const page = await html(path);
    assert.doesNotMatch(page, /1,612\.40|1\.612,40/, path);
    assert.ok(page.includes(`href="${prefix}/benchmark/"`) || page.includes(`href="${prefix}/benchmark"`), `${path} links to the benchmark`);
    const proof = new RegExp(`href="${prefix}/proof/?"`);
    if (localizedRoutes.includes('/proof/')) assert.match(page, proof, path);
    else assert.doesNotMatch(page, proof, `${path} must not link to a page that does not exist`);
  }
});

test('the built /compare pages carry the sentence, the date and a source in every row', buildOptions, async () => {
  const en = await html('compare/index.html');
  assert.ok(visible(en).includes('it is free'));
  assert.ok(visible(en).includes('As of 30 Oct 2026'));
  assert.ok(visible(en).includes('Routing was not cheaper than always-Sonnet in our pilot'));
  const tr = await html('tr/compare/index.html');
  assert.ok(visible(tr).includes('30 Eki 2026'));
  for (const [name, page] of [
    ['en', en],
    ['tr', tr],
  ]) {
    const rows = [...page.matchAll(/<tr[^>]*data-row="([^"]+)"[^>]*>([\s\S]*?)<\/tr>/g)];
    assert.equal(rows.length, 8, `${name} rows`);
    for (const [, id, body] of rows) {
      const external = [...body.matchAll(/<a [^>]*href="(https:\/\/[^"]+)"/g)].map((m) => m[1]);
      assert.ok(external.length >= 5, `${name} row ${id} has ${external.length} external sources, expected one per competitor`);
    }
  }
  const sitemap = await readFile(new URL('sitemap.xml', built), 'utf8');
  assert.ok(sitemap.includes('/compare/') && sitemap.includes('/tr/compare/'));
});

test('every competitor cell that states a number, a price or a date has a source URL', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  const { compareColumns, compareRowIds, compareSources } = await import('../lib/compare.ts');
  const factual = /\d|\$|\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\b|\b(?:Oca|Şub|Nis|Haz|Tem|Ağu|Eyl|Eki|Kas|Ara)[a-zşğıüöç]*\b/;
  let checked = 0;
  for (const dict of [en, tr]) {
    for (const id of compareRowIds) {
      for (const column of compareColumns) {
        if (column === 'taksim') continue;
        const cell = dict.compare.rows[id].cells[column];
        if (!factual.test(cell)) continue;
        checked++;
        const links = compareSources[id][column];
        assert.ok(links.length >= 1 && links.every((link) => link.startsWith('https://')), `${id}.${column} states a figure or date but has no source URL`);
      }
    }
  }
  assert.ok(checked >= 10, `expected several dated or priced cells, found ${checked}`);
  assert.ok(factual.test('$0.05'));
  assert.ok(factual.test('30 Oct 2026'));
});

test('the refreshed competitor facts cite their primary sources', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  const { compareSources, compareAsOf } = await import('../lib/compare.ts');
  const compareSource = await source('lib/compare.ts');
  assert.doesNotMatch(compareSource, /cellcog/i);
  for (const dict of [en, tr]) assert.doesNotMatch(JSON.stringify(dict), /cellcog/i);
  assert.equal(compareAsOf, '2026-10-30');
  assert.ok(compareSources.price.notDiamond.includes('https://www.notdiamond.ai/pricing'));
  assert.match(compareSource, /ndPricing:/);
  for (const link of [
    'https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option',
    'https://github.blog/changelog/2026-10-28-github-copilot-fusion-now-supports-selection-of-local-models',
  ]) {
    assert.ok(compareSources.claudeOnly.fusion.includes(link), link);
  }
  for (const dict of [en, tr]) {
    const fusion = dict.compare.rows.claudeOnly.cells.fusion;
    assert.match(fusion, /^GitHub Copilot Fusion \((?:preview name|önizleme adı): Project HydraFusion\)/);
    assert.ok(fusion.includes('Claude Opus 5.5'));
    assert.match(fusion, /14 (?:Oct|Eki) 2026/);
    assert.match(fusion, /28 (?:Oct|Eki) 2026/);
  }
  const price = en.compare.rows.price.cells.notDiamond;
  assert.ok(price.includes('$0.05 per million tokens routed') && price.includes('Apply for access'));
  assert.doesNotMatch(price, /not stated on the pages we read/);
  const stepDown = en.compare.rows.stepDown.cells;
  assert.match(stepDown.fusion, /Standard, High and Max/);
  assert.match(stepDown.fusion, /not on Free, Student or Pro/);
  assert.match(stepDown.fusion, /cache boundaries/);
  assert.match(stepDown.advisor, /There is no setting to cap or force advisor calls/);
  assert.match(en.compare.rows.claudeOnly.cells.advisor, /experimental, works on the Anthropic API only \(not Amazon Bedrock/);
  assert.match(en.compare.rows.claudeOnly.cells.advisor, /DISABLE_TELEMETRY/);
  assert.equal(en.compare.rows.stepDown.feature, 'Budget step-down with no proxy server to host');
  const litellm = 'https://docs.litellm.ai/docs/tutorials/claude_code_cut_costs';
  for (const dict of [en, tr]) {
    const item = dict.compare.limits.items.find((text) => text.includes('budget_fallbacks'));
    assert.ok(item?.includes(litellm), 'the LiteLLM bullet cites its tutorial');
  }
});

test('a cell that asserts absence says when we looked, in both languages', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  const { compareColumns, compareRowIds } = await import('../lib/compare.ts');
  const vague = /not (?:mentioned|stated|described)|are not described|is not part of|(?:bahsedilmiyor|belirtilmemiş|anlatılmıyor|söz edilmiyor)/i;
  const dated = { en: /not found on the pages we checked on 30 Oct 2026/i, tr: /30 Eki 2026’da baktığımız sayfalarda bulunamadı/ };
  let found = 0;
  const dicts = { en, tr };
  for (const locale of /** @type {const} */ (['en', 'tr'])) {
    for (const id of compareRowIds) {
      for (const column of compareColumns) {
        const cell = dicts[locale].compare.rows[id].cells[column];
        assert.doesNotMatch(cell, vague, `${locale} ${id}.${column}`);
        if (dated[locale].test(cell)) found++;
      }
    }
  }
  assert.ok(found >= 16, `expected the absence cells in both languages, found ${found}`);
  assert.doesNotMatch(JSON.stringify(en.compare), /Pricing is not stated/);
  assert.equal(en.compare.rows.nativeAudit.cells.taksim.startsWith('Coming; not in this release.'), true);
});
