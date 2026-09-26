import Link from 'next/link';
import { Rich } from '@/components/rich';
import { getDictionary, type Locale } from '@/lib/i18n';

const commands = {
  dashboard: `taksim dashboard
taksim report summary --html`,
  judgeHooks: `taksim judge enable --in-session --user-settings
taksim judge enable --in-session --codex-settings`,
  judgeHistory: `taksim judge run --source history --dry-run
taksim judge run --source history --provider ollama
taksim judge status`,
  budget: `taksim budget set --monthly 200
taksim budget set --scope repo --name <repo-alias> --daily 20
taksim budget status`,
  digest: `taksim digest
taksim digest --since 30d --format html`,
  notify: `taksim notify configure --slack-webhook <your-slack-webhook-url>
taksim notify test
taksim digest --to slack`,
  team: `taksim report baseline --export <shared-folder> --label <your-alias>
taksim report team --in <shared-folder> --html
taksim dashboard --team <shared-folder>`,
};

function Commands({ text }: { text: string }) {
  return (
    <div className="docs-command-list">
      <pre>
        <code>{text}</code>
      </pre>
    </div>
  );
}

export function NextStepsPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).nextSteps;
  const rich = (text: string) => <Rich text={text} locale={locale} />;
  return (
    <div className="docs-page-grid">
      <article className="docs-article">
        <header className="docs-article-header">
          <span>{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p>{t.lede}</p>
        </header>

        <section id="dashboard">
          <h2>{t.dashboard.title}</h2>
          <p>{rich(t.dashboard.body)}</p>
          <Commands text={commands.dashboard} />
        </section>

        <section id="judging">
          <h2>{t.judging.title}</h2>
          <p>{rich(t.judging.body)}</p>
          <Commands text={commands.judgeHooks} />
          <p>{rich(t.judging.history)}</p>
          <Commands text={commands.judgeHistory} />
          <p>{rich(t.judging.after)}</p>
        </section>

        <section id="budgets">
          <h2>{t.budgets.title}</h2>
          <p>{rich(t.budgets.body)}</p>
          <Commands text={commands.budget} />
          <p>{rich(t.budgets.digest)}</p>
          <Commands text={commands.digest} />
          <p>{rich(t.budgets.notify)}</p>
          <Commands text={commands.notify} />
        </section>

        <section id="team">
          <h2>{t.team.title}</h2>
          <p>{rich(t.team.body)}</p>
          <Commands text={commands.team} />
        </section>
      </article>
      <aside className="docs-toc" aria-label={t.toc.label}>
        <strong>{t.toc.label}</strong>
        <Link href="#dashboard">{t.toc.dashboard}</Link>
        <Link href="#judging">{t.toc.judging}</Link>
        <Link href="#budgets">{t.toc.budgets}</Link>
        <Link href="#team">{t.toc.team}</Link>
      </aside>
    </div>
  );
}
