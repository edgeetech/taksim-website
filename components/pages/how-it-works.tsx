import Link from 'next/link';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';
import { funnel } from '@/lib/funnel';

const tierMix = [
  { key: 'tierTop', share: 70, tone: 'top' },
  { key: 'tierMid', share: 30, tone: 'mid' },
] as const;

export function HowItWorksPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.howItWorks;
  const href = (path: string) => localePath(locale, path);
  return (
    <main className="home">
      <section className="band page-lead" aria-labelledby="how-page-title">
        <div className="shell">
          <div className="section-lead">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 id="how-page-title">{t.title}</h1>
            <p className="hero-lede">{t.lede}</p>
          </div>
        </div>
      </section>

      <section className="band how first-value" id="first-value" aria-labelledby="first-value-title">
        <div className="shell how-layout">
          <div className="how-intro">
            <h2 id="first-value-title">{t.firstValue.title}</h2>
            <p>{t.firstValue.body}</p>
            <Link className="btn btn-primary" href={href('/docs/quick-start')} data-funnel={funnel.getFree}>
              {dict.chrome.install}
            </Link>
          </div>
          <ol className="pipeline">
            {t.firstValue.steps.map((step, index) => (
              <li key={step.title} className="pipeline-step">
                <span className="pipeline-index tabular" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  {step.detail ? <code>{step.detail}</code> : null}
                </div>
              </li>
            ))}
          </ol>
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

      <section className="band how" id="pipeline" aria-labelledby="pipeline-title">
        <div className="shell how-layout">
          <div className="how-intro">
            <h2 id="pipeline-title">{t.how.title}</h2>
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

      <section className="band report" id="report" aria-labelledby="report-title">
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

      <section className="band privacy" id="privacy" aria-labelledby="privacy-title">
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
              <h3>{t.privacy.desktopTitle}</h3>
              <p>{t.privacy.desktopBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band faq" id="faq" aria-labelledby="faq-title">
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
    </main>
  );
}
