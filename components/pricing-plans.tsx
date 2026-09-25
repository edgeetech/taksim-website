import Link from 'next/link';
import { Check } from 'lucide-react';

const developer = [
  'History import for Claude Code, Codex and Copilot',
  'Priced sessions, model mix and cache efficiency',
  'Turn-by-turn judging with your choice of judge (in-session Claude, Ollama, your own API key)',
  'Weekly report and status line',
  'Live routing for API-key traffic',
];

const team = [
  'Team roll-up from developer exports, no hosted service required',
  'Weekly savings digest for the team lead',
  'Cost by repo and task, for chargeback or client rebilling',
  'Budgets and alerts by developer, repo and team',
  'Team-level aggregation by default; per-developer views only with each developer’s consent',
];

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

export function PricingPlans() {
  return (
    <>
      <div className="plans">
        <article className="plan" aria-labelledby="plan-developer">
          <header>
            <h3 id="plan-developer">Developer</h3>
            <p className="plan-price">Free</p>
            <p className="plan-sub">Open source, for any individual, at home or at work.</p>
          </header>
          <Features items={developer} />
          <Link className="btn btn-ghost" href="/docs/getting-started">
            Install Taksim
          </Link>
        </article>
        <article className="plan plan-team" aria-labelledby="plan-team">
          <header>
            <h3 id="plan-team">Team</h3>
            <p className="plan-price">
              <span className="tabular">$8</span>
              <small>per active developer per month</small>
            </p>
            <p className="plan-sub">$99 per month minimum. 20% off with annual billing.</p>
          </header>
          <Features items={team} />
          <Link className="btn btn-primary" href="/contact?intent=team">
            Start a team pilot
          </Link>
        </article>
      </div>
      <p className="plans-note">
        <strong>Not sure yet?</strong> Book a $750 baseline readout. We run Taksim with your team lead, present the
        results in 30 minutes, and credit the fee against your first year.{' '}
        <Link className="text-link" href="/contact?intent=team">
          Book a readout
        </Link>
      </p>
    </>
  );
}
