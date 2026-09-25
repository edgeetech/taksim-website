import Link from 'next/link';

export default function SignInGuide() {
  return (
    <div className="docs-page-grid">
      <article className="docs-article">
        <header className="docs-article-header">
          <span>Identity · Optional</span>
          <h1>Optional sign-in for hosted features</h1>
          <p>Taksim runs fully offline with no account by default. Sign-in only matters when an operator turns on hosted features.</p>
        </header>
        <section id="availability">
          <h2>Availability</h2>
          <p>By default, <code>taksim claude</code> and <code>taksim codex</code> start immediately with no account and no sign-in step. Hosted sign-in is disabled until an operator sets <code>Identity__Enabled=true</code> and configures <code>Identity__VerificationOrigin</code> with the trusted HTTPS identity service. Do not use someone else’s localhost address or share OAuth secrets in support messages.</p>
          <p>This opt-in sign-in flow is a source/development-build capability. The public installer currently distributes v0.1.1, which predates it, so the packaged installer does not yet include hosted sign-in. A new packaged release is required before general availability.</p>
          <p>For the default, account-free flow, follow the <Link href="/docs/getting-started">Windows installation guide</Link>. The rest of this page describes what happens once an operator opts in from a source/development build.</p>
        </section>
        <section id="first-session">
          <h2>Your first session when sign-in is enabled</h2>
          <ol>
            <li>Open an interactive terminal and run <code>taksim codex</code> or <code>taksim claude</code>. You do not need to run a separate login command first.</li>
            <li>Follow the browser link shown in the terminal and sign in with Google or GitHub.</li>
            <li>Check the terminal code and approve the device only if you started this login.</li>
            <li>When the success screen appears, close that tab and return to the terminal. Progress messages show that Taksim is finishing sign-in; your original command resumes automatically.</li>
          </ol>
          <p>Taksim account access is separate from your coding provider’s sign-in and subscription.</p>
        </section>
        <section id="remembered-access">
          <h2>Remembered access</h2>
          <p>The following applies only when an operator has enabled sign-in with <code>Identity__Enabled=true</code>.</p>
          <p>Windows Credential Manager stores the device credential. Subsequent commands reuse it while it is valid and verify it with the identity service. There is no plaintext credential fallback.</p>
          <p>The current credential lifetime is up to 24 hours; automatic refresh is not implemented. Expiration or revocation requires sign-in again. Run <code>taksim logout</code> to remove the local credential and request server revocation.</p>
          <p>If the service cannot verify access, the command does not start. Help, version, login and logout remain accessible. Noninteractive commands do not open a browser: sign in from an interactive terminal first. Credential storage currently supports Windows.</p>
        </section>
        <section id="model-display">
          <h2>Understanding the model display</h2>
          <p>In Auto mode, Taksim passes its initial model selection to Codex so the startup displays agree. An explicit model argument keeps your manual selection.</p>
          <p>During execution, <code>Taksim · Auto request</code> describes the model selected for that request. Routing can change it as the work requires; the native client’s startup model is not a record of every later request.</p>
        </section>
        <section id="troubleshooting">
          <h2>If sign-in cannot be verified</h2>
          <p>Check that the configured HTTPS identity service is reachable and its certificate is trusted, then check Windows Credential Manager access. An outage does not erase a potentially valid credential. Retry when the service is available.</p>
          <p>Terminal animations appear where supported; redirected output uses plain progress messages. Structured command output remains separate from progress messages.</p>
        </section>
      </article>
      <aside className="docs-toc" aria-label="On this page">
        <strong>On this page</strong>
        <Link href="#availability">Availability</Link>
        <Link href="#first-session">First session</Link>
        <Link href="#remembered-access">Remembered access</Link>
        <Link href="#model-display">Model display</Link>
        <Link href="#troubleshooting">Troubleshooting</Link>
      </aside>
    </div>
  );
}
