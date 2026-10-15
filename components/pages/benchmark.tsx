import Link from 'next/link';
import { Fragment } from 'react';
import { Rich } from '@/components/rich';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';

export function BenchmarkPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.benchmark;
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
            <strong>{t.summaryLabel}</strong> {dict.home.pilot.footnote}
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
          <p>
            <Link href={localePath(locale, '/#pilot')}>← {t.back}</Link>
          </p>
        </article>
      </section>
    </main>
  );
}
