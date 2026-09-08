import type { Metadata } from 'next';
import { DocsSearch } from '@/components/docs-search';
export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Technical documentation for Taksim installation, clients, governance, verification, privacy, and CLI use.',
};
export default function Docs() {
  return (
    <main>
      <section className="page-hero docs-hero">
        <div className="shell">
          <p className="eyebrow">Documentation</p>
          <h1>Taksim Documentation</h1>
          <p>
            Technical, direct, and explicit about what the product can observe,
            govern, and verify today.
          </p>
        </div>
      </section>
      <section className="content-section">
        <DocsSearch />
      </section>
      <section className="section section-white" id="clients">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Last verified · 8 Sep 2026</p>
              <h2>Client compatibility</h2>
            </div>
            <p>
              Support depth is stated per client. Unknown resource or provider
              identity remains unknown.
            </p>
          </div>
          <div className="compat-table-wrap">
            <table className="compat-table">
              <caption>Client compatibility</caption>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>History</th>
                  <th>Managed/live</th>
                  <th>Important boundary</th>
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
                  <td>Observed</td>
                  <td>Native model selection in v0</td>
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
        </div>
      </section>
      <section className="section" id="concepts">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Core concept</p>
            <h2>
              Taksim Auto, Native Auto, and delegation are different
              authorities.
            </h2>
          </div>
          <div className="authority-stack">
            <div>
              <strong>Native Auto</strong>
              <p>The provider or runtime owns internal selection.</p>
            </div>
            <div>
              <strong>Taksim Auto</strong>
              <p>
                Taksim owns the organisational resource decision where it has
                authority.
              </p>
            </div>
            <div>
              <strong>Delegated runtime</strong>
              <p>
                Taksim owns the policy envelope; the approved runtime owns its
                internal request-level plan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
