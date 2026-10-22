import { Check, Minus } from 'lucide-react';
import { Rich } from '@/components/rich';
import { planMatrix, planMatrixGroups, plans } from '@/lib/plan-matrix';
import { getDictionary, type Locale } from '@/lib/i18n';

export function PlanMatrix({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.pricing.matrix;
  const names = { free: dict.plans.developer.name, pro: dict.plans.pro.name, team: dict.plans.team.name };
  return (
    <section className="matrix-wrap plan-matrix-wrap" tabIndex={0} aria-label={t.regionLabel}>
      <table className="matrix plan-matrix">
        <caption className="sr-only">{t.caption}</caption>
        <thead>
          <tr>
            <th scope="col">{t.capability}</th>
            {plans.map((plan) => (
              <th scope="col" key={plan}>
                {names[plan]}
              </th>
            ))}
          </tr>
        </thead>
        {planMatrixGroups.map((group) => (
          <tbody key={group}>
            <tr className="plan-matrix-group">
              <th scope="colgroup" colSpan={plans.length + 1}>
                {t.groups[group]}
              </th>
            </tr>
            {planMatrix
              .filter((row) => row.group === group)
              .map((row) => (
                <tr key={row.id}>
                  <th scope="row">
                    <strong>{t.rows[row.id].label}</strong>
                    <small>
                      <Rich text={t.rows[row.id].note} locale={locale} />
                    </small>
                  </th>
                  {plans.map((plan) => (
                    <td key={plan} className={`matrix-cell ${row[plan] ? 'is-yes' : 'is-no'}`}>
                      <span className="matrix-state">
                        {row[plan] ? <Check size={16} aria-hidden="true" /> : <Minus size={16} aria-hidden="true" />}
                        <span className="sr-only">{row[plan] ? t.included : t.excluded}</span>
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        ))}
      </table>
    </section>
  );
}
