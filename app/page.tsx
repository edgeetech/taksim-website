import Link from 'next/link';
import { ClientMatrix } from '@/components/client-matrix';
import { LedgerStream } from '@/components/ledger-stream';
import { PricingPlans } from '@/components/pricing-plans';

const valueProps = [
  {
    title: 'Every session, priced.',
    body: 'Taksim imports what your coding agents already write to disk and prices each session by model, repo and task, including cache reads and writes. It shows dollars for API-key usage and window usage for subscriptions.',
  },
  {
    title: 'Was the cheaper model enough?',
    body: 'An LLM judge grades completed turns after the fact. Only verdicts where two judges agree, one of them strong, count toward the “could have saved” number, so the figure stays conservative.',
  },
  {
    title: 'Private by design.',
    body: 'Taksim is a local binary. It stores metadata only: no prompts, responses, code, paths or credentials. Team reports are built from exports that each developer creates and can inspect before sharing.',
  },
];

const steps = [
  {
    title: 'Import',
    body: 'Taksim reads the local history and hooks of Claude Code, the Claude desktop app and Codex, and imports Copilot usage reports. Each turn becomes a ledger line: model, tokens, cache, list-price cost.',
    detail: 'taksim setup',
  },
  {
    title: 'Judge',
    body: 'An LLM judge looks at a finished turn and names the cheapest tier that would have passed. Use Claude inside your session, a local Ollama model, or a remote judge on your own API key.',
    detail: 'taksim judge enable --in-session',
  },
  {
    title: 'Agree',
    body: 'A verdict only counts when two judges agree and at least one is a strong judge. Weak-only agreement and disputes are shown, never counted, so one lenient judge cannot inflate the number.',
    detail: 'taksim judge status',
  },
  {
    title: 'Report',
    body: 'Every Monday, one report: spend, model mix, cache efficiency, judge coverage, and what a shadow policy would have changed. The shadow policy is counterfactual. Taksim never silently changes your model.',
    detail: 'taksim report weekly --html',
  },
];

const tierMix = [
  { label: 'Opus and Fable', share: 70, tone: 'top' },
  { label: 'Sonnet and smaller', share: 30, tone: 'mid' },
];

const faq = [
  {
    q: 'Does Taksim change my model on a Claude or ChatGPT subscription?',
    a: 'No. Subscription traffic is observed from local history and hooks. Model changes happen only on traffic billed to your own API key, and only if you turn routing on.',
  },
  {
    q: 'Can I use the free version at work?',
    a: 'Yes. The CLI is free for any individual. Team features are what companies pay for.',
  },
  {
    q: 'Does anything leave my machine?',
    a: 'Not unless you choose a judge that runs remotely (your own API key or Jev) or share a team export. Remote judges receive truncated excerpts of the turns they grade. Exports contain metadata only.',
  },
  {
    q: 'Is the “could have saved” number guaranteed?',
    a: 'No. It is an estimate: it counts turns where two judges agreed a cheaper tier was sufficient, and every report shows the sample size.',
  },
  {
    q: 'How complete is the pricing?',
    a: 'Taksim prices about 99% of recorded usage, including Claude Opus 5.5 and Fable 5.1, at published list rates. taksim doctor shows your priced share.',
  },
  {
    q: 'Which platforms are supported?',
    a: 'The release installer targets Windows today. The install guide covers the full setup.',
  },
];

export default function Home() {
  return (
    <main className="home">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <h1 id="hero-title">
              See where your AI coding spend goes, and when a cheaper model would have done the job.
            </h1>
            <p className="hero-lede">
              Taksim reads the local history and hooks of Claude Code, Codex and GitHub Copilot, prices every
              session, and grades finished turns: was Opus needed, or would Sonnet have passed? It runs on your
              machine and keeps no prompts or code.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/docs/getting-started">
                Install Taksim
              </Link>
              <Link className="btn btn-ghost" href="#how-it-works">
                See how it works
              </Link>
            </div>
            <p className="hero-footnote">Free for individual developers. Teams pay for the roll-up.</p>
          </div>
          <div className="hero-visual">
            <LedgerStream />
          </div>
        </div>
      </section>

      <section className="band values" aria-label="What Taksim does">
        <div className="shell values-grid">
          {valueProps.map((v) => (
            <div key={v.title} className="value">
              <h2>{v.title}</h2>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band problem" aria-labelledby="problem-title">
        <div className="shell problem-layout">
          <div className="problem-copy">
            <h2 id="problem-title">Every turn defaults to the biggest model.</h2>
            <p>
              Coding agents make it easy to leave the top tier on for everything: renaming a variable, reading a
              log, writing a test. The bill arrives as one number, with no way to tell which turns needed that much
              model.
            </p>
            <p>Taksim breaks the number back into turns and asks, for each one, whether less would have done.</p>
          </div>
          <figure className="week-card">
            <figcaption>
              <strong>One real week</strong>
              <span>Founder&rsquo;s own week, API-equivalent list prices</span>
            </figcaption>
            <dl className="week-stats">
              <div>
                <dt>Spend</dt>
                <dd className="tabular">$1.6k–1.8k</dd>
              </div>
              <div>
                <dt>Output tokens on Opus or Fable</dt>
                <dd className="tabular">70%</dd>
              </div>
              <div>
                <dt>If every turn had run on Sonnet</dt>
                <dd className="tabular is-saving">−45%</dd>
              </div>
            </dl>
            <p className="sr-only">Output tokens: 70% Opus and Fable, 30% Sonnet and smaller.</p>
            <div className="tier-bar" aria-hidden="true">
              {tierMix.map((t) => (
                <span key={t.label} className={`tier tier-${t.tone}`} style={{ flexBasis: `${t.share}%` }} />
              ))}
            </div>
            <ul className="tier-legend">
              {tierMix.map((t) => (
                <li key={t.label}>
                  <i className={`tier-${t.tone}`} aria-hidden="true" />
                  {t.label}
                </li>
              ))}
            </ul>
            <p className="week-caveat">
              The always-Sonnet line is a counterfactual, not a recommendation. Some of those turns did need the
              top tier; the judge is there to find out which.
            </p>
          </figure>
        </div>
      </section>

      <section className="band how" id="how-it-works" aria-labelledby="how-title">
        <div className="shell how-layout">
          <div className="how-intro">
            <h2 id="how-title">From transcript to verdict.</h2>
            <p>
              Keep using your coding clients as you do today. Taksim works from what they already write to disk.
            </p>
          </div>
          <ol className="pipeline">
            {steps.map((step, index) => (
              <li key={step.title} className="pipeline-step">
                <span className="pipeline-index tabular" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <code>{step.detail}</code>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band report" aria-labelledby="report-title">
        <div className="shell">
          <div className="section-lead">
            <h2 id="report-title">One report on Monday morning.</h2>
            <p>
              taksim report weekly writes a single self-contained HTML file. Here is the shape of it, with sample
              figures.
            </p>
          </div>
          <article className="report-doc" aria-label="Sample weekly report">
            <header className="report-head">
              <div>
                <strong>Weekly report</strong>
                <span>Last 7 days, all clients</span>
              </div>
              <span className="report-sample">Sample figures</span>
            </header>
            <div className="report-grid">
              <section className="report-block">
                <h3>Spend</h3>
                <p className="report-figure tabular">$1,704</p>
                <p className="report-sub">API-equivalent list price, 97% of turns priced</p>
                <div className="spark" aria-hidden="true">
                  {[38, 52, 61, 44, 70, 58, 33].map((h, i) => (
                    <span key={i} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </section>
              <section className="report-block">
                <h3>Judge</h3>
                <ul className="split-list tabular">
                  <li>
                    <span>Consensus</span>
                    <strong>212</strong>
                  </li>
                  <li>
                    <span>Weak consensus</span>
                    <strong className="dim">40</strong>
                  </li>
                  <li>
                    <span>Disputed</span>
                    <strong className="dim">9</strong>
                  </li>
                  <li>
                    <span>Single judge</span>
                    <strong className="dim">66</strong>
                  </li>
                </ul>
                <p className="report-sub">Only consensus verdicts count.</p>
              </section>
              <section className="report-block">
                <h3>Shadow policy</h3>
                <p className="report-figure tabular">
                  138 <span>turns</span>
                </p>
                <p className="report-sub">would have run one tier lower. Nothing was changed.</p>
              </section>
              <section className="report-block report-actions">
                <h3>Next actions</h3>
                <ol>
                  <li>
                    <code>taksim history backfill-models</code>
                    <span>3% of turns are unpriced</span>
                  </li>
                  <li>
                    <code>taksim policy shadow-report</code>
                    <span>Review what the shadow policy would change</span>
                  </li>
                </ol>
              </section>
            </div>
          </article>
        </div>
      </section>

      <section className="band clients" id="clients" aria-labelledby="clients-title">
        <div className="shell">
          <div className="section-lead">
            <h2 id="clients-title">What Taksim does with each client</h2>
            <p>
              Taksim works inside each vendor&rsquo;s terms. On a subscription plan, Taksim only observes. Live
              routing is limited to traffic billed to your own API key.
            </p>
          </div>
          <ClientMatrix />
        </div>
      </section>

      <section className="band privacy" aria-labelledby="privacy-title">
        <div className="shell privacy-layout">
          <div className="section-lead">
            <h2 id="privacy-title">It stores the shape of your work, never the words.</h2>
            <p>
              Taksim is a local binary. The ledger lives on your machine, and team reports are built from exports
              each developer can inspect before sharing.
            </p>
            <Link className="text-link" href="/privacy">
              Read the privacy model
            </Link>
          </div>
          <div className="privacy-columns">
            <div className="privacy-card">
              <h3>Stored in the ledger</h3>
              <ul>
                <li>Client, model and effort per turn</li>
                <li>Token counts, cache use and list-price cost</li>
                <li>Judge verdicts: tier, confidence, flags</li>
              </ul>
            </div>
            <div className="privacy-card">
              <h3>Never stored</h3>
              <ul>
                <li>Prompts and model responses</li>
                <li>Source code and diffs</li>
                <li>Credentials and local paths</li>
              </ul>
            </div>
            <div className="privacy-card privacy-wide">
              <h3>Where judging happens</h3>
              <dl className="judge-list">
                <div>
                  <dt>Claude, in your session</dt>
                  <dd>Grades turns of the session it is already in. Opt-in, declinable.</dd>
                </div>
                <div>
                  <dt>Your Anthropic API key or TypeSafe Jev</dt>
                  <dd>Receive truncated excerpts, only after you opt in with your own key.</dd>
                </div>
                <div>
                  <dt>Ollama</dt>
                  <dd>Runs locally. Nothing leaves the machine.</dd>
                </div>
              </dl>
            </div>
            <div className="privacy-card privacy-wide compliance">
              <h3>On a subscription, Taksim only observes</h3>
              <p>
                On Claude and ChatGPT plans Taksim reads local history and hooks. It never sits between your client
                and a subscription account, and never changes the model. Live routing applies only to traffic billed
                to your own API key, and only if you turn it on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band pricing" id="pricing" aria-labelledby="pricing-title">
        <div className="shell">
          <div className="section-lead">
            <h2 id="pricing-title">Free for developers. Paid for teams.</h2>
          </div>
          <PricingPlans />
        </div>
      </section>

      <section className="band faq" aria-labelledby="faq-title">
        <div className="shell faq-layout">
          <h2 id="faq-title">Questions</h2>
          <div className="faq-items">
            {faq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" aria-labelledby="cta-title">
        <div className="shell cta-inner">
          <h2 id="cta-title">Find out what your last week actually needed.</h2>
          <p>
            taksim setup imports the history your clients already keep and writes your first report in one command.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/docs/getting-started">
              Install Taksim
            </Link>
            <Link className="btn btn-ghost" href="/docs">
              Read the docs
            </Link>
            <Link className="btn btn-ghost" href="/contact">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
