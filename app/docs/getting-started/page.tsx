'use client';
import Link from 'next/link';
import { useState } from 'react';
const commands = {
  Claude: [
    'taksim history import',
    'taksim claude',
    'taksim verification explain-latest',
  ],
  Codex: ['taksim history import --client codex', 'taksim codex'],
  Devin: ['taksim history import --client devin', 'taksim devin'],
  Copilot: ['taksim history import --client github_copilot'],
};
export default function GettingStarted() {
  const [personal, setPersonal] = useState(false);
  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Getting started</p>
          <h1>Get Taksim</h1>
          <p>
            Choose how you will use Taksim, then follow the client-specific
            path.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="shell narrow">
          <div className="intent-card">
            <h2>How will you use Taksim?</h2>
            <div className="intent-grid">
              <button type="button" onClick={() => setPersonal(true)}>
                <strong>Personal or independent side project</strong>
                <span>Continue with Solo — Free</span>
              </button>
              <Link href="/contact?intent=team">
                <strong>Work for my company or a client</strong>
                <span>Explore Team</span>
              </Link>
            </div>
          </div>
          {personal && (
            <div className="quickstart" aria-live="polite">
              <p className="notice">
                Solo is for personal and independent use only. Employer, client,
                consultancy, and organisational work requires Team.
              </p>
              <h2>Choose your client</h2>
              {Object.entries(commands).map(([client, items]) => (
                <details key={client} open={client === 'Claude'}>
                  <summary>{client}</summary>
                  <pre>
                    <code>{items.join('\n')}</code>
                  </pre>
                  {client === 'Copilot' && (
                    <p>
                      Managed launch is not currently supported for GitHub
                      Copilot Coding Agent.
                    </p>
                  )}
                </details>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
