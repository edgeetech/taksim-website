import Link from 'next/link';
import { Check } from 'lucide-react';
import { Rich } from '@/components/rich';
import { funnel } from '@/lib/funnel';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';

function Features({ items, lead, locale }: { items: string[]; lead?: string; locale: Locale }) {
  return (
    <>
      {lead ? <p className="plan-lead">{lead}</p> : null}
      <ul className="plan-features">
        {items.map((item) => (
          <li key={item}>
            <Check size={16} aria-hidden="true" />
            <span>
              <Rich text={item} locale={locale} />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export function PricingPlans({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const { developer, pro, team, billingNote } = getDictionary(locale).plans;
  return (
    <>
      <div className="plans">
        <article className="plan" aria-labelledby="plan-developer">
          <header>
            <h3 id="plan-developer">{developer.name}</h3>
            <p className="plan-price">{developer.price}</p>
            <p className="plan-sub">{developer.sub}</p>
            {compact ? null : <p className="plan-sub">{developer.value}</p>}
          </header>
          {compact ? null : <Features items={developer.features} locale={locale} />}
          <Link className="btn btn-primary" href={localePath(locale, '/docs/quick-start')} data-funnel={funnel.getFree}>
            {developer.cta}
          </Link>
        </article>
        <article className="plan plan-pro" aria-labelledby="plan-pro">
          <header>
            <h3 id="plan-pro">{pro.name}</h3>
            <p className="plan-price">
              <span className="tabular">{pro.price}</span>
              <small>{pro.per}</small>
            </p>
            <p className="plan-badge">{pro.badge}</p>
            <p className="plan-sub">{pro.sub}</p>
          </header>
          {compact ? null : <Features items={pro.features} lead={pro.lead} locale={locale} />}
          <Link className="btn btn-primary" href={localePath(locale, '/contact?intent=pro')} data-funnel={funnel.proReserve}>
            {pro.cta}
          </Link>
        </article>
        <article className="plan" aria-labelledby="plan-team">
          <header>
            <h3 id="plan-team">{team.name}</h3>
            <p className="plan-price">
              <span className="tabular">{team.price}</span>
              <small>{team.per}</small>
            </p>
            <p className="plan-sub">{team.sub}</p>
          </header>
          {compact ? null : <Features items={team.features} lead={team.lead} locale={locale} />}
          <Link className="btn btn-ghost" href={localePath(locale, '/contact?intent=team')} data-funnel={funnel.teamContact}>
            {team.cta}
          </Link>
        </article>
      </div>
      <p className="plans-note">{billingNote}</p>
    </>
  );
}
