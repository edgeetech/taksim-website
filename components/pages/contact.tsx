import { ContactForm } from '@/components/contact-form';
import { getDictionary, type Locale } from '@/lib/i18n';

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
        <div className="shell contact-layout">
          <ContactForm locale={locale} copy={t.form} />
          <aside>
            <p className="eyebrow">{t.next.title}</p>
            <ol>
              {t.next.steps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
            <p>{t.next.warning}</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
