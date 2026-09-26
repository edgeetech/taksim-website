import Link from 'next/link';
import { Rich } from '@/components/rich';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';

const installerCommand = `Invoke-WebRequest \`
  -Uri 'https://github.com/edgeetech/taksim-releases/releases/download/v0.2.0/install-release.ps1' \`
  -OutFile '.\\install-release.ps1'

.\\install-release.ps1 \`
  -Repository edgeetech/taksim-releases \`
  -Version 0.2.0`;

const verificationCommand = `taksim version
taksim doctor
taksim install status`;

const historyCommands = [
  ['Claude Code', 'taksim history import'],
  ['Codex', 'taksim history import --client codex'],
  ['Devin', 'taksim history import --client devin'],
  ['GitHub Copilot', 'taksim history import --client github_copilot'],
];

export function GettingStartedPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).gettingStarted;
  const rich = (text: string) => <Rich text={text} locale={locale} />;
  return (
    <div className="docs-page-grid">
      <article className="docs-article">
        <header className="docs-article-header">
          <span>{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p>{t.lede}</p>
        </header>

        <div className="docs-callout">
          <strong>{t.noAccountTitle}</strong>
          <p>{rich(t.noAccountBody)}</p>
        </div>
        <section id="eligibility">
          <h2>{t.plan.title}</h2>
          <p>{t.plan.body}</p>
          <div className="docs-choice-list">
            <Link href="#prerequisites">
              <span>
                <strong>{t.plan.selfTitle}</strong>
                <small>{t.plan.selfSub}</small>
              </span>
            </Link>
            <Link href={localePath(locale, '/contact?intent=team')}>
              <span>
                <strong>{t.plan.teamTitle}</strong>
                <small>{t.plan.teamSub}</small>
              </span>
            </Link>
          </div>
        </section>

        <section id="prerequisites">
          <h2>{t.prerequisites.title}</h2>
          <p>{rich(t.prerequisites.body)}</p>
        </section>

        <section id="install">
          <h2>{t.install.title}</h2>
          <p>{t.install.body}</p>
          <div className="docs-command-list">
            <pre>
              <code>{installerCommand}</code>
            </pre>
          </div>
          <p className="docs-note">{rich(t.install.note)}</p>
        </section>

        <section id="verify-install">
          <h2>{t.verify.title}</h2>
          <p>{t.verify.body}</p>
          <div className="docs-command-list">
            <pre>
              <code>{verificationCommand}</code>
            </pre>
          </div>
          <p>{rich(t.verify.after)}</p>
        </section>

        <section id="start-session">
          <h2>{t.session.title}</h2>
          <p>{t.session.body}</p>
          <div className="docs-command-list">
            <details open>
              <summary>Claude Code</summary>
              <pre>
                <code>taksim claude</code>
              </pre>
            </details>
            <details>
              <summary>Codex</summary>
              <pre>
                <code>taksim codex</code>
              </pre>
            </details>
          </div>
          <div className="docs-callout">
            <strong>{t.session.expectTitle}</strong>
            <p>{rich(t.session.expectBody)}</p>
          </div>
        </section>

        <section id="verify-session">
          <h2>{t.inspect.title}</h2>
          <p>{t.inspect.body}</p>
          <div className="docs-command-list">
            <pre>
              <code>taksim verification explain-latest</code>
            </pre>
          </div>
          <p>{t.inspect.after}</p>
        </section>

        <section id="import-history">
          <h2>{t.history.title}</h2>
          <p>{t.history.body}</p>
          <div className="docs-command-list">
            {historyCommands.map(([client, command], index) => (
              <details key={client} open={index === 0}>
                <summary>{client}</summary>
                <pre>
                  <code>{command}</code>
                </pre>
              </details>
            ))}
          </div>
        </section>

        <section id="troubleshooting">
          <h2>{t.troubleshooting.title}</h2>
          <div className="docs-command-list">
            {t.troubleshooting.items.map((item) => (
              <details key={item.q}>
                <summary>{rich(item.q)}</summary>
                <p>{rich(item.a)}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
      <aside className="docs-toc" aria-label={t.toc.label}>
        <strong>{t.toc.label}</strong>
        <Link href="#eligibility">{t.toc.plan}</Link>
        <Link href="#prerequisites">{t.toc.prerequisites}</Link>
        <Link href="#install">{t.toc.install}</Link>
        <Link href="#verify-install">{t.toc.verify}</Link>
        <Link href="#start-session">{t.toc.session}</Link>
        <Link href="#verify-session">{t.toc.inspect}</Link>
        <Link href="#import-history">{t.toc.history}</Link>
        <Link href="#troubleshooting">{t.toc.troubleshooting}</Link>
      </aside>
    </div>
  );
}
