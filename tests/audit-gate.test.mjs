import assert from 'node:assert/strict';
import test from 'node:test';
import { evaluate, parseIgnoreList } from '../scripts/audit-gate.mjs';

const NOW = new Date('2026-10-09T12:00:00Z');
const BRACES = 'GHSA-vfj7-8cjw-p6xm';
const OTHER = 'GHSA-aaaa-bbbb-cccc';

const advisory = (id, name, severity) => ({
  source: 1,
  name,
  severity,
  title: `${name} advisory`,
  url: `https://github.com/advisories/${id}`,
});

// The shape npm audit --json reports for this repo: one braces advisory and the packages
// npm lists only because they depend on braces.
const chainReport = () => ({
  vulnerabilities: {
    braces: { severity: 'high', via: [advisory(BRACES, 'braces', 'high')] },
    micromatch: { severity: 'high', via: ['braces'] },
    'fast-glob': { severity: 'high', via: ['micromatch'] },
    shadcn: { severity: 'high', via: ['fast-glob', 'ts-morph'] },
    'ts-morph': { severity: 'high', via: ['@ts-morph/common'] },
    '@ts-morph/common': { severity: 'high', via: ['fast-glob'] },
    vinext: { severity: 'high', via: ['vite-plugin-commonjs'] },
    'vite-plugin-commonjs': {
      severity: 'high',
      via: ['vite-plugin-dynamic-import'],
    },
    'vite-plugin-dynamic-import': { severity: 'high', via: ['fast-glob'] },
  },
});

test('accepts an entry dated today and one dated exactly 30 days ahead', () => {
  const { ignore, warnings } = parseIgnoreList(
    `${BRACES}:2026-10-09, ${OTHER}:2026-11-08`,
    NOW,
  );
  assert.deepEqual(
    [...ignore],
    [
      [BRACES, '2026-10-09'],
      [OTHER, '2026-11-08'],
    ],
  );
  assert.deepEqual(warnings, []);
});

test('normalises id case and whitespace', () => {
  const { ignore } = parseIgnoreList(`  ghsa-VFJ7-8CJW-P6XM:2026-10-20 ,`, NOW);
  assert.deepEqual([...ignore.keys()], [BRACES]);
});

test('rejects expired, too-far, invalid-date and invalid-id entries', () => {
  const { ignore, warnings } = parseIgnoreList(
    [
      `${BRACES}:2026-10-08`,
      `${BRACES}:2026-11-09`,
      `${BRACES}:2026-02-30`,
      `${BRACES}:20261020`,
      `${BRACES}`,
      `${BRACES}:2026-10-20:extra`,
      'CVE-2024-4068:2026-10-20',
      'GHSA-vfj7-8cjw:2026-10-20',
    ].join(','),
    NOW,
  );
  assert.equal(ignore.size, 0);
  assert.equal(warnings.length, 8);
  assert.match(warnings[0], /expired on 2026-10-08; enforced again/);
  assert.match(
    warnings[1],
    /more than 30 days ahead \(latest 2026-11-08\); not ignored/,
  );
  for (const w of warnings.slice(2, 6))
    assert.match(w, /no valid YYYY-MM-DD date; not ignored/);
  for (const w of warnings.slice(6))
    assert.match(w, /no valid GHSA id; not ignored/);
});

test('an empty or missing variable ignores nothing and warns about nothing', () => {
  for (const raw of [undefined, '', ' , ']) {
    const { ignore, warnings } = parseIgnoreList(raw, NOW);
    assert.equal(ignore.size, 0);
    assert.deepEqual(warnings, []);
  }
});

test('fails on a high advisory and names every package in its chain', () => {
  const result = evaluate(chainReport(), new Map());
  assert.equal(result.failing.length, 1);
  assert.equal(result.failing[0].id, BRACES);
  assert.deepEqual(
    result.affectedPackages,
    Object.keys(chainReport().vulnerabilities).sort(),
  );
});

test('ignoring the root advisory also clears the chain entries npm counts because of it', () => {
  const result = evaluate(chainReport(), new Map([[BRACES, '2026-11-08']]));
  assert.deepEqual(result.remaining, []);
  assert.deepEqual(result.failing, []);
  assert.deepEqual(result.affectedPackages, []);
  assert.deepEqual(result.warnings, [
    `Ignoring ${BRACES} (braces, high) until 2026-11-08 via AUDIT_IGNORE_GHSA.`,
  ]);
});

test('a package with another non-ignored high advisory still fails', () => {
  const report = chainReport();
  report.vulnerabilities.micromatch.via.push(
    advisory(OTHER, 'micromatch', 'high'),
  );
  const result = evaluate(report, new Map([[BRACES, '2026-11-08']]));
  assert.deepEqual(
    result.failing.map((a) => a.id),
    [OTHER],
  );
  assert.ok(result.affectedPackages.includes('micromatch'));
  assert.ok(result.affectedPackages.includes('vinext'));
  assert.ok(!result.affectedPackages.includes('braces'));
});

test('critical advisories fail and moderate or low ones are reported without failing', () => {
  const report = {
    vulnerabilities: {
      a: { severity: 'critical', via: [advisory(OTHER, 'a', 'critical')] },
      b: {
        severity: 'moderate',
        via: [advisory('GHSA-dddd-eeee-ffff', 'b', 'moderate')],
      },
    },
  };
  assert.deepEqual(
    evaluate(report, new Map()).failing.map((a) => a.id),
    [OTHER],
  );
  const lowOnly = evaluate(report, new Map([[OTHER, '2026-10-20']]));
  assert.equal(lowOnly.failing.length, 0);
  assert.equal(lowOnly.remaining.length, 1);
});

test('an entry that matches no advisory warns that it should be removed', () => {
  const result = evaluate(chainReport(), new Map([[OTHER, '2026-10-20']]));
  assert.equal(result.failing.length, 1);
  assert.deepEqual(result.warnings, [
    `AUDIT_IGNORE_GHSA entry ${OTHER} matches no advisory in this audit; remove it if it is no longer needed.`,
  ]);
});

test('advisories without a GHSA url still count and cannot be ignored', () => {
  const report = {
    vulnerabilities: {
      x: {
        severity: 'high',
        via: [
          {
            source: 99,
            name: 'x',
            severity: 'high',
            url: 'https://example.test/99',
          },
        ],
      },
    },
  };
  const result = evaluate(report, new Map([[BRACES, '2026-10-20']]));
  assert.equal(result.failing.length, 1);
  assert.deepEqual(result.affectedPackages, ['x']);
});

test('a dependency cycle in via does not loop', () => {
  const report = {
    vulnerabilities: {
      p: { severity: 'high', via: ['q', advisory(OTHER, 'p', 'high')] },
      q: { severity: 'high', via: ['p'] },
    },
  };
  assert.deepEqual(evaluate(report, new Map()).affectedPackages, ['p', 'q']);
});
