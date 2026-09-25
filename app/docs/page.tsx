import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { DocsSearch } from '@/components/docs-search';

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Technical documentation for Taksim: priced sessions, judging, subscriptions and API keys, clients, and privacy.',
};

export default function Docs() {
  return (
    <div className="docs-page-grid">
      <article className="docs-article">
        <header className="docs-article-header">
          <span>Introduction</span>
          <h1>Welcome to Taksim</h1>
          <p>
            A local-first sufficiency ledger for AI coding: which model ran,
            what it cost, and whether a cheaper model would have been enough.
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
            Taksim reads the local history and hooks your coding clients
            already write, prices each session by model, and records it in a
            local ledger. It stores metadata only: no prompts, responses,
            code, paths or credentials.
          </p>
          <div className="docs-callout">
            <strong>Observe first</strong>
            <p>
              By default Taksim records and judges. It does not change which
              model runs. Live routing is optional and limited to traffic
              billed to your own API key.
            </p>
          </div>
        </section>
        <section id="judging">
          <h2>Judging and consensus</h2>
          <div className="docs-definition-list">
            <div>
              <h3>Judge</h3>
              <p>
                An LLM judge grades a completed turn and names the cheapest
                tier that would have passed: in-session Claude, your Anthropic
                API key, TypeSafe Jev with your own key, or a local Ollama
                model.
              </p>
            </div>
            <div>
              <h3>Consensus</h3>
              <p>
                A verdict counts only when two judges agree and at least one of
                them is a strong judge. Weak-only agreement and disputes are
                reported but never counted.
              </p>
            </div>
            <div>
              <h3>Shadow policy</h3>
              <p>
                Taksim can suggest routing defaults from consensus verdicts and
                report what they would have changed. The shadow policy stays
                counterfactual; it never changes your model.
              </p>
            </div>
          </div>
        </section>
        <section id="connector">
          <h2>Local gateway, fail-open by design</h2>
          <p>
            Optional live routing for API-key traffic uses a local gateway on
            127.0.0.1. Telemetry, persistence,
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
            Pro, Team or Enterprise), Taksim does not rewrite the model and
            never sits between Claude Code and the subscription account. It records what it would
            have chosen and reports a cost/quota comparison against your
            actual usage. Model rewrite only applies to API-key traffic, and
            only if you turn routing on. The same applies to Codex on a
            ChatGPT plan.
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
          <p className="docs-updated">Last verified · 10 September 2026</p>
          <div className="compat-table-wrap">
            <table className="compat-table">
              <caption>Client compatibility</caption>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>History</th>
                  <th>Live routing</th>
                  <th>Boundary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Claude Code</th>
                  <td>Available</td>
                  <td>API key only, optional</td>
                  <td>Subscription traffic is observed, never rewritten</td>
                </tr>
                <tr>
                  <th>Codex</th>
                  <td>Available</td>
                  <td>API key only, optional</td>
                  <td>Responses gateway; native model selection in v0</td>
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
        <Link href="#judging">Judging and consensus</Link>
        <Link href="#connector">Local gateway</Link>
        <Link href="#subscriptions-and-api-keys">Subscriptions &amp; API keys</Link>
        <Link href="#verification">Verification</Link>
        <Link href="#client-compatibility">Client compatibility</Link>
      </aside>
    </div>
  );
}
