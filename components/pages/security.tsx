import { Fragment } from 'react';
import { Rich } from '@/components/rich';
import { getDictionary, type Locale } from '@/lib/i18n';

export function SecurityPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).security;
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
            <strong>{t.summaryLabel}</strong> {t.summary}
          </p>
          <h2>{t.egressTitle}</h2>
          <p>{t.egressLede}</p>
          <section className="table-scroll" aria-label={t.egressCaption} tabIndex={0}>
            <table className="security-table" aria-label={t.egressCaption}>
              <thead>
                <tr>
                  <th scope="col">{t.egressHeaders.host}</th>
                  <th scope="col">{t.egressHeaders.purpose}</th>
                  <th scope="col">{t.egressHeaders.when}</th>
                </tr>
              </thead>
              <tbody>
                {t.egress.map((row) => (
                  <tr key={row.host}>
                    <th scope="row">
                      <code>{row.host}</code>
                    </th>
                    <td>{row.purpose}</td>
                    <td>
                      <Rich text={row.when} locale={locale} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <p>
            <Rich text={t.egressNote} locale={locale} />
          </p>
          {t.sections.map((section) => (
            <Fragment key={section.title}>
              <h2>{section.title}</h2>
              <p>
                <Rich text={section.body} locale={locale} />
              </p>
            </Fragment>
          ))}
          <p>
            <strong>{t.effectiveLabel}</strong> {t.effective}
          </p>
        </article>
      </section>
    </main>
  );
}
