import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import {
  buildReport,
  copyTokens,
  fillKnown,
  formatPercent,
  formatUsd,
  report,
  saving,
  summarize,
} from '../lib/benchmark/report.ts';

const root = new URL('../', import.meta.url);
const source = (path) => readFile(new URL(path, root), 'utf8');
const labels = { notMeasured: 'not measured', undefinedPerAccepted: 'undefined' };

const row = (over = {}) => ({
  phase: 'cold',
  source: 's',
  runId: `r-${Math.random()}`,
  task: 't1',
  arm: 'routed',
  status: 'completed',
  accepted: true,
  predicates: { scope: true, delivery: true, regression: true, behavior: true },
  servedModels: ['claude-sonnet-5-5'],
  chargedUsd: 1,
  costBasis: 'x',
  turns: 3,
  ...over,
});

test('the snapshot reproduces the numbers the site rendered before it was data-driven', () => {
  const usd = (m, d) => formatUsd(m, d, labels);
  const { cold, warm } = report;
  assert.equal(report.runsPerArm, 58);
  assert.equal(report.tasks, 29);
  assert.equal(report.totalRuns, 174);
  assert.deepEqual(
    [cold.opus.accepted, usd(cold.opus.totalUsd, 2), usd(cold.opus.perAccepted, 3)],
    [52, '$17.63', '$0.339'],
  );
  assert.deepEqual(
    [cold.sonnet.accepted, usd(cold.sonnet.totalUsd, 2), usd(cold.sonnet.perAccepted, 3)],
    [53, '$4.19', '$0.079'],
  );
  assert.deepEqual(
    [cold.taksim.accepted, usd(cold.taksim.totalUsd, 2), usd(cold.taksim.perAccepted, 3)],
    [54, '$4.65', '$0.086'],
  );
  assert.equal(report.costSaving.value, 74);
  assert.equal(report.perAcceptedSaving.value, 75);
  assert.deepEqual([report.servedSonnet, report.servedOpus], [56, 2]);
  assert.deepEqual(
    [warm.accepted, warm.runs, usd(warm.totalUsd, 2), report.warmServedOpus],
    [54, 58, '$4.98', 8],
  );
  assert.equal(report.warmCostSaving.value, 72);
  assert.equal(usd(warm.perAccepted, 3), '$0.092');
  assert.deepEqual(report.corrected, {
    tasks: 3,
    runs: 6,
    coldAccepted: 2,
    warmAccepted: 6,
    coldRejected: 4,
    warmRejected: 0,
  });
  assert.equal(formatPercent(report.costSaving, 'tr', labels), '%74');
});

test('the per-task breakdown quoted in the copy matches the snapshot', () => {
  const failed = (phase, arm) => {
    const counts = {};
    for (const r of report.snapshot.rows)
      if (r.phase === phase && r.arm === arm && !r.accepted) counts[r.task] = (counts[r.task] ?? 0) + 1;
    return counts;
  };
  assert.deepEqual(failed('cold', 'routed'), {
    'ho-cfg-feature-flags': 1,
    'ho-feat-cron': 1,
    'ho-feat-dedupe': 2,
  });
  assert.equal(failed('cold', 'baseline')['ho-feat-dedupe'], 1);
  assert.equal(failed('cold', 'fixed')['ho-feat-dedupe'], 2);
  const warmMisses = failed('warm', 'routed');
  assert.equal(Object.keys(warmMisses).length, 3);
  assert.deepEqual(Object.values(warmMisses).sort((a, b) => a - b), [1, 1, 2]);
});

test('the snapshot keeps only redacted fields and names its sources', async () => {
  const text = await source('data/benchmark/pilot-2026-10-15.json');
  const data = JSON.parse(text);
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.sources.length, 4);
  for (const s of data.sources) assert.match(s.sha256, /^[0-9a-f]{64}$/);
  const rowKeys = [
    'phase', 'source', 'runId', 'task', 'arm', 'status', 'accepted',
    'predicates', 'servedModels', 'chargedUsd', 'costBasis', 'turns',
  ].sort();
  for (const r of data.rows) assert.deepEqual(Object.keys(r).sort(), rowKeys);
  assert.equal(data.rows.length, 232);
  const body = text.replace(/"sha256": "[0-9a-f]+"/g, '');
  assert.doesNotMatch(body, /[A-Za-z]:[\\/]|Users|\.codex|sessionId|prompt|token|key=|Bearer/i);
  assert.doesNotMatch(body, /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}/);
  for (const m of data.catalog.arms) assert.ok('effort' in m && m.effort === null);
});

test('a rejected or failed run counts as a run and stays in the rows', () => {
  const rows = [
    row({ accepted: false, status: 'timeout', predicates: { scope: true, delivery: false, regression: null, behavior: null } }),
    row(),
  ];
  const s = summarize(rows);
  assert.deepEqual([s.runs, s.accepted, s.notAccepted], [2, 1, 1]);
  assert.equal(s.totalUsd.value, 2);
  assert.equal(s.perAccepted.value, 2);
});

test('zero accepted runs leave cost per accepted undefined, not zero', () => {
  const s = summarize([row({ accepted: false }), row({ accepted: false })]);
  assert.equal(s.perAccepted.state, 'undefined');
  assert.equal(s.totalUsd.value, 2);
  assert.equal(formatUsd(s.perAccepted, 3, labels), 'undefined');
  assert.equal(saving(s.perAccepted, { state: 'value', value: 1 }).state, 'missing');
});

test('a missing cost is never shown as $0 and poisons the total', () => {
  const s = summarize([row(), row({ chargedUsd: null })]);
  assert.equal(s.totalUsd.state, 'missing');
  assert.equal(s.perAccepted.state, 'missing');
  assert.equal(s.costedRuns, 1);
  assert.equal(formatUsd(s.totalUsd, 2, labels), 'not measured');
  assert.equal(formatPercent(saving(s.totalUsd, s.totalUsd), 'en', labels), 'not measured');
  const none = summarize([]);
  assert.equal(none.totalUsd.state, 'missing');
  assert.equal(none.perAccepted.state, 'undefined');
});

test('copy tokens come from the snapshot and unknown placeholders survive', () => {
  const snapshot = structuredClone(report.snapshot);
  const dropped = snapshot.rows.find((r) => r.phase === 'cold' && r.arm === 'baseline');
  dropped.chargedUsd = null;
  const tokens = copyTokens(buildReport(snapshot), 'en', labels);
  assert.equal(tokens.opusCost, 'not measured');
  assert.equal(tokens.costSavingPct, 'not measured');
  assert.equal(tokens.taksimCost, '$4.65');
  assert.equal(fillKnown({ a: ['{runsPerArm} runs, {n} left'] }, tokens).a[0], '58 runs, {n} left');
});

test('the pilot components carry no hard-coded figures and list every run', async () => {
  for (const path of ['components/pilot-benchmark.tsx', 'components/pages/benchmark.tsx']) {
    assert.doesNotMatch(await source(path), /17\.63|4\.19|4\.65|4\.98|0\.339|(?:runsPerArm|costSaving|servedSonnet) = d/, path);
  }
  const page = await source('components/pages/benchmark.tsx');
  assert.match(page, /rows=\{snapshot\.rows\}/);
  assert.match(page, /data-accepted=/);
  assert.match(page, /snapshot\.rows\.filter\(\(row\) => !row\.accepted\)/);
  assert.match(page, /arm\.effort \?\? labels\.notMeasured/);
});

test('the claude-routing benchmark route redirects to the pilot page', async () => {
  const lines = (await source('public/_redirects'))
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  assert.deepEqual(lines, [
    '/benchmarks/claude-routing/ /benchmark/ 301',
    '/tr/benchmarks/claude-routing/ /tr/benchmark/ 301',
  ]);
  // Only checked once a build exists; the build step in CI and deploy:local produces dist/client.
  if (existsSync(new URL('dist/client', root))) {
    assert.equal(await source('dist/client/_redirects'), await source('public/_redirects'));
  }
});
