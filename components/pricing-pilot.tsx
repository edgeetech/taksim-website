import Link from 'next/link';
import { copyTokens, fillKnown, formatUsd, report } from '@/lib/benchmark/report';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';

const armKeys = ['opus', 'sonnet', 'taksim'] as const;

// The pilot on the pricing page always shows the Sonnet arm next to the routed one and always
// carries the internal-pilot caveat. Every figure comes from the benchmark snapshot, never from copy.
export function PricingPilot({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const labels = { notMeasured: dict.home.pilot.notMeasured, undefinedPerAccepted: dict.home.pilot.undefinedPerAccepted };
  const t = fillKnown(dict.pricing.pilot, copyTokens(report, locale, labels));
  const fill = (template: string, values: Record<string, number>) =>
    template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''));
  return (
    <section className="band pricing-pilot" id="pilot" aria-labelledby="pricing-pilot-title">
      <div className="shell">
        <div className="section-lead">
          <h2 id="pricing-pilot-title">{t.title}</h2>
          <p>{t.lede}</p>
        </div>
        <div className="matrix-wrap pilot-table-wrap">
          <table className="matrix pilot-table">
            <caption className="sr-only">{t.caption}</caption>
            <thead>
              <tr>
                <th scope="col">{t.columns.arm}</th>
                <th scope="col">{t.columns.accepted}</th>
                <th scope="col">{t.columns.cost}</th>
                <th scope="col">{t.columns.perAccepted}</th>
              </tr>
            </thead>
            <tbody>
              {armKeys.map((key) => {
                const arm = report.cold[key];
                return (
                  <tr key={key} className={key === 'taksim' ? 'is-taksim' : undefined}>
                    <th scope="row">
                      <strong>{t.arms[key]}</strong>
                    </th>
                    <td className="tabular">{fill(t.acceptedOf, { n: arm.accepted, total: arm.runs })}</td>
                    <td className="tabular">{formatUsd(arm.totalUsd, 2, labels)}</td>
                    <td className="tabular">{formatUsd(arm.perAccepted, 3, labels)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="pilot-summary">{t.summary}</p>
        <p className="pilot-caveat" role="note">
          {t.caveat}{' '}
          <Link className="text-link" href={localePath(locale, '/benchmark')}>
            {t.method}
          </Link>
        </p>
      </div>
    </section>
  );
}
