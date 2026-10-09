import { Fragment } from 'react';
import { Rich } from '@/components/rich';
import { getDictionary, type Locale } from '@/lib/i18n';

export function BenchmarkMethodologyPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).benchmark;
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
            <strong>{t.statusLabel}</strong> {t.status}
          </p>
          {t.sections.map((section) => (
            <Fragment key={section.title}>
              <h2>{section.title}</h2>
              <p>
                <Rich text={section.body} locale={locale} />
              </p>
            </Fragment>
          ))}
          <h2 id="results">{t.resultsTitle}</h2>
          <p className="notice">{t.results}</p>
        </article>
      </section>
    </main>
  );
}
