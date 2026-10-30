// Loader for the proof snapshot (data/proof/*.json). Every figure on /proof comes from here or from the benchmark
// loader. The snapshot is the ratios-only copy that scripts/proof-publish.mjs makes from a `taksim proof export`
// bundle; loading it recomputes its sha256 and checks the shape, so a hand-edited or stale file fails the build
// instead of publishing a number nobody can trace.
import snapshotJson from '../../data/proof/2026-10-30.json' with { type: 'json' };
import overheadJson from '../../data/proof/overhead-2026-10-03.json' with { type: 'json' };
import { bundleHash, type Json } from './canonical.ts';

export const FAMILIES = ['opus', 'sonnet', 'fable', 'haiku', 'other'] as const;
export type Family = (typeof FAMILIES)[number];

export type Range = { low: number; high: number };

export type ProofSnapshot = {
  schemaVersion: 1;
  generatedAt: string;
  generatedBy: { commit: string; taksimVersion: string };
  window: { days: number; since: string; until: string; previousWindow: { since: string; until: string } };
  publication: { basis: 'ratios-only'; sourceSha256: string; removed: string[] };
  spend: {
    pricedSharePct: number;
    byFamily: Record<Family, { costSharePct: number }>;
    byCredentialKind: Record<'subscription' | 'api_key' | 'not_recorded', { basis: string; executionSharePct: number }>;
  };
  modelMix: Record<'window' | 'previousWindow', { sharePct: Record<Family, number> }>;
  routing: {
    routingEnabled: { gatewayUsed: boolean; mode: string; routingAuto: boolean; routingSubscription: boolean };
    routedDecisions: number;
    routedLiveCostSharePct: number;
    escalations: { downgrade: number; managedPolicy: number };
  };
  judge: {
    storedVerdicts: number;
    strongConsensus: number;
    weakConsensus: number;
    disputed: number;
    singleJudgeNotCounted: number;
    underServed: number;
    rightServed: number;
    overServed: number;
    confusionMatrix: { requested: string; sufficient: string; turns: number }[];
    calibration?: {
      pairs: number;
      exactAgreementPct: number | null;
      withinOneTierPct: number | null;
      kappa: number | null;
      calibrated: boolean;
      thresholds: { minimumPairs: number; minimumExactAgreementPct: number; minimumKappa: number };
    };
  };
  counterfactual: {
    basis: string;
    countedTurns: number;
    consensusOverTurns: number;
    savingSharePct: Range;
    upperBound?: {
      basis: string;
      calibrated: boolean;
      countedTurns: number;
      calibratedSingleOverTurns: number;
      savingSharePct: Range;
    };
  };
  cache: { definition: string; hitRatioPct: number };
  levers: {
    cacheBreak: { breaks: number; costSharePct: Range };
    idleGap: { breaks: number; costSharePct: Range };
    contextOver200k: { turnsSharePct: number; costSharePct: Range };
    failureLoops: { count: number; costSharePct: Range };
    spendSpikeDays: number;
  };
  overhead: { gatewayPerformanceSampleCount: number; addedTtfbMs: string | { p50: number; p95: number; basis: string } };
  caveats: string[];
  sha256: string;
};

export type Percentiles = { p50: number; p95: number };

export type OverheadSnapshot = {
  schemaVersion: 1;
  measuredOn: string;
  source: { document: string; reports: { file: string; sha256: string }[] };
  synthetic: {
    upstream: string;
    environment: string;
    capture: string;
    seed: number;
    pairsPerLevel: number;
    levels: number[];
    managedRequests: number;
    errors: number;
    degraded: number;
    byteMismatches: number;
    rows: {
      concurrency: number;
      pairs: number;
      addedTtfbMs: Percentiles;
      addedE2eMs: Percentiles;
      errors: number;
      degraded: number;
      byteMismatches: number;
    }[];
  };
  native: {
    build: string;
    claudeCli: string;
    model: string;
    pairs: number;
    warmupPairs: number;
    mode: string;
    addedTtftMs: Percentiles;
    addedE2eMs: Percentiles;
    localPreparationMs: Percentiles;
    directTtftMs: Percentiles;
  };
};

// Absolute amounts and counts that reveal what the founder spends. The published copy holds none of them.
export const forbiddenKeys = ['cost', 'total', 'executions', 'pricedExecutions', 'outputTokens', 'saving', 'observedUnroutedCost', 'routedLiveCost'];

function walk(node: unknown, path: string, visit: (key: string, path: string) => void) {
  if (Array.isArray(node)) node.forEach((child, index) => walk(child, `${path}[${index}]`, visit));
  else if (node && typeof node === 'object') {
    for (const [key, child] of Object.entries(node)) {
      visit(key, `${path}.${key}`);
      walk(child, `${path}.${key}`, visit);
    }
  }
}

export function loadSnapshot(raw: unknown): ProofSnapshot {
  const bundle = raw as ProofSnapshot;
  if (bundle?.schemaVersion !== 1) throw new Error(`proof snapshot: unsupported schemaVersion ${String(bundle?.schemaVersion)}`);
  if (bundle.publication?.basis !== 'ratios-only') throw new Error('proof snapshot: only the ratios-only copy may be published');
  const actual = bundleHash(raw as { [key: string]: Json });
  if (actual !== bundle.sha256) throw new Error(`proof snapshot: sha256 is ${bundle.sha256} but the content hashes to ${actual}`);
  walk(raw, '$', (key, path) => {
    if (forbiddenKeys.includes(key)) throw new Error(`proof snapshot: ${path} is an absolute figure; publish ratios only`);
  });
  return bundle;
}

export const snapshot: ProofSnapshot = loadSnapshot(snapshotJson);
export const overhead = overheadJson as unknown as OverheadSnapshot;

export const proofFile = {
  path: `/proof/${snapshot.generatedAt}.json`,
  name: `${snapshot.generatedAt}.json`,
  sha256: snapshot.sha256,
};

/** A share with the precision the snapshot stores it at: two decimals below 1%, one from 1% up. */
export function pct(value: number, locale: string): string {
  const text = value.toFixed(value < 1 && value > 0 ? 2 : 1);
  return locale === 'tr' ? `%${text.replace('.', ',')}` : `${text}%`;
}

export function pctRange(range: Range, locale: string): string {
  return range.low === range.high ? pct(range.low, locale) : `${pct(range.low, locale)} – ${pct(range.high, locale)}`;
}

export function int(value: number, locale: string): string {
  return value.toLocaleString(locale === 'tr' ? 'tr-TR' : 'en-US');
}

export function ms(value: number, locale: string): string {
  const text = value >= 100 ? Math.round(value).toLocaleString(locale === 'tr' ? 'tr-TR' : 'en-US') : value.toFixed(2);
  return locale === 'tr' ? text.replace('.', ',') : text;
}

export function seconds(value: number, locale: string): string {
  const text = (value / 1000).toFixed(1);
  return locale === 'tr' ? text.replace('.', ',') : text;
}
