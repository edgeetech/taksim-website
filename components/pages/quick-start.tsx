import Link from 'next/link';
import { CopyCommand } from '@/components/copy-command';
import { Rich } from '@/components/rich';
import { getDictionary, type Locale } from '@/lib/i18n';
import { release } from '@/lib/release';

const updateCommands = `taksim update
taksim update --apply`;

export function QuickStartPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).quickStart;
  const rich = (text: string) => <Rich text={text} locale={locale} />;
  return (
    <div className="docs-page-grid">
      <article className="docs-article">
        <header className="docs-article-header">
          <span>{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p>{t.lede}</p>
        </header>

        <section id="install">
          <h2>{t.install.title}</h2>
          <p>{rich(t.install.body)}</p>
          <CopyCommand
            command={release.installCommand}
            copy={t.install.copy}
            copied={t.install.copied}
          />
          <p>{rich(t.install.after)}</p>
        </section>

        <section id="setup">
          <h2>{t.setup.title}</h2>
          <p>{t.setup.body}</p>
          <div className="docs-command-list">
            <pre>
              <code>taksim setup</code>
            </pre>
          </div>
          <div className="docs-callout">
            <strong>{t.setup.seeTitle}</strong>
            <ul className="docs-list">
              {t.setup.see.map((item) => (
                <li key={item}>{rich(item)}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="dashboard">
          <h2>{t.dashboard.title}</h2>
          <p>{t.dashboard.body}</p>
          <div className="docs-command-list">
            <pre>
              <code>taksim dashboard</code>
            </pre>
          </div>
          <p>{t.dashboard.after}</p>
        </section>

        <div className="docs-callout">
          <strong>{t.doneTitle}</strong>
          <p>{rich(t.doneBody)}</p>
        </div>

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

        <section id="update">
          <h2>{t.update.title}</h2>
          <p>{rich(t.update.body)}</p>
          <div className="docs-command-list">
            <pre>
              <code>{updateCommands}</code>
            </pre>
          </div>
          <p>{t.update.after}</p>
        </section>

        <section id="uninstall">
          <h2>{t.uninstall.title}</h2>
          <p>{t.uninstall.body}</p>
          <ol className="docs-list">
            {t.uninstall.steps.map((step) => (
              <li key={step}>{rich(step)}</li>
            ))}
          </ol>
        </section>
      </article>
      <aside className="docs-toc" aria-label={t.toc.label}>
        <strong>{t.toc.label}</strong>
        <Link href="#install">{t.toc.install}</Link>
        <Link href="#setup">{t.toc.setup}</Link>
        <Link href="#dashboard">{t.toc.dashboard}</Link>
        <Link href="#troubleshooting">{t.toc.troubleshooting}</Link>
        <Link href="#update">{t.toc.update}</Link>
        <Link href="#uninstall">{t.toc.uninstall}</Link>
      </aside>
    </div>
  );
}
