import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
export const metadata: Metadata = {
  title: 'Talk to Taksim — Team Assessment',
  description:
    'Tell EdgeeTech about your AI engineering usage and explore whether Taksim Team is a good fit.',
};
export default function Contact() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Team assessment</p>
          <h1>Turn AI engineering spend into a governed company resource.</h1>
          <p>
            Tell us about your current usage and constraints. We’ll discuss
            whether Taksim is a good fit.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="shell contact-layout">
          <ContactForm />
          <aside>
            <p className="eyebrow">What happens next</p>
            <ol>
              <li>
                <span>01</span>
                <strong>Usage and constraints</strong>
              </li>
              <li>
                <span>02</span>
                <strong>Opportunity review</strong>
              </li>
              <li>
                <span>03</span>
                <strong>Pilot discussion</strong>
              </li>
              <li>
                <span>04</span>
                <strong>Team deployment, if suitable</strong>
              </li>
            </ol>
            <p>
              Do not send prompts, source code, diffs, credentials, provider
              keys, or raw session exports.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
