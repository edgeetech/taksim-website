import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { DocsSearch } from '@/components/docs-search';
import { historyImportAvailability, historyImportOnlyClients } from '@/lib/history-import-clients';

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Technical documentation for Taksim governance, delegation, verification, clients, and privacy.',
};

export default function Docs() {
  return (
    <div className="docs-page-grid">
      <article className="docs-article">
        <header className="docs-article-header">
          <span>Introduction</span>
          <h1>Welcome to Taksim</h1>
          <p>
            The organisational intelligence control plane for coding agents.
            Govern access, delegate within policy, and verify outcomes with
            evidence.
          </p>
        </header>
        <DocsSearch />
        <div className="docs-callout">
          <strong>Sign-in is optional and off by default</strong>
          <p>Install Taksim and run <code>taksim claude</code> or <code>taksim codex</code> without an account. Hosted sign-in only applies when an operator sets <code>Identity__Enabled=true</code>. See the <Link href="/docs/sign-in">optional sign-in guide</Link>.</p>
        </div>
        <section id="how-taksim-works">
          <h2>How Taksim works</h2>
          <p>
            Taksim sits above the coding agents and intelligence resources your
            engineering organisation already uses. It does not replace the
            internal request-level planning of provider-native runtimes.
          </p>
          <div className="docs-callout">
            <strong>Policy envelope first</strong>
            <p>
              Capability, privacy, quality, and budget constraints determine
              which resources may be used before economics are considered.
            </p>
          </div>
        </section>
        <section id="governance">
          <h2>Three distinct authorities</h2>
          <div className="docs-definition-list">
            <div>
              <h3>Native Auto</h3>
              <p>The provider or runtime owns internal selection.</p>
            </div>
            <div>
              <h3>Taksim Auto</h3>
              <p>
                Taksim owns the organisational resource decision where it has
                authority.
              </p>
            </div>
            <div id="delegation">
              <h3>Delegated runtime</h3>
              <p>
                Taksim owns the policy envelope; the approved runtime owns its
                internal execution plan.
              </p>
            </div>
          </div>
        </section>
        <section id="connector">
          <h2>Local Connector, fail-open by design</h2>
          <p>
            Managed Claude Code and Codex sessions use a local Connector for
            policy decisions and evidence collection. Telemetry, persistence,
            and remote advice do not get to hold a healthy provider request
            hostage.
          </p>
          <div className="docs-callout">
            <strong>Native workflow stays available</strong>
            <p>
              If the managed path cannot start safely, Taksim preserves the
              native client invocation instead of blocking the developer. Raw
              prompt, response, and source content is not persisted by
              default, and nothing leaves the machine unless you opt in to
              hosted features.
            </p>
          </div>
        </section>
        <section id="subscriptions-and-api-keys">
          <h2>Subscriptions are observed, not rewritten</h2>
          <p>
            If Claude Code is authenticated with a Claude subscription (Max or
            Pro), Taksim does not rewrite the model. It records what it would
            have chosen and reports a cost/quota comparison against your
            actual usage. Model rewrite only applies to API-key traffic.
            Power users can opt in to subscription rewrite at their own risk
            with <code>TAKSIM_ALLOW_SUBSCRIPTION_REWRITE=1</code>.
          </p>
          <p>
            For subscription users, the value is quota visibility, a
            baseline report (<code>taksim report baseline</code>), and
            evidence of what Taksim would have chosen — not a savings
            promise.
          </p>
        </section>
        <section id="verification">
          <h2>Verification is evidence-dependent</h2>
          <p>
            A verified outcome means the configured and available engineering
            evidence satisfied the applicable rules. It is not a guarantee that
            code is correct, secure, or complete.
          </p>
        </section>
        <section id="client-compatibility">
          <h2>Client compatibility</h2>
          <p className="docs-updated">Last verified · 26 September 2026</p>
          <div className="compat-table-wrap">
            <table className="compat-table">
              <caption>Client compatibility</caption>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>History</th>
                  <th>Managed/live</th>
                  <th>Boundary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Claude Code</th>
                  <td>Available</td>
                  <td>Managed</td>
                  <td>Plain Claude remains independent</td>
                </tr>
                <tr>
                  <th>Codex</th>
                  <td>Available</td>
                  <td>Managed</td>
                  <td>Responses gateway; native model selection in v0</td>
                </tr>
                <tr>
                  <th>Devin</th>
                  <td>Available</td>
                  <td>Managed</td>
                  <td>Native Devin remains the client</td>
                </tr>
                <tr>
                  <th>GitHub Copilot</th>
                  <td>Available</td>
                  <td>Not available</td>
                  <td>Historical visibility only</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 id="history-import-only">History import only</h3>
          <p className="docs-updated">
            No managed launch (<code>taksim &lt;client&gt;</code>) and no live
            routing for these clients. {historyImportAvailability}
          </p>
          <div className="compat-table-wrap">
            <table className="compat-table">
              <caption>History import only</caption>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>History (--client)</th>
                  <th>Managed/live</th>
                  <th>Boundary</th>
                </tr>
              </thead>
              <tbody>
                {historyImportOnlyClients.map(({ name, flag, note }) => (
                  <tr key={name}>
                    <th>{name}</th>
                    <td>{flag}</td>
                    <td>Not available</td>
                    <td>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <footer className="docs-next">
          <CheckCircle2 size={20} />
          <div>
            <span>Next</span>
            <Link href="/docs/getting-started">
              Install Taksim <ArrowRight size={15} />
            </Link>
          </div>
        </footer>
      </article>
      <aside className="docs-toc" aria-label="On this page">
        <strong>On this page</strong>
        <Link href="#how-taksim-works">How Taksim works</Link>
        <Link href="#governance">Three authorities</Link>
        <Link href="#connector">Connector &amp; availability</Link>
        <Link href="#subscriptions-and-api-keys">Subscriptions &amp; API keys</Link>
        <Link href="#verification">Verification</Link>
        <Link href="#client-compatibility">Client compatibility</Link>
      </aside>
    </div>
  );
}
