import { Fragment } from 'react';
import { Rich } from '@/components/rich';
import { getDictionary, type Locale } from '@/lib/i18n';

export function TermsPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).terms;
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
          {t.sections.map((section) => (
            <Fragment key={section.title}>
              <h2>{section.title}</h2>
              <p>
                <Rich text={section.body} locale={locale} />
              </p>
              {section.items && (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>
                      <Rich text={item} locale={locale} />
                    </li>
                  ))}
                </ul>
              )}
              {section.note && (
                <p>
                  <Rich text={section.note} locale={locale} />
                </p>
              )}
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
