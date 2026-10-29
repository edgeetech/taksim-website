// English only for now; locale routes show UntranslatedNote above it.
import { ContactForm } from '@/components/contact-form';
import type { Locale } from '@/lib/i18n';
export function ContactPage({ locale }: { locale: Locale }) {
  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Founding seats and team pilots</p>
          <h1>Reserve a seat, start a pilot, or ask a question.</h1>
          <p>
            Paid plans are not on sale yet. Reserve a Pro founding seat or
            start a Team pilot and we will contact you when billing opens;
            reserving costs nothing.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="shell contact-layout">
          <ContactForm locale={locale} />
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
