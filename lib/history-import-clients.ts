/**
 * Single source of truth for clients Taksim only observes through
 * `taksim history import`: no managed launch (`taksim <client>`) and no
 * live routing. Verified against edgeetech/taksim `docs/CLIENTS.md` and
 * `src/Taksim.Edge/HistoryCommands.cs` (2026-09-26).
 *
 * Every page that lists these clients imports this array instead of
 * hardcoding its own copy, so the site cannot silently drift from Taksim's
 * actual `--client` support.
 */
export interface HistoryImportClient {
  /** Display name used on the site. */
  name: string;
  /** Exact `--client` value accepted by `taksim history import`. */
  flag: string;
  /** Full example command shown in the docs. */
  command: string;
  /** Short, accurate boundary statement: never implies managed launch or routing. */
  note: string;
}

export const historyImportOnlyClients: HistoryImportClient[] = [
  {
    name: 'AgentBoard',
    flag: 'agentboard',
    command: 'taksim history import --client agentboard',
    note: 'History import only; no managed launch, no routing.',
  },
  {
    name: 'Agent Workstation',
    flag: 'agentworkstation',
    command: 'taksim history import --client agentworkstation',
    note: 'History import only; no managed launch, no routing.',
  },
  {
    name: 'Devin Desktop',
    flag: 'devin_desktop',
    command: 'taksim history import --client devin_desktop',
    note: 'History import and judge backlog only (formerly Windsurf); a subscription product Taksim never launches or routes.',
  },
  {
    name: 'Kilo Code',
    flag: 'kilo',
    command: 'taksim history import --client kilo',
    note: 'History import and judging only; managed launch and routing are deferred.',
  },
  {
    name: 'OpenCode',
    flag: 'opencode',
    command: 'taksim history import --client opencode',
    note: 'History import and judging only; managed launch and routing are deferred.',
  },
  {
    name: 'Pi / Oh My Pi',
    flag: 'pi',
    command: 'taksim history import --client pi',
    note: 'History import and judging only; no managed launch or routing.',
  },
];
