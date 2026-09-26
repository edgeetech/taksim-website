// Single source of truth for the client support matrix on the home page.
// Keep conservative: only mark a capability "yes" once it is shipped and verified.

export type Capability = 'observe' | 'judge' | 'route';

export type SupportState = 'yes' | 'no' | 'unverified';

export type SupportCell = {
  state: SupportState;
  note?: string;
};

export type ClientSupportRow = {
  client: string;
  access: string;
  cells: Record<Capability, SupportCell>;
};

export const capabilities: { key: Capability; label: string; description: string }[] = [
  {
    key: 'observe',
    label: 'Observe',
    description: 'Prices each session by model from local history, hooks or the Copilot CLI session store.',
  },
  {
    key: 'judge',
    label: 'Judge',
    description: 'An LLM judge grades whether a cheaper model tier would have been sufficient.',
  },
  {
    key: 'route',
    label: 'Route',
    description: 'Optional live model choice, only on traffic billed to your own API key and only in sessions you launch through Taksim.',
  },
];

export const clientSupport: ClientSupportRow[] = [
  {
    client: 'Claude Code',
    access: 'Free, Pro, Max, Team or Enterprise plan',
    cells: {
      observe: { state: 'yes', note: 'History import, hooks and status line.' },
      judge: { state: 'yes' },
      route: { state: 'no', note: 'No proxy and no model changes.' },
    },
  },
  {
    client: 'Claude desktop app',
    access: 'Claude plan',
    cells: {
      observe: { state: 'yes', note: 'Local transcripts via a user-level hook.' },
      judge: { state: 'yes' },
      route: { state: 'no', note: 'No proxy and no model changes.' },
    },
  },
  {
    client: 'Claude Code',
    access: 'Anthropic API key',
    cells: {
      observe: { state: 'yes' },
      judge: { state: 'yes' },
      route: { state: 'yes', note: 'Optional, through the local gateway, in sessions you start with taksim claude.' },
    },
  },
  {
    client: 'Codex CLI',
    access: 'ChatGPT plan',
    cells: {
      observe: { state: 'yes', note: 'History import from CODEX_HOME sessions.' },
      judge: { state: 'no', note: 'Not yet. Judging covers Claude Code turns only.' },
      route: { state: 'no', note: 'Not offered. No proxy and no model changes.' },
    },
  },
  {
    client: 'Codex CLI',
    access: 'OpenAI API key',
    cells: {
      observe: { state: 'yes', note: 'History import and the local gateway.' },
      judge: {
        state: 'no',
        note: 'Not yet. Only the experimental Jev judge grades these turns, and one weak judge never counts toward savings.',
      },
      route: { state: 'yes', note: 'Optional, through the local gateway, in sessions you start with taksim codex.' },
    },
  },
  {
    client: 'GitHub Copilot',
    access: 'Copilot plan',
    cells: {
      observe: { state: 'yes', note: 'Usage import from the local Copilot CLI session store.' },
      judge: { state: 'no' },
      route: { state: 'no', note: 'No request-time routing. taksim copilot only picks the startup model.' },
    },
  },
];

export const clientSupportFootnote =
  "Anthropic's Claude Code terms require that subscription credentials are used only by Claude Code itself, so Taksim never sits between Claude Code and a subscription account.";

export const clientSupportSources = [
  { label: 'Claude Code legal and compliance', href: 'https://code.claude.com/docs/en/legal-and-compliance' },
  { label: 'Codex authentication', href: 'https://developers.openai.com/codex/auth' },
];
