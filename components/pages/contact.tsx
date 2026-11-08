import { getDictionary, type Locale } from '@/lib/i18n';

const supportEmail = 'info@edgee.tech';

export function ContactPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).contact;
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
        <div className="shell narrow prose">
          <p>
            {t.write} <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
          </p>
          <p>{t.warning}</p>
        </div>
      </section>
    </main>
  );
}
