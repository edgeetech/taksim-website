import Link from 'next/link';
import { ClientMatrix } from '@/components/client-matrix';
import { CopyCommand } from '@/components/copy-command';
import { LedgerStream } from '@/components/ledger-stream';
import { PricingPlans } from '@/components/pricing-plans';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';
import { release } from '@/lib/release';

const tierMix = [
  { key: 'tierTop', share: 70, tone: 'top' },
  { key: 'tierMid', share: 30, tone: 'mid' },
] as const;

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.home;
  const href = (path: string) => localePath(locale, path);
  return (
    <main className="home">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <h1 id="hero-title">{t.hero.title}</h1>
            <p className="hero-lede">{t.hero.lede}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href={href('/docs/quick-start')}>
                {dict.chrome.install}
              </Link>
              <Link className="btn btn-ghost" href="#how-it-works">
                {t.hero.seeHow}
              </Link>
            </div>
            <div className="hero-install">
              <span>{t.hero.installLabel}</span>
              <CopyCommand
                command={release.installCommand}
                copy={dict.quickStart.install.copy}
                copied={dict.quickStart.install.copied}
              />
              <Link className="text-link" href={href('/docs/quick-start')}>
                {t.hero.installGuide} →
              </Link>
            </div>
            <p className="hero-footnote">{t.hero.footnote}</p>
          </div>
          <div className="hero-visual">
            <LedgerStream t={dict.ledger} />
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

      <section className="band problem" aria-labelledby="problem-title">
        <div className="shell problem-layout">
          <div className="problem-copy">
            <h2 id="problem-title">{t.problem.title}</h2>
            <p>{t.problem.body}</p>
            <p>{t.problem.body2}</p>
          </div>
          <figure className="week-card">
            <figcaption>
              <strong>{t.week.title}</strong>
              <span>{t.week.subtitle}</span>
            </figcaption>
            <dl className="week-stats">
              <div>
                <dt>{t.week.spend}</dt>
                <dd className="tabular">$1.6k–1.8k</dd>
              </div>
              <div>
                <dt>{t.week.topShare}</dt>
                <dd className="tabular">70%</dd>
              </div>
              <div>
                <dt>{t.week.allSonnet}</dt>
                <dd className="tabular is-saving">−45%</dd>
              </div>
            </dl>
            <p className="sr-only">{t.week.srSummary}</p>
            <div className="tier-bar" aria-hidden="true">
              {tierMix.map((tier) => (
                <span key={tier.key} className={`tier tier-${tier.tone}`} style={{ flexBasis: `${tier.share}%` }} />
              ))}
            </div>
            <ul className="tier-legend">
              {tierMix.map((tier) => (
                <li key={tier.key}>
                  <i className={`tier-${tier.tone}`} aria-hidden="true" />
                  {t.week[tier.key]}
                </li>
              ))}
            </ul>
            <p className="week-caveat">{t.week.caveat}</p>
          </figure>
        </div>
      </section>

      <section className="band how" id="how-it-works" aria-labelledby="how-title">
        <div className="shell how-layout">
          <div className="how-intro">
            <h2 id="how-title">{t.how.title}</h2>
            <p>{t.how.body}</p>
          </div>
          <ol className="pipeline">
            {t.steps.map((step, index) => (
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

      <section className="band report" aria-labelledby="report-title">
        <div className="shell">
          <div className="section-lead">
            <h2 id="report-title">{t.report.title}</h2>
            <p>{t.report.body}</p>
          </div>
          <article className="report-doc" aria-label={t.report.docLabel}>
            <header className="report-head">
              <div>
                <strong>{t.report.heading}</strong>
                <span>{t.report.range}</span>
              </div>
              <span className="report-sample">{t.report.sample}</span>
            </header>
            <div className="report-grid">
              <section className="report-block">
                <h3>{t.report.spend}</h3>
                <p className="report-figure tabular">$1,704</p>
                <p className="report-sub">{t.report.spendSub}</p>
                <div className="spark" aria-hidden="true">
                  {[38, 52, 61, 44, 70, 58, 33].map((h, i) => (
                    <span key={i} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </section>
              <section className="report-block">
                <h3>{t.report.judge}</h3>
                <ul className="split-list tabular">
                  <li>
                    <span>{t.report.consensus}</span>
                    <strong>212</strong>
                  </li>
                  <li>
                    <span>{t.report.weakConsensus}</span>
                    <strong className="dim">40</strong>
                  </li>
                  <li>
                    <span>{t.report.disputed}</span>
                    <strong className="dim">9</strong>
                  </li>
                  <li>
                    <span>{t.report.singleJudge}</span>
                    <strong className="dim">66</strong>
                  </li>
                </ul>
                <p className="report-sub">{t.report.judgeSub}</p>
              </section>
              <section className="report-block">
                <h3>{t.report.shadow}</h3>
                <p className="report-figure tabular">
                  138 <span>{t.report.turns}</span>
                </p>
                <p className="report-sub">{t.report.shadowSub}</p>
              </section>
              <section className="report-block report-actions">
                <h3>{t.report.nextActions}</h3>
                <ol>
                  <li>
                    <code>taksim history backfill-models</code>
                    <span>{t.report.unpriced}</span>
                  </li>
                  <li>
                    <code>taksim policy shadow-report</code>
                    <span>{t.report.reviewShadow}</span>
                  </li>
                </ol>
              </section>
            </div>
          </article>
        </div>
      </section>

      <section className="band clients" id="clients" aria-labelledby="clients-title">
        <div className="shell">
          <div className="section-lead">
            <h2 id="clients-title">{t.clients.title}</h2>
            <p>{t.clients.body}</p>
          </div>
          <ClientMatrix locale={locale} />
        </div>
      </section>

      <section className="band privacy" aria-labelledby="privacy-title">
        <div className="shell privacy-layout">
          <div className="section-lead">
            <h2 id="privacy-title">{t.privacy.title}</h2>
            <p>{t.privacy.body}</p>
            <Link className="text-link" href={href('/privacy')}>
              {t.privacy.link}
            </Link>
          </div>
          <div className="privacy-columns">
            <div className="privacy-card">
              <h3>{t.privacy.storedTitle}</h3>
              <ul>
                {t.privacy.stored.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="privacy-card">
              <h3>{t.privacy.neverTitle}</h3>
              <ul>
                {t.privacy.never.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="privacy-card privacy-wide">
              <h3>{t.privacy.judgingTitle}</h3>
              <dl className="judge-list">
                {t.privacy.judges.map((judge) => (
                  <div key={judge.name}>
                    <dt>{judge.name}</dt>
                    <dd>{judge.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="privacy-card privacy-wide compliance">
              <h3>{t.privacy.subscriptionTitle}</h3>
              <p>{t.privacy.subscriptionBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band pricing" id="pricing" aria-labelledby="pricing-title">
        <div className="shell">
          <div className="section-lead">
            <h2 id="pricing-title">{t.pricingTitle}</h2>
          </div>
          <PricingPlans locale={locale} />
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
          </div>
        </div>
      </section>

      <section className="cta" aria-labelledby="cta-title">
        <div className="shell cta-inner">
          <h2 id="cta-title">{t.cta.title}</h2>
          <p>{t.cta.body}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href={href('/docs/quick-start')}>
              {dict.chrome.install}
            </Link>
            <Link className="btn btn-ghost" href={href('/docs')}>
              {t.cta.docs}
            </Link>
            <Link className="btn btn-ghost" href={href('/contact')}>
              {dict.chrome.talkToUs}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
