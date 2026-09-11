import Link from 'next/link';

const installerCommand = `Invoke-WebRequest \`
  -Uri 'https://github.com/edgeetech/taksim-releases/releases/download/v0.1.1/install-release.ps1' \`
  -OutFile '.\\install-release.ps1'

.\\install-release.ps1 \`
  -Repository edgeetech/taksim-releases \`
  -Version 0.1.1`;

const verificationCommand = `taksim version
taksim doctor
taksim install status`;

export default function GettingStarted() {
  return (
    <div className="docs-page-grid">
      <article className="docs-article">
        <header className="docs-article-header">
          <span>Quickstart</span>
          <h1>Install Taksim</h1>
          <p>
            Set up Taksim on Windows, check the local installation, and start
            your first managed Claude Code or Codex session without leaving the
            documentation.
          </p>
        </header>

        <section id="eligibility">
          <h2>1. Confirm your plan</h2>
          <p>
            Solo is free for personal use and independent side projects. Work
            performed for an employer, client, consultancy, or organisation
            requires Team.
          </p>
          <div className="docs-choice-list">
            <Link href="#prerequisites">
              <span>
                <strong>Personal or independent side project</strong>
                <small>Continue with Solo — Free</small>
              </span>
            </Link>
            <Link href="/contact?intent=team">
              <span>
                <strong>Work for my company or a client</strong>
                <small>Talk to us about Team</small>
              </span>
            </Link>
          </div>
        </section>

        <section id="prerequisites">
          <h2>2. Check the prerequisites</h2>
          <p>
            You need a Windows computer, PowerShell, and one signed-in coding
            client. Install and sign in to either{' '}
            <a
              href="https://docs.anthropic.com/en/docs/claude-code/overview"
              rel="noreferrer"
              target="_blank"
            >
              Claude Code
            </a>{' '}
            or{' '}
            <a
              href="https://developers.openai.com/codex/cli/"
              rel="noreferrer"
              target="_blank"
            >
              Codex
            </a>
            . You only need one; choose it later in this guide.
          </p>
        </section>

        <section id="install">
          <h2>3. Download and install</h2>
          <p>
            Open PowerShell in a folder where you are happy to keep the
            temporary installer file, then run both commands below. The
            installer downloads the selected release over HTTPS, checks its
            published SHA-256 checksum, validates the binary, and only then
            switches the local installation to that version.
          </p>
          <div className="docs-command-list">
            <pre>
              <code>{installerCommand}</code>
            </pre>
          </div>
          <p className="docs-note">
            Taksim keeps its versioned binaries under{' '}
            <code>%LOCALAPPDATA%\Taksim</code> and its separate user data under{' '}
            <code>%USERPROFILE%\.taksim</code>. Installing an updated version
            does not replace that user-data directory.
          </p>
        </section>

        <section id="verify-install">
          <h2>4. Verify the installation</h2>
          <p>
            Open a new PowerShell terminal so Windows can pick up the Taksim
            command, then run:
          </p>
          <div className="docs-command-list">
            <pre>
              <code>{verificationCommand}</code>
            </pre>
          </div>
          <p>
            All three commands should complete successfully. <code>doctor</code>{' '}
            checks the local environment; <code>install status</code> shows the
            installed version and path.
          </p>
        </section>

        <section id="start-session">
          <h2>5. Start your first session</h2>
          <p>
            Run one command for the coding client you installed. Do not run both
            commands. Any arguments intended for your native client can continue
            after the selected command.
          </p>
          <div className="docs-command-list">
            <details open>
              <summary>Claude Code</summary>
              <pre>
                <code>taksim claude</code>
              </pre>
            </details>
            <details>
              <summary>Codex</summary>
              <pre>
                <code>taksim codex</code>
              </pre>
            </details>
          </div>
          <div className="docs-callout">
            <strong>What to expect</strong>
            <p>
              Taksim prepares its local Connector, then opens your selected
              native client. Taksim should show as active with the selected
              resource or model. If the local Taksim path is unavailable, the
              client fails open to its native behaviour. Taksim does not send
              raw prompts, source code, or client replies to Taksim
              Intelligence.
            </p>
          </div>
        </section>

        <section id="verify-session">
          <h2>6. Inspect the latest session</h2>
          <p>
            After completing a managed task, inspect the verification evidence
            Taksim recorded for the latest observed request:
          </p>
          <div className="docs-command-list">
            <pre>
              <code>taksim verification explain-latest</code>
            </pre>
          </div>
          <p>
            The explanation keeps missing or incomplete evidence explicit; a
            successful provider response is not presented as proof by itself.
          </p>
        </section>

        <section id="import-history">
          <h2>Optional: import existing history</h2>
          <p>
            History import is not required for your first managed session. If
            you already use one of the supported clients, import its local
            history when you are ready:
          </p>
          <div className="docs-command-list">
            <details open>
              <summary>Claude Code</summary>
              <pre>
                <code>taksim history import</code>
              </pre>
            </details>
            <details>
              <summary>Codex</summary>
              <pre>
                <code>taksim history import --client codex</code>
              </pre>
            </details>
            <details>
              <summary>Devin</summary>
              <pre>
                <code>taksim history import --client devin</code>
              </pre>
            </details>
            <details>
              <summary>GitHub Copilot</summary>
              <pre>
                <code>taksim history import --client github_copilot</code>
              </pre>
            </details>
          </div>
        </section>

        <section id="troubleshooting">
          <h2>Troubleshooting</h2>
          <div className="docs-command-list">
            <details>
              <summary>
                PowerShell cannot find <code>taksim</code>
              </summary>
              <p>
                Close PowerShell, open a new terminal, and run{' '}
                <code>taksim version</code> again. If it is still unavailable,
                rerun the installer and then use <code>taksim doctor</code> to
                inspect the local setup.
              </p>
            </details>
            <details>
              <summary>Claude Code or Codex cannot be found</summary>
              <p>
                Install the one client you selected using its official guide
                above, sign in to that client, open a new PowerShell terminal,
                and rerun the matching <code>taksim claude</code> or{' '}
                <code>taksim codex</code> command.
              </p>
            </details>
            <details>
              <summary>The installer script is blocked</summary>
              <p>
                Do not lower your global execution-policy setting. For the
                current PowerShell session only, run{' '}
                <code>
                  Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
                </code>
                , then rerun the installer command above.
              </p>
            </details>
            <details>
              <summary>
                <code>taksim doctor</code> reports an error
              </summary>
              <p>
                Read the reported check, make the indicated local correction,
                and rerun <code>taksim doctor</code>. If the issue remains,
                include that output when you{' '}
                <a href="mailto:info@edgee.tech?subject=Taksim%20support">
                  contact support
                </a>
                .
              </p>
            </details>
          </div>
        </section>
      </article>
      <aside className="docs-toc" aria-label="On this page">
        <strong>On this page</strong>
        <Link href="#eligibility">Confirm your plan</Link>
        <Link href="#prerequisites">Prerequisites</Link>
        <Link href="#install">Download and install</Link>
        <Link href="#verify-install">Verify installation</Link>
        <Link href="#start-session">Start a session</Link>
        <Link href="#verify-session">Inspect latest session</Link>
        <Link href="#import-history">Import history</Link>
        <Link href="#troubleshooting">Troubleshooting</Link>
      </aside>
    </div>
  );
}
