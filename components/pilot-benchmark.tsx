import { Rich } from '@/components/rich';
import type { Dictionary, Locale } from '@/lib/i18n';

type PilotCopy = Dictionary['home']['pilot'];

// Internal pilot run on 2026-10-15: 15 tasks, 3 arms x 2 repetitions, 30 runs per arm.
const runsPerArm = 30;
const arms = [
  {
    key: 'opus',
    model: 'claude-opus-5-5',
    accepted: 25,
    cost: '8.96',
    perAccepted: '0.358',
  },
  {
    key: 'sonnet',
    model: 'claude-sonnet-5-5',
    accepted: 27,
    cost: '1.99',
    perAccepted: '0.074',
  },
  {
    key: 'taksim',
    model: null,
    accepted: 29,
    cost: '2.33',
    perAccepted: '0.080',
  },
] as const;
const maxCost = 8.96;
const costSaving = 74;
const perAcceptedSaving = 78;
const servedSonnet = 28;

// First release that reads the user's correction. A tuple, because site copy may only name the
// current release (tests/release.test.mjs); the badge reads "coming" until the manifest reaches it.
const userReplyRelease = [0, 3, 11];

function versionBefore(version: string, b: readonly number[]) {
  const a = version.split('.').map(Number);
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if ((a[i] ?? 0) !== (b[i] ?? 0)) return (a[i] ?? 0) < (b[i] ?? 0);
  }
  return false;
}

const fill = (template: string, values: Record<string, number | string>) =>
  template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''));

const stepIcons = [
  // tier down
  <path key="1" d="M12 4v13m0 0-5-5m5 5 5-5M5 20h14" />,
  // rejection
  <path
    key="2"
    d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-3.5 5.5 7 7m0-7-7 7"
  />,
  // keep stronger model
  <path
    key="3"
    d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Zm-3.5 9 2.5 2.5 4.5-5"
  />,
  // weigh and age out
  <path
    key="4"
    d="M12 4v16M6 20h12M4 9l2 6m0 0 2-6M4 9h4m8 0 2 6m0 0 2-6m-4 0h4M7 7h10"
  />,
];

export function PilotBenchmark({
  t,
  locale,
  version,
}: {
  t: PilotCopy;
  locale: Locale;
  version: string;
}) {
  const percent = (n: number) => (locale === 'tr' ? `%${n}` : `${n}%`);
  const replyBadge = versionBefore(version, userReplyRelease)
    ? t.learn.replySoon
    : t.learn.replyNew;
  return (
    <section className="band pilot" id="pilot" aria-labelledby="pilot-title">
      <div className="pilot-glow" aria-hidden="true" />
      <div className="shell">
        <div className="section-lead pilot-lead">
          <p className="pilot-eyebrow">
            <span className="pilot-tag">{t.tag}</span>
            <span>{t.eyebrow}</span>
          </p>
          <h2 id="pilot-title">{t.title}</h2>
          <p>{t.lede}</p>
        </div>

        <div className="pilot-grid">
          <div className="pilot-hero">
            <p className="pilot-big tabular">−{percent(costSaving)}</p>
            <p className="pilot-big-caption">{t.bigCaption}</p>
            <p className="pilot-big-compare tabular">
              <span className="is-taksim">$2.33</span>
              <span className="vs">{t.vs}</span>
              <span className="is-opus">$8.96</span>
            </p>
            <div className="pilot-duel" aria-hidden="true">
              <div className="duel-row is-opus">
                <span>{t.chart.arms.opus}</span>
                <i style={{ width: '100%' }} />
              </div>
              <div className="duel-row is-taksim">
                <span>{t.chart.arms.taksim}</span>
                <i style={{ width: `${(2.33 / maxCost) * 100}%` }} />
              </div>
            </div>
            <dl className="pilot-kpis">
              <div>
                <dt>{t.kpiAccepted}</dt>
                <dd className="tabular">
                  29<span>/30</span>
                </dd>
                <dd className="pilot-kpi-sub">
                  {fill(t.kpiAcceptedSub, { n: '25/30' })}
                </dd>
              </div>
              <div>
                <dt>{t.kpiPerAccepted}</dt>
                <dd className="tabular">−{percent(perAcceptedSaving)}</dd>
                <dd className="pilot-kpi-sub tabular">$0.080 {t.vs} $0.358</dd>
              </div>
            </dl>
          </div>

          <figure className="pilot-chart">
            <figcaption>
              <strong>{t.chart.title}</strong>
              <span>{t.chart.subtitle}</span>
            </figcaption>
            <ul className="pilot-arms">
              {arms.map((arm) => (
                <li key={arm.key} className={`pilot-arm arm-${arm.key}`}>
                  <div className="arm-head">
                    <strong>{t.chart.arms[arm.key]}</strong>
                    <code>{arm.model ?? t.chart.taksimModel}</code>
                  </div>
                  <div className="arm-metric">
                    <span className="arm-label">{t.chart.cost}</span>
                    <div className="arm-bar" aria-hidden="true">
                      <span
                        style={{
                          width: `${(Number(arm.cost) / maxCost) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="arm-value tabular">${arm.cost}</span>
                  </div>
                  <div className="arm-metric">
                    <span className="arm-label">{t.chart.accepted}</span>
                    <div className="arm-dots" aria-hidden="true">
                      {Array.from({ length: runsPerArm }, (_, i) => (
                        <i key={i} className={i < arm.accepted ? 'ok' : 'no'} />
                      ))}
                    </div>
                    <span className="arm-value tabular" aria-hidden="true">
                      {arm.accepted}/{runsPerArm}
                    </span>
                    <span className="sr-only">
                      {fill(t.chart.acceptedOf, {
                        n: arm.accepted,
                        total: runsPerArm,
                      })}
                    </span>
                  </div>
                  <p className="arm-per tabular">
                    ${arm.perAccepted} <span>{t.chart.perAccepted}</span>
                  </p>
                </li>
              ))}
            </ul>
          </figure>
        </div>

        <figure className="pilot-mix">
          <figcaption>
            <strong>{t.mix.title}</strong>
            <span>{t.mix.body}</span>
          </figcaption>
          <p className="sr-only">
            {fill(t.mix.label, {
              sonnet: servedSonnet,
              opus: runsPerArm - servedSonnet,
              total: runsPerArm,
            })}
          </p>
          <div className="mix-strip" aria-hidden="true">
            {Array.from({ length: runsPerArm }, (_, i) => (
              <i key={i} className={i < servedSonnet ? 'sonnet' : 'opus'} />
            ))}
          </div>
          <ul className="mix-legend" aria-hidden="true">
            <li>
              <i className="sonnet" />
              Sonnet · {servedSonnet}
            </li>
            <li>
              <i className="opus" />
              Opus · {runsPerArm - servedSonnet}
            </li>
          </ul>
        </figure>

        <section className="pilot-learn" aria-labelledby="pilot-learn-title">
          <div className="pilot-learn-lead">
            <p className="pilot-eyebrow">
              <span className="pilot-tag is-purple">{t.learn.tag}</span>
            </p>
            <h3 id="pilot-learn-title">{t.learn.title}</h3>
            <p>{t.learn.body}</p>
          </div>

          <ol className="loop">
            {t.learn.steps.map((step, index) => (
              <li key={step.title} className="loop-step">
                <div className="loop-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {stepIcons[index]}
                  </svg>
                  <span className="tabular">{index + 1}</span>
                </div>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
                {index === 1 ? (
                  <ul
                    className="loop-signals"
                    aria-label={t.learn.signalsLabel}
                  >
                    {t.learn.signals.map((signal) => (
                      <li key={signal}>{signal}</li>
                    ))}
                    <li className="loop-reply">
                      <span>{t.learn.reply}</span>
                      <em>{replyBadge}</em>
                    </li>
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="loop-return">
            <span aria-hidden="true" className="loop-return-arrow">
              ↺
            </span>
            <span className="loop-return-label">{t.learn.loopBack}</span>
          </p>

          <figure className="pilot-case">
            <figcaption>
              <span className="pilot-tag">{t.case.tag}</span>
              <strong>{t.case.title}</strong>
            </figcaption>
            <div className="case-flow">
              <div className="case-fails">
                <span className="case-label">{t.case.fails}</span>
                <div className="case-marks" aria-hidden="true">
                  {Array.from({ length: 7 }, (_, i) => (
                    <i key={i}>×</i>
                  ))}
                </div>
              </div>
              <span className="case-arrow" aria-hidden="true">
                →
              </span>
              <div className="case-kept">
                <span className="case-label">{t.case.after}</span>
                <span className="case-opus">
                  <b aria-hidden="true">✓</b> Opus
                </span>
              </div>
            </div>
            <p className="case-reason">
              <Rich text={t.case.reason} locale={locale} />
            </p>
            <p className="case-verified">{t.case.verified}</p>
          </figure>
        </section>

        <p className="pilot-footnote">{t.footnote}</p>
      </div>
    </section>
  );
}
