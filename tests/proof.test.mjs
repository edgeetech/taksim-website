import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { canonicalJson, sha256Hex } from '../lib/proof/canonical.ts';
import { forbiddenKeys, loadSnapshot, overhead, pct, pctRange } from '../lib/proof/report.ts';
import { publish, removedFields } from '../scripts/proof-publish.mjs';

const root = new URL('../', import.meta.url);
const built = new URL('dist/client/', root);
const source = (path) => readFile(new URL(path, root), 'utf8');
const json = async (path) => JSON.parse(await source(path));

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
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ');
const section = (page, id, next) => page.slice(page.indexOf(`id="proof-${id}"`), page.indexOf(`id="proof-${next}"`));

const SNAPSHOT = 'data/proof/2026-10-29.json';

test('the published snapshot hashes to its own sha256, by an independent implementation', async () => {
  const bundle = await json(SNAPSHOT);
  const { sha256, ...rest } = bundle;
  assert.match(sha256, /^[0-9a-f]{64}$/);
  assert.equal(createHash('sha256').update(canonicalJson(rest), 'utf8').digest('hex'), sha256);
  assert.equal(sha256Hex(canonicalJson(rest)), sha256);
  assert.match(bundle.publication.sourceSha256, /^[0-9a-f]{64}$/);
  assert.notEqual(bundle.publication.sourceSha256, sha256, 'the published copy is a different file from the export');
});

test('the download in public/ is byte for byte the snapshot the page loads', async () => {
  assert.equal(await source('public/proof/2026-10-29.json'), await source(SNAPSHOT));
});

test('the loader fails on an edited snapshot and on an absolute figure', async () => {
  const bundle = await json(SNAPSHOT);
  assert.doesNotThrow(() => loadSnapshot(bundle));
  const edited = structuredClone(bundle);
  edited.spend.byFamily.opus.costSharePct = 12.3;
  assert.throws(() => loadSnapshot(edited), /sha256/);
  const absolute = structuredClone(bundle);
  absolute.spend.total = { low: 1, high: 1 };
  absolute.sha256 = sha256Hex(canonicalJson((({ sha256: _, ...rest }) => rest)(absolute)));
  assert.throws(() => loadSnapshot(absolute), /absolute figure/);
  const unredacted = { ...structuredClone(bundle), publication: undefined };
  assert.throws(() => loadSnapshot(unredacted), /ratios-only/);
  const otherSchema = { ...structuredClone(bundle), schemaVersion: 2 };
  assert.throws(() => loadSnapshot(otherSchema), /schemaVersion/);
});

test('the published snapshot carries only ratios: no dollar totals, no execution counts, no token counts', async () => {
  const text = await source(SNAPSHOT);
  const walk = (node, path) => {
    if (Array.isArray(node)) node.forEach((child, index) => walk(child, `${path}[${index}]`));
    else if (node && typeof node === 'object') {
      for (const [key, child] of Object.entries(node)) {
        assert.ok(!forbiddenKeys.includes(key), `${path}.${key} is an absolute figure`);
        walk(child, `${path}.${key}`);
      }
    }
  };
  walk(JSON.parse(text), '$');
  // Every share is a share.
  for (const match of text.matchAll(/"(\w*SharePct)":\s*([0-9.]+)/g)) assert.ok(Number(match[2]) <= 100, match[0]);
  // Figures from the unredacted export that must never reach the site.
  const original = ['3547.65', '3325.84', '174.36', '46.79', '31648', '31623', '27990', '3427', '672.68', '652.62', '877.28', '713.76', '15350021', '25893356'];
  for (const figure of original) assert.ok(!text.includes(figure), `${figure} is an absolute figure from the export`);
});

test('the publish script turns an export into shares and refuses a bundle whose hash is wrong', () => {
  const body = {
    schemaVersion: 1,
    generatedAt: '2026-01-02',
    generatedBy: { commit: 'unknown', taksimVersion: '1.0.0' },
    window: { days: 30, since: '2025-12-04', until: '2026-01-02', previousWindow: { since: '2025-11-04', until: '2025-12-03' } },
    spend: {
      total: { low: 200, high: 200 },
      executions: 1000,
      pricedExecutions: 990,
      pricedSharePct: 99,
      byFamily: Object.fromEntries(
        ['haiku', 'sonnet', 'opus', 'fable', 'other'].map((family, index) => [family, { executions: index, cost: { low: index === 2 ? 150 : index * 5, high: index === 2 ? 150 : index * 5 } }]),
      ),
      byCredentialKind: Object.fromEntries(
        [
          ['subscription', 100],
          ['api_key', 0],
          ['not_recorded', 900],
        ].map(([kind, executions]) => [kind, { basis: kind === 'api_key' ? 'invoiced' : 'quota-equivalent', executions, pricedExecutions: executions, cost: { low: 1, high: 1 } }]),
      ),
    },
    modelMix: { window: { outputTokens: 5, sharePct: { opus: 80 } }, previousWindow: { outputTokens: 6, sharePct: { opus: 50 } } },
    routing: {
      routingEnabled: { gatewayUsed: false, mode: 'balanced', routingAuto: false, routingSubscription: false },
      observedUnroutedCost: { low: 200, high: 200 },
      routedLiveCost: { low: 1, high: 1 },
      routedDecisions: 3,
      escalations: { downgrade: 0, managedPolicy: 0 },
    },
    judge: { storedVerdicts: 4 },
    counterfactual: { basis: 'strong-consensus-only', countedTurns: 2, consensusOverTurns: 1, saving: { low: 0.5, high: 1 } },
    cache: { definition: 'd', executions: 900, hitRatioPct: 95 },
    levers: {
      cacheBreakCost: { breaks: 4, cost: { low: 20, high: 20 } },
      idleGapCost: { breaks: 2, cost: { low: 10, high: 10 } },
      contextOver200kExcess: { turns: 250, cost: { low: 30, high: 40 } },
      failureLoops: { count: 1, cost: { low: 2, high: 2 } },
      spendSpikeDays: 1,
    },
    overhead: { gatewayPerformanceSampleCount: 0, addedTtfbMs: 'not measured' },
    caveats: ['NO_GROUND_TRUTH'],
  };
  const original = { ...body, sha256: sha256Hex(canonicalJson(body)) };
  const published = publish(original);
  assert.equal(published.spend.byFamily.opus.costSharePct, 75);
  assert.equal(published.spend.byCredentialKind.not_recorded.executionSharePct, 90);
  assert.deepEqual(published.levers.contextOver200k, { turnsSharePct: 25, costSharePct: { low: 15, high: 20 } });
  assert.deepEqual(published.counterfactual.savingSharePct, { low: 0.25, high: 0.5 });
  assert.equal(published.routing.routedLiveCostSharePct, 0.5);
  assert.equal(published.publication.sourceSha256, original.sha256);
  assert.deepEqual(published.publication.removed, removedFields);
  assert.doesNotThrow(() => loadSnapshot(published));
  assert.throws(() => publish({ ...original, sha256: '0'.repeat(64) }), /does not match its own sha256/);
});

test('every share in the formatting helpers keeps its stored precision, with a decimal comma in Turkish', () => {
  assert.equal(pct(93.7, 'en'), '93.7%');
  assert.equal(pct(0.05, 'en'), '0.05%');
  assert.equal(pct(0, 'en'), '0.0%');
  assert.equal(pct(93.7, 'tr'), '%93,7');
  assert.equal(pctRange({ low: 0.07, high: 0.12 }, 'tr'), '%0,07 – %0,12');
  assert.equal(pctRange({ low: 5, high: 5 }, 'en'), '5.0%');
});

test('the overhead data matches what the product reports say, and the cold launch is the number the page discloses', () => {
  const { native, synthetic } = overhead;
  assert.ok(native.addedTtftMs.p50 > 7500 && native.addedTtftMs.p50 < 7700, 'the native cold launch adds about 7.6 s at the median');
  assert.equal(native.build, '0.3.7+local');
  assert.deepEqual(synthetic.rows.map((row) => row.concurrency), [1, 10, 50, 100]);
  assert.equal(synthetic.managedRequests, 3030);
  assert.deepEqual([synthetic.errors, synthetic.degraded, synthetic.byteMismatches], [0, 0, 0]);
  for (const row of synthetic.rows) assert.ok(row.addedTtfbMs.p50 <= row.addedTtfbMs.p95, `c${row.concurrency}`);
  for (const report of overhead.source.reports) assert.match(report.sha256, /^[0-9a-f]{64}$/);
});

test('the refresh log is append-only in shape, newest last, and ends at the snapshot date', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  const bundle = await json(SNAPSHOT);
  const dates = (dict) => dict.proof.g.log.map((entry) => entry.date);
  assert.deepEqual(dates(en), dates(tr));
  assert.deepEqual(dates(en), [...dates(en)].sort((a, b) => a.localeCompare(b)));
  assert.equal(dates(en).at(-1), bundle.generatedAt);
});

test('/proof is a localized route with metadata, nav, footer, a home link, a compare link and a sitemap entry', async () => {
  const { localizedRoutes } = await import('../lib/i18n/config.ts');
  assert.ok(localizedRoutes.includes('/proof/'));
  const sitemap = await source('public/sitemap.xml');
  assert.ok(sitemap.includes('<loc>https://taksim.edgee.tech/proof/</loc>'));
  assert.ok(sitemap.includes('<loc>https://taksim.edgee.tech/tr/proof/</loc>'));
  assert.match(sitemap, /<xhtml:link rel="alternate" hreflang="tr" href="https:\/\/taksim\.edgee\.tech\/tr\/proof\/"\/>/);
  for (const [path, locale] of [
    ['app/(en)/proof/page.tsx', 'en'],
    ['app/tr/proof/page.tsx', 'tr'],
  ]) {
    assert.match(await source(path), new RegExp(`pageMetadata\\('${locale}', '/proof/', 'proof'\\)`), path);
  }
  const chrome = await source('components/site-chrome.tsx');
  assert.equal(chrome.match(/href\('\/proof'\)/g).length, 3, 'header, mobile menu and footer');
  assert.match(await source('components/pilot-benchmark.tsx'), /localePath\(locale, '\/proof'\)/);
  assert.match(await source('components/pages/compare.tsx'), /href\('\/proof'\)/);
  const home = await source('components/pages/home.tsx');
  assert.match(home, /route: '\/proof\/'/);
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  assert.equal(en.proof.title, 'Proof: measured, not promised');
  assert.equal(en.proof.headline, 'One developer, one machine, 30 days, Claude only');
  assert.ok(en.meta.pages.proof.title && tr.meta.pages.proof.title);
});

test('the llms file points at /proof and says the proof export is not in the current release', async () => {
  const template = await source('release/llms.template.txt');
  assert.match(template, /https:\/\/taksim\.edgee\.tech\/proof\r?\n/);
  assert.match(template, /7\.6 s native cold launch/);
  assert.match(template, /`taksim proof export`, in development and not in the current release/);
});

test('the built /proof/ pages state the honest findings and carry no private pattern', buildOptions, async () => {
  const en = await html('proof/index.html');
  const tr = await html('tr/proof/index.html');
  const text = { en: visible(en), tr: visible(tr) };
  assert.ok(text.en.includes('Proof: measured, not promised'));
  assert.ok(text.en.includes('One developer, one machine, 30 days, Claude only'));
  assert.ok(text.en.includes('not cheaper than always-Sonnet'));
  assert.ok(text.en.includes('The saving is against always-Opus. Taksim was not cheaper than always-Sonnet.'));
  assert.ok(text.en.includes('Acceptance differences of 52 vs 53 vs 54 are within noise.'));
  assert.ok(text.en.includes('This traffic was not routed. Taksim measured it.'));
  assert.ok(text.en.includes('LLM judges, no ground truth; agreement is not accuracy.'));
  assert.ok(text.en.includes('API-equivalent (quota-equivalent), not an invoice'));
  assert.ok(text.en.includes('fake upstream, Windows x64, not an SLO'));
  assert.ok(text.en.includes('adds about 7.6 seconds at the median'));
  assert.ok(text.tr.includes('Kanıt: vaat değil, ölçüm'));
  assert.ok(text.tr.includes('her zaman Sonnet’ten daha ucuz değil'));
  assert.ok(text.tr.includes('Bu trafik yönlendirilmedi. Taksim onu ölçtü.'));
  assert.ok(text.tr.includes('uzlaşma doğruluk değildir'));
  assert.ok(text.tr.includes('medyanda yaklaşık 7,6 saniye'));
  for (const [name, page] of [['en', en], ['tr', tr]]) {
    assert.doesNotMatch(page, /repo-[0-9a-f]{4,}/i, `${name} holds a repository alias`);
    assert.doesNotMatch(page, /C:\\+Users/i, `${name} holds a local path`);
    assert.doesNotMatch(text[name], /\{[A-Za-z]+\}/, `${name} has an unfilled placeholder`);
    // Tables sit in scroll containers so a narrow screen scrolls the table, not the page.
    assert.equal((page.match(/<table/g) ?? []).length, (page.match(/class="table-scroll"/g) ?? []).length, `${name} tables`);
    for (const figure of ['3547.65', '3,547', '3,545', '3325', '3,325', '31,648', '31,623', '27,990']) assert.ok(!text[name].includes(figure), `${name} shows ${figure}`);
  }
});

test('every number in section B equals a field in the snapshot', buildOptions, async () => {
  const bundle = await json(SNAPSHOT);
  const { families } = (await import('../lib/i18n/en.ts')).en.proof.b;
  const fmt = (value, locale) => {
    const text = value.toFixed(value > 0 && value < 1 ? 2 : 1);
    return locale === 'tr' ? `%${text.replace('.', ',')}` : `${text}%`;
  };
  for (const [path, locale, next] of [
    ['proof/index.html', 'en', 'c'],
    ['tr/proof/index.html', 'tr', 'c'],
  ]) {
    const page = await html(path);
    const b = visible(section(page, 'b', next));
    const rows = [...section(page, 'b', next).matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].map((m) => visible(m[1]).trim());
    for (const family of Object.keys(families)) {
      const row = rows.find((r) => r.endsWith(` ${fmt(bundle.modelMix.previousWindow.sharePct[family], locale)}`));
      assert.ok(row, `${locale} ${family} row`);
      assert.ok(row.includes(fmt(bundle.spend.byFamily[family].costSharePct, locale)), `${locale} ${family} cost share in "${row}"`);
      assert.ok(row.includes(fmt(bundle.modelMix.window.sharePct[family], locale)), `${locale} ${family} output share in "${row}"`);
    }
    const cell = (low, high) => (low === high ? fmt(low, locale) : `${fmt(low, locale)} – ${fmt(high, locale)}`);
    const { levers, counterfactual } = bundle;
    const expected = [
      [levers.cacheBreak.costSharePct, String(levers.cacheBreak.breaks)],
      [levers.idleGap.costSharePct, String(levers.idleGap.breaks)],
      [levers.contextOver200k.costSharePct, fmt(levers.contextOver200k.turnsSharePct, locale)],
      [levers.failureLoops.costSharePct, String(levers.failureLoops.count)],
      [counterfactual.savingSharePct, String(counterfactual.countedTurns)],
    ];
    for (const [{ low, high }, events] of expected) {
      const row = rows.find((r) => r.endsWith(` ${cell(low, high)}`));
      assert.ok(row, `${locale} lever ${cell(low, high)}`);
      assert.ok(row.includes(events), `${locale} lever events ${events} in "${row}"`);
    }
    for (const value of [
      fmt(bundle.routing.routedLiveCostSharePct, locale),
      fmt(bundle.cache.hitRatioPct, locale),
      fmt(bundle.spend.pricedSharePct, locale),
      fmt(bundle.spend.byCredentialKind.not_recorded.executionSharePct, locale),
      String(bundle.routing.routedDecisions),
      String(levers.spendSpikeDays),
      bundle.routing.routingEnabled.mode,
    ]) {
      assert.ok(b.includes(value), `${locale} section B shows ${value}`);
    }
    // Rows are sorted by the high end of the share.
    const leverShares = [...section(page, 'b', next).matchAll(/data-lever="[^"]+"[\s\S]*?<\/tr>/g)].map((m) => {
      const cells = [...m[0].matchAll(/<td>([\s\S]*?)<\/td>/g)].map((c) => visible(c[1]).trim());
      return Number(cells[1].split('–').at(-1).replace(/[%\s]/g, '').replace(',', '.'));
    });
    assert.deepEqual(leverShares, [...leverShares].sort((a, b) => b - a), `${locale} levers sorted by size`);
  }
});

test('/proof and its download are in the built site', buildOptions, async () => {
  const sitemap = await html('sitemap.xml');
  assert.ok(sitemap.includes('/proof/') && sitemap.includes('/tr/proof/'));
  assert.equal(await html('proof/2026-10-29.json'), await source(SNAPSHOT));
  const llms = await html('llms.txt');
  assert.match(llms, /https:\/\/taksim\.edgee\.tech\/proof/);
  for (const [path, prefix] of [
    ['index.html', ''],
    ['tr/index.html', '/tr'],
    ['compare/index.html', ''],
    ['tr/compare/index.html', '/tr'],
  ]) {
    const page = await html(path);
    assert.match(page, new RegExp(`href="${prefix}/proof/?"`), `${path} links to /proof`);
  }
});
