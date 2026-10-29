import Link from 'next/link';
import { Rich } from '@/components/rich';
import { getDictionary, type Locale } from '@/lib/i18n';

type Step = { command: string; output?: string };

// Commands and their output are product text, so they are the same in every language. They were captured
// from the current release; paths, process ids and version numbers are shown as placeholders.
const steps: Record<string, Step[]> = {
  gateway: [
    {
      command: 'taksim gateway status',
      output: `Gateway: running on http://127.0.0.1:4027 (pid 12345, <version>+<commit>)
Home: <your Taksim home folder>
Activity: 0 in flight, 0 live launcher(s), idle 00:00:12; idle shutdown after 120 min`,
    },
    {
      command: 'taksim gateway ensure',
      output: 'Taksim gateway started on http://127.0.0.1:4027 (pid 12345).',
    },
    {
      command: 'taksim gateway stop\ntaksim gateway ensure',
      output: `Stopped the Taksim gateway (pid 12345, port 4027).
Taksim gateway started on http://127.0.0.1:4027 (pid 12346).`,
    },
  ],
  judge: [
    {
      command: 'taksim judge status',
      output: `In-session judging: enabled
User-level Stop hook: installed in <path to your Claude settings.json> (any Claude Code session, including the desktop app)
Stop hook runs: none recorded`,
    },
    {
      command: 'taksim judge enable --in-session --user-settings',
      output: `Updated <path to your Claude settings.json>.
In-session judging enabled (<path to the Taksim judge config>).`,
    },
  ],
  mode: [
    {
      command: 'taksim mode',
      output: `routing.mode: economy.
What this mode maps to:
  routing.auto: on (see \`taksim routing auto status\`)
  ordinary requests: capability demand 0.55: Sonnet at low effort, the cheapest option meeting the demand
  ...
Claude subscription sessions run natively and are not affected; \`taksim routing subscription on\` is a separate opt-in.
Claude models only. The gateway picks a changed mode up within 5 s.`,
    },
    {
      command: 'taksim routing subscription status',
      output:
        "routing.subscription: off. Claude subscription traffic only; targets are Claude catalog models within your organisation's allowed models.",
    },
    {
      command: 'taksim routing subscription on',
      output: `routing.subscription: on.
...
Start a new \`taksim claude\` session to route it; the running gateway picks the switch up within 5 s.`,
    },
  ],
  budget: [
    {
      command: 'taksim budget status',
      output: `Budgets (<path to budgets.json>); API-equivalent dollars, upper end of each price range:
  developer daily: 0% ($0.00 of $20.00, N=0 priced executions)
  developer monthly: 0% ($0.00 of $300.00, N=0 priced executions)
Enforcement: downgrade to sonnet at 100% of a daily and 100% of a monthly limit (developer and current repo). Nothing is ever blocked.
Budget downgrades recorded: 0 today, 0 this month (one per stepped-down lease; see \`taksim diagnostics downgrades\`).`,
    },
    {
      command: 'taksim diagnostics downgrades',
      output: 'Downgrades escalated: 0 of 0; pre-delivery retries: 0',
    },
    {
      command: 'taksim budget enforce --mode off',
      output: 'Budget enforcement: off. Budgets only warn.',
    },
  ],
  update: [
    {
      command: 'taksim update',
      output: `Current: <version>
Latest:  <version>
Taksim <version> is up to date.`,
    },
    {
      command: 'taksim update --apply',
      output:
        'Downloaded installer has no valid Authenticode signature. Use --allow-unsigned only for a trusted legacy release.',
    },
    { command: 'taksim update --apply --allow-unsigned' },
    {
      command: 'taksim version',
      output: `Taksim <version>+<commit>
Product: <version>
Commit: <commit>`,
    },
  ],
  macPath: [
    {
      command: '~/.local/bin/taksim version',
      output: `Taksim <version>+<commit>
Product: <version>
Commit: <commit>`,
    },
    { command: `echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc` },
    {
      command: 'taksim version',
      output: `Taksim <version>+<commit>
Product: <version>
Commit: <commit>`,
    },
  ],
  uninstall: [
    {
      command: 'taksim uninstall --dry-run',
      output: `Taksim installation: <install folder>
Claude hook: <path to your Claude settings.json>
Codex hook: <path to your Codex hooks.json>
Managed Claude skill: <path to SKILL.md> (only if unchanged)
Local data will be kept: <your Taksim home folder>`,
    },
    { command: 'taksim uninstall' },
  ],
};

const order = ['gateway', 'judge', 'mode', 'budget', 'update', 'macPath', 'uninstall'] as const;

export function TroubleshootingPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).troubleshooting;
  const rich = (text: string) => <Rich text={text} locale={locale} />;
  return (
    <div className="docs-page-grid">
      <article className="docs-article">
        <header className="docs-article-header">
          <span>{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p>{rich(t.lede)}</p>
        </header>

        {order.map((id) => {
          const item = t.items[id];
          const note = 'note' in item ? (item.note as string) : null;
          return (
            <section id={id} key={id}>
              <h2>{rich(item.q)}</h2>
              <p>{rich(item.intro)}</p>
              <ol className="troubleshooting-steps">
                {item.steps.map((text, index) => {
                  const step = steps[id][index];
                  return (
                    <li key={step.command}>
                      <p>{rich(text)}</p>
                      <div className="docs-command-list">
                        <span className="troubleshooting-label">{t.commandLabel}</span>
                        <pre>
                          <code>{step.command}</code>
                        </pre>
                        {step.output ? (
                          <>
                            <span className="troubleshooting-label">{t.outputLabel}</span>
                            <pre>
                              <code>{step.output}</code>
                            </pre>
                          </>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
              </ol>
              {note ? <p className="docs-note">{rich(note)}</p> : null}
            </section>
          );
        })}

        <div className="docs-callout">
          <p>{rich(t.stillStuck)}</p>
        </div>
      </article>
      <aside className="docs-toc" aria-label={t.toc.label}>
        <strong>{t.toc.label}</strong>
        {order.map((id) => (
          <Link href={`#${id}`} key={id}>
            {t.items[id].q.replaceAll('`', '')}
          </Link>
        ))}
      </aside>
    </div>
  );
}
