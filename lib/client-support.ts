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
    description: 'Prices each session by model from local history, hooks or usage reports.',
  },
  {
    key: 'judge',
    label: 'Judge',
    description: 'An LLM judge grades whether a cheaper model tier would have been sufficient.',
  },
  {
    key: 'route',
    label: 'Route',
    description: 'Optional live model choice, only on traffic billed to your own API key and only when you turn it on.',
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
      route: { state: 'yes', note: 'Optional, through the local gateway. Off until you turn it on.' },
    },
  },
  {
    client: 'Codex CLI',
    access: 'ChatGPT plan',
    cells: {
      observe: { state: 'yes', note: 'History import and notify hook.' },
      judge: { state: 'yes' },
      route: { state: 'no', note: 'Not offered. No proxy and no model changes.' },
    },
  },
  {
    client: 'Codex CLI',
    access: 'OpenAI API key',
    cells: {
      observe: { state: 'yes' },
      judge: { state: 'yes' },
      route: { state: 'yes', note: 'Optional live routing. Off until you turn it on.' },
    },
  },
  {
    client: 'GitHub Copilot',
    access: 'Copilot plan',
    cells: {
      observe: { state: 'yes', note: 'Usage import from GitHub usage reports.' },
      judge: { state: 'no' },
      route: { state: 'no', note: 'Not applicable.' },
    },
  },
];

export const clientSupportFootnote =
  "Anthropic's Claude Code terms require that subscription credentials are used only by Claude Code itself, so Taksim never sits between Claude Code and a subscription account.";

export const clientSupportSources = [
  { label: 'Claude Code legal and compliance', href: 'https://code.claude.com/docs/en/legal-and-compliance' },
  { label: 'Codex authentication', href: 'https://developers.openai.com/codex/auth' },
];
