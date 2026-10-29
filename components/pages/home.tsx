import Link from 'next/link';
import { CopyCommand } from '@/components/copy-command';
import { PilotBenchmark } from '@/components/pilot-benchmark';
import { PricingPlans } from '@/components/pricing-plans';
import { clientSupport } from '@/lib/client-support';
import { copyTokens, fillKnown, report } from '@/lib/benchmark/report';
import { getDictionary, localePath, localizedRoutes, type Locale } from '@/lib/i18n';
import { funnel } from '@/lib/funnel';
import { release } from '@/lib/release';

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.home;
  const href = (path: string) => localePath(locale, path);
  const labels = { notMeasured: t.pilot.notMeasured, undefinedPerAccepted: t.pilot.undefinedPerAccepted };
  const chipText = fillKnown(t.hero.chips, copyTokens(report, locale, labels));
  // A chip shows only once its page exists in localizedRoutes, so /proof can be added there later without a dead link.
  const chips = [
    { id: 'benchmark', route: '/benchmark/', text: chipText.benchmark },
    { id: 'proof', route: '/proof/', text: chipText.proof },
  ].filter((chip) => (localizedRoutes as readonly string[]).includes(chip.route));
  const clientNames = [...new Set(clientSupport.map((row) => dict.matrix.rows[row.id].client))];
  return (
    <main className="home">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <h1 id="hero-title">{t.hero.title}</h1>
            <p className="hero-lede">{t.hero.lede}</p>
            <ul className="hero-chips" aria-label={t.hero.chipsLabel}>
              {chips.map((chip) => (
                <li key={chip.id}>
                  <Link className="hero-chip" href={href(chip.route)}>
                    {chip.text}
                    <span aria-hidden="true"> →</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hero-actions">
              <Link className="btn btn-primary" href={href('/docs/quick-start')} data-funnel={funnel.getFree}>
                {dict.chrome.install}
              </Link>
              <Link className="btn btn-ghost" href="#how-it-works" data-funnel={funnel.seeHow}>
                {t.hero.seeHow}
              </Link>
            </div>
            <div className="hero-install">
              <span>{t.hero.installLabel}</span>
              <CopyCommand
                command={release.installCommand}
                copy={dict.quickStart.install.copy}
                copied={dict.quickStart.install.copied}
                funnelStep={funnel.installCopy}
              />
              <Link className="text-link" href={href('/docs/quick-start')} data-funnel={funnel.installGuide}>
                {t.hero.installGuide} →
              </Link>
            </div>
            <p className="hero-trust">{t.hero.trust}</p>
          </div>
        </div>
      </section>

      <section className="band values" aria-label={t.valuesLabel}>
        <div className="shell values-grid">
          {t.valueProps.map((v) => (
            <div key={v.title} className="value">
              <h2>{v.title}</h2>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <PilotBenchmark t={t.pilot} locale={locale} version={release.version} />

      <section className="band how" id="how-it-works" aria-labelledby="how-title">
        <div className="shell how-layout">
          <div className="how-intro">
            <h2 id="how-title">{t.how.title}</h2>
            <p>{t.how.body}</p>
            <Link className="text-link" href={href('/how-it-works')}>
              {t.how.more} →
            </Link>
          </div>
          <ol className="pipeline">
            {t.how.steps.map((step, index) => (
              <li key={step.title} className="pipeline-step">
                <span className="pipeline-index tabular" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <code>{step.detail}</code>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band modes" id="modes" aria-labelledby="modes-title">
        <div className="shell">
          <div className="section-lead">
            <h2 id="modes-title">{t.modes.title}</h2>
          </div>
          <div className="values-grid modes-grid">
            {t.modes.items.map((mode, index) => (
              <div key={mode.name} className="value">
                <h3>{mode.name}</h3>
                <p>{t.modes.summary[index]}</p>
              </div>
            ))}
          </div>
          <p className="section-more">
            <Link className="text-link" href={href('/pricing#billing-modes')}>
              {t.modes.more} →
            </Link>
          </p>
        </div>
      </section>

      <section className="band clients" id="clients" aria-labelledby="clients-title">
        <div className="shell">
          <div className="section-lead">
            <h2 id="clients-title">{t.clients.title}</h2>
            <p>{t.clients.body}</p>
          </div>
          <ul className="client-strip" aria-label={t.clients.listLabel}>
            {clientNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <p className="section-more">
            <Link className="text-link" href={href('/clients')}>
              {t.clients.more} →
            </Link>
          </p>
        </div>
      </section>

      <section className="band privacy" aria-labelledby="privacy-title">
        <div className="shell privacy-layout">
          <div className="section-lead">
            <h2 id="privacy-title">{t.privacy.title}</h2>
            <p className="section-links">
              <Link className="text-link" href={href('/how-it-works#privacy')}>
                {t.privacy.more} →
              </Link>
              <Link className="text-link" href={href('/privacy')}>
                {t.privacy.link} →
              </Link>
            </p>
          </div>
          <div className="privacy-card">
            <ul>
              {t.privacy.points.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="band pricing" id="pricing" aria-labelledby="pricing-title">
        <div className="shell">
          <div className="section-lead">
            <h2 id="pricing-title">{t.pricingTitle}</h2>
          </div>
          <PricingPlans locale={locale} compact />
          <p className="section-more">
            <Link className="text-link" href={href('/pricing')}>
              {t.pricingMore} →
            </Link>
          </p>
        </div>
      </section>

      <section className="band faq" aria-labelledby="faq-title">
        <div className="shell faq-layout">
          <h2 id="faq-title">{t.faqTitle}</h2>
          <div className="faq-items">
            {t.faq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
            <p className="section-more">
              <Link className="text-link" href={href('/how-it-works#faq')}>
                {t.faqMore} →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="cta" aria-labelledby="cta-title">
        <div className="shell cta-inner">
          <h2 id="cta-title">{t.cta.title}</h2>
          <p>{t.cta.body}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href={href('/docs/quick-start')} data-funnel={funnel.getFree}>
              {dict.chrome.install}
            </Link>
            <Link className="btn btn-ghost" href={href('/docs')}>
              {t.cta.docs}
            </Link>
            <Link className="btn btn-ghost" href={href('/contact')} data-funnel={funnel.teamContact}>
              {dict.chrome.talkToUs}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
