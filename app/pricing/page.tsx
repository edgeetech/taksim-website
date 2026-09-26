import type { Metadata } from 'next';
import { PricingPlans } from '@/components/pricing-plans';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'The Taksim CLI is free for any individual developer, at home or at work. Team: $8 per active developer per month, $99 minimum.',
};

const faq = [
  [
    'Can I use the free version at work?',
    'Yes. The CLI is free for any individual. Team features are what companies pay for.',
  ],
  [
    'Does Taksim change my model on a Claude or ChatGPT subscription?',
    'No. Subscription traffic is observed from local history and hooks. Model changes happen only on traffic billed to your own API key, and only in sessions you launch with taksim claude or taksim codex.',
  ],
  [
    'Is the “could have saved” number guaranteed?',
    'No. It is an estimate: it counts turns where two judges agreed a cheaper tier was sufficient, and every report shows the sample size.',
  ],
  [
    'Does anything leave my machine?',
    'Not unless you choose a judge that runs remotely (your own API key or Jev) or share a team export. Exports contain metadata only.',
  ],
];

export default function Pricing() {
  return (
    <main className="home">
      <section className="band page-lead" aria-labelledby="pricing-title">
        <div className="shell">
          <div className="section-lead">
            <h1 id="pricing-title">Free for developers. Paid for teams.</h1>
            <p className="hero-lede">
              The CLI is free for any individual, at home or at work. Companies pay for the team roll-up.
            </p>
          </div>
          <PricingPlans />
        </div>
      </section>
      <section className="band faq" aria-labelledby="pricing-faq-title">
        <div className="shell faq-layout">
          <h2 id="pricing-faq-title">Pricing questions</h2>
          <div className="faq-items">
            {faq.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
