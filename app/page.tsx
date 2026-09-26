import Link from 'next/link';
import {
  ArrowRight,
  Check,
  ChevronRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { historyImportAvailability, historyImportOnlyClients } from '@/lib/history-import-clients';

const clients = [
  ['Claude Code', 'Managed + history'],
  ['Codex', 'Managed + history'],
  ['Devin', 'Managed + history'],
  ['GitHub Copilot', 'History visibility'],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={14} /> Intelligence Control Plane for coding
              agents
            </p>
            <h1>
              Frontier intelligence,{' '}
              <span>only when the work requires it.</span>
            </h1>
            <p className="hero-lede">
              Keep using the coding agents you already use. Taksim governs
              engineering intelligence across local, private, and cloud
              resources, keeps the quality bar, verifies outcomes with
              engineering evidence, and uses stronger intelligence only when
              necessary.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/docs/getting-started">
                Get Taksim Free <ArrowRight size={17} />
              </Link>
              <Link className="button button-secondary" href="/contact">
                Talk to us
              </Link>
            </div>
            <div className="eligibility">
              <Check size={16} />
              <span>
                Free for personal and independent side projects.{' '}
                <strong>Company or client work requires Team.</strong>
              </span>
            </div>
          </div>
          <div
            className="control-visual"
            aria-label="Taksim connects coding clients to governed intelligence and verified outcomes"
          >
            <div className="client-row">
              {clients.map(([name, status]) => (
                <div className="client-chip" key={name}>
                  <strong>{name}</strong>
                  <span>{status}</span>
                </div>
              ))}
            </div>
            <div className="visual-line" aria-hidden="true" />
            <div className="taksim-core">
              <div className="core-heading">
                <strong>TAKSIM</strong>
                <em>Control plane</em>
              </div>
              <div className="core-policies">
                <span>Policy</span>
                <span>Quality</span>
                <span>Budget</span>
                <span>Privacy</span>
                <span>Evidence</span>
              </div>
            </div>
            <div className="visual-line" aria-hidden="true" />
            <div className="resource-row">
              <span>Local</span>
              <span>Private</span>
              <span>Cloud</span>
              <span>Native planners</span>
            </div>
            <div className="outcome">
              <ShieldCheck size={19} />
              <span>
                <small>Engineering outcome</small>
                <strong>Verified with evidence</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="action-preview">
        <div className="shell">
          <div className="section-heading centered">
            <p className="eyebrow">Taksim in action</p>
            <h2>One native workflow. A clearer engineering outcome.</h2>
          </div>
          <div className="demo-frame">
            <div className="terminal-card">
              <div className="terminal-bar">
                <span />
                <span />
                <span />
                <em>native session</em>
              </div>
              <div className="terminal-body">
                <p>
                  <span className="prompt">$</span> taksim claude
                </p>
                <p className="terminal-request">
                  › Fix the failing payment tests and simplify the retry logic.
                </p>
                <p className="terminal-muted">
                  Observing task and policy envelope…
                </p>
                <div className="terminal-check">
                  <Check size={15} /> Build passed
                </div>
                <div className="terminal-check">
                  <Check size={15} /> Tests passed
                </div>
              </div>
            </div>
            <div className="receipt-card">
              <div className="receipt-top">
                <span>SESSION RECEIPT</span>
                <strong>
                  VERIFIED <Check size={15} />
                </strong>
              </div>
              <dl>
                <div>
                  <dt>Policy scope</dt>
                  <dd>Allowed</dd>
                </div>
                <div>
                  <dt>Quality requirement</dt>
                  <dd>High</dd>
                </div>
                <div>
                  <dt>Selection authority</dt>
                  <dd>Taksim</dd>
                </div>
                <div>
                  <dt>Verification evidence</dt>
                  <dd>Build · Tests · Checks</dd>
                </div>
              </dl>
              <div className="saving-row">
                <span>
                  <small>Estimated cost avoided</small>
                  <strong>$3.82</strong>
                </span>
                <span>
                  <small>vs frontier-only</small>
                  <strong>47%</strong>
                </span>
              </div>
              <p className="illustrative">Illustrative example</p>
            </div>
          </div>
          <Link className="inline-link" href="/docs">
            See how evidence and selection authority work{' '}
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Why Taksim</p>
              <h2>
                Model selection is only one decision. Engineering outcomes are
                what matter.
              </h2>
            </div>
            <p>
              Taksim controls the organisational boundary around intelligence:
              what is allowed, what quality is required, where planning
              authority belongs, and what evidence proves the result.
            </p>
          </div>
          <ol className="process-grid">
            {[
              [
                'Observe',
                'Understand usage and workload without retaining raw engineering content in canonical telemetry.',
              ],
              [
                'Govern',
                'Apply company, repository, quality, privacy, and budget constraints.',
              ],
              [
                'Select or delegate',
                'Choose an eligible resource, or let an approved runtime plan internally.',
              ],
              [
                'Verify',
                'Judge engineering success using evidence, not model claims.',
              ],
              [
                'Escalate',
                'Use stronger intelligence or human review when the evidence requires it.',
              ],
              [
                'Learn',
                'Improve future organisational decisions from verified outcomes.',
              ],
            ].map(([title, copy], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section quality-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Quality before cost</p>
            <h2>Keep the quality bar. Change what you pay to reach it.</h2>
            <p className="section-copy">
              Taksim optimises inside the quality constraint. It can select an
              eligible resource directly or delegate execution planning to a
              runtime that can do it better.
            </p>
          </div>
          <div className="quality-card">
            <div className="quality-threshold">
              <span>Required quality</span>
              <strong>HIGH</strong>
            </div>
            <div className="resource-score pass">
              <span>Private resource</span>
              <strong>Eligible</strong>
            </div>
            <div className="resource-score pass">
              <span>Provider-native planner</span>
              <strong>Eligible</strong>
            </div>
            <div className="resource-score">
              <span>Local resource C</span>
              <strong>Insufficient</strong>
            </div>
            <p>
              Cost is considered only after capability and policy eligibility.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Across your tools</p>
              <h2>
                One control plane. Keep the clients your developers already use.
              </h2>
            </div>
            <p>
              Client independence does not mean identical integration depth.
              Taksim states exactly what it can observe and manage for each
              client.
            </p>
          </div>
          <div className="compat-grid">
            {clients.map(([name, status]) => (
              <div key={name}>
                <span className="status-dot" />
                <h3>{name}</h3>
                <p>{status}</p>
              </div>
            ))}
          </div>
          <p>
            Also observed through history import, with no managed launch:{' '}
            {historyImportOnlyClients.map(({ name }, index) => (
              <span key={name}>
                {name}
                {index < historyImportOnlyClients.length - 1 ? ', ' : '.'}
              </span>
            ))}{' '}
            {historyImportAvailability}
          </p>
          <Link
            className="inline-link light-link"
            href="/docs#client-compatibility"
          >
            View exact compatibility <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section native-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Governed delegation</p>
            <h2>
              Use provider-native intelligence. Don’t surrender organisational
              control.
            </h2>
            <p className="section-copy">
              Provider-native planners can be excellent inside a request. Taksim
              governs the larger boundary: which runtimes are eligible, what
              they may spend, which policies apply, and whether the outcome is
              acceptable.
            </p>
          </div>
          <div className="delegation-card">
            <div className="guardrail-row">
              <span>POLICY</span>
              <span>PRIVACY</span>
              <span>BUDGET</span>
              <span>QUALITY</span>
            </div>
            <ArrowRight aria-hidden="true" />
            <strong>Taksim governance envelope</strong>
            <ArrowRight aria-hidden="true" />
            <div className="planner-box">
              Approved native planner
              <small>Internal plan remains provider-owned</small>
            </div>
            <div className="evidence-return">
              ↳ Evidence returns for verification
            </div>
          </div>
        </div>
      </section>

      <section className="section privacy-section">
        <div className="shell">
          <div className="section-heading centered">
            <p className="eyebrow">Privacy by architecture</p>
            <h2>Prompt-aware. Not prompt-owning.</h2>
            <p>
              Taksim derives useful intelligence metadata without making raw
              engineering content part of canonical telemetry.
            </p>
          </div>
          <div className="privacy-grid">
            <div>
              <h3>Canonical telemetry may retain</h3>
              <ul>
                <li>Structural task and session metadata</li>
                <li>Resource attribution when observable</li>
                <li>Token and latency signals</li>
                <li>Verification outcomes</li>
                <li>Finite evidence classifications</li>
              </ul>
            </div>
            <div className="privacy-no">
              <h3>Canonical telemetry does not retain</h3>
              <ul>
                <li>Raw prompts or model responses</li>
                <li>Source code or diffs</li>
                <li>Credentials</li>
                <li>Raw tool payloads</li>
                <li>Invented provider identity</li>
              </ul>
            </div>
          </div>
          <Link className="inline-link light-link" href="/privacy">
            Read the privacy model <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section pricing-teaser">
        <div className="shell">
          <div className="section-heading centered">
            <p className="eyebrow">Simple pricing</p>
            <h2>
              Personal projects start free. Organisational work starts with a
              conversation.
            </h2>
          </div>
          <div className="price-grid">
            <article className="price-card">
              <p className="eyebrow">Solo</p>
              <strong className="price">Free</strong>
              <p>For personal use and independent side projects.</p>
              <ul>
                <li>Supported-client history</li>
                <li>Managed supported sessions</li>
                <li>Shadow recommendations</li>
                <li>Evidence-dependent verification</li>
                <li>Personal session and economics visibility</li>
              </ul>
              <Link className="button" href="/docs/getting-started">
                Get Taksim Free
              </Link>
              <small>Not for employer, client, or organisation work.</small>
            </article>
            <article className="price-card featured">
              <p className="eyebrow">Team</p>
              <strong className="price">Custom</strong>
              <p>
                For work performed on behalf of a company, client, or
                organisation.
              </p>
              <ul>
                <li>Organisation and repository policy</li>
                <li>Cross-developer visibility</li>
                <li>Shared and private resources</li>
                <li>Budget and quality controls</li>
                <li>Selection and delegation governance</li>
              </ul>
              <Link className="button purple-button" href="/contact">
                Talk to us
              </Link>
              <small>
                One developer doing company work still requires Team.
              </small>
            </article>
          </div>
          <Link className="inline-link light-link" href="/pricing">
            Compare plans <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-inner">
          <div>
            <p className="eyebrow">Start with what you have</p>
            <h2>
              Use the intelligence you already have. Bring in more only when the
              work requires it.
            </h2>
          </div>
          <div className="final-actions">
            <Link className="button" href="/docs/getting-started">
              Get Taksim Free
            </Link>
            <Link className="button button-secondary" href="/contact">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
