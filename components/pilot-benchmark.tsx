import Link from 'next/link';
import { Rich } from '@/components/rich';
import {
  copyTokens,
  fillKnown,
  formatPercent,
  formatUsd,
  report,
  type Metric,
} from '@/lib/benchmark/report';
import { localePath, type Dictionary, type Locale } from '@/lib/i18n';

type PilotCopy = Dictionary['home']['pilot'];

// Every number comes from the redacted snapshot (data/benchmark) through lib/benchmark/report.ts.
const armKeys = ['opus', 'sonnet', 'taksim'] as const;
const { cold, corrected, catalog } = {
  ...report,
  catalog: report.snapshot.catalog,
};
const runsPerArm = report.runsPerArm;
const arms = armKeys.map((key) => ({
  key,
  model: catalog.arms.find((a) => a.key === key)?.model ?? null,
  ...cold[key],
}));
const [opusArm, , taksimArm] = arms;
const bar = (m: Metric, max: Metric) =>
  m.state === 'value' && max.state === 'value' && max.value > 0
    ? `${(Number(m.value.toFixed(2)) / Number(max.value.toFixed(2))) * 100}%`
    : '0%';

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
  t: rawT,
  locale,
  version,
}: {
  t: PilotCopy;
  locale: Locale;
  version: string;
}) {
  const labels = {
    notMeasured: rawT.notMeasured,
    undefinedPerAccepted: rawT.undefinedPerAccepted,
  };
  const t = fillKnown(rawT, copyTokens(report, locale, labels));
  const usd = (m: Metric, digits: number) => formatUsd(m, digits, labels);
  const percent = (m: Metric) => formatPercent(m, locale, labels);
  const minus = (m: Metric) => (m.state === 'value' ? `−${percent(m)}` : percent(m));
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
            <p className="pilot-big tabular">{minus(report.costSaving)}</p>
            <p className="pilot-big-caption">{t.bigCaption}</p>
            <p className="pilot-big-compare tabular">
              <span className="is-taksim">{usd(taksimArm.totalUsd, 2)}</span>
              <span className="vs">{t.vs}</span>
              <span className="is-opus">{usd(opusArm.totalUsd, 2)}</span>
            </p>
            <div className="pilot-duel" aria-hidden="true">
              <div className="duel-row is-opus">
                <span>{t.chart.arms.opus}</span>
                <i style={{ width: '100%' }} />
              </div>
              <div className="duel-row is-taksim">
                <span>{t.chart.arms.taksim}</span>
                <i style={{ width: bar(taksimArm.totalUsd, opusArm.totalUsd) }} />
              </div>
            </div>
            <dl className="pilot-kpis">
              <div>
                <dt>{t.kpiAccepted}</dt>
                <dd className="tabular">
                  {taksimArm.accepted}
                  <span>/{taksimArm.runs}</span>
                </dd>
                <dd className="pilot-kpi-sub">
                  {fill(t.kpiAcceptedSub, { n: `${opusArm.accepted}/${opusArm.runs}` })}
                </dd>
              </div>
              <div>
                <dt>{t.kpiPerAccepted}</dt>
                <dd className="tabular">{minus(report.perAcceptedSaving)}</dd>
                <dd className="pilot-kpi-sub tabular">
                  {usd(taksimArm.perAccepted, 3)} {t.vs} {usd(opusArm.perAccepted, 3)}
                </dd>
              </div>
            </dl>
            <p className="pilot-cold">{t.coldStart}</p>
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
                          width: bar(arm.totalUsd, opusArm.totalUsd),
                        }}
                      />
                    </div>
                    <span className="arm-value tabular">{usd(arm.totalUsd, 2)}</span>
                  </div>
                  <div className="arm-metric">
                    <span className="arm-label">{t.chart.accepted}</span>
                    <div className="arm-dots" aria-hidden="true">
                      {Array.from({ length: arm.runs }, (_, i) => (
                        <i key={i} className={i < arm.accepted ? 'ok' : 'no'} />
                      ))}
                    </div>
                    <span className="arm-value tabular" aria-hidden="true">
                      {arm.accepted}/{arm.runs}
                    </span>
                    <span className="sr-only">
                      {fill(t.chart.acceptedOf, {
                        n: arm.accepted,
                        total: arm.runs,
                      })}
                    </span>
                  </div>
                  <p className="arm-per tabular">
                    {usd(arm.perAccepted, 3)} <span>{t.chart.perAccepted}</span>
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
              sonnet: report.servedSonnet,
              opus: report.servedOpus,
              total: runsPerArm,
            })}
          </p>
          <div className="mix-strip" aria-hidden="true">
            {Array.from({ length: runsPerArm }, (_, i) => (
              <i key={i} className={i < report.servedSonnet ? 'sonnet' : 'opus'} />
            ))}
          </div>
          <ul className="mix-legend" aria-hidden="true">
            <li>
              <i className="sonnet" />
              Sonnet · {report.servedSonnet}
            </li>
            <li>
              <i className="opus" />
              Opus · {report.servedOpus}
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

          <figure className="pilot-case pilot-warm">
            <figcaption>
              <span className="pilot-tag is-purple">{t.warm.tag}</span>
              <strong>{t.warm.title}</strong>
            </figcaption>
            <p className="sr-only">
              {fill(t.warm.srSummary, {
                cold: corrected.coldAccepted,
                warm: corrected.warmAccepted,
                total: corrected.runs,
              })}
            </p>
            <div className="case-flow" aria-hidden="true">
              <div className="case-fails">
                <span className="case-label">
                  {t.warm.cold} ·{' '}
                  {fill(t.warm.acceptedOf, {
                    n: corrected.coldAccepted,
                    total: corrected.runs,
                  })}
                </span>
                <div className="case-marks">
                  {Array.from({ length: corrected.runs }, (_, i) =>
                    i < corrected.coldAccepted ? (
                      <i key={i} className="ok">
                        ✓
                      </i>
                    ) : (
                      <i key={i}>×</i>
                    ),
                  )}
                </div>
              </div>
              <span className="case-arrow">→</span>
              <div className="case-kept">
                <span className="case-label">
                  {t.warm.warm} ·{' '}
                  {fill(t.warm.acceptedOf, {
                    n: corrected.warmAccepted,
                    total: corrected.runs,
                  })}
                </span>
                <div className="case-marks">
                  {Array.from({ length: corrected.runs }, (_, i) =>
                    i < corrected.warmAccepted ? (
                      <i key={i} className="ok">
                        ✓
                      </i>
                    ) : (
                      <i key={i}>×</i>
                    ),
                  )}
                </div>
              </div>
            </div>
            <p className="case-reason">{t.warm.overall}</p>
            <p className="case-verified">{t.warm.cost}</p>
          </figure>
        </section>

        <p className="pilot-footnote">
          {t.note}{' '}
          <Link className="text-link" href={localePath(locale, '/benchmark')}>
            {t.methodLink} →
          </Link>
          {' · '}
          <Link className="text-link" href={localePath(locale, '/proof')}>
            {t.proofLink} →
          </Link>
        </p>
      </div>
    </section>
  );
}
