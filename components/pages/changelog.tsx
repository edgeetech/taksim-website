import Link from 'next/link';
import { Rich } from '@/components/rich';
import { changelogEntries } from '@/lib/changelog';
import { funnel } from '@/lib/funnel';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';

export function ChangelogPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.changelog;
  const rich = (text: string) => <Rich text={text} locale={locale} />;
  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p>{t.lede}</p>
        </div>
      </section>
      <section className="content-section">
        <div className="shell narrow prose changelog">
          {changelogEntries.map((entry, index) => (
            <section key={entry.version} id={`v${entry.version}`} className="changelog-entry">
              <h2>
                {entry.version}
                {index === 0 ? <span className="changelog-tag">{t.latest}</span> : null}
              </h2>
              {entry.date ? (
                <p className="changelog-date">
                  {t.released}: <time dateTime={entry.date}>{entry.date}</time>
                </p>
              ) : null}
              <ul className="changelog-items">
                {entry.items.map((item) => {
                  const hasDetail = item.details !== '' || item.points.length > 0;
                  return (
                    <li key={item.summary}>
                      <p>{rich(item.summary)}</p>
                      {hasDetail ? (
                        <details>
                          <summary>{t.details}</summary>
                          {item.details ? <p>{rich(item.details)}</p> : null}
                          {item.points.length ? (
                            <ul>
                              {item.points.map((point) => (
                                <li key={point}>{rich(point)}</li>
                              ))}
                            </ul>
                          ) : null}
                        </details>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
          <p>{t.source}</p>
          <div className="button-row">
            <Link className="btn btn-primary" href={localePath(locale, '/docs/quick-start')} data-funnel={funnel.getFree}>
              {t.install}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
