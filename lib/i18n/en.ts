// English copy. Every string shown on the site lives here; tr.ts mirrors this shape.
// Inline markup understood by <Rich>: `code`, **bold**, [label](href).
import { entitlements, foundingOffer, freeFeatures, prices, type FeatureId } from '../plans.ts';

const feature = {
  'free.history':
    'Works with the history you already have: Claude Code, Codex, Copilot, Devin, OpenCode, Kilo Code, Pi and Agent Workstation',
  'free.dashboard': 'Local dashboard, weekly report, on-demand digest and status line',
  'free.insights': 'Spend by model, repo and client, cache efficiency and subscription quota windows',
  'free.judge':
    'Turn-by-turn judging with two-judge consensus and your choice of judge (in-session Claude or Codex, Ollama, your own API key)',
  'free.memory': 'Decision memory and verification evidence, kept locally',
  'free.mode':
    'Manual `taksim mode` (economy, balanced, quality) and opt-in Claude-only routing on a Claude subscription',
  'free.budgetWarnings': 'Budget warnings by developer and repo; a warning never blocks a request',
  'free.privacy': 'Private by design: no prompts, responses or code in the ledger',
  'routing.auto':
    'Automatic outcome-learned routing (`taksim routing auto on`): fresh contexts start on a cheaper Claude model where your own verdicts support it, and step back up on failure signals',
  'budget.enforce':
    'Budget caps that step down to a cheaper Claude model and never block a request (`taksim budget enforce --mode downgrade`)',
  'digest.delivery': 'Digest and budget alerts delivered to Slack or a webhook you configure (`taksim notify configure`)',
  'report.summaryHtml': 'Executive summary report as a printable HTML page (`taksim report summary --html`)',
  'report.team':
    'Team roll-up and chargeback from developer exports (`taksim report team`): cost by repo and task, no hosted service required. Each developer can inspect their export before sharing; exports carry repo aliases, never paths',
  'budget.team': 'Team budgets by developer, repo and team',
} satisfies Record<FeatureId, string>;

const featureList = (ids: readonly FeatureId[]) => ids.map((id) => feature[id]);

export const en = {
  meta: {
    siteTitle: 'Taksim — Spend control and receipts for Claude Code',
    titleTemplate: '%s — Taksim',
    ogAlt: 'Taksim: spend control and receipts for Claude Code. −{costSavingPct} vs always-Opus in an internal pilot.',
    description:
      'Taksim is a local control plane for AI coding agents. Its ledger records which model ran each turn, what it cost, and when a cheaper model would have done the job. Free for individual developers.',
    pages: {
      pricing: {
        title: 'Pricing',
        description:
          `The Taksim CLI is free for any individual developer, at home or at work. Pro: $${prices.pro} per month. Team: $${prices.team} per active developer per month, ${prices.teamMinDevelopers}-developer minimum.`,
      },
      docs: {
        title: 'Documentation',
        description:
          'Technical documentation for Taksim: priced sessions, judging, subscriptions and API keys, clients, and privacy.',
      },
      privacy: {
        title: 'Privacy',
        description:
          'How Taksim processes engineering metadata while avoiding raw engineering content in canonical telemetry.',
      },
      terms: {
        title: 'Terms',
        description:
          'Preview terms describing free developer use, paid plans, third-party providers, verification, and economics boundaries.',
      },
      security: {
        title: 'Security',
        description:
          'Where Taksim connects, how its local services are protected, how releases are verified, and how to report a vulnerability.',
      },
      quickStart: {
        title: 'Easy install',
        description:
          'Install Taksim on Windows in three steps: one PowerShell line, taksim setup, taksim dashboard. Troubleshooting, update and uninstall.',
      },
      gettingStarted: {
        title: 'Install guide',
        description:
          'The complete Taksim install guide: prerequisites, the verified one-line installer, checks, managed sessions and history import.',
      },
      nextSteps: {
        title: 'Next steps',
        description:
          'After setup: the local dashboard, judging, budgets, the weekly digest, Slack and webhook alerts, and the team roll-up.',
      },
      howItWorks: {
        title: 'How it works',
        description:
          'How Taksim goes from install to first evidence: import and price sessions, judge finished turns, count only two-judge consensus, and report. What is stored and what never is.',
      },
      clients: {
        title: 'Clients',
        description:
          'What Taksim does with each coding client: observe, judge, gateway and model routing for Claude Code, Codex, GitHub Copilot, Devin, OpenCode, Kilo Code, Pi and more.',
      },
      benchmark: {
        title: 'Pilot benchmark',
        description:
          'Method and caveats of the internal Taksim pilot: task set, the three arms, hidden acceptance checks, cost basis, and how routing learns from outcomes.',
      },
      troubleshooting: {
        title: 'Troubleshooting',
        description:
          'Fixes with the exact command and the output to expect: gateway, judge hook, routing modes, budget downgrades, unsigned updates, the macOS PATH and removing hooks.',
      },
      changelog: {
        title: 'Changelog',
        description:
          'What changed in each recent Taksim release, one sentence per change, with the detail one click away.',
      },
      compare: {
        title: 'Compare',
        description:
          'Taksim next to GitHub Copilot Fusion, Claude /advisor, Not Diamond Code, ccusage and plain /model sonnet, with a public source for every competitor fact and a list of where Taksim is weaker. As of 29 Oct 2026.',
      },
      contact: {
        title: 'Contact',
        description:
          'Reserve a Pro founding seat, start a Team pilot or ask a security question. Paid plans are not on sale yet, and reserving costs nothing.',
      },
    },
  },

  chrome: {
    skipToContent: 'Skip to content',
    brandHome: 'Taksim home',
    brandTagline: 'by EdgeeTech',
    primaryNav: 'Primary navigation',
    mobileNav: 'Mobile navigation',
    darkMode: 'Dark mode',
    openNav: 'Open navigation',
    nav: {
      how: 'How it works',
      clients: 'Clients',
      pricing: 'Pricing',
      docs: 'Docs',
      benchmark: 'Pilot benchmark',
      compare: 'Compare',
      changelog: 'Changelog',
    },
    talkToUs: 'Talk to us',
    install: 'Get Taksim free',
    footer: {
      tagline: 'A local-first control plane for AI coding agents.',
      productNav: 'Taksim footer',
      legalNav: 'Legal footer',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      security: 'Security',
      company: 'EdgeeTech Ltd.',
    },
    language: {
      label: 'Language',
    },
    untranslated: 'This page is currently available in English only.',
  },

  notFound: {
    title: 'That page is not here.',
    body: 'The address may have changed. Continue with the product overview or technical documentation.',
    home: 'Go home',
    docs: 'Read the docs',
  },

  home: {
    hero: {
      title: 'Spend control and receipts for Claude Code.',
      lede: 'Keeps ordinary work on Sonnet, steps down instead of cutting off at a budget cap, and shows judged receipts for when Opus was needed. Runs on your machine; no Taksim server exists.',
      chipsLabel: 'Pilot result and proof',
      chips: {
        benchmark:
          '−{costSavingPct} vs always-Opus in an internal pilot ({tasks} tasks), not cheaper than always-Sonnet',
        proof: 'Judged receipts: see the proof',
      },
      trust: 'Runs on your machine. No Taksim account. EdgeeTech does not receive your prompts or code.',
      seeHow: 'See how it works',
      installLabel: 'Install on Windows with one PowerShell line',
      installGuide: 'Easy install in 3 steps',
    },
    valuesLabel: 'What Taksim does',
    valueProps: [
      {
        title: 'Every session, priced.',
        body: 'By model, repo and task, cache included. API keys show billed dollars; subscriptions show list-price quota, not billed.',
      },
      {
        title: 'Was the cheaper model enough?',
        body: 'An LLM judge grades finished turns. Only verdicts where two judges agree, one of them strong, count.',
      },
      {
        title: 'Private by design.',
        body: 'A local binary that stores metadata only: no prompts, responses, code or credentials. Repository folders stay on your machine and never appear in exports.',
      },
    ],
    pilot: {
      tag: 'Internal pilot',
      eyebrow: '{tasks} coding tasks · {totalRuns} runs · our own Claude Team subscription',
      title: '{costSavingPct} lower cost. More tasks accepted.',
      lede: 'We ran the same coding tasks three ways: always Opus, always Sonnet, and Taksim choosing. Hidden automated checks graded every run.',
      bigCaption: 'lower cost than always-Opus',
      vs: 'vs',
      kpiAccepted: 'Accepted with Taksim routing',
      kpiAcceptedSub: 'Always-Opus: {n}',
      kpiPerAccepted: 'Cost per accepted task',
      coldStart: 'Cold start: no history, no feedback. Taksim learns from the tasks you correct.',
      chart: {
        title: 'Three arms, {runsPerArm} runs each',
        subtitle:
          'Accepted = scope, delivery, regression and behavior checks all pass',
        arms: {
          opus: 'Always Opus',
          sonnet: 'Always Sonnet',
          taksim: 'Taksim routed',
        },
        taksimModel: 'starts on Opus, Taksim chooses',
        cost: 'Cost',
        accepted: 'Accepted',
        acceptedOf: '{n} of {total} runs accepted',
        perAccepted: 'per accepted task',
      },
      mix: {
        title: 'What Taksim served',
        body: 'Sonnet on {servedSonnet} of {runsPerArm} runs. Opus kept on {servedOpus}, both on the hardest documentation and permissions task, both accepted.',
        label:
          'Taksim runs: {sonnet} on Sonnet, {opus} on Opus, out of {total}.',
      },
      learn: {
        tag: 'It learns from outcomes',
        title: 'Rejected once, remembered.',
        body: 'Taksim routes on what actually happened, not on a guess. Already in the current release.',
        steps: [
          {
            title: 'Try cheaper first',
            body: 'When the task fits, a cheaper model goes first. One tier at most: Opus to Sonnet.',
          },
          {
            title: 'Catch the rejection',
            body: 'Taksim records it. No command to remember.',
          },
          {
            title: 'Keep the stronger model',
            body: 'Next time the same task comes up, or a repo or task class with enough evidence, the stronger model stays.',
          },
          {
            title: 'Weigh, then forget',
            body: 'Three acceptances outweigh a rejection. Evidence older than 14 days ages out. Only a keyed hash of the task is stored, never prompt or response text.',
          },
        ],
        signalsLabel: 'Rejection signals',
        signals: ['CI', 'Evaluator', 'In-session judge'],
        reply: '“No, that’s wrong”',
        replySoon: 'Coming in the next release',
        replyNew: 'New',
        loopBack: 'Every outcome feeds the next choice.',
      },
      case: {
        tag: 'From our tests',
        title: 'A deduplication task',
        fails: 'Sonnet failed 7 of 7 runs',
        after: 'After one rejection',
        reason: 'Taksim keeps it on Opus: `OUTCOME_LEARNED_KEEP_START`.',
        verified:
          'Live-verified 2026-10-15: a correction on resume was recorded automatically, and the next run of the same task stayed on Opus.',
      },
      warm: {
        tag: 'Warm re-run',
        title: 'Corrected tasks: {correctedColdRejected} failures → {correctedWarmRejected}',
        cold: 'Cold start',
        warm: 'After the corrections',
        acceptedOf: '{n} of {total} accepted',
        srSummary:
          'On the {correctedTasks} corrected tasks, {cold} of {total} runs were accepted at the cold start and {warm} of {total} after the corrections.',
        overall:
          'Overall still {warmAccepted}/{warmRuns}: Sonnet slipped on three other tasks that had passed before. Taksim learns those from the next correction.',
        cost: 'Opus served {warmServedOpus} of {warmRuns} warm runs. Cost {warmCost} (cold {taksimCost}), still {warmSavingPct} below always-Opus.',
      },
      footnote:
        'Internal pilot, not an independent benchmark. Run 2026-10-15 in two halves, the first on that day’s earlier Taksim release and the second on the current one, with Claude Code CLI on one Claude Team subscription. Each half was a cold start, with no prior outcome history. {tasks} tasks in 5 categories (bounded feature, bug repair, configuration migration, refactor, research and documentation), easy to hard; 3 arms × {repetitions} repetitions = {totalRuns} runs. One task of the 30-task pool was excluded as a test harness artifact. Results hold for this pilot only. Costs are API-equivalent at Anthropic list prices; on a subscription they are plan quota, not an invoice. Taksim only switches between Claude models.',
      note: 'Internal pilot, not an independent benchmark. Costs are API-equivalent list prices; Taksim only switches between Claude models.',
      methodLink: 'Method, task set and caveats',
      notMeasured: 'not measured',
      undefinedPerAccepted: 'undefined (no accepted runs)',
    },
    how: {
      title: 'How it works, in three steps.',
      body: 'Keep using your coding agents as you do today. Taksim works from what they already write to disk.',
      steps: [
        {
          title: 'Install and import',
          body: 'One line installs Taksim for your user. Setup finds your coding agents, then imports and prices the history they already keep.',
          detail: 'taksim setup',
        },
        {
          title: 'Judge',
          body: 'An LLM judge grades finished turns. A verdict counts only when two judges agree and at least one is strong.',
          detail: 'taksim judge enable --in-session',
        },
        {
          title: 'See the evidence',
          body: 'A local dashboard and weekly report: spend, quota, model mix and what a cheaper model could have saved. Taksim never silently changes your model.',
          detail: 'taksim dashboard',
        },
      ],
      more: 'The full walkthrough',
    },
    modes: {
      title: 'Subscription, API key, private: different economics.',
      body: 'Taksim keeps the three apart, because what can be optimised depends on who bills the work and what authority you have over the request.',
      currentLabel: 'Current release',
      items: [
        {
          name: 'Subscription plans',
          economics: 'Claude and ChatGPT plans: included usage and quota windows. Shown as API-equivalent list price, labelled as quota, never as billed dollars.',
          current: 'Observed from local history and hooks, with quota readings and judging. Claude Code on a Pro, Max or Team login can opt in to Claude-only model switching (`taksim routing subscription on`); otherwise requests go straight from your client to the provider and Taksim changes no model, effort or context.',
        },
        {
          name: 'Your own API key',
          economics: 'Anthropic and OpenAI API keys: billed dollars per token.',
          current: 'Everything above, plus an optional local gateway in sessions you launch with taksim claude, routing recommendations from consensus verdicts, and opt-in automatic routing for taksim claude sessions that escalates back to your model.',
        },
        {
          name: 'Private and local models',
          economics: 'Your own hardware or reserved capacity: compute and capacity, not per-token prices.',
          current: 'Not a routing target in the current release. A local Ollama model can act as a judge, and OpenCode, Kilo Code, Pi and Cline sessions are observed whichever provider they use.',
        },
      ],
      futureTitle: 'What may change, and what will not',
      futureBody: 'Subscription routing is opt-in, off by default and limited to Claude Code on your own claude.ai login. Taksim only sets the base URL, forwards your login unchanged without reading, copying or logging it, and switches only among Claude models, never third-party ones. EdgeeTech reads Anthropic’s terms as allowing a choice among Claude models and forbidding third-party models; this is not an endorsement by Anthropic. Anthropic’s Legal and compliance page for Claude Code restricts third-party intermediation of Claude.ai credentials, so you decide whether to turn it on. Codex on a ChatGPT plan stays observe-only, because the OpenAI proxy path has not been shown to keep plan, quota and workspace controls. Provider entitlements and workspace policy stay authoritative.',
      summary: [
        'Shown as quota, not billed dollars. Observed by default; Claude-only routing is opt-in.',
        'Billed per token. Optional local gateway and opt-in routing in sessions you launch through Taksim.',
        'Not a routing target in the current release. A local Ollama model can judge.',
      ],
      more: 'Billing modes in detail',
    },
    clients: {
      title: 'What Taksim does with each client',
      body: 'Taksim works inside each vendor’s terms. Claude Code on a Claude subscription is observed unless you opt in to Claude-only routing; Codex on a ChatGPT plan is only observed. Other live routing is limited to traffic billed to your own API key.',
      listLabel: 'Supported coding clients',
      more: 'See the full client table',
    },
    privacy: {
      title: 'It stores the shape of your work, never the words.',
      points: [
        'Stored: client, model, tokens, cost and judge verdicts.',
        'Never stored: prompts, responses, source code or credentials. Local repository folders stay in your local database only, to attribute cost, and never appear in exports.',
        'A remote judge on your own key receives truncated excerpts, only after you opt in. With Ollama, judging stays on your machine.',
      ],
      link: 'Read the privacy model',
      more: 'What is stored, in detail',
    },
    pricingTitle: 'Free for developers. Paid for automation and teams.',
    pricingMore: 'Compare plans',
    faqTitle: 'Questions',
    faqMore: 'More questions',
    faq: [
      {
        q: 'Does Taksim change my model on a Claude or ChatGPT subscription?',
        a: 'Not by default. On a Claude Pro, Max or Team login you can opt in with `taksim routing subscription on`; then `taksim claude` can switch among Claude models only, within your organisation’s available models, and keeps --model and /model switches away from the start model. Your login stays the credential and usage stays on the subscription. With the setting off, and always for Codex on a ChatGPT plan, Taksim only observes. Requests Taksim raises to Opus use plan quota faster. The Claude desktop app (Code tab) is observed, not routed: the app sets its own API endpoint for each session. `taksim desktop on` routes plain `claude` CLI sessions started from a terminal.',
      },
      {
        q: 'Can I use the free version at work?',
        a: 'Yes. The CLI is free for any individual. Pro and Team add automation and team reporting.',
      },
      {
        q: 'Does anything leave my machine?',
        a: 'Not unless you choose a judge that runs remotely (your own API key or Jev) or share a team export. Remote judges receive truncated excerpts of the turns they grade. Exports contain metadata only.',
      },
      {
        q: 'Is the “could have saved” number guaranteed?',
        a: 'No. It is an estimate: it counts turns where two judges agreed a cheaper tier was sufficient, and every report shows the sample size.',
      },
    ],
    cta: {
      title: 'Find out what your last week actually needed.',
      body: 'taksim setup imports the history your clients already keep and writes your first report in one command.',
      docs: 'Read the docs',
    },
  },

  howItWorks: {
    eyebrow: 'How it works',
    title: 'From transcript to verdict, step by step.',
    lede: 'Everything Taksim does runs on your machine, from the history your coding agents already keep. This page walks through the first evidence, the judge, the weekly report and what Taksim stores.',
    firstValue: {
      title: 'From install to first evidence.',
      body: 'The free Developer plan starts from the history your coding agents already keep, so your first report covers work you have already done.',
      steps: [
        {
          title: 'Install',
          body: 'One PowerShell line on Windows or one Terminal command on macOS, installed for your user only, with no administrator rights. The Windows installer checks the published checksums.',
          detail: '',
        },
        {
          title: 'Run setup',
          body: 'Setup finds the coding agents on this machine and shows whether each one uses a subscription or an API key.',
          detail: 'taksim setup',
        },
        {
          title: 'Import existing sessions',
          body: 'Setup imports and prices the history those agents already keep. Import again at any time.',
          detail: 'taksim history import',
        },
        {
          title: 'Open the dashboard',
          body: 'A read-only dashboard that runs only on your machine.',
          detail: 'taksim dashboard',
        },
        {
          title: 'See spend, quota, model mix and evidence',
          body: 'The weekly report shows spend and model mix, cache efficiency, judge coverage and what is still unpriced. On a subscription plan, taksim insights quota adds your 5-hour and weekly limits.',
          detail: 'taksim report weekly',
        },
        {
          title: 'Start collecting quality evidence',
          body: 'Turn on in-session judging, then add a second judge: a local Ollama model or your own Anthropic API key, run over your history with taksim judge run. A lone verdict stays single and is never counted; only agreement between two judges, one of them strong, counts.',
          detail: 'taksim judge enable --in-session',
        },
      ],
    },
    problem: {
      title: 'Every turn defaults to the biggest model.',
      body: 'Coding agents make it easy to leave the top tier on for everything: renaming a variable, reading a log, writing a test. The bill arrives as one number, with no way to tell which turns needed that much model.',
      body2: 'Taksim breaks the number back into turns and asks, for each one, whether less would have done.',
    },
    week: {
      title: 'One real week',
      subtitle: 'Founder’s own week, API-equivalent list prices',
      spend: 'Spend',
      topShare: 'Output tokens on Opus or Fable',
      allSonnet: 'If every turn had run on Sonnet',
      srSummary: 'Output tokens: 70% Opus and Fable, 30% Sonnet and smaller.',
      tierTop: 'Opus and Fable',
      tierMid: 'Sonnet and smaller',
      caveat:
        'The always-Sonnet line is a counterfactual, not a recommendation. Some of those turns did need the top tier; the judge is there to find out which.',
    },
    how: {
      title: 'From transcript to verdict.',
      body: 'Keep using your coding clients as you do today. Taksim works from what they already write to disk.',
    },
    steps: [
      {
        title: 'Import',
        body: 'Taksim reads the local history and hooks of Claude Code, the Claude desktop app, Codex, GitHub Copilot, Devin, OpenCode, Kilo Code, Pi and Agent Workstation. Each turn becomes a ledger line: model, tokens, cache, list-price cost.',
        detail: 'taksim setup',
      },
      {
        title: 'Judge',
        body: 'An LLM judge reviews a finished turn and suggests a cheaper tier to investigate. Agreement is an estimate, not proof that a cheaper model would reproduce the result. Use Claude or Codex inside your session, a local Ollama model, or a remote judge on your own API key.',
        detail: 'taksim judge enable --in-session',
      },
      {
        title: 'Agree',
        body: 'A verdict only counts when two judges agree and at least one is a strong judge. Weak-only agreement and disputes are shown, never counted, so one lenient judge cannot inflate the number.',
        detail: 'taksim judge status',
      },
      {
        title: 'Report',
        body: 'A local dashboard and a weekly report: spend, model mix, cache efficiency, judge coverage, and what a shadow policy would have changed. The shadow policy is counterfactual. Taksim never silently changes your model.',
        detail: 'taksim dashboard',
      },
    ],
    report: {
      title: 'One command, one weekly report.',
      body: 'Run taksim dashboard to browse it locally, taksim report weekly --html for a single self-contained HTML file, or taksim digest for a one-page summary of what you could have saved. Here is the shape of the report, with sample figures.',
      docLabel: 'Sample weekly report',
      heading: 'Weekly report',
      range: 'Last 7 days, all clients',
      sample: 'Sample figures',
      spend: 'Spend',
      spendSub: 'API-equivalent list price, 97% of turns priced',
      judge: 'Judge',
      consensus: 'Consensus',
      weakConsensus: 'Weak consensus',
      disputed: 'Disputed',
      singleJudge: 'Single judge',
      judgeSub: 'Only consensus verdicts count.',
      shadow: 'Shadow policy',
      turns: 'turns',
      shadowSub: 'would have run one tier lower. Nothing was changed.',
      nextActions: 'Next actions',
      unpriced: '3% of turns are unpriced',
      reviewShadow: 'Review what the shadow policy would change',
    },
    privacy: {
      title: 'It stores the shape of your work, never the words.',
      body: 'Taksim is a local binary. The ledger lives on your machine, and team reports are built from exports each developer can inspect before sharing.',
      link: 'Read the privacy model',
      storedTitle: 'Stored in the ledger',
      stored: [
        'Client, model and effort per turn',
        'Token counts, cache use and list-price cost',
        'Judge verdicts: tier, confidence, flags',
        'Local repository folders, in your local database only, to attribute cost; never in exports',
      ],
      neverTitle: 'Never stored',
      never: ['Prompts and model responses', 'Source code and diffs', 'Credentials'],
      judgingTitle: 'Where judging happens',
      judges: [
        {
          name: 'Claude, in your session',
          body: 'Grades turns of the session it is already in. Opt-in, declinable.',
        },
        {
          name: 'Your Anthropic API key or TypeSafe Jev',
          body: 'Receive truncated excerpts, only after you opt in with your own key.',
        },
        { name: 'Ollama', body: 'With a local Ollama server, evaluation content stays on your machine.' },
      ],
      subscriptionTitle: 'On a Claude subscription, routing is opt-in',
      subscriptionBody:
        'By default Taksim reads local history and hooks on Claude and ChatGPT plans and changes no model. Turn on `taksim routing subscription on` and `taksim claude` on a Pro, Max or Team login routes through the local gateway. Only the base URL is set; your login stays the credential, Taksim never reads, copies or logs it, and usage stays on the subscription. Taksim switches only among Claude models, and only in sessions you launch through Taksim. Codex on a ChatGPT plan is only observed.',
      desktopTitle: 'Claude desktop app is observed, not routed',
      desktopBody:
        'The Claude desktop app’s Code tab is observed (cost reports, in-session judge), not routed. Routing is not available yet, because the app sets its own API endpoint for each session, so those sessions go straight to Anthropic. `taksim desktop on` routes plain `claude` CLI sessions started from a terminal on that profile; `taksim desktop off` turns it off and `taksim desktop status` shows the state. It is off by default and tested on Windows only. Only Claude models are used, and your organisation’s `availableModels`, --model and /model are respected. Your login is forwarded unchanged, never read or stored.',
    },
    faqTitle: 'More questions',
    faq: [
      {
        q: 'How complete is the pricing?',
        a: 'Taksim prices recorded usage at published list rates, including Claude Opus 5.5 and Fable 5.1. Models without a list price are excluded, never counted as free, and every report shows its priced coverage.',
      },
      {
        q: 'Which platforms are supported?',
        a: 'Windows x64 and macOS 14 or later. Apple Silicon has user-tested installation and removal; Intel remains a cross-built preview. See the easy install guide for platform details.',
      },
      {
        q: 'Which turns can Taksim judge?',
        a: 'Claude Code, Codex, OpenCode, Kilo Code, Pi and Devin Desktop turns. OpenCode, Kilo Code and Pi turns are judged when they ran on Claude-tier models. GitHub Copilot, Devin CLI and Agent Workstation sessions are imported and priced, but not judged yet.',
      },
    ],
  },

  benchmark: {
    eyebrow: 'Pilot benchmark',
    title: 'How we ran the pilot.',
    lede: 'The method, checks and caveats behind the pilot results on the home page.',
    summaryLabel: 'In short.',
    sections: [
      {
        title: 'Task set',
        body: '{tasks} coding tasks in 5 categories: bounded feature, bug repair, configuration migration, refactor, and research and documentation, from easy to hard. The pool had 30 tasks; one (`ho-ref-split-package`) was excluded because its failures came from the test harness, not the model.',
      },
      {
        title: 'Three arms',
        body: 'Every task ran three ways: always Opus (`claude-opus-5-5`), always Sonnet (`claude-sonnet-5-5`), and Taksim routed, which starts on Opus and lets Taksim choose. Each arm ran each task twice: 3 arms × {repetitions} repetitions = {totalRuns} runs, {runsPerArm} per arm.',
      },
      {
        title: 'Acceptance checks',
        body: 'Hidden automated checks graded every run. A run is accepted only when the scope, delivery, regression and behavior checks all pass.',
      },
      {
        title: 'Cost basis',
        body: 'Costs are API-equivalent at Anthropic list prices. The runs used a Claude Team subscription, so they consumed plan quota, not an invoice. Cost per accepted task is an arm’s total cost divided by its accepted runs.',
      },
      {
        title: 'Setup: a cold start',
        body: 'Run 2026-10-15 in two halves: the first on that day’s earlier Taksim release, the second on the current one. Each half ran in a fresh `TAKSIM_HOME` with no prior outcome history, so Taksim had nothing to learn from. Claude Code CLI on one Claude Team subscription.',
      },
      {
        title: 'Results',
        body: 'Always Opus: {opusAccepted} of {runsPerArm} runs accepted, {opusCost} in total, {opusPerAccepted} per accepted task. Always Sonnet: {sonnetAccepted} of {runsPerArm}, {sonnetCost}, {sonnetPerAccepted}. Taksim routed: {taksimAccepted} of {runsPerArm}, {taksimCost}, {taksimPerAccepted}. Taksim served Sonnet on {servedSonnet} runs and kept Opus on {servedOpus}, both on the hardest documentation and permissions task, both accepted.',
      },
      {
        title: 'Where runs failed',
        body: 'Taksim routed failed {taksimRejected} runs: the deduplication task twice (always Opus failed it once and always Sonnet twice), and the feature-flags and cron tasks once each.',
      },
      {
        title: 'Warm re-run: setup',
        body: 'After the cold runs, each routed run’s hidden-check result was reported to Taksim as a CI outcome (`taksim routing outcome record --source ci`), as CI does in real use. That gave {taksimRejected} rejections on {correctedTasks} tasks: feature-flags 1, cron 1, deduplication 2. Then only the routed arm re-ran all {tasks} tasks twice, {warmRuns} runs, in the same Taksim homes, now with that history.',
      },
      {
        title: 'Warm re-run: results',
        body: 'On the {correctedTasks} corrected tasks, Taksim kept Opus every time (`OUTCOME_LEARNED_KEEP_START`, scope `TASK`) and all {correctedRuns} runs passed: rejected runs on those tasks went from {correctedColdRejected} cold to {correctedWarmRejected} warm. Overall the routed arm stayed at {warmAccepted} of {warmRuns} accepted, because Sonnet missed {warmMisses} runs on {warmMissTasks} other tasks that had passed cold (resolver 2, shipping-registry 1, rename-kwarg 1). That is Sonnet’s run-to-run variance, and those misses would in turn be learned. Opus served {warmServedOpus} of {warmRuns} warm runs ({servedOpus} cold). Cost was {warmCost} (cold {taksimCost}), still {warmSavingPct} below always-Opus at {opusCost}; {warmPerAccepted} per accepted task.',
      },
      {
        title: 'What learning does and does not do',
        body: 'Learning keeps a corrected task on the stronger model. It does not make that model succeed more often: the ceiling for a corrected task is the stronger model’s own acceptance, and the overall gap does not close by itself. The warm re-run is part of the same internal pilot, not an independent benchmark.',
      },
      {
        title: 'Caveats',
        body: 'Internal pilot, not an independent benchmark. Results hold for this pilot only. Taksim only switches between Claude models, never to third-party models.',
      },
    ],
    learn: {
      title: 'How routing learns from outcomes',
      body: 'The learning loop on the home page, in more detail.',
      items: [
        'One tier at most: when the task fits, the first real request steps down from Opus to Sonnet; otherwise the start model stays.',
        'Rejections are recorded without a command: a failing CI run, an evaluator, an in-session judge verdict, or a correction reply such as “No, that’s wrong” (Turkish or English). You can also report one with `taksim routing outcome record --session <id> --result rejected`.',
        'After a rejection, Taksim keeps the start model the next time the same task starts, and for a repo or task class once there is enough evidence.',
        'Three acceptances outweigh one rejection. Evidence older than 14 days ages out.',
        'Only a keyed task fingerprint is stored, never prompt or response text. `taksim routing outcome list` shows what was recorded and `taksim memory forget` clears it.',
        'Learning applies only where Taksim routes: `taksim claude` sessions on your own API key, or on a Claude subscription after you opt in with `taksim routing subscription on`.',
      ],
    },
    data: {
      title: 'Data behind the numbers',
      body: 'Every figure on the home page and on this page is computed from one redacted snapshot of the pilot results, not typed into the page.',
      snapshot: 'Snapshot',
      dates: 'Run date',
      catalog: 'Catalog',
      accounting: 'Accounting',
      effort: 'Effort',
      sources: 'Source reports (SHA-256)',
      modelsTitle: 'Models',
      notAcceptedTitle: 'Runs not accepted',
      runsTitle: 'Every run',
      runsBody: 'All runs are listed, including those not accepted. A cost that was not recorded is shown as not measured, never as $0.',
      accepted: 'accepted',
      notAccepted: 'not accepted',
      cols: { phase: 'Phase', task: 'Task', arm: 'Arm', status: 'Status', result: 'Result', served: 'Served', turns: 'Turns', cost: 'Cost' },
      phases: { cold: 'Cold', warm: 'Warm' },
      arms: { baseline: 'Always Opus', fixed: 'Always Sonnet', routed: 'Taksim routed' },
      routedModel: 'Taksim chooses',
    },
    back: 'Back to the results',
  },

  compare: {
    eyebrow: 'Compare',
    title: 'Taksim next to the alternatives.',
    lede: 'Taksim is one of several ways to spend less on Claude Code. This page sets it beside the tools you are most likely to be weighing. Every competitor fact links to its public source, and the last section says where Taksim is weaker.',
    asOf: 'As of 29 Oct 2026.',
    asOfNote:
      'Competitor products change often. Check each source before you decide, and tell us at [info@edgee.tech](mailto:info@edgee.tech) if a fact here is out of date.',
    freeSentence: 'If `/model sonnet` is enough for your work, use it; it is free.',
    freeBody:
      'Taksim is for work where it is not enough: you want ordinary requests kept on Sonnet without thinking about it, spend that steps down instead of cutting off, and a judged record of when Opus was actually needed.',
    tableLabel:
      'Comparison of Taksim with GitHub Copilot Fusion, Claude /advisor, Not Diamond Code, ccusage and plain /model sonnet. The table scrolls sideways.',
    tableCaption: 'Capabilities compared across Taksim and five alternatives, as of 29 Oct 2026',
    featureHeader: 'Capability',
    columns: {
      taksim: 'Taksim',
      fusion: 'GitHub Copilot Fusion',
      advisor: 'Claude /advisor',
      notDiamond: 'Not Diamond Code',
      ccusage: 'ccusage',
      sonnet: 'Plain /model sonnet',
    },
    source: 'Source',
    sourceFor: 'Source for {column}, {feature}',
    rows: {
      claudeOnly: {
        feature: 'Claude-only routing',
        cells: {
          taksim: 'Yes. It switches only among Claude models, never to a third-party model.',
          fusion:
            'No. The pool changes over time; a third-party write-up lists Claude and GPT models, and GitHub’s page names no vendors.',
          advisor: 'Yes. Your Claude main model consults a Claude advisor model.',
          notDiamond:
            'Not stated. Its configuration page lists Anthropic, AWS Bedrock and forwarded Claude Code logins as providers.',
          ccusage: 'Not a router. It reports usage from local data.',
          sonnet: 'Yes. You pick one Claude model and it stays until you change it.',
        },
      },
      local: {
        feature: 'Runs locally, no vendor server',
        cells: {
          taksim:
            'Yes. A local binary with no Taksim server and no account; its services listen on 127.0.0.1. See [Security](/security).',
          fusion:
            'No. It is a Copilot model-picker option in VS Code, Copilot CLI, the Copilot app and JetBrains, so it needs the Copilot service.',
          advisor: 'The advisor runs server-side on Anthropic’s infrastructure; there is nothing extra to install.',
          notDiamond:
            'A lightweight proxy on each machine, plus a hosted dashboard. Per its data dictionary, request metadata is always sent and prompt content only if an admin opts in.',
          ccusage: 'Yes. Reports are built from local data; `--offline` uses cached pricing.',
          sonnet: 'Yes. A built-in Claude Code command; nothing else runs.',
        },
      },
      stepDown: {
        feature: 'Budget caps that step down instead of blocking',
        cells: {
          taksim:
            'Opt-in `taksim budget enforce --mode downgrade` serves routed Claude requests on a cheaper tier at the cap and never blocks one. It is a Pro feature, and paid plans are not on sale yet.',
          fusion:
            'No cap in the Fusion docs. Copilot budgets exist per user, cost center and enterprise, and stop usage only if you turn that option on.',
          advisor: 'No. The docs say there is no setting to cap or force advisor calls.',
          notDiamond: 'Budget caps are not mentioned in its configuration docs.',
          ccusage: 'Budget enforcement is not mentioned on its page.',
          sonnet: 'Not applicable. The model stays as you set it, with no cap.',
        },
      },
      judge: {
        feature: 'Judge evidence per turn',
        cells: {
          taksim:
            'Yes, for judged clients. A judge grades finished turns, and a verdict counts only when two judges agree and one is strong. See [how it works](/how-it-works) and [Clients](/clients).',
          fusion:
            'No verdicts. After a response you can hover over the effort level to see the models used; the docs do not say why they were chosen.',
          advisor:
            'It shows an Advising line and whether the advisor reviewed, declined or was unavailable. The docs describe no verdict on whether a cheaper model would have done.',
          notDiamond:
            'The dashboard shows session activity, usage and savings. Per-turn quality verdicts are not described.',
          ccusage: 'No. It produces usage and cost reports.',
          sonnet: 'No. It only switches the model.',
        },
      },
      ledger: {
        feature: 'Multi-client ledger',
        cells: {
          taksim:
            'Yes. Claude Code, Codex, GitHub Copilot CLI, Devin, OpenCode, Kilo Code, Pi and more in one local ledger. See [Clients](/clients).',
          fusion: 'No. Copilot only: VS Code, Copilot CLI, the Copilot app and JetBrains.',
          advisor: 'No. Claude Code only; advisor usage counts toward the totals in `/usage`.',
          notDiamond: 'Claude Code requests, per its getting-started page.',
          ccusage:
            'Yes. Its page lists many tools, including Claude Code, Codex, OpenCode and GitHub Copilot CLI, so it is broad here too.',
          sonnet: 'No. It switches models and records nothing.',
        },
      },
      subscription: {
        feature: 'Works on Claude subscriptions',
        cells: {
          taksim:
            'Observed by default. Claude-only switching is an opt-in: `taksim routing subscription on`. Read the [plan terms note](/docs#subscriptions-and-api-keys) first.',
          fusion: 'No. It needs a GitHub Copilot plan, not a Claude subscription.',
          advisor: 'Yes. It works on subscription and API-billed accounts; advisor usage counts toward plan limits.',
          notDiamond: 'Yes, in forwarded mode for engineers who sign in with `claude /login`.',
          ccusage: 'Yes. It reads local usage data, including Claude Code 5-hour billing blocks.',
          sonnet: 'Yes. It is built into Claude Code.',
        },
      },
      nativeAudit: {
        feature: 'Audits native routing (/advisor, default model)',
        cells: {
          taksim:
            'Coming; not in this release. Today the gateway forwards `/advisor` unchanged and records advisor usage as its own priced execution.',
          fusion: 'No. It is the router, and its docs show which models were used per response.',
          advisor: 'No. It is the native feature; its usage appears in `/usage`.',
          notDiamond: 'Not described.',
          ccusage: 'It reports which models were used; auditing routing decisions is not part of its page.',
          sonnet: 'No.',
        },
      },
      price: {
        feature: 'Price',
        cells: {
          taksim: `The CLI is free for any individual, at home or at work. Pro is $${prices.pro} a month and Team is $${prices.team} per developer a month; paid plans are not on sale yet. See [pricing](/pricing).`,
          fusion:
            'No separate Fusion charge: each model used is billed at its standard rate, with 30% off model costs on paid plans through 30 Nov 2026.',
          advisor:
            'No separate charge. Advisor tokens are billed at the advisor model’s rate on the API and count toward plan limits on a subscription.',
          notDiamond: 'Pricing is not stated on the pages we read.',
          ccusage: 'MIT licensed; run it with `npx ccusage`.',
          sonnet: 'No extra cost. It is built into Claude Code, and you pay only for model usage.',
        },
      },
    },
    limits: {
      title: 'Where Taksim is weaker',
      body: 'Weigh these alongside the table. They are the reasons you might reasonably choose something else.',
      items: [
        'Routing was not cheaper than always-Sonnet in our pilot. Always-Sonnet cost {sonnetCost} with {sonnetAccepted} of {runsPerArm} runs accepted. Taksim routed cost {taksimCost} with {taksimAccepted} of {runsPerArm}. The {costSavingPct} saving is against always-Opus only. [Method and data](/benchmark).',
        'The pilot is internal: {tasks} tasks on our own Claude Team subscription, not an independent benchmark. We have not run Taksim head to head against `/advisor` or Copilot Fusion, and there is no public independent result yet.',
        'Budget caps that step down are a Pro feature, and paid plans are not on sale yet. The free Developer plan warns and never blocks.',
        'The binaries are unsigned today, so Windows SmartScreen asks you to confirm the first run. See [Security](/security).',
        'Taksim routes only between Claude models. Sessions on AWS Bedrock, Google Vertex AI or Microsoft Foundry start natively, and the Claude desktop app’s Code tab is observed, not routed.',
        'There is no hosted team dashboard: team reports are built from exports each developer shares. macOS is a preview that has not been tested on Mac hardware, and there is no Linux build.',
      ],
    },
    cta: {
      title: 'Try it on your own history.',
      body: 'Install is free and reads the history your coding agents already keep, so you can see what a cheaper model could have done before you change anything.',
      install: 'Get Taksim free',
      benchmark: 'See the pilot data',
    },
  },

  plans: {
    developer: {
      name: 'Developer',
      price: 'Free',
      sub: 'Free for any individual, at home or at work.',
      value: 'Install it and use it. No account and no card required.',
      features: featureList(freeFeatures),
      cta: 'Get Taksim free',
    },
    pro: {
      name: 'Pro',
      price: `$${prices.pro}`,
      per: 'per month',
      badge: `First ${foundingOffer.customers} customers: ${foundingOffer.discountPercent}% off for the first ${foundingOffer.months} months`,
      sub: 'For one developer who wants Taksim to apply the savings, not only report them.',
      lead: 'Everything in Developer, plus:',
      features: featureList(entitlements.pro),
      cta: 'Reserve a founding seat',
    },
    team: {
      name: 'Team',
      price: `$${prices.team}`,
      per: 'per active developer per month',
      sub: `${prices.teamMinDevelopers}-developer minimum ($${prices.teamMinMonthly}/month)`,
      lead: 'Everything in Pro, plus:',
      features: featureList(entitlements.team),
      cta: 'Start a team pilot',
    },
    billingNote: 'Billing opens when checkout is live; reserving costs nothing.',
  },

  pricing: {
    title: 'Free for developers. Paid for automation and teams.',
    lede: 'The Developer plan is free for any individual, at home or at work: install the CLI and use it, no account required. Pro adds automatic routing and budget caps for one developer; Team adds the roll-up for companies.',
    modesTitle: 'How Taksim counts cost depends on how the work is billed',
    faqTitle: 'Pricing questions',
    faq: [
      {
        q: 'Can I use the free version at work?',
        a: 'Yes. The CLI is free for any individual. Pro and Team add automation and team reporting.',
      },
      {
        q: 'Can I buy a plan today?',
        a: 'Not yet. Paid plans are not on sale until checkout is live. Reserve a founding seat or start a team pilot through the [contact form](/contact); reserving costs nothing and does not charge you. The first 20 customers get 50% off for the first 12 months.',
      },
      {
        q: 'Does Taksim change my model on a Claude or ChatGPT subscription?',
        a: 'Not by default. On a Claude Pro, Max or Team login you can opt in with `taksim routing subscription on`; then `taksim claude` can switch among Claude models only, within your organisation’s available models, and keeps --model and /model switches away from the start model. Your login stays the credential and usage stays on the subscription. With the setting off, and always for Codex on a ChatGPT plan, Taksim only observes. Requests Taksim raises to Opus use plan quota faster. The Claude desktop app (Code tab) is observed, not routed: the app sets its own API endpoint for each session. `taksim desktop on` routes plain `claude` CLI sessions started from a terminal.',
      },
      {
        q: 'Is the “could have saved” number guaranteed?',
        a: 'No. It is an estimate: it counts turns where two judges agreed a cheaper tier was sufficient, and every report shows the sample size.',
      },
      {
        q: 'Does anything leave my machine?',
        a: 'Not unless you choose a judge that runs remotely (your own API key or Jev) or share a team export. Exports contain metadata only.',
      },
      {
        q: 'What happens when a paid plan lapses?',
        a: 'Nothing breaks. The Pro and Team features switch off: automatic routing and budget step-down stop, and requests follow your manual `taksim mode` setting or pass through unchanged. Your local data is left untouched, Claude is never blocked, and the Developer features keep working.',
      },
      {
        q: 'How is an active developer counted?',
        a: 'An active developer is one person who uses Taksim on their own machine during the month. Each person counts once, whatever the number of repos or clients, and the Team plan has a 5-developer minimum ($90 per month). The exact seat terms are confirmed before billing opens.',
      },
    ],
  },

  matrix: {
    caption: 'What Taksim can do for each coding client',
    regionLabel: 'Client support table, scrolls horizontally',
    client: 'Client',
    states: {
      yes: 'Supported',
      no: 'Not supported',
      unverified: 'Unverified',
      optIn: 'Opt-in',
    },
    capabilities: {
      observe: {
        label: 'Observe',
        description: 'Prices each session by model from local history, hooks or the client’s own session store.',
      },
      judge: {
        label: 'Judge and evidence',
        description:
          'An LLM judge grades whether a cheaper model tier would have been sufficient; consensus verdicts stay in the local ledger as evidence.',
      },
      gateway: {
        label: 'Gateway',
        description:
          'Requests pass through Taksim’s local gateway on 127.0.0.1. For API-key traffic, and for Claude subscription traffic once you opt in, in sessions you launch through Taksim.',
      },
      context: {
        label: 'Context optimisation',
        description:
          'Changing or trimming request context to reduce cost. Not in the current release for any client; cache guard only reports.',
      },
      route: {
        label: 'Model routing',
        description:
          'Optional live model choice, in sessions you launch through Taksim: on your own API key, or on a Claude Pro, Max or Team login once you opt in. Subscription routing switches only among Claude models.',
      },
    },
    rows: {
      claudeCodePlan: {
        client: 'Claude Code',
        access: 'Free, Pro, Max, Team or Enterprise plan',
        observe: 'History import, hooks and status line.',
        judge: '',
        gateway: 'Opt-in (`taksim routing subscription on`) on a Pro, Max or Team login; off by default, otherwise launched natively.',
        context: '',
        route: 'Opt-in, Claude models only; your login stays the credential.',
      },
      claudeDesktop: {
        client: 'Claude desktop app',
        access: 'Claude plan',
        observe: 'Local transcripts via a user-level hook.',
        judge: '',
        gateway: 'Code tab is observed, not routed yet: the app sets its own API endpoint per session. `taksim desktop on` routes plain `claude` terminal sessions.',
        context: '',
        route: 'Not available yet for the Code tab.',
      },
      claudeCodeApi: {
        client: 'Claude Code',
        access: 'Anthropic API key',
        observe: '',
        judge: '',
        gateway: 'Optional, in sessions you start with taksim claude.',
        context: '',
        route: 'Optional, through the local gateway, in sessions you start with taksim claude.',
      },
      codexPlan: {
        client: 'Codex CLI',
        access: 'ChatGPT plan',
        observe: 'History import from CODEX_HOME sessions.',
        judge: 'History judging and an in-session Stop hook.',
        gateway: 'Current release: ChatGPT sign-in stays native.',
        context: '',
        route: 'Not offered in the current release.',
      },
      codexApi: {
        client: 'Codex CLI',
        access: 'OpenAI API key',
        observe: 'History import from CODEX_HOME sessions.',
        judge: '',
        gateway: 'Optional: in Codex sessions Taksim launches on an API key, the local gateway forwards requests to OpenAI.',
        context: '',
        route: 'Observed; not routed. Taksim routes only between Claude models.',
      },
      copilotPlan: {
        client: 'GitHub Copilot',
        access: 'Copilot plan',
        observe: 'Usage import from the local Copilot CLI session store.',
        judge: 'Not yet.',
        gateway: '',
        context: '',
        route: 'No request-time routing. taksim copilot only picks the startup model.',
      },
      devinCli: {
        client: 'Devin CLI',
        access: 'Devin plan',
        observe: 'History import from the local Devin session store.',
        judge: 'Not yet.',
        gateway: '',
        context: '',
        route: 'No request-time routing.',
      },
      devinDesktop: {
        client: 'Devin Desktop',
        access: 'Formerly Windsurf, Devin plan',
        observe: 'History import from the local ACP event log.',
        judge: '',
        gateway: '',
        context: '',
        route: 'Not routed. No proxy and no model changes.',
      },
      openCodeKilo: {
        client: 'OpenCode and Kilo Code',
        access: 'Your own provider settings',
        observe: 'History import from the local session databases.',
        judge: 'Turns that ran on Claude-tier models.',
        gateway: '',
        context: '',
        route: 'Not offered.',
      },
      pi: {
        client: 'Pi and Oh My Pi',
        access: 'Your own provider settings',
        observe: 'History import from local session files.',
        judge: 'Turns that ran on Claude-tier models.',
        gateway: '',
        context: '',
        route: 'Not offered.',
      },
      agentWorkstation: {
        client: 'Agent Workstation',
        access: 'Your own provider settings',
        observe: 'Usage import from the local usage ledger.',
        judge: 'Not yet.',
        gateway: '',
        context: '',
        route: 'Not offered.',
      },
      gemini: {
        client: 'Gemini CLI',
        access: 'Native Google sign-in or your API key',
        observe: 'Local JSON and JSONL chat history; unknown prices stay unknown.',
        judge: 'Recorded text turns with a recognized model tier.',
        gateway: '',
        context: '',
        route: 'Not offered; Google sign-in traffic stays native.',
      },
      cline: {
        client: 'Cline',
        access: 'Your own provider settings',
        observe: 'SDK v1 and legacy task history. Client-reported cost is separate from list-price estimates.',
        judge: 'Local recorded turns with a recognized model tier.',
        gateway: '',
        context: '',
        route: 'Not offered; extension settings are not rewritten.',
      },
      qwen: {
        client: 'Qwen Code',
        access: 'Native sign-in or your provider settings',
        observe: 'Local JSONL chat history; unknown prices stay unknown.',
        judge: 'Recorded text turns with a recognized model tier.',
        gateway: '',
        context: '',
        route: 'Not offered; sign-in traffic stays native.',
      },
    },
    footnote:
      'This table describes the current release. Claude subscription routing is an opt-in setting, off by default: Taksim sets only the base URL, forwards your login unchanged without reading, copying or logging it, and switches only among Claude models. EdgeeTech reads Anthropic’s terms as allowing a choice among Claude models; this is not an endorsement by Anthropic. Anthropic’s Legal and compliance page restricts third-party intermediation of Claude.ai credentials (it names Free, Pro and Max; Team and Enterprise are not clearly addressed), so you decide whether to turn it on. OpenAI’s proxy path for ChatGPT sign-in has not been verified by Taksim to keep plan and workspace controls, so Codex plans stay observe-only.',
    sources: 'Sources:',
    and: 'and',
    sourceLabels: {
      claudeLegal: 'Claude Code legal and compliance',
      codexAuth: 'Codex authentication',
    },
  },

  docsNav: {
    label: 'Documentation navigation',
    home: 'Documentation',
    search: 'Search documentation',
    groups: [
      {
        title: 'Introduction',
        links: [
          ['Welcome to Taksim', '/docs'],
          ['How Taksim works', '/docs#how-taksim-works'],
          ['Step by step', '/how-it-works'],
          ['Pilot benchmark', '/benchmark'],
          ['Compare', '/compare'],
          ['Changelog', '/changelog'],
        ],
      },
      {
        title: 'Quickstart',
        links: [
          ['Easy install', '/docs/quick-start'],
          ['Full install guide', '/docs/getting-started'],
          ['Next steps', '/docs/next-steps'],
          ['Troubleshooting', '/docs/troubleshooting'],
        ],
      },
      {
        title: 'Use Taksim',
        links: [
          ['Dashboard', '/docs/next-steps#dashboard'],
          ['Judging', '/docs/next-steps#judging'],
          ['Budgets, digest and alerts', '/docs/next-steps#budgets'],
          ['Cache guard', '/docs/next-steps#cache'],
          ['Quota and anomalies', '/docs/next-steps#insights'],
          ['Routing on your API key', '/docs/next-steps#routing'],
          ['Team roll-up', '/docs/next-steps#team'],
          ['Update and uninstall', '/docs/quick-start#update'],
        ],
      },
      {
        title: 'Core concepts',
        links: [
          ['Judging and consensus', '/docs#judging'],
          ['Subscriptions & API keys', '/docs#subscriptions-and-api-keys'],
          ['Local gateway', '/docs#connector'],
          ['Verification', '/docs#verification'],
          ['Privacy model', '/privacy'],
        ],
      },
      {
        title: 'Clients',
        links: [
          ['Full client table', '/clients'],
          ['Claude Code', '/docs#client-compatibility'],
          ['Codex', '/docs#client-compatibility'],
          ['GitHub Copilot', '/docs#client-compatibility'],
          ['Devin and Devin Desktop', '/docs#client-compatibility'],
          ['OpenCode, Kilo Code and Pi', '/docs#client-compatibility'],
        ],
      },
    ] as { title: string; links: [string, string][] }[],
  },

  docsSearch: {
    label: 'Search documentation',
    placeholder: 'Search concepts, clients, or commands…',
    empty: 'No matching documentation yet.',
    entries: [
      {
        title: 'Subscriptions & API keys',
        copy: 'How Taksim handles Claude and ChatGPT subscriptions, the opt-in Claude-only routing setting, and how API-key routing differs.',
        href: '#subscriptions-and-api-keys',
        keywords: 'subscription max pro team api key rewrite observe quota baseline report routing subscription opt-in',
      },
      {
        title: 'Easy install',
        copy: 'Three steps: one PowerShell line, taksim setup, taksim dashboard. Troubleshooting, update and uninstall.',
        href: '/docs/quick-start',
        keywords:
          'quickstart easy install one line irm iex setup dashboard smartscreen unblock execution policy path doctor update uninstall',
      },
      {
        title: 'Full install guide',
        copy: 'Install the verified Windows release, check it, and start Claude Code or Codex.',
        href: '/docs/getting-started',
        keywords:
          'quickstart install setup cli start latest release windows powershell checksum claude code codex doctor troubleshooting history import',
      },
      {
        title: 'Next steps',
        copy: 'Dashboard, judging, budgets, the weekly digest, Slack and webhook alerts, and the team roll-up.',
        href: '/docs/next-steps',
        keywords: 'dashboard judge budget enforce downgrade mode economy balanced quality advisor digest slack webhook notify alerts team export summary',
      },
      {
        title: 'Troubleshooting',
        copy: 'Fix a stopped gateway, a silent judge hook, a mode that changed nothing, a budget downgrade, an unsigned update and the macOS PATH, or remove the hooks.',
        href: '/docs/troubleshooting',
        keywords:
          'troubleshooting gateway not running stale judge hook stop mode economy subscription budget downgrade update apply unsigned allow-unsigned macos path uninstall dry-run fix error',
      },
      {
        title: 'How Taksim works',
        copy: 'Understand the local ledger, judging, consensus and the shadow policy.',
        href: '#how-taksim-works',
        keywords: 'ledger judge consensus shadow policy verdict tier',
      },
      {
        title: 'Client compatibility',
        copy: 'See exact support boundaries for Claude Code, Codex, Copilot, Devin, OpenCode, Kilo Code, Pi and Agent Workstation.',
        href: '#client-compatibility',
        keywords: 'history managed live observation import',
      },
      {
        title: 'Local gateway',
        copy: 'Understand the optional, fail-open routing path for API-key traffic.',
        href: '#connector',
        keywords: 'gateway local fail open resilience native fallback',
      },
      {
        title: 'Privacy model',
        copy: 'Understand transient processing and canonical telemetry.',
        href: '/privacy',
        keywords: 'data security content storage',
      },
    ],
  },

  docs: {
    eyebrow: 'Introduction',
    title: 'Welcome to Taksim',
    lede: 'A local-first control plane for AI coding agents. Its sufficiency ledger records which model ran, what it cost, and whether a cheaper model would have been enough.',
    accountTitle: 'No account, no Taksim server',
    accountBody:
      'Install Taksim and use it without an account or sign-in. Taksim runs no server of its own: the ledger, the reports and the dashboard stay on your machine. Start with the [easy install](/docs/quick-start).',
    helpTitle: 'Something not working?',
    helpBody:
      'The [troubleshooting guide](/docs/troubleshooting) gives the exact command and the output to expect for the common problems. See [what changed](/changelog) in each release.',
    how: {
      title: 'How Taksim works',
      body: 'Taksim reads the local history and hooks your coding clients already write, prices each session by model, and records it in a local ledger. It stores metadata only: no prompts, responses, code or credentials. Local repository folders stay in your local database only, to attribute cost, and never appear in exports.',
      calloutTitle: 'Observe first',
      calloutBody:
        'By default Taksim records and judges. It does not change which model runs. Live routing is optional and limited to traffic billed to your own API key.',
    },
    judging: {
      title: 'Judging and consensus',
      items: [
        {
          term: 'Judge',
          body: 'An LLM judge reviews a completed turn and estimates a sufficient model tier: in-session Claude or Codex, your Anthropic API key, TypeSafe Jev with your own key, or a local Ollama model. This does not prove a cheaper model would reproduce the result. Claude Code, Codex, OpenCode, Kilo Code, Pi and Devin Desktop turns can be judged; Copilot and Devin CLI turns are priced but not yet judged.',
        },
        {
          term: 'Consensus',
          body: 'A verdict counts only when two judges agree and at least one of them is a strong judge. Weak-only agreement and disputes are reported but never counted.',
        },
        {
          term: 'Shadow policy',
          body: 'Taksim can suggest routing defaults from consensus verdicts and report what they would have changed. The shadow policy stays counterfactual; it never changes your model.',
        },
        {
          term: 'Routing recommendations',
          body: 'For API-key traffic, `routing recommend` turns consensus verdicts into a suggested default tier per repo, task class and client. Opt-in `routing auto` applies it to fresh contexts in `taksim claude` sessions and escalates back to your model on failure signals. On a Claude subscription, routing is a separate opt-in (`taksim routing subscription on`). Codex plans are not routed.',
        },
      ],
    },
    gateway: {
      title: 'Local gateway, fail-open by design',
      body: 'Optional live routing for API-key traffic uses a local gateway on 127.0.0.1. The gateway answers only loopback requests from your own machine and refuses cross-site browser requests, so web pages cannot reach it. Telemetry, persistence, and remote advice do not get to hold a healthy provider request hostage.',
      calloutTitle: 'Native workflow stays available',
      calloutBody:
        'If the managed path cannot start safely, Taksim preserves the native client invocation instead of blocking the developer. Raw prompt, response, and source content is not persisted by default. Update and pricing checks use the network; optional remote judges receive evaluation content, and configured notifications or exports send their selected data. Your coding client still connects to its own provider.',
    },
    subscriptions: {
      title: 'Subscriptions: observed by default, Claude routing is opt-in',
      body: 'By default, if Claude Code is authenticated with a Claude subscription, Taksim does not rewrite the model: `taksim claude` launches Claude Code natively and observes it from local transcripts and hooks. Turn on `taksim routing subscription on` (off by default) and `taksim claude` on a claude.ai login (Pro, Max or Team) routes through the local gateway. Only `ANTHROPIC_BASE_URL` is set; your login stays the credential, the gateway forwards the `Authorization` header unchanged and never reads, copies or logs it, and usage stays on the subscription as quota, not invoiced. Taksim switches only among Claude models, within your organisation’s `availableModels`, keeps --model and /model switches away from the start model, and fails open to your original request. Codex on a ChatGPT plan stays observed from its local session history.',
      body2:
        'Subscription usage is shown as API-equivalent list-price dollars, labelled as quota, not billed. With routing on, the first real request of a session is chosen by task fit, so an Opus default can step down one tier when the task fits, and it escalates on failure evidence; warm-cache sessions stay sticky. Usage is reported as plan quota, and requests Taksim raises to Opus use plan quota faster. The baseline report (`taksim report baseline`) and judge verdicts on finished turns remain available either way.',
      body3:
        'Why it is opt-in and Claude-only: Taksim never routes a subscription turn to a third-party model, and the gateway never reads, copies or logs your login. EdgeeTech reads Anthropic’s terms as allowing a choice among Claude models and forbidding third-party models; this is not an endorsement by Anthropic. Anthropic’s Legal and compliance page for Claude Code restricts third-party intermediation of Claude.ai credentials (it names Free, Pro and Max; Team and Enterprise are not clearly addressed), which is why `routing.subscription` is off by default and you decide whether to turn it on. OpenAI documents a proxy path for ChatGPT sign-in, but Taksim has not verified that plan, quota and workspace controls survive it, so Codex plans stay observe-only. Provider entitlements and workspace policy stay authoritative.',
      body4:
        'Claude desktop app (Code tab) sessions are observed, not routed yet: the app sets its own API endpoint for each session, so they go straight to Anthropic. `taksim desktop on` routes plain `claude` CLI sessions started from a terminal on that profile; `taksim desktop off` turns it off, and it is off by default. It builds on `routing.subscription`, so the same Claude-only allowlist, `availableModels`, --model and /model rules apply, and the login is forwarded unchanged, never read or stored. One gateway runs per Windows logon session. If the gateway is unavailable when a session starts, the session goes straight to Anthropic. Tested on Windows; macOS is untested for this feature.',
    },
    verification: {
      title: 'Verification is evidence-dependent',
      body: 'A verified outcome means the configured and available engineering evidence satisfied the applicable rules. It is not a guarantee that code is correct, secure, or complete.',
    },
    compat: {
      title: 'Client compatibility',
      updated: 'Last verified · 26 September 2026',
      caption: 'Client compatibility',
      headers: ['Client', 'History', 'Live routing', 'Judging', 'Boundary'],
      rows: [
        [
          'Claude Code',
          'Available',
          'API key only, optional',
          'Available',
          'Subscription traffic is observed; Claude-only routing is opt-in',
        ],
        [
          'Codex',
          'Available',
          'API key only, optional',
          'Available',
          'Responses gateway on API keys; model rewrite only for proven model ids; ChatGPT sign-in is observed, not rewritten',
        ],
        [
          'GitHub Copilot',
          'Available',
          'Not available',
          'Not yet',
          'Usage import from the local Copilot CLI session store; startup model selection only',
        ],
        ['Devin CLI', 'Available', 'Not available', 'Not yet', 'History import only'],
        [
          'Devin Desktop',
          'Available',
          'Not available',
          'Available',
          'Formerly Windsurf; observed from its local event log, never routed',
        ],
        [
          'OpenCode, Kilo Code',
          'Available',
          'Not available',
          'Claude-tier models',
          'History import from local session databases',
        ],
        ['Pi, Oh My Pi', 'Available', 'Not available', 'Claude-tier models', 'History import from local session files'],
        [
          'Agent Workstation',
          'Available',
          'Not available',
          'Not yet',
          'Usage import from the local usage ledger; approvals kept as weak quality evidence',
        ],
      ],
    },
    next: 'Next',
    nextLink: 'Easy install',
    toc: {
      label: 'On this page',
      how: 'How Taksim works',
      judging: 'Judging and consensus',
      gateway: 'Local gateway',
      subscriptions: 'Subscriptions & API keys',
      verification: 'Verification',
      compat: 'Client compatibility',
    },
  },

  quickStart: {
    eyebrow: 'Quickstart',
    title: 'Easy install',
    lede: 'The free Developer plan in three steps: install, run setup, then open your local dashboard. No account or administrator rights required. Windows x64 and macOS packages are available; see the platform notes below.',
    install: {
      title: '1. Install',
      body: 'Open **PowerShell** (press Start, type PowerShell, press Enter), paste this line and press Enter:',
      after:
        'It downloads the latest Taksim release, checks it against the published checksums, installs it for your user only and adds `taksim` to your PATH. When it finishes, it starts step 2 for you.',
      copy: 'Copy',
      copied: 'Copied',
    },
    setup: {
      title: '2. Run setup',
      body: 'If setup did not start on its own, open a new terminal (PowerShell on Windows) and run:',
      seeTitle: 'What you will see',
      see: [
        '**Detected clients**: the coding agents found on this machine, such as Claude Code, Codex, GitHub Copilot, OpenCode, Kilo Code and Pi.',
        '**Credential mode**: a subscription sign-in is observed by default. Taksim reads its transcripts and hooks; subscription traffic passes through Taksim only if you opt in to Claude routing.',
        '**Import and pricing**: the history those clients already keep is imported and priced at list rates.',
        '**One question** about the Claude desktop Stop hook (`Install it? [Y/n]`). It lets Claude grade its own finished turns. Press Enter to accept, or type `n` to skip.',
        '**Your first report** and the next commands to try. You can rerun setup at any time.',
      ],
    },
    dashboard: {
      title: '3. Open the dashboard',
      body: 'Setup opens it when it finishes. To open it again later:',
      after:
        'The dashboard runs only on your machine (127.0.0.1) and is read-only: spend by repo, model and client, what a cheaper model could have saved where two judges agree, judge coverage and cache efficiency. Press Ctrl+C in the terminal to stop it.',
    },
    doneTitle: 'That is it',
    doneBody:
      'Keep using your coding agents as usual; Taksim reads what they already write to disk. See [next steps](/docs/next-steps) for judging, budgets, Slack alerts and team reports, or the [full install guide](/docs/getting-started) for every detail.',
    troubleshooting: {
      title: 'If something goes wrong',
      items: [
        {
          q: 'Windows SmartScreen or your antivirus blocks `taksim.exe`',
          a: 'The Taksim binary is not code-signed yet, so Windows may warn about an unrecognised app. If SmartScreen appears, choose **More info**, then **Run anyway**. If Windows says the file came from another computer, unblock the installed copy and try again: `Unblock-File "$env:LOCALAPPDATA\\Taksim\\current\\taksim.exe"`',
        },
        {
          q: 'PowerShell says running scripts is disabled',
          a: 'For this PowerShell window only, run `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`, then paste the install line again. Do not change the machine-wide policy.',
        },
        {
          q: 'PowerShell cannot find `taksim`',
          a: 'Close PowerShell and open a new window so it picks up the updated PATH, then run `taksim version`. If it is still missing, run the install line again; running it twice is safe.',
        },
        {
          q: 'Something else looks wrong',
          a: 'Run `taksim doctor`. It checks the installation, your clients, the credential mode and coverage, and says what to fix. If the problem stays, send that output to [support](mailto:info@edgee.tech?subject=Taksim%20support).',
        },
      ],
    },
    update: {
      title: 'Update',
      body: '`taksim doctor` tells you when a newer release is out. To check, and then install it:',
      after: 'Updating keeps your data and settings. Running the install line again does the same. `taksim update --apply` checks the downloaded installer against the release’s `SHA256SUMS.txt` and refuses on a mismatch or a missing entry. A signed installer is accepted only from a publisher built into Taksim, and an unsigned one still needs `--allow-unsigned`.',
    },
    uninstall: {
      title: 'Uninstall',
      body: 'Review what will be removed, then uninstall Taksim:',
      steps: [
        'Preview the changes first: `taksim uninstall --dry-run`.',
        'Run `taksim uninstall` to remove Taksim. Your local ledger and reports are preserved.',
        'To permanently delete local data too, run `taksim uninstall --purge-data`. This cannot be undone.',
      ],
    },
    savings: {
      title: '4. Turn on savings',
      body: 'Setup only observes. Pick the path that matches how you pay for Claude Code. Either way Taksim switches only among Claude models, and `taksim mode balanced` puts the defaults back.',
      apiKeyTitle: 'On an Anthropic API key',
      apiKeyBody:
        'You are billed per token. `taksim mode economy` keeps ordinary requests on Sonnet at low effort in sessions you start with `taksim claude`. It prints this:',
      subscriptionTitle: 'On a Claude subscription (Pro, Max or Team)',
      subscriptionBody:
        'Subscription traffic is only observed until you opt in. Read the [plan terms note](/docs#subscriptions-and-api-keys) first: Anthropic restricts third-party intermediation of Claude.ai credentials, so you decide. Then turn routing on, choose the mode and start a new `taksim claude` session. Requests Taksim raises to Opus use plan quota faster.',
      checkTitle: 'Check the result',
      checkBody:
        'After some work, run `taksim report weekly`. It shows spend, what always-default-tier and always-strong-tier would have cost, and how Taksim’s selections compared with what ran. With no sessions yet, every figure reads `n/a`:',
    },
    manual: {
      title: 'Manual install and checksum check',
      body: 'The one-line installer already checks the download against `SHA256SUMS.txt`. To check it yourself first, open the [latest release](https://github.com/edgeetech/taksim-releases/releases/latest) and download the archive for your system together with `SHA256SUMS.txt`. Then compare hashes.',
      windowsTitle: 'Windows (PowerShell)',
      windowsAfter: 'The `Hash` value must equal the entry for that file in `SHA256SUMS.txt`; letter case does not matter.',
      macTitle: 'macOS (Terminal)',
      macAfter: 'Both hashes must be identical. On an Intel Mac use `taksim-connector-osx-x64.tar.gz` instead.',
      after: 'If they differ, do not run the file: download it again and tell us at [info@edgee.tech](mailto:info@edgee.tech). To install from files you verified, follow the offline install steps linked from the [releases repository](https://github.com/edgeetech/taksim-releases).',
    },
    toc: {
      label: 'On this page',
      install: 'Install',
      setup: 'Run setup',
      dashboard: 'Open the dashboard',
      savings: 'Turn on savings',
      manual: 'Manual install',
      troubleshooting: 'Troubleshooting',
      update: 'Update',
      uninstall: 'Uninstall',
    },
  },

  gettingStarted: {
    eyebrow: 'Quickstart',
    title: 'Install guide',
    lede: 'Install Taksim on Windows or macOS, confirm it worked, and start your first session. Windows instructions come first; the macOS section follows. For the short version, use the [easy install](/docs/quick-start).',
    noAccountTitle: 'No Taksim account required',
    noAccountBody:
      'Install and run Taksim directly. There is no Taksim sign-in and no Taksim server; everything runs on your machine.',
    plan: {
      title: '1. Confirm your plan',
      body: 'The Taksim CLI is free for any individual developer, at home or at work. Pro and Team are paid plans that add automation and team reporting.',
      selfTitle: 'Install for myself',
      selfSub: 'Continue with the free CLI',
      teamTitle: 'Set up my team',
      teamSub: 'Talk to us about Team',
    },
    prerequisites: {
      title: '2. Check the prerequisites',
      body: 'You need Windows x64 with Windows PowerShell 5.1 or PowerShell 7; no administrator rights or .NET SDK. No Taksim account is required. Taksim works from the coding clients you already use, such as [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) or [Codex](https://developers.openai.com/codex/cli/); install and sign in to at least one of them.',
    },
    install: {
      title: '3. Install with one line',
      body: 'Open PowerShell and run the command below. It downloads the latest release over HTTPS, checks the Connector archive and the installer against the published `SHA256SUMS.txt` (and stops if anything does not match, or if an entry appears twice), installs into `%LOCALAPPDATA%\\Taksim`, adds it to your user PATH and then runs `taksim setup`.',
      pinnedTitle: 'Pin a version or skip setup',
      pinnedBody: 'To install one specific release without running setup afterwards:',
      note: 'Taksim keeps its versioned binaries under `%LOCALAPPDATA%\\Taksim` and its separate user data under `%USERPROFILE%\\.taksim`. Installing an updated version does not replace that user-data directory.',
    },
    verify: {
      title: '4. Verify the installation',
      body: 'Open a new terminal (PowerShell on Windows) with Taksim on your PATH and run:',
      after:
        'All three commands should complete successfully. `doctor` checks the local environment and says when an update is available; `install status` shows the installed version and path.',
    },
    setup: {
      title: '5. Run setup and open the dashboard',
      body: 'The installer runs setup for you. Run it again at any time; it is safe to repeat. It detects your clients and their credential mode, imports and prices their history, turns on in-session judging and writes your first report. Then open the local dashboard:',
    },
    session: {
      title: '6. Optional: start a managed session',
      body: 'You can keep running `claude`, `codex` and your other clients exactly as before; Taksim reads their history. To let Taksim launch Claude Code with its hooks, status line and optional routing, or Codex with its hooks and status line, run one of these. Arguments for the native client can follow the command.',
      expectTitle: 'What to expect',
      expectBody:
        'On a Claude or ChatGPT subscription, Taksim starts the client natively and observes it; Claude Code subscription traffic passes through Taksim only if you opt in with `taksim routing subscription on`. With an API key, Taksim prepares its local gateway on `127.0.0.1` first; if the managed path is unavailable, the client falls back to its native behaviour. The ledger stays local. Update and pricing checks use the network; optional remote judges and configured notifications or exports send selected data. Your coding client still connects to its own provider.',
    },
    inspect: {
      title: '7. Inspect the latest session',
      body: 'After completing a managed task, inspect the verification evidence Taksim recorded for the latest observed request:',
      after:
        'The explanation keeps missing or incomplete evidence explicit; a successful provider response is not presented as proof by itself.',
    },
    history: {
      title: 'Optional: import history again',
      body: 'Setup already imports every client it detects. To import again later, or to import a client setup did not find:',
    },
    troubleshooting: {
      title: 'Troubleshooting',
      items: [
        {
          q: 'PowerShell cannot find `taksim`',
          a: 'Close PowerShell, open a new terminal, and run `taksim version` again. If it is still unavailable, rerun the installer and then use `taksim doctor` to inspect the local setup.',
        },
        {
          q: 'Windows SmartScreen blocks `taksim.exe`',
          a: 'The binary is not code-signed yet. Choose **More info**, then **Run anyway**, or unblock the installed copy with `Unblock-File "$env:LOCALAPPDATA\\Taksim\\current\\taksim.exe"`.',
        },
        {
          q: 'The installer script is blocked',
          a: 'Do not lower your global execution-policy setting. For the current PowerShell session only, run `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`, then rerun the installer command above.',
        },
        {
          q: '`taksim doctor` reports an error',
          a: 'Read the reported check, make the indicated local correction, and rerun `taksim doctor`. If the issue remains, include that output when you [contact support](mailto:info@edgee.tech?subject=Taksim%20support).',
        },
      ],
    },
    savingsTitle: '8. Turn on savings',
    toc: {
      label: 'On this page',
      plan: 'Confirm your plan',
      prerequisites: 'Prerequisites',
      install: 'Install',
      verify: 'Verify installation',
      setup: 'Setup and dashboard',
      session: 'Managed session',
      inspect: 'Inspect latest session',
      history: 'Import history',
      savings: 'Turn on savings',
      troubleshooting: 'Troubleshooting',
    },
  },

  nextSteps: {
    eyebrow: 'Next steps',
    title: 'After setup',
    lede: 'Short guides for what most people turn on next. Everything runs on your machine.',
    dashboard: {
      title: 'Dashboard',
      body: 'A local, read-only dashboard in your browser with Overview, Costs (by repo, task, client, model or day), Sessions, Judge and Team pages. **Share summary** exports a one-page executive summary that carries repository aliases only; the second command writes the same summary as a file.',
    },
    judging: {
      title: 'Judging: was the cheaper model enough?',
      body: 'Setup turns on in-session judging for sessions you start with `taksim claude`. To also grade Claude desktop and plain `claude` sessions, or Codex sessions, add the user-level Stop hooks (Codex asks you to trust its hook once, in `/hooks`):',
      history:
        'To grade the history you imported with a judge you choose (a local Ollama model, or your own Anthropic key), start with a dry run that shows how many turns would be graded and the estimated cost:',
      after:
        'The in-session judge asks at the end of a session and you can decline. `judge status` shows coverage and agreement. Only verdicts where two judges agree, one of them strong, count toward the “could have saved” figure.',
    },
    budgets: {
      title: 'Budgets, the weekly digest and Slack alerts',
      body: 'Budgets warn by default and never block: set a daily or monthly amount in API-equivalent dollars for yourself, a repo or the team, and Taksim shows it in the status line and warns at 75%, 90% and 100%.',
      enforce:
        'Optionally, `taksim budget enforce --mode downgrade` (off by default) makes the gateway serve routed Claude requests on a cheaper tier, Sonnet by default or Haiku with `--to haiku`, while your developer or repo budget is at or above a threshold (`--at`, in percent of the limit, default 100). It never blocks a request or leaves Claude. Pins, required-safety requests and phases that already escalated are left alone, and a call that fails before any response byte is retried once on the model you asked for. The step down ends when the day or month rolls over, you raise the limit or you run `--mode off`. It applies to traffic the gateway routes: sessions started with `taksim claude` on an API key, and subscription sessions only with `routing subscription on`. Spend is a soft cap, refreshed every 30 seconds, so it limits the rate, not the total. `taksim budget status`, `diagnostics downgrades` and `report weekly` count the step downs.',
      digest: 'The digest is a one-page “what you could have saved” summary, written to a file:',
      notify:
        'To receive the digest and budget alerts in Slack or any webhook, save the address once (it is stored in Windows Credential Manager, and only aggregates and repo aliases are sent), send a test, then post the digest:',
    },
    cache: {
      title: 'Cache guard and cache costs',
      body: 'Cache guard adds informational Claude Code hooks. It tells you when a large session resumes after its prompt cache expired, with the tokens and cost to re-cache, and its context guard tells you once when a session grows past a size you choose (default: 200k tokens), with the per-turn cost of carrying it, so you can `/compact` or start fresh. Nothing is blocked and no request is sent.',
      insights:
        'Cache costs are priced at the lifetime each write recorded (5 minutes or 1 hour), including fast mode. The cache report shows that mix and which pauses really cost a re-cache:',
    },
    insights: {
      title: 'Subscription quota and spend anomalies',
      quota:
        'On a Claude Pro or Max plan, or Codex signed in with ChatGPT, `insights quota` shows how much of your 5-hour and weekly limits you used, how often you hit them, and which repos, models and sessions used the most, from the readings the clients already report. Taksim never reads subscription credentials and never calls a vendor usage endpoint. The status line adds a quota segment once a window passes 75%.',
      anomalies:
        '`insights anomalies` compares recent spend with the 28 days before it and lists what stands out, such as spend spikes, runaway sessions, a jump in Opus or fast-mode share, or a switch from subscription to API-key billing, each with the reason and a suggested action. It stays quiet until there is enough history.',
    },
    routing: {
      title: 'Routing on your own API key',
      body: 'If you pay per token with your own Anthropic API key, `routing recommend` suggests a default model tier per repo, task class and client from turns two judges agreed on. It shows the sample size, the confidence and the saving on the judged turns. Thin evidence, any verdict that the cheaper model fell short, or an earlier escalation keeps the current model. It only advises; nothing changes until you choose.',
      auto:
        '`routing auto on` (off by default) applies a recommended downgrade only when a fresh context starts in a session you launched with `taksim claude`, such as a new session or a subagent. It never switches a conversation that is already running, and your pins, budgets and native `/model` choices still win.',
      modes:
        '`taksim mode economy|balanced|quality` is one switch over these settings, and `taksim mode` with no argument shows the mode in force and anything you changed by hand since. `balanced` is today’s defaults. `economy` turns `routing.auto` on and lowers the capability bar for ordinary requests, so they run Sonnet at low effort instead of medium. `quality` keeps `routing.auto` off, raises the bar so ordinary requests run Opus at medium effort, and stops using the low (Haiku) tier. It is a preset, not a measured saving. Escalations, risk and failure handling, your pins and an explicit effort are unchanged, and `routing.subscription` is never touched. While a mode other than `balanced` is set, only Claude models your organisation’s managed model policy allows are candidates; if that policy cannot be read, the request is forwarded unchanged.',
      advisor:
        'Claude Code’s `/advisor` works through Taksim. The advisor tool and its responses are forwarded unchanged, and routing never swaps your model into a pairing the API would refuse; the request keeps your model instead. Advisor tokens are recorded and priced as their own execution at the advisor model’s rates and show up in `taksim report task-cost`; a result Taksim cannot price is flagged, not counted as zero.',
      escalation:
        'When a downgraded turn shows signs of trouble (tool, test or build failures, a retry or correction, an upstream error), Taksim goes back to the model you asked for and stays there for that phase. A downgraded call that fails before any response reaches you is retried once on your model. `diagnostics downgrades` shows every downgrade and escalation. Claude subscription routing is a separate opt-in (`taksim routing subscription on`); ChatGPT plans are observed only. Routing also learns from outcomes. If you reply to a stepped-down turn with a correction such as “No, that’s wrong” (Turkish or English), Taksim moves back to the start model and records the rejection itself; a `taksim routing outcome record --session <id> --result rejected` report or an in-session judge verdict counts too. Taksim then keeps the start model the next time the same kind of task starts. It stores only a keyed task fingerprint, `taksim routing outcome list` shows what was recorded, and `taksim memory forget` clears it.',
    },
    desktop: {
      title: 'Routing plain claude terminal sessions',
      body: 'Claude desktop app (Code tab) sessions are observed (cost reports, in-session judge), not routed: the app sets its own API endpoint for each session, so routing is not available for it yet. To route plain `claude` CLI sessions started from a terminal on that profile, run this once; it is opt-in, off by default and tested on Windows only. Only Claude models are used, within your organisation’s `availableModels`, and --model and /model are respected. One gateway runs per Windows logon session; if it is unavailable, sessions go straight to Anthropic. Your login is forwarded unchanged, never read or stored. `taksim desktop status` warns when the desktop app’s launch environment bypasses Taksim. In routed sessions a one-line notice names the model when a reply came from a different model than you asked for. `taksim desktop off` turns it off.',
    },
    team: {
      title: 'Team roll-up',
      body: 'Each developer writes a metadata-only export into a shared folder and can inspect it before sharing; exports carry repo aliases, never paths. The team lead combines them into one report, or opens them in the dashboard. The team roll-up is part of the [Team plan](/pricing).',
    },
    toc: {
      label: 'On this page',
      dashboard: 'Dashboard',
      judging: 'Judging',
      budgets: 'Budgets and alerts',
      cache: 'Cache guard',
      insights: 'Quota and anomalies',
      routing: 'Routing (API key)',
      desktop: 'Routing (plain claude sessions)',
      team: 'Team roll-up',
    },
  },

  troubleshooting: {
    eyebrow: 'Troubleshooting',
    title: 'Troubleshooting',
    lede: 'Each entry gives the exact command to run and what you should see. Paths, process ids and version numbers on your machine will differ. For install problems such as SmartScreen or a missing PATH on Windows, see [easy install](/docs/quick-start#troubleshooting).',
    commandLabel: 'Run',
    outputLabel: 'You should see',
    stillStuck:
      'Still stuck? Run `taksim doctor` and send its output to [support](mailto:info@edgee.tech?subject=Taksim%20support).',
    toc: { label: 'On this page' },
    items: {
      gateway: {
        q: 'The gateway is not running, or its status looks stale',
        intro:
          'The local gateway starts on demand for sessions you launch with `taksim claude`. Check it first, then start it again if needed.',
        steps: [
          'Check whether it is running. A healthy gateway prints these lines; the port is 4027 unless you changed it.',
          'If it prints `Gateway: not running.`, or the process it names no longer exists (after a crash or a reboot, for example), start it again. The command is safe to repeat.',
          'If it still does not come up, stop it and start it again. `taksim gateway stop` waits for an idle gateway; add `--force` to stop a busy one.',
        ],
      },
      judge: {
        q: 'The judge hook is not firing',
        intro:
          'A finished Claude Code turn is graded by the in-session judge through a Stop hook. Check that judging is on and that the hook is installed where your session reads it.',
        steps: [
          'Look for these lines. `none recorded` means no turn has been graded yet.',
          'If judging is disabled, or the user-level hook is not installed, turn both on. `--user-settings` covers any Claude Code session, not only `taksim claude`; add `--dry-run` first to preview the settings change. Then restart Claude Code so it reloads its settings.',
        ],
      },
      mode: {
        q: 'I set a mode, but nothing changed',
        intro:
          '`taksim mode` changes routing only where Taksim routes: sessions you start with `taksim claude` on an API key, or on a Claude login after you opt in.',
        steps: [
          'Confirm the mode is applied. The last two lines say what it does not touch.',
          'On a Claude subscription, check whether you opted in. `off` means Taksim only observes.',
          'To opt in, read the [plan terms note](/docs#subscriptions-and-api-keys) first, then turn it on and start a new `taksim claude` session.',
        ],
        note: 'The Claude desktop app’s Code tab cannot be routed: the app sets its own API endpoint for each session, so Taksim observes it only. Start your session with `taksim claude` in a terminal instead.',
      },
      budget: {
        q: 'A budget downgrade happened',
        intro:
          'With the opt-in budget enforcement (a Pro feature), the gateway serves Claude requests on a cheaper tier while a daily or monthly budget is at or above its threshold. It never blocks a request. The output below is from a fresh install with a $20 daily and $300 monthly developer budget; yours shows your own limits and spend.',
        steps: [
          'See each budget window, the threshold and how many downgrades were recorded.',
          'List the downgrades and the escalations back to the requested model.',
          'To go back to warnings only, turn enforcement off. Stepping down also ends by itself when the day or month rolls over or when you raise the limit.',
        ],
      },
      update: {
        q: '`taksim update --apply` refuses an unsigned build',
        intro:
          'Before it runs a downloaded installer, `taksim update --apply` checks the installer’s signature and its entry in `SHA256SUMS.txt`. Windows builds are unsigned today, so the signature check passes only with an explicit opt-in.',
        steps: [
          'See whether a newer release exists.',
          'If applying the update stops with this message, the installer has no valid signature.',
          'If you trust the publisher and your installed build is itself unsigned, repeat it with the opt-in. A signed install never accepts an unsigned installer.',
          'Confirm the new version.',
        ],
      },
      macPath: {
        q: 'macOS: the shell cannot find `taksim`',
        intro:
          'macOS is a preview and has not been tested on Mac hardware. The installer links `taksim` into `~/.local/bin` and does not edit your shell profile.',
        steps: [
          'Run it by its full path to confirm it is installed.',
          'Add the folder to your PATH (zsh is the default shell; use `~/.bash_profile` for bash), then open a new Terminal window.',
          'Check that the short command now works.',
        ],
      },
      uninstall: {
        q: 'I want to remove Taksim’s hooks',
        intro:
          'Taksim adds a Stop hook to your Claude and Codex settings only where you asked for it. See exactly what an uninstall would touch before you run it.',
        steps: [
          'Preview the removal. Nothing is changed.',
          'Remove Taksim and its hooks. Your ledger and reports are kept; add `--purge-data` to delete local data too, which cannot be undone.',
        ],
      },
    },
  },

  changelog: {
    eyebrow: 'Changelog',
    title: 'What changed in each release.',
    lede: 'The latest releases, each change in a sentence. Select a change for the detail.',
    latest: 'Latest',
    released: 'Released',
    details: 'Detail',
    source: 'Copied from the product’s own changelog for the five most recent releases.',
    install: 'Get Taksim free',
  },

  platform: {
    macPreview: 'Preview: not yet tested on Mac hardware',
    macPreviewNote:
      'macOS support is a preview. This release has not been tested on Mac hardware.',
  },

  security: {
    eyebrow: 'Security',
    title: 'Runs on your machine. Connects only where it has to.',
    lede: 'EdgeeTech operates no Taksim server, so there is no hosted ledger to breach and no telemetry endpoint to trust. This page lists the network destinations Taksim itself uses, how its local services are protected, and how to report a problem.',
    summaryLabel: 'Plain-language summary.',
    summary: 'Your ledger, dashboard and settings stay on your computer. Taksim connects out only to the hosts below, and each one is tied to a feature you use or switch on. Your coding clients still talk to their own providers under those providers’ terms.',
    egressTitle: 'Network destinations',
    egressLede: 'The hosts Taksim itself connects to, and when.',
    egressCaption: 'Network destinations used by Taksim, with the feature that uses each one',
    egressHeaders: { host: 'Host', purpose: 'What for', when: 'When' },
    egress: [
      { host: 'api.anthropic.com', purpose: 'Your Claude requests, when they pass through the local gateway, and the optional Anthropic API-key judge.', when: 'In sessions you start with `taksim claude` on an API key, or on a Claude login once you turn on `taksim routing subscription on`. The judge only runs with a key you configured. The model list only when `ANTHROPIC_API_KEY` is set, and organization usage only when you run `taksim team import-vendor anthropic`.' },
      { host: 'github.com', purpose: 'Release downloads, the installer and update checks.', when: 'When you install, run `taksim update`, or an update check runs. Set `TAKSIM_UPDATE_CHECK=0` to turn update checks off.' },
      { host: 'api.github.com', purpose: 'Pull request and repository identifiers, to tie work to spend.', when: 'Only when `GITHUB_TOKEN` is set or the GitHub CLI is signed in.' },
      { host: 'platform.claude.com', purpose: 'Anthropic’s public pricing and model-lifecycle pages, to keep Taksim’s model price catalogue current.', when: 'When the local gateway refreshes its model catalogue. Set `TAKSIM_CATALOG_REFRESH_ENABLED=false` to turn the refresh off.' },
      { host: 'developers.openai.com', purpose: 'OpenAI’s public pricing and deprecation pages, for the same price catalogue.', when: 'When the local gateway refreshes its model catalogue; the same setting turns it off.' },
      { host: 'huggingface.co', purpose: 'A bounded preview of a public research dataset (including datasets-server.huggingface.co).', when: 'Only when you run `taksim research trace-commons`.' },
      { host: 'api.typesafe.ai', purpose: 'The Jev judge and pre-request router, with your own key.', when: 'Only when you choose Jev (`taksim set-judge jev`).' },
      { host: 'api.openai.com', purpose: 'Codex CLI requests on an OpenAI API key, forwarded by the local gateway; the OpenAI model list; organization usage you import.', when: 'Codex requests only in Codex sessions Taksim launches on an API key. The model list only when `OPENAI_API_KEY` is set. Organization usage only when you run `taksim team import-vendor openai`.' },
      { host: 'generativelanguage.googleapis.com', purpose: 'Gemini CLI requests on a Gemini API key, forwarded by the local gateway.', when: 'Only in Gemini sessions Taksim launches with an explicit API key; Google sign-in traffic goes straight to Google.' },
      { host: 'api.cursor.com', purpose: 'Team usage from that editor vendor’s official Admin API.', when: 'Only when you import that team usage with an admin key you stored.' },
    ],
    egressNote: 'Also on your instruction: a Slack or webhook address you set with `taksim notify configure`, and a folder you choose for team exports. Claude Code, Codex and other coding clients send prompts to their own providers under those providers’ terms; Taksim does not change where they connect, apart from the local gateway on your machine.',
    sections: [
      {
        title: 'Local services stay on loopback',
        body: 'The gateway, the dashboard and the hook endpoint listen on 127.0.0.1 only. They check the Host, Origin and Sec-Fetch-Site headers and refuse cross-site browser requests, so a web page open in your browser cannot call them.',
      },
      {
        title: 'Hook secret',
        body: 'The hook endpoint accepts events only with a per-installation shared secret (the `X-Taksim-Hook-Secret` header). The secret lives in your Taksim home folder, and the endpoint stores event identity and timing, not prompt text.',
      },
      {
        title: 'Credentials',
        body: 'Keys you give Taksim, such as an Anthropic or Jev judge key or a Slack webhook address, are kept in Windows Credential Manager or the macOS Keychain, never in the ledger. That protects them from other users of the machine, not from programs running as you. Your Claude login is never read, copied or logged: when you opt in to subscription routing, the gateway forwards the `Authorization` header unchanged.',
      },
      {
        title: 'Verified releases',
        body: 'Every release ships `SHA256SUMS.txt`. The installer and `taksim update --apply` check what they download against it and stop on a mismatch or a missing entry. A signed installer must come from a publisher pinned inside the binary.',
      },
      {
        title: 'Code signing',
        body: 'Code signing: pending; binaries are unsigned today. Until that changes, check `SHA256SUMS.txt` as the installer does, and expect Windows SmartScreen to ask you to confirm the first run.',
      },
      {
        title: 'What you can turn off',
        body: 'Update checks: set `TAKSIM_UPDATE_CHECK=0`. Model catalogue refresh: set `TAKSIM_CATALOG_REFRESH_ENABLED=false`. Remote judges: one runs only when you have configured a key for it; `taksim set-judge off` turns the Jev judge off, and Ollama keeps judging on your machine. Notifications: no Slack or webhook address is contacted until you run `taksim notify configure`.',
      },
      {
        title: 'What is stored',
        body: 'The ledger, and what it never holds, are described on the [privacy page](/privacy).',
      },
      {
        title: 'Reporting a vulnerability',
        body: 'Email [info@edgee.tech](mailto:info@edgee.tech) with the Taksim version (`taksim version`) and the steps to reproduce. Please leave out prompts, source code and credentials. The same contact is published in [security.txt](https://taksim.edgee.tech/.well-known/security.txt).',
      },
    ],
    effectiveLabel: 'Last reviewed:',
    effective: '29 October 2026.',
  },

  privacy: {
    eyebrow: 'Privacy',
    title: 'Prompt-aware. Not prompt-owning.',
    lede: 'Taksim is designed to derive the intelligence metadata it needs without retaining raw engineering content in canonical telemetry.',
    summaryLabel: 'Plain-language summary.',
    summary:
      'Taksim may inspect limited content transiently to derive classifications. That is different from retaining prompts, responses, source code, or diffs in its canonical telemetry.',
    sections: [
      {
        title: 'What canonical telemetry may contain',
        body: 'Structural task and session metadata, resource/model attribution when observable, token and latency signals when observable, verification outcomes, finite evidence classifications, and opaque identifiers needed to correlate events.',
      },
      {
        title: 'What canonical telemetry is designed not to retain',
        body: 'Raw prompts, model responses, source code, diffs, credentials, secrets, raw tool payloads, shell-command content, or invented provider identity.',
      },
      {
        title: 'Local and transient processing',
        body: 'The ledger stays on your machine. Taksim has no default hosted routing-advice service or hosted usage ledger. Update and pricing checks use external network services. If you choose a remote judge (Anthropic or TypeSafe Jev, on your own key), that provider receives truncated excerpts of the turns it grades. Configured Slack, webhook and export destinations receive the selected report data. Your coding client independently sends prompts and responses to its own provider under that provider’s terms. Some adapters inspect native client data or request content transiently to derive classifications and structural facts; raw content is not persisted by default. Each client’s documentation describes its boundary. Unestablished providers or models remain unknown.',
      },
      {
        title: 'Website data',
        body: 'This preview does not load a third-party analytics tracker. The contact form opens your email application and does not submit its values to a website form processor. Hosting and security infrastructure may still process standard request information such as IP address, user agent, requested path, and timestamps.',
      },
      {
        title: 'Contact',
        body: 'If you email [info@edgee.tech](mailto:info@edgee.tech), EdgeeTech uses the information you provide to respond to your request and maintain relevant business records.',
      },
      {
        title: 'Service improvement, retention, and subprocessors',
        body: 'The production notice will document the exact deployed product mode, purposes, legal bases, retention periods, subprocessors, international transfers, and user rights before public launch. No production analytics or new form processor should be enabled without updating this notice.',
      },
      {
        title: 'Important review status',
        body: 'This preview privacy notice describes the implemented preview behavior and product architecture. It must complete legal review before public production launch.',
      },
    ],
    effectiveLabel: 'Effective:',
    effective: '8 September 2026.',
  },
};

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export type Dictionary = Widen<typeof en>;
