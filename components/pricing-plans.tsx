import Link from 'next/link';
import { Check } from 'lucide-react';
import { Rich } from '@/components/rich';
import { funnel } from '@/lib/funnel';
import { getDictionary, localePath, type Dictionary, type Locale } from '@/lib/i18n';
import { launch, waitlistHref, type PaidPlan } from '@/lib/launch';

function Features({ items, locale }: { items: string[]; locale: Locale }) {
  return (
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
  );
}

// The buy button points at the configured checkout URL. Without one, the plan shows "Coming soon"
// and a mailto waitlist link instead of a dead button.
function Buy({ plan, t, primary }: { plan: PaidPlan; t: Dictionary['plans']; primary: boolean }) {
  const url = launch.checkout[plan];
  if (url) {
    return (
      <a className={`btn ${primary ? 'btn-primary' : 'btn-ghost'}`} href={url} rel="noopener">
        {t.buy[plan]}
      </a>
    );
  }
  return (
    <div className="plan-soon">
      <span className="plan-soon-label">{t.soon}</span>
      <a className="text-link" href={waitlistHref(plan)}>
        {t.waitlist}
      </a>
    </div>
  );
}

export function PricingPlans({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const t = getDictionary(locale).plans;
  const { developer, pro, team } = t;
  return (
    <>
      <div className="plans">
        <article className="plan" aria-labelledby="plan-developer">
          <header>
            <h3 id="plan-developer">{developer.name}</h3>
            <p className="plan-price tabular">{developer.price}</p>
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
            <p className="plan-sub">{pro.sub}</p>
          </header>
          {compact ? null : <Features items={pro.features} locale={locale} />}
          <Buy plan="pro" t={t} primary />
        </article>
        <article className="plan plan-team" aria-labelledby="plan-team">
          <header>
            <h3 id="plan-team">{team.name}</h3>
            <p className="plan-price">
              <span className="tabular">{team.price}</span>
              <small>{team.per}</small>
            </p>
            <p className="plan-sub">{team.sub}</p>
          </header>
          {compact ? null : <Features items={team.features} locale={locale} />}
          <Buy plan="team" t={t} primary={false} />
          <Link className="text-link plan-talk" href={localePath(locale, '/contact?intent=team')} data-funnel={funnel.teamContact}>
            {team.talk}
          </Link>
        </article>
      </div>
      <p className="plans-note">
        <strong>{t.launch}</strong>
        {compact ? null : <> {t.payment}</>}
      </p>
    </>
  );
}
