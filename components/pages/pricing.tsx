import { PricingPlans } from '@/components/pricing-plans';
import { getDictionary, type Locale } from '@/lib/i18n';

export function PricingPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).pricing;
  return (
    <main className="home">
      <section className="band page-lead" aria-labelledby="pricing-title">
        <div className="shell">
          <div className="section-lead">
            <h1 id="pricing-title">{t.title}</h1>
            <p className="hero-lede">{t.lede}</p>
          </div>
          <PricingPlans locale={locale} />
        </div>
      </section>
      <section className="band faq" aria-labelledby="pricing-faq-title">
        <div className="shell faq-layout">
          <h2 id="pricing-faq-title">{t.faqTitle}</h2>
          <div className="faq-items">
            {t.faq.map(({ q, a }) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
