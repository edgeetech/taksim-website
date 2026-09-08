# Taksim Website Implementation Plan

**Status:** Implementation authority
**Version:** 1.0
**Date:** 2026-09-08
**Public domain:** `https://taksim.edgee.tech`
**Product repository audited:** `C:\Workspace\EDGEETECH\ai\taksim`, branch `taksim-architectural-split`, commit `c5cbc752708a7b851a84559dc9dc90a95c5bbc93`
**Website state at audit:** No Taksim website implementation exists in the audited product repository or the synced project sources. Treat the website as a greenfield static site, while treating the product repository as the source of truth for capability claims, commands, privacy boundaries, and terminology.

---

## 1. Purpose and Authority

This document contains the decisions required to design, build, test, and launch the first public Taksim website without reopening product strategy.

Implementation agents must:

1. Follow accepted statements, page order, CTA behavior, product-truth labels, and legal/trust gates in this document.
2. Verify command examples against the current product repository immediately before publishing.
3. Prefer omission over an unsupported claim.
4. Mark calculated savings as illustrative until the product can substantiate them from observed evidence.
5. Never imply that Taksim owns or replaces every request-level routing or orchestration decision.

This document is not final legal advice. `/privacy` and `/terms` require legal review before production publication. Legal review may improve wording but must preserve the product and licensing boundaries defined here.

---

## 2. Locked Product Strategy

### 2.1 Public category

Use:

> **Intelligence Control Plane for coding agents**

Internal architectural meaning:

> A vendor-neutral organisational intelligence control plane for developer-agent workloads.

Do not lead with `AI gateway`, `LLM gateway`, `model router`, `intelligent router`, or `multi-model orchestrator`.

### 2.2 Core promise

Use this exact homepage headline:

> **Frontier intelligence, only when the work requires it.**

Use this exact primary supporting copy:

> Keep using the coding agents you already use. Taksim governs engineering intelligence across local, private, and cloud resources, keeps the quality bar, verifies outcomes with engineering evidence, and uses stronger intelligence only when necessary.

### 2.3 HydraFusion-aware boundary

The website must communicate the following architecture:

```text
Engineering organisation
        ↓
Coding clients and agents
        ↓
Taksim
policy • quality • privacy • budget • eligibility • evidence
        ↓
Direct resource selection OR approved planner delegation
        ↓
Engineering execution
        ↓
Evidence and verification
        ↓
Organisational learning and economics
```

Taksim may select an eligible Intelligence Resource where it has authority. It may instead delegate internal execution planning to an approved provider-native runtime. Taksim continues to govern eligibility, policy, privacy, budget, evidence requirements, outcome acceptance, and human escalation.

Provider-native Single/Cascade/Critique/Auto behavior is a managed resource capability, not Taksim's proprietary moat. HydraFusion may be discussed in technical documentation or editorial content, but must not appear as a homepage endorsement, integration claim, or dependency.

Never use a visual or sentence equivalent to:

```text
Every prompt → Taksim picks model A/B/C → done
```

Do not claim:

- proprietary optimal request-level selection for every task;
- that Taksim replaces provider-native planning;
- that a cheaper model is always selected;
- guaranteed code correctness;
- guaranteed savings;
- that transport success or an agent saying “done” proves engineering success.

### 2.4 Durable differentiators

All high-level product storytelling must reinforce at least one of these:

- organisation-wide control across clients, providers, private infrastructure, and provider-native planners;
- policy, privacy, quality, budget, capacity, and eligibility constraints;
- direct selection versus governed delegation;
- evidence-based verification and explicit uncertainty;
- observed-versus-estimated economic attribution;
- explainability, human accountability, and escalation;
- learning from verified outcomes without making raw engineering content canonical telemetry.

---

## 3. Audience and Commercial Model

### 3.1 Solo

**Price:** Free
**Eligibility:** Personal use and independent side projects only.

Eligible examples:

- personal projects;
- learning and experimentation;
- personal open-source work;
- an independently owned side product, including one that may later generate revenue, provided the work is not being performed for another organisation.

Not eligible:

- work for an employer;
- company internal or production work;
- paid or unpaid work performed for a client or customer;
- consultancy engagements;
- any other use on behalf of an organisation.

Eligibility is defined by **whose behalf the work is performed on**, not by team size. A single developer working for a company or client requires Team.

Required public wording:

> **Solo — Free for personal use and independent side projects. Not for work performed on behalf of an employer, client, or organisation.**

Do not market Solo as “free because your sessions train Taksim.” Data processing and service-improvement terms belong in the privacy notice, product controls, and Terms.

### 3.2 Team

**Price:** Custom
**Eligibility:** Any work performed on behalf of a company, client, employer, customer, consultancy, or other organisation.

Required public wording:

> **Team — For work performed on behalf of a company, client, or organisation.**

Team is not “Solo with more seats.” Its value is organisational governance, shared/private Intelligence Resources, policy, budgets, verified economics, selection/delegation control, deployment controls, reporting, and commercial support.

Do not invent seat pricing, usage limits, savings-share pricing, a free Team trial, or a paid-pilot price. Team remains `Custom` until a commercial model is approved.

---

## 4. Current Product-Truth Matrix

This matrix is the publishing baseline as of the audited commit. Re-check it before every production release.

| Capability                                       | Public status                                  | Permitted claim                                                                                    | Required limitation                                                                                            |
| ------------------------------------------------ | ---------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Claude historical import                         | Available now                                  | Historical usage discovery                                                                         | Privacy-safe canonical metadata only                                                                           |
| Claude managed session                           | Available now                                  | `taksim claude` starts an opt-in managed Claude Code session                                       | Plain `claude` remains independent                                                                             |
| Devin historical import                          | Available now                                  | Read-only import of structural session metadata                                                    | Missing model/resource values remain unknown                                                                   |
| Devin managed session                            | Available now                                  | `taksim devin` starts an opt-in managed native Devin session                                       | Native Devin remains the execution client                                                                      |
| Codex historical import                          | Available now                                  | Privacy-safe import of local Codex rollout history                                                 | Raw prompts, responses, code, diffs, commands, tool payloads, and credentials are not persisted by the adapter |
| Codex live observation                           | Available now, bounded                         | Observe supported Codex hook/Responses metadata                                                    | Unsupported native events fail open                                                                            |
| Codex managed launch                             | Available now, bounded                         | `taksim codex` launches the native CLI through the managed lifecycle                               | Codex owns model selection in v0; Taksim does not rewrite the request model                                    |
| Copilot Coding Agent historical import           | Available now                                  | Privacy-preserving import from the local Copilot data store                                        | Provider/model identity may remain unknown                                                                     |
| Copilot live observation                         | Not available                                  | None                                                                                               | Current hook surface reports unsupported without failing the client                                            |
| Copilot managed launch                           | Not available                                  | None                                                                                               | Do not show `taksim copilot` as a supported workflow                                                           |
| Local dashboard/reports                          | Available now                                  | Read-only visibility into readiness, resources, routing, evidence, economics, and managed sessions | Do not promise a hosted multi-tenant dashboard unless shipped                                                  |
| Shadow recommendations                           | Available now, bounded                         | Explainable, counterfactual recommendations                                                        | There is no learned router; recommendation is not execution evidence                                           |
| Verification reconstruction                      | Available now, evidence-dependent              | Engineering evidence can support `VERIFIED`, `UNCERTAIN`, or `UNVERIFIED` outcomes                 | Never imply universal verification coverage or correctness guarantee                                           |
| Managed Claude promotion                         | Available now, bounded                         | Taksim can apply current managed policy/promotion logic                                            | Do not generalise to every provider, model, task, or request                                                   |
| Selection authority attribution                  | Available now                                  | Distinguish Taksim, user/manual, and provider-native selection where observable                    | Unknown remains unknown; do not infer providers merely from client identity                                    |
| Provider-native planner delegation               | Product architecture / evolving implementation | Explain the governance model                                                                       | Do not present a named HydraFusion integration as available                                                    |
| Reliable realised savings                        | Not yet established                            | Illustrative examples only                                                                         | Label values and percentages `Illustrative`; no customer-result language                                       |
| Automatic repair/escalation across all clients   | Roadmap/bounded implementation                 | Discuss as a controlled direction only                                                             | No general availability claim                                                                                  |
| Company-specific learning from verified outcomes | Roadmap                                        | Explain the long-term loop carefully                                                               | Do not claim production learning or model training today                                                       |

### 4.1 Capability display rule

The homepage may use client names/logos to demonstrate client independence, but must not make all logos look equally supported. Use accessible text labels or a linked compatibility summary:

- Claude Code — Managed sessions + history
- Codex — Managed observation + history; native model selection in v0
- Devin — Managed sessions + history
- GitHub Copilot Coding Agent — Historical visibility only

The detailed matrix belongs in Docs. Do not include “Future clients” alongside available integrations without a `Planned` label.

### 4.2 Repository sources of truth

Before publishing product copy or commands, validate against:

- `README.md`
- `FOUNDATION.md`
- `docs/ARCHITECTURE.md`
- `docs/PRIVACY.md`
- `docs/HISTORICAL_DATA.md`
- `docs/CODEX_INTEGRATION.md`
- `docs/COPILOT_INTEGRATION.md`
- `docs/IMPLEMENTATION_DECISIONS.md`
- the actual CLI help from the release being linked

---

## 5. Brand and Visual System

### 5.1 Brand

- Product name: `Taksim`
- Endorsement: `by EdgeeTech`
- Primary public lockup: approved **Logo Option A**
- Domain: `taksim.edgee.tech`

The approved Option A artwork must be supplied as production SVG plus monochrome variants. Do not redraw, reinterpret, or replace it. If the asset is unavailable, use a temporary text lockup `Taksim` with a small `by EdgeeTech` label and keep final brand acceptance blocked. Do not invent a new symbol.

Required asset set:

- `logo-option-a.svg` — full-colour horizontal lockup;
- `logo-option-a-mark.svg` — symbol only;
- `logo-option-a-mono-light.svg` and `logo-option-a-mono-dark.svg`;
- favicon SVG and generated PNG/ICO sizes;
- social-share mark with safe padding.

### 5.2 Accepted direction

- Light-first interface.
- White and very light neutral backgrounds.
- EdgeeTech turquoise and purple as the only strong brand accents.
- Restrained turquoise-to-purple gradients.
- Dark surfaces only for real terminal/product/demo contexts.
- Generous whitespace, large confident typography, minimal borders.
- Rounded but understated cards; avoid pill overload.
- Explanatory illustrations and short motion sequences inspired by Not Diamond's clarity, without copying its visual identity.
- Page rhythm and simplicity inspired by Edgee.ai, without copying layouts, artwork, copy, or components.
- No generic AI-neon, cyberpunk, circuit-board, robot, glowing-orb, or “magic sparkles” aesthetic.
- No founder/vision section on the homepage.
- Do not promote AgentBoard or Agent Workstation as a homepage/footer product family in v1.

### 5.3 Design tokens

Extract exact turquoise and purple values from the approved EdgeeTech brand assets/site before visual sign-off. Until extracted, use semantic tokens, not guessed hard-coded “final” colours:

```css
--color-brand-turquoise
--color-brand-purple
--color-brand-gradient
--color-bg
--color-bg-subtle
--color-surface
--color-surface-dark
--color-text
--color-text-muted
--color-border
--color-success
--color-warning
--color-danger
--shadow-card
--radius-card
--content-max
--docs-max
```

Colour acceptance requires WCAG contrast checks for text, focus indicators, controls, charts, gradients, and dark terminal surfaces.

### 5.4 Typography and imagery

- Use a modern, highly legible sans-serif family with local/system fallback and minimal font payload.
- Use monospace only for CLI, telemetry fields, receipts, and code.
- Avoid serif display type unless the approved Option A brand system explicitly requires it.
- Prefer product-native diagrams, receipts, terminal sequences, policy/evidence flows, and simple charts over stock photography.
- All client/provider marks require correct trademark treatment and accessible text; do not imply partnership or endorsement.

---

## 6. Technical Foundation

Build a static-first site using Astro with TypeScript and content collections. Deploy to Cloudflare Pages at `taksim.edgee.tech` unless an existing hosting repository or platform is explicitly selected before implementation starts.

Required properties:

- static HTML for all marketing, legal, and documentation content;
- progressive enhancement for calculator, docs search, mobile navigation, and contact form;
- no client-side framework shipped where native HTML/CSS is sufficient;
- reusable page shell, header, footer, CTA, legal layout, docs layout, and capability-status components;
- Markdown/MDX-backed documentation with schema validation;
- environment-gated analytics and contact endpoint configuration;
- no product secret, provider credential, or private repository data in the site bundle;
- clear separation between factual `Available now`, `Limited`, `Roadmap`, and `Illustrative` presentation states.

Suggested routes:

```text
/
/pricing
/docs
/docs/getting-started
/docs/...
/privacy
/terms
/contact
/404
/llms.txt
/robots.txt
/sitemap-index.xml or /sitemap.xml
```

Do not add `/teams`, `/enterprise`, `/security`, `/trust`, `/download`, `/changelog`, `/guides`, `/api-reference`, `/login`, or `/github` navigation in v1. A route may be added later only when real content or product behavior exists.

---

## 7. Global Navigation and Footer

### 7.1 Header

Desktop order:

```text
[Taksim by EdgeeTech]   Pricing   Docs                 Talk to us   Get Taksim Free
```

Rules:

- Logo links to `/`.
- `Pricing` links to `/pricing`.
- `Docs` links to `/docs`.
- `Talk to us` links to `/contact`.
- `Get Taksim Free` links to `/docs/getting-started`.
- No `Product`, `Teams`, `GitHub`, or unimplemented links.
- Header remains visually quiet; the free CTA is primary and the contact CTA is secondary.
- Sticky behavior is allowed only if it does not obscure anchors or consume excessive mobile height.

### 7.2 Footer

```text
Taksim by EdgeeTech

Taksim
  Pricing
  Docs

Legal
  Privacy
  Terms

© {current year} EdgeeTech Ltd.
```

The year must be generated from the build/runtime date, not hard-coded.

Do not add a DPA link until a real, approved DPA exists. Do not add empty columns or placeholder links. EdgeeTech may be linked through the `by EdgeeTech` endorsement; it does not need a separate footer column.

### 7.3 Trust strip

The Trust & Compliance strip sits above the footer, not inside Legal.

Default state: hidden.

Show an item only when the corresponding programme has genuinely begun and an accountable owner has approved the wording:

> **SOC 2 — In progress**
> Certification process underway.

> **ISO 27001 — In progress**
> Certification process underway.

Rules:

- Do not show certification logos, seals, checkmarks, or “compliant/certified” language while in progress.
- Each standard has its own feature flag/content field and may be shown independently.
- The build defaults both flags to `false`.
- Launch acceptance requires written confirmation of current status. No confirmation means no strip.

---

## 8. CTA Contracts

### 8.1 Get Taksim Free

All `Get Taksim Free` buttons route to `/docs/getting-started` in v1. Do not link to a non-existent download or account flow.

The getting-started page begins with a required intent choice:

```text
How will you use Taksim?

[Personal or independent side project]
Continue with Solo — Free

[Work for my company or a client]
Explore Team
```

- Personal selection reveals/continues to installation guidance.
- Company/client selection routes to `/contact` with `intent=team`.
- The choice is an honest eligibility reminder, not an invasive verification system.
- No credit-card claim may appear unless the flow has been tested and truly requires none.
- When a supported packaged installer/download exists, a later decision may change the destination to `/download`; v1 does not assume it.

### 8.2 Talk to us

All `Talk to us`, `Analyse my AI spend`, and `Request an assessment` CTAs route to `/contact`, optionally with a query parameter identifying the source.

Contact form fields:

- Work email — required
- Company — required
- Engineering team size — required; banded select
- Approximate monthly AI engineering spend — required; bands `< $10k`, `$10k–25k`, `$25k–50k`, `$50k–100k`, `$100k+`, `Prefer not to say`
- Primary coding-agent tools — required; multi-select plus `Other`
- Private/local intelligence available — optional; `Yes`, `No`, `Not sure`
- What are you trying to improve? — optional textarea
- Privacy acknowledgement with link to `/privacy` — required

Submit label:

> **Request a Taksim assessment**

Intro copy:

> Tell us about your AI engineering usage and we'll discuss whether Taksim is a good fit.

Behavior:

- Inline validation, accessible error summary, loading state, success state, and retryable failure state.
- Server-side validation, rate limiting, spam protection that does not silently block keyboard/screen-reader users, and no sensitive prompt/code upload.
- Preserve entered non-sensitive values after recoverable errors.
- Do not claim a response time unless operationally committed.
- If no production form endpoint is configured, do not publish a fake form. Use a verified contact email link and explain what information to include.

---

## 9. Homepage Specification

The homepage order is fixed.

### 9.1 Hero

1. Eyebrow: `Intelligence Control Plane for coding agents`
2. H1: `Frontier intelligence, only when the work requires it.`
3. Approved supporting copy from section 2.2.
4. Primary CTA: `Get Taksim Free`
5. Secondary CTA: `Talk to us`
6. Eligibility lines:

   > Free for personal use and independent side projects.
   > Company or client work requires Team.

7. Hero architecture visual:

```text
Claude Code • Codex • Devin • Copilot
                   ↓
                 TAKSIM
Policy • Quality • Budget • Privacy • Evidence
                   ↓
Local resources • Private infrastructure • Cloud models • Provider-native planners
                   ↓
Verified engineering outcome
```

The visual must not imply equal integration maturity. Either attach concise status labels or link to the compatibility matrix.

### 9.2 Taksim in action

This section immediately follows the hero and is the primary product proof.

Heading:

> **Taksim in action**

Desktop composition: native terminal/workflow on the left; Taksim decision/receipt on the right. Mobile: one sequential story.

Required sequence:

```text
$ taksim claude
> Fix the failing payment tests...

Policy scope          Allowed
Quality requirement   High
Execution authority   Taksim / Provider-native
Actual resource       [clearly illustrative or sourced]

Engineering outcome   VERIFIED
Quality bar           MAINTAINED
Selection authority   Taksim / Native
Evidence              Build ✓  Tests ✓  Checks ✓

Estimated cloud cost avoided        $3.82
Estimated saving vs frontier-only   47%
Illustrative example
```

Rules:

- `VERIFIED` requires evidence in the story; do not animate directly from agent output to verified status.
- “Selection authority” must remain distinct from actual resource.
- Provider-native delegation may be shown as an alternate state, not as a shipped HydraFusion integration.
- Both monetary and percentage savings carry a visible `Illustrative example` label in the same card, not hidden in a tooltip or footer.
- The demo must work as static content if animation fails or motion is reduced.

### 9.3 Why Taksim

Heading:

> **Model selection is only one decision. Engineering outcomes are what matter.**

Flow:

```text
Observe → Govern → Select or Delegate → Verify → Escalate → Learn
```

Copy blocks:

- **Observe:** Understand usage, resources, and workload without retaining raw engineering content in canonical telemetry.
- **Govern:** Apply company, repository, quality, privacy, and budget constraints.
- **Select or Delegate:** Choose an eligible resource directly, or let an approved runtime plan internally.
- **Verify:** Judge engineering success using evidence, not model claims.
- **Escalate:** Use stronger intelligence or human review when required.
- **Learn:** Improve future organisational decisions from verified outcomes.

### 9.4 Quality before cost

Heading:

> **Keep the quality bar. Change what you pay to reach it.**

Copy:

> Taksim optimises inside the quality constraint. It can select an eligible resource directly or delegate execution planning to a runtime that can do it better.

Visual: a required-quality threshold with eligible resources and a provider-native planner above the line, and an insufficient resource below it. Never make “cloud/frontier” visually bad or “local/cheap” automatically good.

### 9.5 Cross-client control

Heading:

> **One control plane. Keep the clients your developers already use.**

Copy must distinguish client independence from uniform feature availability. Present the four current clients with the labels in section 4.1 and link to Docs for exact compatibility.

### 9.6 Provider-native intelligence

Heading:

> **Use provider-native intelligence. Don't surrender organisational control.**

Copy:

> Provider-native routing and execution planners can be excellent at deciding what happens inside a request. Taksim governs the larger boundary: which runtimes are eligible, what they may spend, which data and policies apply, and whether the resulting engineering outcome is acceptable.

Keep this section concise. The diagram shows organisation policy, budget, privacy, and quality entering Taksim; Taksim may delegate to an approved native planner; verification evidence returns to Taksim. Do not name HydraFusion on the homepage.

### 9.7 Verification

Heading:

> **Model choice is not proof.**

Copy:

> Taksim does not treat transport success or an agent saying “done” as engineering success.

Visual:

```text
Agent: Done

Taksim evidence:
Build ✓  Tests ✓  CI ✓  Review ✓

Outcome: VERIFIED
```

Also show `UNCERTAIN` or `UNVERIFIED` in a secondary example so the interface does not imply all sessions become verified.

### 9.8 Privacy

Heading:

> **Prompt-aware. Not prompt-owning.**

Intro:

> Taksim is designed to derive the intelligence metadata it needs without retaining raw engineering content in its canonical telemetry.

Two-column facts:

**Canonical telemetry may retain**

- structural task/session metadata;
- resource/model attribution when observable;
- token and latency signals when observable;
- verification outcomes;
- finite evidence classifications.

**Canonical telemetry does not retain**

- raw prompts;
- model responses;
- source code;
- diffs;
- credentials;
- raw tool payloads.

Link to `/privacy`. Avoid absolute statements about transient processing: the architecture may inspect some content transiently to derive classifications. The claim is about canonical retention, not “Taksim can never see a prompt.”

### 9.9 Savings calculator

Heading:

> **How much of your AI engineering spend could be better allocated?**

Supporting copy:

> Explore an illustrative range of frontier spend that may be avoidable while preserving the quality requirement.

Inputs:

- monthly AI engineering spend;
- engineering developer count;
- primary provider/client category;
- private/local intelligence available: yes/no/not sure.

Output:

- labelled `Illustrative optimisation range`;
- monthly and annual range;
- CTA `Analyse my actual AI spend` → `/contact?intent=assessment&source=calculator`.

Calculation rules:

- Use a simple, documented front-end scenario model, not a claim that Taksim analysed the visitor's estate.
- Do not collect or submit calculator values until the user actively opens/submits the contact form.
- Do not use an unexplained single-point result. Present a range.
- Keep assumptions next to the result and provide an accessible “How this estimate works” disclosure.
- Do not use the result in structured data as a product saving claim.

### 9.10 Getting started

Heading:

> **Start with the clients you already use.**

Tabs/accordion: Claude, Codex, Devin, Copilot.

Examples must be generated from or checked against the release CLI. Current baseline:

```powershell
# Claude
taksim history import
taksim claude
taksim verification explain-latest

# Codex
taksim history import --client codex
taksim codex

# Devin
taksim history import --client devin
taksim devin

# GitHub Copilot Coding Agent — history only
taksim history import --client github_copilot
```

The Copilot panel must say `Managed launch is not currently supported.`

CTA: `Read the Quickstart` → `/docs/getting-started`.

### 9.11 Pricing teaser

Two cards only:

- Solo — Free; eligibility wording; 5–7 factual benefits; `Get Taksim Free`.
- Team — Custom; organisation/client eligibility wording; 5–7 organisational benefits; `Talk to us`.

Link to `/pricing` for the detailed comparison. Do not reproduce a long feature matrix on the homepage.

### 9.12 Final CTA

Headline:

> **Use the intelligence you already have. Bring in more only when the work requires it.**

Buttons: `Get Taksim Free` and `Talk to us`. Repeat the Solo/Team eligibility distinction in one short line.

---

## 10. Pricing Page

### 10.1 Hero

H1:

> **Simple pricing.**

Supporting copy:

> Start free for personal and independent projects. Talk to us when Taksim becomes part of company or client work.

### 10.2 Pricing cards

**Solo — Free**

- Personal and independent use only.
- Historical usage import for supported clients.
- Managed sessions for supported clients.
- Local/private/cloud Intelligence Resource visibility.
- Shadow recommendations, clearly separated from actual execution.
- Evidence-dependent verification and personal session/economics reports.
- Local-first, privacy-preserving canonical telemetry.
- CTA: `Get Taksim Free`.
- Visible cross-link: `Using Taksim for company or client work? See Team →`

**Team — Custom**

- Required for company, employer, client, consultancy, and organisational work.
- Company/repository/developer policy.
- Cross-developer visibility and reporting.
- Shared/private Intelligence Resources.
- Quality and budget controls.
- Organisational economics and verified optimisation opportunities.
- Direct-selection and provider-native delegation governance.
- Deployment/privacy controls and commercial support.
- CTA: `Talk to us`.

Avoid “Everything in Solo” where Solo licensing would not apply to organisational use. Say “Includes the applicable individual capabilities, plus…” if needed.

### 10.3 Comparison

Use no more than 15 meaningful rows, grouped under `Usage`, `Visibility`, `Governance`, `Resources`, `Verification`, `Deployment and support`. Every row must map to a current or explicitly labelled planned capability.

### 10.4 Calculator and FAQ

Reuse the calculator contract from the homepage with more room for assumptions.

Required FAQ questions:

- Who can use Solo?
- Can a single developer use Solo for employer or client work?
- Can I use Solo for my own commercial side product?
- Do I need a local model?
- Does Taksim replace Claude Code, Codex, Devin, or Copilot?
- Does Taksim always choose a cheaper model?
- What does Taksim retain?
- What does `VERIFIED` mean?
- How is the illustrative saving range calculated?
- What changes with Team?

Answers must follow this document and link to Docs, Privacy, or Terms where appropriate.

---

## 11. Documentation Information Architecture

### 11.1 Docs landing

H1: `Taksim Documentation`

Include:

- prominent search;
- Quickstart card;
- How Taksim works card;
- Developer clients card;
- Privacy model card;
- capability status labels with `Last verified` date;
- link to Markdown/agent-readable content.

### 11.2 Navigation tree

```text
Introduction
  What is Taksim?
  Why an Intelligence Control Plane?
  Product boundary
  Current capability status

Getting Started
  Installation
  Choose Solo or Team
  First historical import
  First managed session
  Dashboard and reports

Developer Clients
  Claude Code
  Codex
  Devin
  GitHub Copilot Coding Agent
  Compatibility matrix

Concepts
  Intelligence Resources
  Selection Authority
  Taksim Auto
  Native Auto
  Organisational Planning
  Delegation
  Shadow Decisions
  Verification
  Evidence Authority
  Quality Bar
  Escalation
  Observed vs Estimated Economics

Teams
  Company Policy
  Repository Policy
  Budgets
  Private Resources
  Provider-Native Planners
  Organisational Reporting

Privacy & Security
  Local Processing
  Canonical Telemetry
  Transient Processing
  Data Retention
  Credentials
  Client-Specific Boundaries

CLI Reference
  history
  claude
  codex
  devin
  routing
  verification
  diagnostics
  policy
  report

Troubleshooting
```

### 11.3 Required conceptual page

`Taksim Auto, Native Auto, and Delegation` must include:

```text
Native Auto
→ the provider/runtime owns internal selection

Taksim Auto
→ Taksim owns the organisational resource decision where it has authority

Delegated runtime
→ Taksim owns eligibility, policy, privacy, budget, and evidence envelope
→ the approved runtime owns its internal request-level plan
```

Use Copilot's observed `Native Auto` distinction as an example, without claiming Taksim can manage-launch Copilot.

### 11.4 Docs behavior

- Desktop: persistent left navigation, main content, optional on-page table of contents.
- Mobile: accessible navigation drawer plus in-page section selector.
- Search is keyboard accessible and returns title, section, excerpt, and status.
- Current page and current heading are visible.
- Code blocks include a labelled copy button and preserve PowerShell syntax.
- Deep links remain stable.
- Each page carries `Last verified against Taksim <version/commit/date>` where capability-sensitive.
- Broken internal links, duplicate headings/IDs, and orphan pages fail CI.
- Generate `/llms.txt` and agent-readable Markdown endpoints/files from the same content source; do not maintain a second manually divergent documentation set.

---

## 12. Privacy Page

H1:

> **Prompt-aware. Not prompt-owning.**

Open with the plain-language canonical telemetry summary from the homepage, followed by the formal privacy notice.

Required sections:

1. Scope and controller identity.
2. Data processed by the public website.
3. Contact-form data and purpose.
4. Product task/session metadata.
5. Transient processing versus canonical retention.
6. Data Taksim canonical telemetry is designed not to retain.
7. Local processing and deployment boundaries.
8. Solo telemetry and any aggregate/service-improvement processing.
9. Legal bases.
10. Retention periods or retention criteria.
11. Subprocessors, with an accurate current list or a clearly managed reference.
12. International transfers.
13. Security measures stated without certification overclaim.
14. User/data-subject rights.
15. Children/age eligibility if applicable.
16. Policy changes and effective date.
17. Contact.

Privacy requirements:

- Clearly say if raw content may be inspected transiently to derive classifications.
- Never collapse `not retained in canonical telemetry` into `never processed`.
- Explain what is local, what may leave the machine, and under which product/configuration.
- Do not enable analytics or contact submission until the actual providers, purposes, retention, and transfer position are disclosed.
- Do not promise zero data collection if standard server/CDN security logs exist.
- Legal review is a release blocker.

---

## 13. Terms Page

Required sections:

1. About Taksim and contracting entity.
2. Eligibility and authority to accept.
3. Accounts, access, and installation.
4. Solo licence and exact eligibility boundary.
5. Team service and commercial terms.
6. Acceptable use.
7. Customer/user responsibilities.
8. Third-party coding agents, model providers, and native runtimes.
9. Fees, taxes, and payment where applicable.
10. Intellectual property and feedback.
11. Customer data and privacy reference.
12. Confidentiality where applicable.
13. Service changes and availability.
14. Verification and economics disclaimers.
15. Warranties and disclaimers.
16. Limitation of liability.
17. Suspension and termination.
18. Changes to the terms.
19. Governing law and disputes.
20. Contact.

Required principles:

- Solo may not be used for work on behalf of an employer, client, customer, company, consultancy, or other organisation.
- Taksim is not the underlying AI model provider and does not control or warrant third-party outputs.
- `VERIFIED` means the configured/available evidence satisfied Taksim's applicable verification rules; it is not a guarantee that code is correct, secure, complete, or fit for purpose.
- Estimates, counterfactuals, optimisation ranges, and shadow recommendations are not realised savings or execution evidence.
- Users remain responsible for source review, credentials, provider terms, licences, approvals, and deployment decisions.
- Legal review is a release blocker.

---

## 14. Contact Page

Use the exact form contract in section 8.2. Include a short explanation of the assessment path:

```text
Current usage and constraints
→ historical/shadow analysis where appropriate
→ optimisation opportunity review
→ pilot discussion
→ Team deployment, if suitable
```

This describes a possible sales process, not an automatic or free entitlement. Do not request prompts, source code, diffs, credentials, provider keys, or raw session exports through the public form.

---

## 15. Responsive Behavior

Breakpoints must emerge from layout needs, with validation at minimum widths 320, 375, 768, 1024, 1440, and 1920 CSS pixels.

- No horizontal scrolling at 320px except intentionally scrollable code/table containers.
- Header becomes a labelled menu button; both CTAs remain reachable within one menu opening.
- Hero uses one column on small screens; visual follows copy and CTAs.
- Demo becomes a readable step sequence; do not shrink a desktop dashboard into illegibility.
- Process flow becomes a vertical timeline on narrow screens.
- Pricing cards stack Solo first, Team second.
- Comparison tables gain row headers and a mobile card/list representation; do not rely only on horizontal scroll.
- Calculator inputs and results stack; numeric values never overflow.
- Docs navigation becomes a focus-managed drawer and closes on navigation/Escape.
- Legal content retains comfortable line length and heading hierarchy.
- Touch targets are at least 44×44 CSS pixels where practical.
- Layout must remain usable at 200% browser zoom and with enlarged text.

---

## 16. Motion and Demo Placeholders

Motion explains state transitions; it is not decoration.

Allowed:

- subtle connector movement between client, policy envelope, resource/planner, and evidence;
- terminal typing with immediate skip/static fallback;
- sequential reveal of Observe/Govern/Select-or-Delegate/Verify/Escalate/Learn;
- receipt state transitions based on explicit evidence;
- restrained turquoise-purple emphasis.

Required behavior:

- Respect `prefers-reduced-motion: reduce`; show final static frames with no loss of information.
- No autoplay video with audio.
- Pause animation when off-screen or when the page is hidden.
- Animation must not block CTA interaction or content rendering.
- Avoid layout shifts; reserve exact space.
- Provide text alternatives for diagrams and semantic HTML for key data.
- Keep a static poster/placeholder asset until final motion is approved.
- Treat `$3.82` and `47%` as an explicitly illustrative storyboard, not product telemetry.

---

## 17. SEO and Sharing

### 17.1 Global

- Canonical base: `https://taksim.edgee.tech`.
- Unique title, meta description, canonical URL, Open Graph metadata, and social image per indexable page.
- Sitemap includes only real, canonical, production pages.
- `robots.txt` links to the sitemap and does not expose preview routes.
- Semantic one-H1 structure and descriptive heading hierarchy.
- Descriptive internal links; avoid repeated “learn more” without context.
- Branded 404 with links to homepage, Pricing, and Docs.
- HTTPS-only and one canonical trailing-slash policy.

### 17.2 Suggested metadata

- Home title: `Taksim — Intelligence Control Plane for Coding Agents`
- Home description: `Govern local, private, cloud, and provider-native intelligence for coding agents. Preserve the quality bar and verify engineering outcomes with evidence.`
- Pricing title: `Pricing — Taksim`
- Docs title: `Taksim Documentation`
- Privacy title: `Privacy — Taksim`
- Terms title: `Terms — Taksim`
- Contact title: `Talk to Taksim — Team Assessment`

### 17.3 Structured data

Use `Organization` for EdgeeTech and `SoftwareApplication` only for factual product data. FAQ structured data is optional and must exactly match visible FAQ content. Do not encode illustrative savings, unsupported ratings, certifications, prices for Team, or unavailable operating-system support.

---

## 18. Analytics and Measurement

Use a privacy-focused, cookieless analytics configuration with no cross-site advertising identifiers. Keep analytics disabled until a real site ID, provider, data-flow disclosure, and production-domain restriction are configured.

Implementation requirements:

- configuration via public environment variables; no placeholder production ID;
- production-domain allow-list for `taksim.edgee.tech`;
- respect applicable consent/legal requirements and Do Not Track where supported;
- never send form field values, calculator amounts, query text, code, prompts, email addresses, company names, or user-entered free text as analytics properties;
- avoid persistent client identifiers unless legally reviewed and explicitly approved;
- analytics failure must not affect page behavior.

Event vocabulary:

```text
cta_get_taksim_free       location
cta_talk_to_us            location
solo_intent_selected      location
team_intent_selected      location
docs_search_used          result_count_band (no query)
docs_client_opened        client
calculator_used           spend_band only after explicit interaction
calculator_contact_opened source
contact_submit_success    source
contact_submit_failure    error_category (no payload)
```

Record only the minimum properties shown. Verify both analytics-disabled and analytics-enabled builds. The privacy page must match the provider and events actually shipped.

---

## 19. Accessibility

Target WCAG 2.2 AA.

Required:

- semantic landmarks and one clear page-level H1;
- skip link;
- full keyboard access and visible focus;
- no colour-only status communication;
- accessible names for icons, copy buttons, menu controls, form fields, and disclosures;
- error summary and field-level errors associated programmatically;
- status announcements for calculator/form updates without excessive live-region output;
- diagrams accompanied by equivalent text;
- decorative artwork hidden from assistive technology;
- reduced-motion support;
- contrast validation including gradients, muted text, borders, status chips, and focus rings;
- logical DOM order matching visual order;
- code blocks and tables navigable at zoom and on mobile;
- page titles updated on navigation;
- automated checks supplemented by keyboard and screen-reader smoke testing.

---

## 20. Security, Privacy, and Performance Baseline

- Enforce HTTPS and secure response headers suitable for a static site.
- Use a restrictive Content Security Policy; enumerate only required analytics/form origins.
- No inline third-party scripts without review.
- Sanitize/render Markdown safely; no untrusted raw HTML by default.
- Contact form uses server-side schema validation, CSRF-appropriate controls, rate limiting, and output encoding.
- Do not expose private keys, provider tokens, API secrets, or internal endpoints to the browser.
- Dependency audit and lockfile required.
- Target Core Web Vitals in the `good` range on representative mobile hardware.
- Performance budgets: initial JS ≤ 100 KB gzip for marketing pages, initial CSS ≤ 60 KB gzip, hero image/poster ≤ 250 KB, no unrequested video on initial load.
- Lazy-load below-the-fold non-critical media.
- Self-host/subset fonts where licensing permits; prevent layout shift.

---

## 21. Testing and CI

### 21.1 Automated gates

- formatting and lint;
- TypeScript/Astro validation;
- production build;
- unit tests for calculator assumptions, intent routing, environment gates, and capability-label rendering;
- component tests for navigation, mobile menu, docs search, calculator, contact validation, reduced motion, and status badges;
- end-to-end tests for all routes and CTA destinations;
- link checker for internal links and important external links;
- accessibility scan on every page template;
- sitemap, canonical, metadata, robots, and structured-data validation;
- no analytics script when configuration is absent;
- no Trust strip when flags are false;
- legal pages cannot contain placeholder entity/contact/effective-date tokens in production;
- content test rejecting banned/unsupported claims.

### 21.2 Product-truth content tests

Fail CI if public content claims any of the following without an explicit product-truth update:

- Copilot managed launch/live observation;
- guaranteed or realised savings from the illustrative calculator/demo;
- universal optimal routing;
- Taksim-owned request-level orchestration as the primary product;
- SOC 2 or ISO 27001 certified/compliant;
- `in progress` trust claims while their flags are false;
- verification as a correctness guarantee;
- a product/provider partnership not formally approved;
- a Team price other than `Custom`;
- Solo eligibility for employer/client/organisation work.

### 21.3 Manual QA matrix

- Chromium, Firefox, and WebKit current stable versions.
- At least one iOS Safari and one Android Chrome viewport.
- Keyboard-only navigation.
- Screen-reader smoke test on Windows and/or macOS plus mobile where available.
- 200% zoom and enlarged text.
- Light mode and forced-colours/high-contrast mode.
- Reduced-motion mode.
- Slow network and JavaScript-disabled marketing/legal/docs fallback.
- Form success, server rejection, network failure, rate limit, and unavailable endpoint.
- All CTAs from header, hero, content, pricing, calculator, and footer.
- Visual regression snapshots at 375, 768, 1440.

---

## 22. Implementation Phases

### Phase 0 — Inputs and truth freeze

1. Confirm target website repository and hosting project.
2. Import approved Logo Option A SVG variants; no substitute design.
3. Extract exact EdgeeTech turquoise/purple tokens from approved assets.
4. Confirm EdgeeTech Ltd. legal entity details, privacy contact, governing law, and contact fallback.
5. Confirm analytics provider/site ID or leave analytics disabled.
6. Confirm contact delivery endpoint or use a verified email fallback.
7. Confirm SOC 2 and ISO 27001 status; default both hidden.
8. Re-run product capability/CLI audit against the release commit.

Exit: no unresolved placeholder affects brand, legal identity, data flow, trust status, or CTA functionality.

### Phase 1 — Foundation and design system

1. Scaffold Astro/TypeScript static site and Cloudflare Pages configuration.
2. Implement tokens, typography, layout, header/footer, buttons, cards, status labels, code blocks, forms, and legal/docs shells.
3. Add content schemas for docs and capability status.
4. Establish CI, lint, build, unit, accessibility, link, and visual checks.

Exit: component library and empty route shells pass CI and responsive/accessibility baselines.

### Phase 2 — Core conversion pages

1. Build homepage in the fixed section order.
2. Build Pricing with eligibility, cards, comparison, calculator, and FAQ.
3. Build Contact with real delivery/fallback behavior.
4. Implement CTA source tracking without personal payloads.

Exit: both Solo self-service and Team assessment journeys complete without dead ends.

### Phase 3 — Documentation

1. Build docs IA, navigation, search, Markdown rendering, status labels, code copying, and agent-readable output.
2. Write Quickstart and current client pages first.
3. Add conceptual pages, especially Selection Authority and Taksim Auto/Native Auto/Delegation.
4. Validate every command against the release CLI.

Exit: a new Solo user can determine eligibility, install, import history, start a supported managed session, and inspect the result using only published Docs.

### Phase 4 — Legal, privacy, and trust

1. Draft Privacy and Terms from sections 12–13.
2. Reconcile all analytics, CDN, hosting, contact, and product data flows.
3. Complete legal review.
4. Enable Trust strip only for programmes genuinely underway and approved.

Exit: no placeholder legal text, undisclosed production integration, or overstated compliance claim remains.

### Phase 5 — Motion, polish, and launch

1. Replace demo placeholders with approved lightweight motion while preserving static/reduced-motion forms.
2. Complete SEO/social assets, sitemap, robots, 404, performance tuning, and security headers.
3. Run full automated/manual QA.
4. Deploy preview, conduct product-truth review against current Taksim release, then promote to `taksim.edgee.tech`.

Exit: all launch acceptance criteria pass on the production-domain build.

---

## 23. Acceptance Criteria

The v1 website is complete only when every item below is true.

### Strategy and truth

- [ ] The site uses `Intelligence Control Plane for coding agents` and the accepted headline/supporting copy.
- [ ] No page positions Taksim primarily as a proprietary request-level router.
- [ ] Direct selection and provider-native delegation are both explained accurately.
- [ ] Verification is evidence-based and includes uncertainty, not a correctness guarantee.
- [ ] The client capability matrix matches the release: Claude/Devin/Codex managed + history with documented limits; Copilot history only.
- [ ] Savings in the demo/calculator are visibly illustrative and never presented as customer results.

### Brand and structure

- [ ] Domain/canonical URLs use `taksim.edgee.tech`.
- [ ] Approved Logo Option A assets are used without redesign.
- [ ] Exact EdgeeTech turquoise/purple tokens are sourced from approved brand material.
- [ ] The site is light-first and avoids generic AI/cyber aesthetics.
- [ ] Navigation contains only Pricing, Docs, Talk to us, and Get Taksim Free.
- [ ] Footer contains only real links and the current generated year.
- [ ] No homepage founder/vision or product-family section appears.

### Journeys

- [ ] Every `Get Taksim Free` CTA reaches the intent-gated Quickstart.
- [ ] Personal users can continue to accurate installation instructions.
- [ ] Company/client users are directed to Team/contact.
- [ ] Every Team CTA reaches a functioning assessment form or verified email fallback.
- [ ] No route, CTA, docs link, trust item, or footer link is a placeholder.

### Solo/Team licensing

- [ ] Solo is clearly free only for personal and independent use.
- [ ] Employer, client, consultancy, company, and organisational use clearly require Team, even for one developer.
- [ ] Pricing shows Solo `Free` and Team `Custom`; no seat or savings-share price is invented.
- [ ] Terms preserve the same eligibility boundary.

### Privacy, legal, and trust

- [ ] Privacy distinguishes transient processing from canonical retention.
- [ ] Website analytics/contact/hosting data flows match the published notice.
- [ ] Privacy and Terms have completed legal review.
- [ ] SOC 2/ISO 27001 are hidden unless genuinely underway and approved.
- [ ] In-progress status never uses certification badges or certified/compliant language.
- [ ] DPA is absent until an approved DPA exists.

### Quality

- [ ] All required routes render as static, indexable HTML.
- [ ] CI passes lint, type/content checks, build, tests, accessibility, links, metadata, and banned-claim checks.
- [ ] Responsive/manual QA passes the matrix in section 21.3.
- [ ] WCAG 2.2 AA requirements pass automated checks and manual keyboard/screen-reader smoke tests.
- [ ] Reduced-motion and JavaScript-disabled fallbacks retain all essential information and navigation.
- [ ] Performance budgets and good Core Web Vitals targets are met on the production build.
- [ ] `/llms.txt` and agent-readable Docs are generated from the same canonical content.

---

## 24. Explicit Non-Goals for v1

- A hosted Taksim dashboard or account system.
- A public GitHub/open-source promise.
- A `/teams`, `/enterprise`, `/trust`, `/security`, `/download`, or `/changelog` page without real content.
- A named HydraFusion integration.
- A universal model leaderboard or “best model” recommender.
- Real-time calculator analysis of visitor/customer infrastructure.
- Public customer logos, testimonials, case studies, benchmarks, or percentage-saving claims without evidence and approval.
- SOC 2/ISO badges before certification.
- A new logo direction beyond approved Option A.
- AgentBoard/Agent Workstation product-family promotion.
- A DPA before commercial/legal readiness.

---

## 25. Change Control

The following changes require explicit product-owner approval and an update to this plan before implementation:

- category, hero headline, or core supporting copy;
- domain or brand lockup;
- Solo eligibility or Team pricing model;
- supported-client claims;
- adding a new top-level route/navigation item;
- changing either CTA destination or sales motion;
- enabling analytics/contact providers not disclosed in Privacy;
- showing SOC 2/ISO 27001 status;
- publishing realised savings, benchmark, customer, or certification claims;
- repositioning Taksim as a request-level routing product.

Capability status and CLI examples may be updated without reopening strategy, but every update requires repository evidence, a `Last verified` date, tests, and consistent changes across homepage, Pricing, Docs, Privacy/Terms where affected.
