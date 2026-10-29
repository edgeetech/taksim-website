// Turns a `taksim proof export` bundle into the copy this site publishes: ratios and percentages only.
// By owner decision the founder's own absolute dollar totals and execution counts are not published, so every
// dollar amount and every execution or token count becomes a share of its window, the removed fields are listed
// in `publication.removed`, and the hash is recomputed over the published copy. The unredacted bundle's hash is kept
// in `publication.sourceSha256` so the export it came from can be identified.
//
//   node scripts/proof-publish.mjs <export.json> <data/proof/YYYY-MM-DD.json> [public/proof/YYYY-MM-DD.json]
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import { bundleHash, sha256Hex, canonicalJson } from '../lib/proof/canonical.ts';

const FAMILIES = ['haiku', 'sonnet', 'opus', 'fable', 'other'];
const CREDENTIALS = ['subscription', 'api_key', 'not_recorded'];

export const removedFields = [
  'spend.total',
  'spend.executions',
  'spend.pricedExecutions',
  'spend.byFamily.*.executions',
  'spend.byFamily.*.cost',
  'spend.byCredentialKind.*.executions',
  'spend.byCredentialKind.*.pricedExecutions',
  'spend.byCredentialKind.*.cost',
  'modelMix.*.outputTokens',
  'routing.observedUnroutedCost',
  'routing.routedLiveCost',
  'cache.executions',
  'levers.*.cost',
  'levers.contextOver200kExcess.turns',
  'counterfactual.saving',
];

// One decimal from 1% up, two below it, so that small shares do not collapse to 0.
const round = (value) => (value < 1 ? Math.round(value * 100) / 100 : Math.round(value * 10) / 10);

export function publish(original) {
  const { sha256: sourceSha256 } = original;
  if (bundleHash(original) !== sourceSha256) throw new Error('the export does not match its own sha256');
  if (original.schemaVersion !== 1) throw new Error(`unsupported schemaVersion ${original.schemaVersion}`);

  const total = original.spend.total;
  if (total.low !== total.high || !(total.high > 0)) throw new Error('spend.total must be one positive number to take shares of it');
  const executions = original.spend.executions;
  if (!(executions > 0)) throw new Error('the window holds no executions');
  const ofCost = (amount) => round((amount / total.high) * 100);
  const ofCostRange = ({ low, high }) => ({ low: ofCost(low), high: ofCost(high) });
  const ofExecutions = (count) => round((count / executions) * 100);

  const byFamily = Object.fromEntries(
    FAMILIES.map((family) => {
      const { cost } = original.spend.byFamily[family];
      if (cost.low !== cost.high) throw new Error(`byFamily.${family}.cost is a range`);
      return [family, { costSharePct: ofCost(cost.high) }];
    }),
  );
  const byCredentialKind = Object.fromEntries(
    CREDENTIALS.map((kind) => {
      const row = original.spend.byCredentialKind[kind];
      return [kind, { basis: row.basis, executionSharePct: ofExecutions(row.executions) }];
    }),
  );
  const { levers } = original;
  const costOf = ({ cost }) => ofCostRange(cost);
  const published = {
    schemaVersion: 1,
    generatedAt: original.generatedAt,
    generatedBy: original.generatedBy,
    window: original.window,
    publication: {
      basis: 'ratios-only',
      sourceSha256,
      removed: removedFields,
    },
    spend: { pricedSharePct: original.spend.pricedSharePct, byFamily, byCredentialKind },
    modelMix: {
      window: { sharePct: original.modelMix.window.sharePct },
      previousWindow: { sharePct: original.modelMix.previousWindow.sharePct },
    },
    routing: {
      routingEnabled: original.routing.routingEnabled,
      routedDecisions: original.routing.routedDecisions,
      routedLiveCostSharePct: ofCost(original.routing.routedLiveCost.high),
      escalations: original.routing.escalations,
    },
    judge: original.judge,
    counterfactual: {
      basis: original.counterfactual.basis,
      countedTurns: original.counterfactual.countedTurns,
      consensusOverTurns: original.counterfactual.consensusOverTurns,
      savingSharePct: ofCostRange(original.counterfactual.saving),
    },
    cache: { definition: original.cache.definition, hitRatioPct: original.cache.hitRatioPct },
    levers: {
      cacheBreak: { breaks: levers.cacheBreakCost.breaks, costSharePct: costOf(levers.cacheBreakCost) },
      idleGap: { breaks: levers.idleGapCost.breaks, costSharePct: costOf(levers.idleGapCost) },
      contextOver200k: {
        turnsSharePct: ofExecutions(levers.contextOver200kExcess.turns),
        costSharePct: costOf(levers.contextOver200kExcess),
      },
      failureLoops: { count: levers.failureLoops.count, costSharePct: costOf(levers.failureLoops) },
      spendSpikeDays: levers.spendSpikeDays,
    },
    overhead: original.overhead,
    caveats: original.caveats,
  };
  return { ...published, sha256: sha256Hex(canonicalJson(published)) };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [input, output, copy] = process.argv.slice(2);
  if (!input || !output) {
    console.error('usage: node scripts/proof-publish.mjs <export.json> <data/proof/YYYY-MM-DD.json> [public/proof/YYYY-MM-DD.json]');
    process.exit(2);
  }
  const text = `${JSON.stringify(publish(JSON.parse(readFileSync(input, 'utf8'))), null, 2)}\n`;
  for (const path of [output, copy].filter(Boolean)) {
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, text);
  }
  console.log(`proof-publish: wrote ${[output, copy].filter(Boolean).join(' and ')}`);
}
