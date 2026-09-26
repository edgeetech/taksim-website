// English copy. Every string shown on the site lives here; tr.ts mirrors this shape.
// Inline markup understood by <Rich>: `code`, **bold**, [label](href).

export const en = {
  meta: {
    siteTitle: 'Taksim — A sufficiency ledger for AI coding',
    titleTemplate: '%s — Taksim',
    description:
      'Taksim keeps a local ledger of your AI coding sessions: which model ran each turn, what it cost, and whether a cheaper model would have been enough.',
    pages: {
      pricing: {
        title: 'Pricing',
        description:
          'The Taksim CLI is free for any individual developer, at home or at work. Team: $8 per active developer per month, $99 minimum.',
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
          'Preview terms describing free developer use, Team use, third-party providers, verification, and economics boundaries.',
      },
      contact: {
        title: 'Talk to Taksim — Team Assessment',
        description:
          'Tell EdgeeTech about your AI engineering usage and explore whether Taksim Team is a good fit.',
      },
    },
  },

  chrome: {
    skipToContent: 'Skip to content',
    brandHome: 'Taksim home',
    brandTagline: 'by EdgeeTech',
    primaryNav: 'Primary navigation',
    mobileNav: 'Mobile navigation',
    openNav: 'Open navigation',
    nav: {
      how: 'How it works',
      clients: 'Clients',
      pricing: 'Pricing',
      docs: 'Docs',
    },
    talkToUs: 'Talk to us',
    install: 'Install Taksim',
    footer: {
      tagline: 'A local-first sufficiency ledger for AI coding.',
      productNav: 'Taksim footer',
      legalNav: 'Legal footer',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      company: 'EdgeeTech Ltd.',
    },
    language: {
      label: 'Language',
    },
    untranslated: 'This page is currently available in English only.',
    trust: {
      eyebrow: 'Trust & Compliance',
      title: 'Building the controls serious engineering teams expect.',
      soc2: 'SOC 2 — In progress',
      iso: 'ISO 27001 — In progress',
      underway: 'Certification process underway.',
    },
  },

  notFound: {
    title: 'That page is not here.',
    body: 'The address may have changed. Continue with the product overview or technical documentation.',
    home: 'Go home',
    docs: 'Read the docs',
  },

  home: {
    hero: {
      title: 'See where your AI coding spend goes, and when a cheaper model would have done the job.',
      lede: 'Taksim reads the local history and hooks of Claude Code, Codex and GitHub Copilot, prices every session, and grades finished Claude Code turns: was Opus needed, or would Sonnet have passed? It runs on your machine and keeps no prompts or code.',
      seeHow: 'See how it works',
      footnote: 'Free for individual developers. Teams pay for the roll-up.',
    },
    valuesLabel: 'What Taksim does',
    valueProps: [
      {
        title: 'Every session, priced.',
        body: 'Taksim imports what your coding agents already write to disk and prices each session by model, repo and task, including cache reads and writes. API-key usage is shown in billed dollars; subscription usage is shown as API-equivalent list-price dollars, labelled as quota, not billed.',
      },
      {
        title: 'Was the cheaper model enough?',
        body: 'An LLM judge grades completed turns after the fact. Only verdicts where two judges agree, one of them strong, count toward the “could have saved” number, so the figure stays conservative.',
      },
      {
        title: 'Private by design.',
        body: 'Taksim is a local binary. It stores metadata only: no prompts, responses, code, paths or credentials. Team reports are built from exports that each developer creates and can inspect before sharing.',
      },
    ],
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
        body: 'Taksim reads the local history and hooks of Claude Code, the Claude desktop app and Codex, and imports GitHub Copilot usage from its local session store. Each turn becomes a ledger line: model, tokens, cache, list-price cost.',
        detail: 'taksim setup',
      },
      {
        title: 'Judge',
        body: 'An LLM judge looks at a finished Claude Code turn and names the cheapest tier that would have passed. Use Claude inside your session, a local Ollama model, or a remote judge on your own API key.',
        detail: 'taksim judge enable --in-session',
      },
      {
        title: 'Agree',
        body: 'A verdict only counts when two judges agree and at least one is a strong judge. Weak-only agreement and disputes are shown, never counted, so one lenient judge cannot inflate the number.',
        detail: 'taksim judge status',
      },
      {
        title: 'Report',
        body: 'One command, one weekly report: spend, model mix, cache efficiency, judge coverage, and what a shadow policy would have changed. The shadow policy is counterfactual. Taksim never silently changes your model.',
        detail: 'taksim report weekly --html',
      },
    ],
    report: {
      title: 'One command, one weekly report.',
      body: 'Run taksim report weekly --html for a single self-contained HTML file, or taksim digest for a one-page summary of what you could have saved. Here is the shape of the report, with sample figures.',
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
    clients: {
      title: 'What Taksim does with each client',
      body: 'Taksim works inside each vendor’s terms. On a subscription plan, Taksim only observes. Live routing is limited to traffic billed to your own API key.',
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
      ],
      neverTitle: 'Never stored',
      never: ['Prompts and model responses', 'Source code and diffs', 'Credentials and local paths'],
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
        { name: 'Ollama', body: 'Runs locally. Nothing leaves the machine.' },
      ],
      subscriptionTitle: 'On a subscription, Taksim only observes',
      subscriptionBody:
        'On Claude and ChatGPT plans Taksim reads local history and hooks. It never sits between your client and a subscription account, and never changes the model. Live routing applies only to traffic billed to your own API key, and only in sessions you launch through Taksim.',
    },
    pricingTitle: 'Free for developers. Paid for teams.',
    faqTitle: 'Questions',
    faq: [
      {
        q: 'Does Taksim change my model on a Claude or ChatGPT subscription?',
        a: 'No. Subscription traffic is observed from local history and hooks. Model changes happen only on traffic billed to your own API key, and only in sessions you launch with taksim claude or taksim codex.',
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
        a: 'Taksim prices recorded usage at published list rates, including Claude Opus 5.5 and Fable 5.1. Models without a list price are excluded, never counted as free, and every report shows its priced coverage.',
      },
      {
        q: 'Which platforms are supported?',
        a: 'Windows only, for now. The install guide covers the full setup.',
      },
      {
        q: 'Can Taksim judge Codex or Copilot turns?',
        a: 'Not yet. Codex and Copilot sessions are imported and priced, but judging covers Claude Code turns only.',
      },
    ],
    cta: {
      title: 'Find out what your last week actually needed.',
      body: 'taksim setup imports the history your clients already keep and writes your first report in one command.',
      docs: 'Read the docs',
    },
  },

  ledger: {
    recording: 'recording',
    paused: 'paused',
    spend: 'Spend this week, list price',
    counterfactual: 'Always-Sonnet counterfactual',
    overSized: 'Over-sized, on screen',
    caption: 'Illustrative stream of recorded AI coding turns',
    time: 'Time',
    client: 'Client',
    model: 'Model',
    cost: 'Cost',
    verdict: 'Verdict',
    verdicts: {
      sonnetEnough: 'Sonnet was enough',
      haikuEnough: 'Haiku was enough',
      opusEnough: 'Opus was enough',
      rightSize: 'Right size',
      neededTop: 'Needed the top tier',
      neededOpus: 'Needed Opus',
      disagree: 'Judges disagree',
    },
    note: 'Illustrative stream. Totals modelled on the founder’s own week at API-equivalent list prices.',
  },

  plans: {
    developer: {
      name: 'Developer',
      price: 'Free',
      sub: 'Free for any individual, at home or at work.',
      features: [
        'History import for Claude Code, Codex and Copilot',
        'Priced sessions, model mix and cache efficiency',
        'Turn-by-turn judging of Claude Code sessions with your choice of judge (in-session Claude, Ollama, your own API key)',
        'Weekly report, digest and status line',
        'Optional live routing for API-key traffic',
      ],
      cta: 'Install Taksim',
    },
    team: {
      name: 'Team',
      price: '$8',
      per: 'per active developer per month',
      sub: '$99 per month minimum. 20% off with annual billing.',
      features: [
        'Team roll-up from developer exports, no hosted service required',
        'Weekly savings digest for the team lead',
        'Cost by repo and task, for chargeback or client rebilling',
        'Budget warnings by developer, repo and team (informational; nothing is blocked)',
        'Each developer creates their export and can inspect it before sharing; exports carry repo aliases, never paths',
      ],
      cta: 'Start a team pilot',
    },
  },

  pricing: {
    title: 'Free for developers. Paid for teams.',
    lede: 'The CLI is free for any individual, at home or at work. Companies pay for the team roll-up.',
    faqTitle: 'Pricing questions',
    faq: [
      {
        q: 'Can I use the free version at work?',
        a: 'Yes. The CLI is free for any individual. Team features are what companies pay for.',
      },
      {
        q: 'Does Taksim change my model on a Claude or ChatGPT subscription?',
        a: 'No. Subscription traffic is observed from local history and hooks. Model changes happen only on traffic billed to your own API key, and only in sessions you launch with taksim claude or taksim codex.',
      },
      {
        q: 'Is the “could have saved” number guaranteed?',
        a: 'No. It is an estimate: it counts turns where two judges agreed a cheaper tier was sufficient, and every report shows the sample size.',
      },
      {
        q: 'Does anything leave my machine?',
        a: 'Not unless you choose a judge that runs remotely (your own API key or Jev) or share a team export. Exports contain metadata only.',
      },
    ],
  },

  matrix: {
    caption: 'What Taksim can do for each coding client',
    client: 'Client',
    states: {
      yes: 'Supported',
      no: 'Not supported',
      unverified: 'Unverified',
    },
    capabilities: {
      observe: {
        label: 'Observe',
        description: 'Prices each session by model from local history, hooks or the Copilot CLI session store.',
      },
      judge: {
        label: 'Judge',
        description: 'An LLM judge grades whether a cheaper model tier would have been sufficient.',
      },
      route: {
        label: 'Route',
        description:
          'Optional live model choice, only on traffic billed to your own API key and only in sessions you launch through Taksim.',
      },
    },
    rows: {
      claudeCodePlan: {
        client: 'Claude Code',
        access: 'Free, Pro, Max, Team or Enterprise plan',
        observe: 'History import, hooks and status line.',
        judge: '',
        route: 'No proxy and no model changes.',
      },
      claudeDesktop: {
        client: 'Claude desktop app',
        access: 'Claude plan',
        observe: 'Local transcripts via a user-level hook.',
        judge: '',
        route: 'No proxy and no model changes.',
      },
      claudeCodeApi: {
        client: 'Claude Code',
        access: 'Anthropic API key',
        observe: '',
        judge: '',
        route: 'Optional, through the local gateway, in sessions you start with taksim claude.',
      },
      codexPlan: {
        client: 'Codex CLI',
        access: 'ChatGPT plan',
        observe: 'History import from CODEX_HOME sessions.',
        judge: 'Not yet. Judging covers Claude Code turns only.',
        route: 'Not offered. No proxy and no model changes.',
      },
      codexApi: {
        client: 'Codex CLI',
        access: 'OpenAI API key',
        observe: 'History import and the local gateway.',
        judge:
          'Not yet. Only the experimental Jev judge grades these turns, and one weak judge never counts toward savings.',
        route: 'Optional, through the local gateway, in sessions you start with taksim codex.',
      },
      copilotPlan: {
        client: 'GitHub Copilot',
        access: 'Copilot plan',
        observe: 'Usage import from the local Copilot CLI session store.',
        judge: '',
        route: 'No request-time routing. taksim copilot only picks the startup model.',
      },
    },
    footnote:
      "Anthropic's Claude Code terms require that subscription credentials are used only by Claude Code itself, so Taksim never sits between Claude Code and a subscription account.",
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
        ],
      },
      {
        title: 'Quickstart',
        links: [
          ['Install Taksim', '/docs/getting-started'],
          ['Sign in (optional)', '/docs/sign-in'],
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
          ['Claude Code', '/docs#client-compatibility'],
          ['Codex', '/docs#client-compatibility'],
          ['GitHub Copilot', '/docs#client-compatibility'],
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
        title: 'Sign in (optional)',
        copy: 'Opt-in browser login for hosted features, remembered access and model displays.',
        href: '/docs/sign-in',
        keywords: 'identity google github login logout device credential model optional off by default terms',
      },
      {
        title: 'Subscriptions & API keys',
        copy: 'Why Claude subscriptions are observed, not rewritten, and how API-key routing differs.',
        href: '#subscriptions-and-api-keys',
        keywords: 'subscription max pro api key rewrite observe quota baseline report',
      },
      {
        title: 'Install Taksim',
        copy: 'Install the verified Windows release, verify it, and start Claude Code or Codex.',
        href: '/docs/getting-started',
        keywords:
          'quickstart install setup cli start release v0.2.0 windows powershell checksum claude code codex doctor troubleshooting',
      },
      {
        title: 'How Taksim works',
        copy: 'Understand the local ledger, judging, consensus and the shadow policy.',
        href: '#how-taksim-works',
        keywords: 'ledger judge consensus shadow policy verdict tier',
      },
      {
        title: 'Client compatibility',
        copy: 'See exact support boundaries for Claude Code, Codex, and Copilot.',
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
    lede: 'A local-first sufficiency ledger for AI coding: which model ran, what it cost, and whether a cheaper model would have been enough.',
    signInTitle: 'Sign-in is optional and off by default',
    signInBody:
      'Install Taksim and run `taksim claude` or `taksim codex` without an account. Hosted sign-in only applies when an operator sets `Identity__Enabled=true`. See the [optional sign-in guide](/docs/sign-in).',
    how: {
      title: 'How Taksim works',
      body: 'Taksim reads the local history and hooks your coding clients already write, prices each session by model, and records it in a local ledger. It stores metadata only: no prompts, responses, code, paths or credentials.',
      calloutTitle: 'Observe first',
      calloutBody:
        'By default Taksim records and judges. It does not change which model runs. Live routing is optional and limited to traffic billed to your own API key.',
    },
    judging: {
      title: 'Judging and consensus',
      items: [
        {
          term: 'Judge',
          body: 'An LLM judge grades a completed Claude Code turn and names the cheapest tier that would have passed: in-session Claude, your Anthropic API key, TypeSafe Jev with your own key, or a local Ollama model. Codex and Copilot turns are priced but not yet judged.',
        },
        {
          term: 'Consensus',
          body: 'A verdict counts only when two judges agree and at least one of them is a strong judge. Weak-only agreement and disputes are reported but never counted.',
        },
        {
          term: 'Shadow policy',
          body: 'Taksim can suggest routing defaults from consensus verdicts and report what they would have changed. The shadow policy stays counterfactual; it never changes your model.',
        },
      ],
    },
    gateway: {
      title: 'Local gateway, fail-open by design',
      body: 'Optional live routing for API-key traffic uses a local gateway on 127.0.0.1. Telemetry, persistence, and remote advice do not get to hold a healthy provider request hostage.',
      calloutTitle: 'Native workflow stays available',
      calloutBody:
        'If the managed path cannot start safely, Taksim preserves the native client invocation instead of blocking the developer. Raw prompt, response, and source content is not persisted by default, and nothing leaves the machine unless you opt in to hosted features or a remote judge.',
    },
    subscriptions: {
      title: 'Subscriptions are observed, not rewritten',
      body: 'If Claude Code is authenticated with a Claude subscription (Max or Pro, Team or Enterprise), Taksim does not rewrite the model and never sits between Claude Code and the subscription account. `taksim claude` launches Claude Code natively and observes it from local transcripts and hooks. Model rewrite only applies to API-key traffic, in sessions you launch through Taksim. The same applies to Codex on a ChatGPT plan, which is observed from its local session history.',
      body2:
        'Subscription usage is shown as API-equivalent list-price dollars, labelled as quota, not billed. For subscription users, the value is quota visibility, a baseline report (`taksim report baseline`) and judge verdicts on finished Claude Code turns, not a savings promise.',
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
          'Subscription traffic is observed, never rewritten',
        ],
        [
          'Codex',
          'Available',
          'API key only, optional',
          'Not yet',
          'Responses gateway on API keys; model rewrite only for proven model ids; ChatGPT sign-in is observed, never rewritten',
        ],
        [
          'GitHub Copilot',
          'Available',
          'Not available',
          'Not yet',
          'Usage import from the local Copilot CLI session store; startup model selection only',
        ],
      ],
    },
    next: 'Next',
    nextLink: 'Install Taksim',
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

  gettingStarted: {
    eyebrow: 'Quickstart',
    title: 'Install Taksim',
    lede: 'Set up Taksim on Windows, check the local installation, and start your first managed Claude Code or Codex session without leaving the documentation.',
    noAccountTitle: 'No Taksim account required',
    noAccountBody:
      'Install and run `taksim claude` or `taksim codex` directly. Taksim sign-in is opt-in and off by default; it only matters if an operator turns on hosted features. See the [optional sign-in guide](/docs/sign-in).',
    plan: {
      title: '1. Confirm your plan',
      body: 'The Taksim CLI is free for any individual developer, at home or at work. Team features such as the team roll-up are paid.',
      selfTitle: 'Install for myself',
      selfSub: 'Continue with the free CLI',
      teamTitle: 'Set up my team',
      teamSub: 'Talk to us about Team',
    },
    prerequisites: {
      title: '2. Check the prerequisites',
      body: 'You need a Windows computer, PowerShell, and one signed-in coding client. No Taksim account is required. Install and sign in to either [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) or [Codex](https://developers.openai.com/codex/cli/). You only need one; choose it later in this guide.',
    },
    install: {
      title: '3. Download and install',
      body: 'Open PowerShell in a folder where you are happy to keep the temporary installer file, then run both commands below. The installer downloads the selected release over HTTPS, checks its published SHA-256 checksum, validates the binary, and only then switches the local installation to that version.',
      note: 'Taksim keeps its versioned binaries under `%LOCALAPPDATA%\\Taksim` and its separate user data under `%USERPROFILE%\\.taksim`. Installing an updated version does not replace that user-data directory.',
    },
    verify: {
      title: '4. Verify the installation',
      body: 'Open a new PowerShell terminal so Windows can pick up the Taksim command, then run:',
      after:
        'All three commands should complete successfully. `doctor` checks the local environment; `install status` shows the installed version and path.',
    },
    session: {
      title: '5. Start your first session',
      body: 'Run one command for the coding client you installed. Do not run both commands. Any arguments intended for your native client can continue after the selected command.',
      expectTitle: 'What to expect',
      expectBody:
        'Taksim prepares its local Connector on `127.0.0.1`, then opens your selected native client. If the local Taksim path is unavailable, the client fails open to its native behaviour. Everything runs locally by default; nothing leaves the machine unless you explicitly opt in to hosted features or a remote judge.',
    },
    inspect: {
      title: '6. Inspect the latest session',
      body: 'After completing a managed task, inspect the verification evidence Taksim recorded for the latest observed request:',
      after:
        'The explanation keeps missing or incomplete evidence explicit; a successful provider response is not presented as proof by itself.',
    },
    history: {
      title: 'Optional: import existing history',
      body: 'History import is not required for your first managed session. If you already use one of the supported clients, import its local history when you are ready:',
    },
    troubleshooting: {
      title: 'Troubleshooting',
      items: [
        {
          q: 'PowerShell cannot find `taksim`',
          a: 'Close PowerShell, open a new terminal, and run `taksim version` again. If it is still unavailable, rerun the installer and then use `taksim doctor` to inspect the local setup.',
        },
        {
          q: 'Claude Code or Codex cannot be found',
          a: 'Install the one client you selected using its official guide above, sign in to that client, open a new PowerShell terminal, and rerun the matching `taksim claude` or `taksim codex` command.',
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
    toc: {
      label: 'On this page',
      plan: 'Confirm your plan',
      prerequisites: 'Prerequisites',
      install: 'Download and install',
      verify: 'Verify installation',
      session: 'Start a session',
      inspect: 'Inspect latest session',
      history: 'Import history',
      troubleshooting: 'Troubleshooting',
    },
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
        body: 'Taksim runs locally by default. There is no default hosted routing-advice service, and nothing leaves the machine unless you explicitly opt in to a hosted Taksim feature. This is a claim about Taksim’s own telemetry and hosted services, not about the native AI client you run through it. If you choose a remote judge (Anthropic or TypeSafe Jev, on your own key), that provider receives truncated excerpts of the turns it grades. If you sign in to Claude Code, Codex, or another provider-native client, that client still sends prompts and responses to its own provider under that provider’s terms, independent of Taksim. Some adapters may inspect native client data or request content transiently to derive content-blind classifications and structural facts. Product documentation for each client describes its exact boundary. Where an observed provider or model cannot be established, Taksim records it as unknown.',
      },
      {
        title: 'Website data',
        body: 'This preview does not load a third-party analytics tracker. The assessment form opens your email application and does not submit its values to a website form processor. Hosting and security infrastructure may still process standard request information such as IP address, user agent, requested path, and timestamps.',
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
