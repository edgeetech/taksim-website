// Structure and public sources for the /compare table. The wording lives in the dictionaries
// (`compare.rows.<id>.cells.<column>`); every competitor cell links to the page its facts come from,
// so a test can count external links per row. Facts were checked against these pages on 2026-10-30.
export const compareAsOf = '2026-10-30';

export const compareRowIds = [
  'claudeOnly',
  'local',
  'stepDown',
  'judge',
  'ledger',
  'subscription',
  'nativeAudit',
  'price',
] as const;

export const compareColumns = ['taksim', 'fusion', 'advisor', 'notDiamond', 'ccusage', 'sonnet'] as const;

export type CompareRowId = (typeof compareRowIds)[number];
export type CompareColumn = (typeof compareColumns)[number];
export type CompetitorColumn = Exclude<CompareColumn, 'taksim'>;

const url = {
  fusionDocs: 'https://docs.github.com/en/copilot/concepts/models/copilot-fusion',
  fusionGa: 'https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion',
  fusionHydra: 'https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option',
  fusionLocal: 'https://github.blog/changelog/2026-10-28-github-copilot-fusion-now-supports-selection-of-local-models',
  copilotBudgets: 'https://docs.github.com/en/copilot/how-tos/manage-and-track-spending/manage-company-spending',
  advisor: 'https://code.claude.com/docs/en/advisor',
  modelConfig: 'https://code.claude.com/docs/en/model-config',
  ndStart: 'https://code.notdiamond.ai/docs/getting-started',
  ndConfig: 'https://code.notdiamond.ai/docs/getting-started/configuration/',
  ndData: 'https://code.notdiamond.ai/docs/data-privacy/data-dictionary',
  ndPricing: 'https://www.notdiamond.ai/pricing',
  ccusage: 'https://github.com/ccusage/ccusage',
} as const;

export const compareSources: Record<CompareRowId, Record<CompetitorColumn, readonly string[]>> = {
  claudeOnly: {
    fusion: [url.fusionDocs, url.fusionGa, url.fusionHydra, url.fusionLocal],
    advisor: [url.advisor],
    notDiamond: [url.ndConfig],
    ccusage: [url.ccusage],
    sonnet: [url.modelConfig],
  },
  local: {
    fusion: [url.fusionDocs],
    advisor: [url.advisor],
    notDiamond: [url.ndStart, url.ndData],
    ccusage: [url.ccusage],
    sonnet: [url.modelConfig],
  },
  stepDown: {
    fusion: [url.fusionDocs, url.copilotBudgets],
    advisor: [url.advisor],
    notDiamond: [url.ndConfig],
    ccusage: [url.ccusage],
    sonnet: [url.modelConfig],
  },
  judge: {
    fusion: [url.fusionDocs],
    advisor: [url.advisor],
    notDiamond: [url.ndStart],
    ccusage: [url.ccusage],
    sonnet: [url.modelConfig],
  },
  ledger: {
    fusion: [url.fusionDocs],
    advisor: [url.advisor],
    notDiamond: [url.ndStart],
    ccusage: [url.ccusage],
    sonnet: [url.modelConfig],
  },
  subscription: {
    fusion: [url.fusionDocs],
    advisor: [url.advisor],
    notDiamond: [url.ndConfig],
    ccusage: [url.ccusage],
    sonnet: [url.modelConfig],
  },
  nativeAudit: {
    fusion: [url.fusionDocs],
    advisor: [url.advisor],
    notDiamond: [url.ndStart],
    ccusage: [url.ccusage],
    sonnet: [url.modelConfig],
  },
  price: {
    fusion: [url.fusionDocs],
    advisor: [url.advisor],
    notDiamond: [url.ndPricing],
    ccusage: [url.ccusage],
    sonnet: [url.modelConfig],
  },
};
