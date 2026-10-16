import Link from 'next/link';
import { Fragment } from 'react';
import { Rich } from '@/components/rich';
import {
  copyTokens,
  fillKnown,
  formatUsd,
  missing,
  report,
  type Row,
} from '@/lib/benchmark/report';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';

type DataCopy = ReturnType<typeof getDictionary>['benchmark']['data'];
type Labels = { notMeasured: string; undefinedPerAccepted: string };

const modelShort = (id: string) => id.replace(/^claude-/, '');

export function BenchmarkRunsTable({
  rows,
  t,
  labels,
  caption,
}: {
  rows: readonly Row[];
  t: DataCopy;
  labels: Labels;
  caption: string;
}) {
  return (
    <table className="tabular">
      <caption className="sr-only">{caption}</caption>
      <thead>
        <tr>
          <th scope="col">{t.cols.phase}</th>
          <th scope="col">{t.cols.task}</th>
          <th scope="col">{t.cols.arm}</th>
          <th scope="col">{t.cols.status}</th>
          <th scope="col">{t.cols.result}</th>
          <th scope="col">{t.cols.served}</th>
          <th scope="col">{t.cols.turns}</th>
          <th scope="col">{t.cols.cost}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr
            key={`${row.source}/${row.runId}`}
            data-accepted={row.accepted ? 'true' : 'false'}
          >
            <td>{t.phases[row.phase]}</td>
            <td>
              <code>{row.task}</code>
            </td>
            <td>{t.arms[row.arm]}</td>
            <td>{row.status}</td>
            <td>{row.accepted ? t.accepted : t.notAccepted}</td>
            <td>
              {row.servedModels.length
                ? row.servedModels.map(modelShort).join(', ')
                : labels.notMeasured}
            </td>
            <td>{row.turns ?? labels.notMeasured}</td>
            <td>
              {formatUsd(
                typeof row.chargedUsd === 'number'
                  ? { state: 'value', value: row.chargedUsd }
                  : missing,
                4,
                labels,
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function BenchmarkPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const pilot = dict.home.pilot;
  const labels = {
    notMeasured: pilot.notMeasured,
    undefinedPerAccepted: pilot.undefinedPerAccepted,
  };
  const tokens = copyTokens(report, locale, labels);
  const t = fillKnown(dict.benchmark, tokens);
  const footnote = fillKnown(pilot.footnote, tokens);
  const { snapshot } = report;
  const notAccepted = snapshot.rows.filter((row) => !row.accepted);
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
        <article className="shell narrow prose">
          <p className="notice">
            <strong>{t.summaryLabel}</strong> {footnote}
          </p>
          {t.sections.map((section) => (
            <Fragment key={section.title}>
              <h2>{section.title}</h2>
              <p>
                <Rich text={section.body} locale={locale} />
              </p>
            </Fragment>
          ))}
          <h2 id="learning">{t.learn.title}</h2>
          <p>{t.learn.body}</p>
          <ul>
            {t.learn.items.map((item) => (
              <li key={item}>
                <Rich text={item} locale={locale} />
              </li>
            ))}
          </ul>
          <h2 id="data">{t.data.title}</h2>
          <p>{t.data.body}</p>
          <ul>
            <li>
              {t.data.snapshot}: <code>{snapshot.id}</code> ({snapshot.label})
            </li>
            <li>
              {t.data.dates}: {snapshot.dateRange.from}
              {snapshot.dateRange.to !== snapshot.dateRange.from
                ? ` – ${snapshot.dateRange.to}`
                : ''}
            </li>
            <li>
              {t.data.catalog}: <code>{snapshot.catalog.version}</code>
            </li>
            <li>
              {t.data.accounting}: {snapshot.accounting.nature}
            </li>
            <li>
              {t.data.modelsTitle}:
              <ul>
                {snapshot.catalog.arms.map((arm) => (
                  <li key={arm.arm}>
                    {t.data.arms[arm.arm]}:{' '}
                    <code>{arm.model ?? t.data.routedModel}</code>,{' '}
                    {t.data.effort}: {arm.effort ?? labels.notMeasured}
                  </li>
                ))}
              </ul>
            </li>
            <li>
              {t.data.sources}:
              <ul>
                {snapshot.sources.map((source) => (
                  <li key={source.id}>
                    {t.data.phases[source.phase]} <code>{source.sha256}</code>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <h3>{t.data.notAcceptedTitle}</h3>
          <p>{t.data.runsBody}</p>
          {notAccepted.length ? (
            <div className="table-scroll">
              <BenchmarkRunsTable
                rows={notAccepted}
                t={t.data}
                labels={labels}
                caption={t.data.notAcceptedTitle}
              />
            </div>
          ) : null}
          <details>
            <summary>
              {t.data.runsTitle} ({snapshot.rows.length})
            </summary>
            <div className="table-scroll">
              <BenchmarkRunsTable
                rows={snapshot.rows}
                t={t.data}
                labels={labels}
                caption={t.data.runsTitle}
              />
            </div>
          </details>
          <p>
            <Link href={localePath(locale, '/#pilot')}>← {t.back}</Link>
          </p>
        </article>
      </section>
    </main>
  );
}
