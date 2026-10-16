// Loader and derivations for the internal pilot snapshot (data/benchmark/*.json).
// Every pilot number on the site comes from here. Missing is never zero: a cost that was not
// recorded is `missing`, and cost per accepted task with no accepted run is `undefined`.
import snapshotJson from '../../data/benchmark/pilot-2026-10-15.json' with { type: 'json' };

export type Phase = 'cold' | 'warm';
export type ArmName = 'baseline' | 'fixed' | 'routed';
export type ArmKey = 'opus' | 'sonnet' | 'taksim';

export type Row = {
  phase: Phase;
  source: string;
  runId: string;
  task: string;
  arm: ArmName;
  status: string;
  accepted: boolean;
  predicates: Record<string, boolean | null>;
  servedModels: string[];
  chargedUsd: number | null;
  costBasis: string | null;
  turns: number | null;
};

export type Snapshot = {
  schemaVersion: number;
  id: string;
  label: string;
  sources: { id: string; phase: Phase; sha256: string; generatedAt: string }[];
  dateRange: { from: string; to: string };
  catalog: {
    version: string;
    arms: { arm: ArmName; key: ArmKey; model: string | null; effort: string | null }[];
  };
  accounting: { nature: string; costBases: string[] };
  rows: Row[];
};

export type Metric =
  | { state: 'value'; value: number }
  | { state: 'missing' }
  | { state: 'undefined' };

export const missing: Metric = { state: 'missing' };
const value = (v: number): Metric => ({ state: 'value', value: v });

export type ArmSummary = {
  runs: number;
  accepted: number;
  notAccepted: number;
  costedRuns: number;
  totalUsd: Metric;
  perAccepted: Metric;
  served: Record<string, number>;
};

export function summarize(rows: readonly Row[]): ArmSummary {
  const accepted = rows.filter((r) => r.accepted).length;
  const costed = rows.filter((r) => typeof r.chargedUsd === 'number');
  const complete = rows.length > 0 && costed.length === rows.length;
  const total = complete ? costed.reduce((s, r) => s + (r.chargedUsd as number), 0) : null;
  const served: Record<string, number> = {};
  for (const r of rows) for (const m of new Set(r.servedModels)) served[m] = (served[m] ?? 0) + 1;
  return {
    runs: rows.length,
    accepted,
    notAccepted: rows.length - accepted,
    costedRuns: costed.length,
    totalUsd: total === null ? missing : value(total),
    perAccepted:
      accepted === 0 ? { state: 'undefined' } : total === null ? missing : value(total / accepted),
    served,
  };
}

// Percent below a reference, rounded to a whole percent.
export function saving(of: Metric, against: Metric): Metric {
  if (of.state !== 'value' || against.state !== 'value') return missing;
  if (against.value === 0) return { state: 'undefined' };
  return value(Math.round((1 - of.value / against.value) * 100));
}

export type Labels = { notMeasured: string; undefinedPerAccepted: string };

export function formatUsd(m: Metric, digits: number, labels: Labels): string {
  if (m.state === 'value') return `$${m.value.toFixed(digits)}`;
  return m.state === 'missing' ? labels.notMeasured : labels.undefinedPerAccepted;
}

export function formatPercent(m: Metric, locale: string, labels: Labels): string {
  if (m.state === 'value') return locale === 'tr' ? `%${m.value}` : `${m.value}%`;
  return m.state === 'missing' ? labels.notMeasured : labels.undefinedPerAccepted;
}

const MODEL = { opus: 'claude-opus-5-5', sonnet: 'claude-sonnet-5-5' } as const;

export function buildReport(snapshot: Snapshot) {
  const rowsOf = (phase: Phase, arm: ArmName) =>
    snapshot.rows.filter((r) => r.phase === phase && r.arm === arm);
  const cold = {
    opus: summarize(rowsOf('cold', 'baseline')),
    sonnet: summarize(rowsOf('cold', 'fixed')),
    taksim: summarize(rowsOf('cold', 'routed')),
  };
  const warmRows = rowsOf('warm', 'routed');
  const coldRouted = rowsOf('cold', 'routed');
  const warm = summarize(warmRows);

  const tasks = new Set(snapshot.rows.filter((r) => r.phase === 'cold').map((r) => r.task));
  const correctedTasks = new Set(coldRouted.filter((r) => !r.accepted).map((r) => r.task));
  const coldCorrected = coldRouted.filter((r) => correctedTasks.has(r.task));
  const warmCorrected = warmRows.filter((r) => correctedTasks.has(r.task));
  const warmMissTasks = new Set(warmRows.filter((r) => !r.accepted).map((r) => r.task));

  return {
    snapshot,
    cold,
    warm,
    tasks: tasks.size,
    runsPerArm: cold.opus.runs,
    repetitions: tasks.size === 0 ? 0 : cold.opus.runs / tasks.size,
    totalRuns: cold.opus.runs + cold.sonnet.runs + cold.taksim.runs,
    costSaving: saving(cold.taksim.totalUsd, cold.opus.totalUsd),
    perAcceptedSaving: saving(cold.taksim.perAccepted, cold.opus.perAccepted),
    warmCostSaving: saving(warm.totalUsd, cold.opus.totalUsd),
    servedSonnet: cold.taksim.served[MODEL.sonnet] ?? 0,
    servedOpus: cold.taksim.served[MODEL.opus] ?? 0,
    warmServedOpus: warm.served[MODEL.opus] ?? 0,
    corrected: {
      tasks: correctedTasks.size,
      runs: coldCorrected.length,
      coldAccepted: coldCorrected.filter((r) => r.accepted).length,
      warmAccepted: warmCorrected.filter((r) => r.accepted).length,
      coldRejected: coldCorrected.filter((r) => !r.accepted).length,
      warmRejected: warmCorrected.filter((r) => !r.accepted).length,
    },
    warmMissTasks: warmMissTasks.size,
  };
}

export type Report = ReturnType<typeof buildReport>;

export const report: Report = buildReport(snapshotJson as unknown as Snapshot);

// Values for `{token}` placeholders in the copy. Each is already formatted for the locale; a
// metric that was not measured becomes the "not measured" label, never a zero.
export function copyTokens(r: Report, locale: string, labels: Labels): Record<string, string> {
  const usd = (m: Metric, d: number) => formatUsd(m, d, labels);
  const pct = (m: Metric) => formatPercent(m, locale, labels);
  return {
    tasks: String(r.tasks),
    repetitions: String(r.repetitions),
    totalRuns: String(r.totalRuns),
    runsPerArm: String(r.runsPerArm),
    opusAccepted: String(r.cold.opus.accepted),
    sonnetAccepted: String(r.cold.sonnet.accepted),
    taksimAccepted: String(r.cold.taksim.accepted),
    taksimRejected: String(r.cold.taksim.notAccepted),
    opusCost: usd(r.cold.opus.totalUsd, 2),
    sonnetCost: usd(r.cold.sonnet.totalUsd, 2),
    taksimCost: usd(r.cold.taksim.totalUsd, 2),
    opusPerAccepted: usd(r.cold.opus.perAccepted, 3),
    sonnetPerAccepted: usd(r.cold.sonnet.perAccepted, 3),
    taksimPerAccepted: usd(r.cold.taksim.perAccepted, 3),
    costSavingPct: pct(r.costSaving),
    servedSonnet: String(r.servedSonnet),
    servedOpus: String(r.servedOpus),
    correctedTasks: String(r.corrected.tasks),
    correctedRuns: String(r.corrected.runs),
    correctedColdAccepted: String(r.corrected.coldAccepted),
    correctedWarmAccepted: String(r.corrected.warmAccepted),
    correctedColdRejected: String(r.corrected.coldRejected),
    correctedWarmRejected: String(r.corrected.warmRejected),
    warmAccepted: String(r.warm.accepted),
    warmRuns: String(r.warm.runs),
    warmMisses: String(r.warm.notAccepted),
    warmMissTasks: String(r.warmMissTasks),
    warmServedOpus: String(r.warmServedOpus),
    warmCost: usd(r.warm.totalUsd, 2),
    warmPerAccepted: usd(r.warm.perAccepted, 3),
    warmSavingPct: pct(r.warmCostSaving),
  };
}

// Fills only the tokens it knows, so `{n}`-style placeholders filled later are left alone.
export function fillKnown<T>(node: T, tokens: Record<string, string>): T {
  if (typeof node === 'string') {
    return node.replace(/\{(\w+)\}/g, (m, key: string) =>
      Object.hasOwn(tokens, key) ? tokens[key] : m,
    ) as T;
  }
  if (Array.isArray(node)) return node.map((v) => fillKnown(v, tokens)) as T;
  if (node && typeof node === 'object') {
    return Object.fromEntries(
      Object.entries(node).map(([k, v]) => [k, fillKnown(v, tokens)]),
    ) as T;
  }
  return node;
}
