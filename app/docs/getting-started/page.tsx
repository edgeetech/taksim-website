'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
    <div className="docs-page-grid">
      <article className="docs-article">
        <header className="docs-article-header">
          <span>Quickstart</span>
          <h1>Get started</h1>
          <p>
            Choose how you will use Taksim, then follow the path for your coding
            agent.
          </p>
        </header>
        <section id="eligibility">
          <h2>1. Choose your use</h2>
          <div className="docs-choice-list">
            <button type="button" onClick={() => setPersonal(true)}>
              <span>
                <strong>Personal or independent side project</strong>
                <small>Continue with Solo — Free</small>
              </span>
              <ArrowRight size={17} />
            </button>
            <Link href="/contact?intent=team">
              <span>
                <strong>Work for my company or a client</strong>
                <small>Explore Team</small>
              </span>
              <ArrowRight size={17} />
            </Link>
          </div>
          <p className="docs-note">
            Solo is for personal and independent use only. Employer, client,
            consultancy, and organisational work requires Team.
          </p>
        </section>
        <section id="install">
          <h2>2. Install Taksim on Windows</h2>
          <p>
            Download the installer from the verified{' '}
            <a
              href="https://github.com/edgeetech/taksim-releases/releases/tag/v0.1.0"
              rel="noreferrer"
              target="_blank"
            >
              Taksim v0.1.0 release
            </a>{' '}
            and run it from PowerShell.
          </p>
          <pre>
            <code>{`Invoke-WebRequest -Uri 'https://github.com/edgeetech/taksim-releases/releases/download/v0.1.0/install-release.ps1' -OutFile '.\\install-release.ps1'
.\\install-release.ps1 -Repository edgeetech/taksim-releases -Version 0.1.0
taksim version
taksim doctor
taksim install status`}</code>
          </pre>
          <p className="docs-note">
            The installer checks the release archive against its published
            SHA-256 entry before switching versions. See the public{' '}
            <a
              href="https://github.com/edgeetech/taksim-releases/blob/main/INSTALLATION.md"
              rel="noreferrer"
              target="_blank"
            >
              installation and data-storage details
            </a>
            .
          </p>
        </section>
        <section id="client">
          <h2>3. Choose your client</h2>
          {!personal && (
            <p className="docs-muted">
              Select the Solo path above to reveal the commands.
            </p>
          )}
          {personal && (
            <div className="docs-command-list" aria-live="polite">
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
        </section>
        <section id="verify">
          <h2>4. Verify the session</h2>
          <p>
            Review the observed execution, applied policy, economics, and
            available verification evidence before treating an outcome as
            verified.
          </p>
        </section>
      </article>
      <aside className="docs-toc" aria-label="On this page">
        <strong>On this page</strong>
        <Link href="#eligibility">Choose your use</Link>
        <Link href="#install">Install Taksim</Link>
        <Link href="#client">Choose your client</Link>
        <Link href="#verify">Verify the session</Link>
      </aside>
    </div>
  );
}
