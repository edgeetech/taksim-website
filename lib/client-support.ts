// Single source of truth for the client support matrix on the home page.
// Keep conservative: only mark a capability "yes" once it is shipped and verified.
// Labels and notes live in lib/i18n (matrix.rows.<id>); this file holds the facts.

export type Capability = 'observe' | 'judge' | 'route';

export type SupportState = 'yes' | 'no' | 'unverified';

export type ClientRowId =
  | 'claudeCodePlan'
  | 'claudeDesktop'
  | 'claudeCodeApi'
  | 'codexPlan'
  | 'codexApi'
  | 'copilotPlan';

export type ClientSupportRow = {
  id: ClientRowId;
  billing: 'plan' | 'apiKey';
  cells: Record<Capability, SupportState>;
};

export const capabilities: Capability[] = ['observe', 'judge', 'route'];

export const clientSupport: ClientSupportRow[] = [
  {
    id: 'claudeCodePlan',
    billing: 'plan',
    cells: { observe: 'yes', judge: 'yes', route: 'no' },
  },
  {
    id: 'claudeDesktop',
    billing: 'plan',
    cells: { observe: 'yes', judge: 'yes', route: 'no' },
  },
  {
    id: 'claudeCodeApi',
    billing: 'apiKey',
    cells: { observe: 'yes', judge: 'yes', route: 'yes' },
  },
  {
    id: 'codexPlan',
    billing: 'plan',
    cells: { observe: 'yes', judge: 'no', route: 'no' },
  },
  {
    id: 'codexApi',
    billing: 'apiKey',
    cells: { observe: 'yes', judge: 'no', route: 'yes' },
  },
  {
    id: 'copilotPlan',
    billing: 'plan',
    cells: { observe: 'yes', judge: 'no', route: 'no' },
  },
];

export const clientSupportSources = [
  { key: 'claudeLegal', href: 'https://code.claude.com/docs/en/legal-and-compliance' },
  { key: 'codexAuth', href: 'https://developers.openai.com/codex/auth' },
] as const;
