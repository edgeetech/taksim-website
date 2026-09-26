import { Fragment } from 'react';
import { Rich } from '@/components/rich';
import { getDictionary, type Locale } from '@/lib/i18n';

export function PrivacyPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).privacy;
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
