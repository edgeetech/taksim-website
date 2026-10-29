import Link from 'next/link';
import { Rich } from '@/components/rich';
import { copyTokens, fillKnown, report } from '@/lib/benchmark/report';
import { compareAsOf, compareColumns, compareRowIds, compareSources, type CompetitorColumn } from '@/lib/compare';
import { funnel } from '@/lib/funnel';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';

export function ComparePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const pilot = dict.home.pilot;
  const tokens = copyTokens(report, locale, {
    notMeasured: pilot.notMeasured,
    undefinedPerAccepted: pilot.undefinedPerAccepted,
  });
  const t = fillKnown(dict.compare, tokens);
  const href = (path: string) => localePath(locale, path);
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
        <div className="shell compare-shell">
          <p className="compare-asof">
            <strong>
              <time dateTime={compareAsOf}>{t.asOf}</time>
            </strong>{' '}
            {rich(t.asOfNote)}
          </p>
          <div className="notice compare-free">
            <p>
              <strong>{rich(t.freeSentence)}</strong>
            </p>
            <p>{t.freeBody}</p>
          </div>

          <section className="compare-scroll" aria-label={t.tableLabel} tabIndex={0}>
            <table className="compare-table">
              <caption className="sr-only">{t.tableCaption}</caption>
              <thead>
                <tr>
                  <th scope="col">{t.featureHeader}</th>
                  {compareColumns.map((column) => (
                    <th scope="col" key={column} className={column === 'taksim' ? 'is-taksim' : undefined}>
                      {t.columns[column]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRowIds.map((id) => {
                  const row = t.rows[id];
                  return (
                    <tr key={id} data-row={id}>
                      <th scope="row">{row.feature}</th>
                      {compareColumns.map((column) => {
                        const links = column === 'taksim' ? [] : compareSources[id][column as CompetitorColumn];
                        return (
                          <td key={column} className={column === 'taksim' ? 'is-taksim' : undefined}>
                            <p>{rich(row.cells[column])}</p>
                            {links.length ? (
                              <p className="compare-sources">
                                {links.map((link, index) => (
                                  <a
                                    key={link}
                                    href={link}
                                    rel="noreferrer"
                                    target="_blank"
                                    aria-label={t.sourceFor
                                      .replace('{column}', t.columns[column])
                                      .replace('{feature}', row.feature)}
                                  >
                                    {links.length > 1 ? `${t.source} ${index + 1}` : t.source} ↗
                                  </a>
                                ))}
                              </p>
                            ) : null}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>

          <article className="narrow prose compare-limits">
            <h2>{t.limits.title}</h2>
            <p>{t.limits.body}</p>
            <ul>
              {t.limits.items.map((item) => (
                <li key={item}>{rich(item)}</li>
              ))}
            </ul>
            <h2>{t.cta.title}</h2>
            <p>{t.cta.body}</p>
            <div className="button-row">
              <Link className="btn btn-primary" href={href('/docs/quick-start')} data-funnel={funnel.getFree}>
                {t.cta.install}
              </Link>
              <Link className="btn btn-ghost" href={href('/benchmark')}>
                {t.cta.benchmark}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
