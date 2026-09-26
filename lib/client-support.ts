// Single source of truth for the client support matrix on the home page.
// Keep conservative: only mark a capability "yes" once the release manifest (release/manifest.json)
// says the shipped binary does it; tests/release.test.mjs enforces this.
// Labels and notes live in lib/i18n (matrix.rows.<id>); this file holds the facts.

export type Capability = 'observe' | 'judge' | 'route';

export type SupportState = 'yes' | 'no' | 'unverified';

export type ClientRowId =
  | 'claudeCodePlan'
  | 'claudeDesktop'
  | 'claudeCodeApi'
  | 'codexPlan'
  | 'codexApi'
  | 'copilotPlan'
  | 'devinCli'
  | 'devinDesktop'
  | 'openCodeKilo'
  | 'pi'
  | 'agentWorkstation';

export type ClientSupportRow = {
  id: ClientRowId;
  /** `history import --client` ids from the release manifest this row describes. */
  manifestClients: string[];
  /** plan: vendor subscription sign-in (observe-only); apiKey: your own key; own: whichever provider you configure. */
  billing: 'plan' | 'apiKey' | 'own';
  cells: Record<Capability, SupportState>;
};

export const capabilities: Capability[] = ['observe', 'judge', 'route'];

export const clientSupport: ClientSupportRow[] = [
  {
    id: 'claudeCodePlan',
    manifestClients: ['claude'],
    billing: 'plan',
    cells: { observe: 'yes', judge: 'yes', route: 'no' },
  },
  {
    id: 'claudeDesktop',
    manifestClients: ['claude'],
    billing: 'plan',
    cells: { observe: 'yes', judge: 'yes', route: 'no' },
  },
  {
    id: 'claudeCodeApi',
    manifestClients: ['claude'],
    billing: 'apiKey',
    cells: { observe: 'yes', judge: 'yes', route: 'yes' },
  },
  {
    id: 'codexPlan',
    manifestClients: ['codex'],
    billing: 'plan',
    cells: { observe: 'yes', judge: 'yes', route: 'no' },
  },
  {
    id: 'codexApi',
    manifestClients: ['codex'],
    billing: 'apiKey',
    cells: { observe: 'yes', judge: 'yes', route: 'yes' },
  },
  {
    id: 'copilotPlan',
    manifestClients: ['github_copilot'],
    billing: 'plan',
    cells: { observe: 'yes', judge: 'no', route: 'no' },
  },
  {
    id: 'devinCli',
    manifestClients: ['devin'],
    billing: 'plan',
    cells: { observe: 'yes', judge: 'no', route: 'no' },
  },
  {
    id: 'devinDesktop',
    manifestClients: ['devin_desktop'],
    billing: 'plan',
    cells: { observe: 'yes', judge: 'yes', route: 'no' },
  },
  {
    id: 'openCodeKilo',
    manifestClients: ['opencode', 'kilo'],
    billing: 'own',
    cells: { observe: 'yes', judge: 'yes', route: 'no' },
  },
  {
    id: 'pi',
    manifestClients: ['pi'],
    billing: 'own',
    cells: { observe: 'yes', judge: 'yes', route: 'no' },
  },
  {
    id: 'agentWorkstation',
    manifestClients: ['agentworkstation'],
    billing: 'own',
    cells: { observe: 'yes', judge: 'no', route: 'no' },
  },
];

export const clientSupportSources = [
  {
    key: 'claudeLegal',
    href: 'https://code.claude.com/docs/en/legal-and-compliance',
  },
  { key: 'codexAuth', href: 'https://developers.openai.com/codex/auth' },
] as const;
