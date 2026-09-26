import Link from 'next/link';
import { Check } from 'lucide-react';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';

function Features({ items }: { items: string[] }) {
  return (
    <ul className="plan-features">
      {items.map((item) => (
        <li key={item}>
          <Check size={16} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PricingPlans({ locale }: { locale: Locale }) {
  const { developer, team } = getDictionary(locale).plans;
  return (
    <div className="plans">
      <article className="plan" aria-labelledby="plan-developer">
        <header>
          <h3 id="plan-developer">{developer.name}</h3>
          <p className="plan-price">{developer.price}</p>
          <p className="plan-sub">{developer.sub}</p>
        </header>
        <Features items={developer.features} />
        <Link className="btn btn-ghost" href={localePath(locale, '/docs/getting-started')}>
          {developer.cta}
        </Link>
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
        <Features items={team.features} />
        <Link className="btn btn-primary" href={localePath(locale, '/contact?intent=team')}>
          {team.cta}
        </Link>
      </article>
    </div>
  );
}
