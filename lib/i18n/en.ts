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
      lede: 'Taksim reads the local history and hooks of Claude Code, Codex, GitHub Copilot and other coding agents, prices every session, and grades finished turns: was Opus needed, or would Sonnet have passed? It runs on your machine and keeps no prompts or code.',
      seeHow: 'See how it works',
      installLabel: 'Install on Windows with one PowerShell line',
      installGuide: 'Easy install in 3 steps',
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
        body: 'Taksim reads the local history and hooks of Claude Code, the Claude desktop app, Codex, GitHub Copilot, Devin, OpenCode, Kilo Code and Pi. Each turn becomes a ledger line: model, tokens, cache, list-price cost.',
        detail: 'taksim setup',
      },
      {
        title: 'Judge',
        body: 'An LLM judge looks at a finished turn and names the cheapest tier that would have passed. Use Claude or Codex inside your session, a local Ollama model, or a remote judge on your own API key.',
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
        a: 'Windows only, for now. The easy install takes three steps.',
      },
      {
        q: 'Which turns can Taksim judge?',
        a: 'Claude Code, Codex, OpenCode, Kilo Code, Pi and Devin Desktop turns. OpenCode, Kilo Code and Pi turns are judged when they ran on Claude-tier models. GitHub Copilot and Devin CLI sessions are imported and priced, but not judged yet.',
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
        'History import for Claude Code, Codex, Copilot, Devin, OpenCode, Kilo Code and Pi',
        'Priced sessions, model mix and cache efficiency',
        'Turn-by-turn judging with your choice of judge (in-session Claude or Codex, Ollama, your own API key)',
        'Local dashboard, weekly report, digest and status line',
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
        description: 'Prices each session by model from local history, hooks or the client’s own session store.',
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
        judge: 'History judging and an in-session Stop hook.',
        route: 'Not offered. No proxy and no model changes.',
      },
      codexApi: {
        client: 'Codex CLI',
        access: 'OpenAI API key',
        observe: 'History import and the local gateway.',
        judge: '',
        route: 'Optional, through the local gateway, in sessions you start with taksim codex.',
      },
      copilotPlan: {
        client: 'GitHub Copilot',
        access: 'Copilot plan',
        observe: 'Usage import from the local Copilot CLI session store.',
        judge: 'Not yet.',
        route: 'No request-time routing. taksim copilot only picks the startup model.',
      },
      devinCli: {
        client: 'Devin CLI',
        access: 'Devin plan',
        observe: 'History import from the local Devin session store.',
        judge: 'Not yet.',
        route: 'No request-time routing.',
      },
      devinDesktop: {
        client: 'Devin Desktop',
        access: 'Formerly Windsurf, Devin plan',
        observe: 'History import from the local ACP event log.',
        judge: '',
        route: 'Never routed. No proxy and no model changes.',
      },
      openCodeKilo: {
        client: 'OpenCode and Kilo Code',
        access: 'Your own provider settings',
        observe: 'History import from the local session databases.',
        judge: 'Turns that ran on Claude-tier models.',
        route: 'Not offered.',
      },
      pi: {
        client: 'Pi and Oh My Pi',
        access: 'Your own provider settings',
        observe: 'History import from local session files.',
        judge: 'Turns that ran on Claude-tier models.',
        route: 'Not offered.',
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
          ['Easy install', '/docs/quick-start'],
          ['Full install guide', '/docs/getting-started'],
          ['Next steps', '/docs/next-steps'],
        ],
      },
      {
        title: 'Use Taksim',
        links: [
          ['Dashboard', '/docs/next-steps#dashboard'],
          ['Judging', '/docs/next-steps#judging'],
          ['Budgets, digest and alerts', '/docs/next-steps#budgets'],
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
        copy: 'Why Claude subscriptions are observed, not rewritten, and how API-key routing differs.',
        href: '#subscriptions-and-api-keys',
        keywords: 'subscription max pro api key rewrite observe quota baseline report',
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
        keywords: 'dashboard judge budget digest slack webhook notify alerts team export summary',
      },
      {
        title: 'How Taksim works',
        copy: 'Understand the local ledger, judging, consensus and the shadow policy.',
        href: '#how-taksim-works',
        keywords: 'ledger judge consensus shadow policy verdict tier',
      },
      {
        title: 'Client compatibility',
        copy: 'See exact support boundaries for Claude Code, Codex, Copilot, Devin, OpenCode, Kilo Code and Pi.',
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
    accountTitle: 'No account, no Taksim server',
    accountBody:
      'Install Taksim and use it without an account or sign-in. Taksim runs no server of its own: the ledger, the reports and the dashboard stay on your machine. Start with the [easy install](/docs/quick-start).',
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
          body: 'An LLM judge grades a completed turn and names the cheapest tier that would have passed: in-session Claude or Codex, your Anthropic API key, TypeSafe Jev with your own key, or a local Ollama model. Claude Code, Codex, OpenCode, Kilo Code, Pi and Devin Desktop turns can be judged; Copilot and Devin CLI turns are priced but not yet judged.',
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
        'If the managed path cannot start safely, Taksim preserves the native client invocation instead of blocking the developer. Raw prompt, response, and source content is not persisted by default, and nothing leaves the machine unless you opt in to a remote judge or another remote destination you configure.',
    },
    subscriptions: {
      title: 'Subscriptions are observed, not rewritten',
      body: 'If Claude Code is authenticated with a Claude subscription (Max or Pro, Team or Enterprise), Taksim does not rewrite the model and never sits between Claude Code and the subscription account. `taksim claude` launches Claude Code natively and observes it from local transcripts and hooks. Model rewrite only applies to API-key traffic, in sessions you launch through Taksim. The same applies to Codex on a ChatGPT plan, which is observed from its local session history.',
      body2:
        'Subscription usage is shown as API-equivalent list-price dollars, labelled as quota, not billed. For subscription users, the value is quota visibility, a baseline report (`taksim report baseline`) and judge verdicts on finished turns, not a savings promise.',
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
          'Available',
          'Responses gateway on API keys; model rewrite only for proven model ids; ChatGPT sign-in is observed, never rewritten',
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
    lede: 'Three steps, about two minutes. No account and no administrator rights. Windows x64 for now.',
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
      body: 'If setup did not start on its own, open a new PowerShell window and run:',
      seeTitle: 'What you will see',
      see: [
        '**Detected clients**: the coding agents found on this machine, such as Claude Code, Codex, GitHub Copilot, OpenCode, Kilo Code and Pi.',
        '**Credential mode**: a subscription sign-in is shown as observe-only. Taksim reads its transcripts and hooks; no traffic passes through Taksim.',
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
      after: 'Updating keeps your data and settings. Running the install line again does the same.',
    },
    uninstall: {
      title: 'Uninstall',
      body: 'There is no uninstall command yet. To remove Taksim completely:',
      steps: [
        'If you turned them on, remove the hooks Taksim added to Claude Code and Codex, and the saved Slack or webhook address: `taksim judge disable --user-settings`, `taksim judge disable --codex-settings`, `taksim cache-guard disable` and `taksim notify clear`.',
        'Delete the program folder `%LOCALAPPDATA%\\Taksim`, and remove its `current` entry from your user PATH (Start, type “environment variables”, Edit environment variables for your account).',
        'To delete your local ledger and reports too, delete `%USERPROFILE%\\.taksim`. This cannot be undone.',
      ],
    },
    toc: {
      label: 'On this page',
      install: 'Install',
      setup: 'Run setup',
      dashboard: 'Open the dashboard',
      troubleshooting: 'Troubleshooting',
      update: 'Update',
      uninstall: 'Uninstall',
    },
  },

  gettingStarted: {
    eyebrow: 'Quickstart',
    title: 'Install guide',
    lede: 'Every detail of installing Taksim on Windows: what the installer checks, how to confirm it worked, and how to start your first session. For the short version, use the [easy install](/docs/quick-start).',
    noAccountTitle: 'No Taksim account required',
    noAccountBody:
      'Install and run Taksim directly. There is no Taksim sign-in and no Taksim server; everything runs on your machine.',
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
      body: 'You need Windows x64 with Windows PowerShell 5.1 or PowerShell 7; no administrator rights or .NET SDK. No Taksim account is required. Taksim works from the coding clients you already use, such as [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) or [Codex](https://developers.openai.com/codex/cli/); install and sign in to at least one of them.',
    },
    install: {
      title: '3. Install with one line',
      body: 'Open PowerShell and run the command below. It downloads the latest release over HTTPS, checks the Connector archive and the installer against the published `SHA256SUMS.txt` (and stops if anything does not match), installs into `%LOCALAPPDATA%\\Taksim`, adds it to your user PATH and then runs `taksim setup`.',
      pinnedTitle: 'Pin a version or skip setup',
      pinnedBody: 'To install one specific release without running setup afterwards:',
      note: 'Taksim keeps its versioned binaries under `%LOCALAPPDATA%\\Taksim` and its separate user data under `%USERPROFILE%\\.taksim`. Installing an updated version does not replace that user-data directory.',
    },
    verify: {
      title: '4. Verify the installation',
      body: 'Open a new PowerShell terminal so Windows can pick up the Taksim command, then run:',
      after:
        'All three commands should complete successfully. `doctor` checks the local environment and says when an update is available; `install status` shows the installed version and path.',
    },
    setup: {
      title: '5. Run setup and open the dashboard',
      body: 'The installer runs setup for you. Run it again at any time; it is safe to repeat. It detects your clients and their credential mode, imports and prices their history, turns on in-session judging and writes your first report. Then open the local dashboard:',
    },
    session: {
      title: '6. Optional: start a managed session',
      body: 'You can keep running `claude`, `codex` and your other clients exactly as before; Taksim reads their history. To let Taksim launch Claude Code or Codex with its hooks and status line (and optional routing on API-key traffic), run one of these. Arguments for the native client can follow the command.',
      expectTitle: 'What to expect',
      expectBody:
        'On a Claude or ChatGPT subscription, Taksim starts the client natively and observes it; no traffic passes through Taksim. With an API key, Taksim prepares its local gateway on `127.0.0.1` first; if the managed path is unavailable, the client falls back to its native behaviour. Everything runs locally by default; nothing leaves the machine unless you explicitly opt in to a remote judge or another remote destination you configure.',
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
      body: 'Budgets are warnings, never limits: set a daily or monthly amount in API-equivalent dollars for yourself, a repo or the team, and Taksim shows it in the status line and warns at 75%, 90% and 100%.',
      digest: 'The digest is a one-page “what you could have saved” summary, written to a file:',
      notify:
        'To receive the digest and budget alerts in Slack or any webhook, save the address once (it is stored in Windows Credential Manager, and only aggregates and repo aliases are sent), send a test, then post the digest:',
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
      team: 'Team roll-up',
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
        body: 'Taksim runs locally by default. There is no default hosted routing-advice service, and nothing leaves the machine unless you explicitly opt in to a remote feature, such as a remote judge or a Slack or webhook destination you configure. Taksim runs no server of its own. This is a claim about Taksim’s own telemetry, not about the native AI client you run through it. If you choose a remote judge (Anthropic or TypeSafe Jev, on your own key), that provider receives truncated excerpts of the turns it grades. If you sign in to Claude Code, Codex, or another provider-native client, that client still sends prompts and responses to its own provider under that provider’s terms, independent of Taksim. Some adapters may inspect native client data or request content transiently to derive content-blind classifications and structural facts. Product documentation for each client describes its exact boundary. Where an observed provider or model cannot be established, Taksim records it as unknown.',
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
