import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { SavingsCalculator } from '@/components/calculator';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Free Solo use for personal and independent projects. Custom Team pricing for company and client work.',
};
const solo = [
  'Personal and independent use',
  'Supported-client history import',
  'Managed sessions where supported',
  'Shadow recommendations',
  'Evidence-dependent verification',
  'Personal session and economics visibility',
];
const team = [
  'Company and repository policy',
  'Cross-developer visibility',
  'Shared and private resources',
  'Quality and budget controls',
  'Selection and delegation governance',
  'Organisation-level economics and reporting',
];
const faq = [
  [
    'Who can use Solo?',
    'Individuals using Taksim for personal projects, learning, personal open source, or independently owned side projects.',
  ],
  [
    'Can one developer use Solo for employer or client work?',
    'No. Eligibility follows whose behalf the work is performed on, not team size. Company, employer, consultancy, and client work requires Team.',
  ],
  [
    'Does Taksim always choose a cheaper model?',
    'No. Capability, policy, privacy, and the required quality bar constrain every decision before economics.',
  ],
  [
    'What does VERIFIED mean?',
    'The configured and available engineering evidence satisfied the applicable verification rules. It is not a guarantee that code is correct, secure, or complete.',
  ],
  [
    'Are the calculator savings guaranteed?',
    'No. They are an illustrative scenario, not an analysis of your workload or a promise of realised savings.',
  ],
];
export default function Pricing() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Solo + Team</p>
          <h1>Simple pricing.</h1>
          <p>
            Start free for personal and independent projects. Talk to us when
            Taksim becomes part of company or client work.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="shell">
          <div className="price-grid full-pricing">
            <article className="price-card">
              <p className="eyebrow">Solo</p>
              <strong className="price">Free</strong>
              <p>For personal use and independent side projects.</p>
              <ul>
                {solo.map((x) => (
                  <li key={x}>
                    <Check size={15} />
                    {x}
                  </li>
                ))}
              </ul>
              <Link className="button" href="/docs/getting-started">
                Get Taksim Free
              </Link>
              <small>
                Not for work performed on behalf of an employer, client, or
                organisation.
              </small>
            </article>
            <article className="price-card featured">
              <p className="eyebrow">Team</p>
              <strong className="price">Custom</strong>
              <p>
                For work performed on behalf of a company, client, or
                organisation.
              </p>
              <ul>
                {team.map((x) => (
                  <li key={x}>
                    <Check size={15} />
                    {x}
                  </li>
                ))}
              </ul>
              <Link className="button purple-button" href="/contact">
                Talk to us
              </Link>
              <small>
                One developer doing organisational work still requires Team.
              </small>
            </article>
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="shell">
          <div className="section-heading centered">
            <p className="eyebrow">Explore the opportunity</p>
            <h2>
              How much of your AI engineering spend could be better allocated?
            </h2>
            <p>
              Explore an illustrative range while preserving the quality
              requirement.
            </p>
          </div>
          <SavingsCalculator />
        </div>
      </section>
      <section className="section">
        <div className="shell narrow">
          <div className="section-heading">
            <p className="eyebrow">Questions</p>
            <h2>Pricing FAQ</h2>
          </div>
          <div className="faq-list">
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
