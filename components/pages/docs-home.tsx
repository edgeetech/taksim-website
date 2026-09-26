import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { DocsSearch } from '@/components/docs-search';
import { Rich } from '@/components/rich';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';

export function DocsHomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.docs;
  const searchEntries = dict.docsSearch.entries.map((entry) => ({ ...entry, href: localePath(locale, entry.href) }));
  return (
    <div className="docs-page-grid">
      <article className="docs-article">
        <header className="docs-article-header">
          <span>{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p>{t.lede}</p>
        </header>
        <DocsSearch t={{ ...dict.docsSearch, entries: searchEntries }} />
        <div className="docs-callout">
          <strong>{t.signInTitle}</strong>
          <p>
            <Rich text={t.signInBody} locale={locale} />
          </p>
        </div>
        <section id="how-taksim-works">
          <h2>{t.how.title}</h2>
          <p>{t.how.body}</p>
          <div className="docs-callout">
            <strong>{t.how.calloutTitle}</strong>
            <p>{t.how.calloutBody}</p>
          </div>
        </section>
        <section id="judging">
          <h2>{t.judging.title}</h2>
          <div className="docs-definition-list">
            {t.judging.items.map((item) => (
              <div key={item.term}>
                <h3>{item.term}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="connector">
          <h2>{t.gateway.title}</h2>
          <p>{t.gateway.body}</p>
          <div className="docs-callout">
            <strong>{t.gateway.calloutTitle}</strong>
            <p>{t.gateway.calloutBody}</p>
          </div>
        </section>
        <section id="subscriptions-and-api-keys">
          <h2>{t.subscriptions.title}</h2>
          <p>
            <Rich text={t.subscriptions.body} locale={locale} />
          </p>
          <p>
            <Rich text={t.subscriptions.body2} locale={locale} />
          </p>
        </section>
        <section id="verification">
          <h2>{t.verification.title}</h2>
          <p>{t.verification.body}</p>
        </section>
        <section id="client-compatibility">
          <h2>{t.compat.title}</h2>
          <p className="docs-updated">{t.compat.updated}</p>
          <div className="compat-table-wrap">
            <table className="compat-table">
              <caption>{t.compat.caption}</caption>
              <thead>
                <tr>
                  {t.compat.headers.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.compat.rows.map(([client, ...cells]) => (
                  <tr key={client}>
                    <th>{client}</th>
                    {cells.map((cell, index) => (
                      <td key={index}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <footer className="docs-next">
          <CheckCircle2 size={20} />
          <div>
            <span>{t.next}</span>
            <Link href={localePath(locale, '/docs/getting-started')}>
              {t.nextLink} <ArrowRight size={15} />
            </Link>
          </div>
        </footer>
      </article>
      <aside className="docs-toc" aria-label={t.toc.label}>
        <strong>{t.toc.label}</strong>
        <Link href="#how-taksim-works">{t.toc.how}</Link>
        <Link href="#judging">{t.toc.judging}</Link>
        <Link href="#connector">{t.toc.gateway}</Link>
        <Link href="#subscriptions-and-api-keys">{t.toc.subscriptions}</Link>
        <Link href="#verification">{t.toc.verification}</Link>
        <Link href="#client-compatibility">{t.toc.compat}</Link>
      </aside>
    </div>
  );
}
