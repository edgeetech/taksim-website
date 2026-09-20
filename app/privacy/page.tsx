import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'How Taksim processes engineering metadata while avoiding raw engineering content in canonical telemetry.',
};
export default function Privacy() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Privacy</p>
          <h1>Prompt-aware. Not prompt-owning.</h1>
          <p>
            Taksim is designed to derive the intelligence metadata it needs
            without retaining raw engineering content in canonical telemetry.
          </p>
        </div>
      </section>
      <section className="content-section">
        <article className="shell narrow prose">
          <p className="notice">
            <strong>Plain-language summary.</strong> Taksim may inspect limited
            content transiently to derive classifications. That is different
            from retaining prompts, responses, source code, or diffs in its
            canonical telemetry.
          </p>
          <h2>What canonical telemetry may contain</h2>
          <p>
            Structural task and session metadata, resource/model attribution
            when observable, token and latency signals when observable,
            verification outcomes, finite evidence classifications, and opaque
            identifiers needed to correlate events.
          </p>
          <h2>What canonical telemetry is designed not to retain</h2>
          <p>
            Raw prompts, model responses, source code, diffs, credentials,
            secrets, raw tool payloads, shell-command content, or invented
            provider identity.
          </p>
          <h2>Local and transient processing</h2>
          <p>
            Taksim runs locally by default. There is no default hosted
            routing-advice service, and nothing leaves the machine unless you
            explicitly opt in to a hosted Taksim feature. This is a claim
            about Taksim&rsquo;s own telemetry and hosted services, not about
            the native AI client you run through it: if you sign in to
            Claude Code, Codex, or another provider-native client, that
            client still sends prompts and responses to its own provider
            under that provider&rsquo;s terms, independent of Taksim. Some
            adapters may inspect native client data or request content
            transiently to derive content-blind classifications and
            structural facts. Product documentation for each client
            describes its exact boundary. Where an observed provider or
            model cannot be established, Taksim records it as unknown.
          </p>
          <h2>Website data</h2>
          <p>
            This preview does not load a third-party analytics tracker. The
            assessment form opens your email application and does not submit its
            values to a website form processor. Hosting and security
            infrastructure may still process standard request information such
            as IP address, user agent, requested path, and timestamps.
          </p>
          <h2>Contact</h2>
          <p>
            If you email <a href="mailto:info@edgee.tech">info@edgee.tech</a>,
            EdgeeTech uses the information you provide to respond to your
            request and maintain relevant business records.
          </p>
          <h2>Service improvement, retention, and subprocessors</h2>
          <p>
            The production notice will document the exact deployed product mode,
            purposes, legal bases, retention periods, subprocessors,
            international transfers, and user rights before public launch. No
            production analytics or new form processor should be enabled without
            updating this notice.
          </p>
          <h2>Important review status</h2>
          <p>
            This preview privacy notice describes the implemented preview
            behavior and product architecture. It must complete legal review
            before public production launch.
          </p>
          <p>
            <strong>Effective:</strong> 8 September 2026.
          </p>
        </article>
      </section>
    </main>
  );
}
