# Security decisions

Tracked decisions for advisories excluded from the audit gate through the `AUDIT_IGNORE_GHSA` repo variable, plus privacy decisions about what the site collects. See AGENTS.md for the rules. Each advisory entry must match the variable; remove both when the advisory is fixed or the exception ends.

## GHSA-vfj7-8cjw-p6xm (braces)

- Severity: high.
- Advisory: https://github.com/advisories/GHSA-vfj7-8cjw-p6xm
- Status upstream: no patched release of `braces`.
- How it is reached: `braces` through `micromatch` and `fast-glob`, pulled in by the build-time tools `vinext` (via `vite-plugin-commonjs` and `vite-plugin-dynamic-import`) and `shadcn` (directly and via `ts-morph`).
- Risk: low. Both tools run only on developer machines and in CI while building. The deployed site is static files with no server code, so the vulnerable code never runs in production and never sees untrusted input.
- Decision: ignore in the audit gate until the expiry date.
- Owner approval: 2026-10-09.
- Expiry: 2026-11-08 (`AUDIT_IGNORE_GHSA=GHSA-vfj7-8cjw-p6xm:2026-11-08`).
- Renewal: renew only if upstream is still unpatched. Before renewing, check whether a newer `vinext`, `shadcn` or an `overrides` entry removes the vulnerable `braces`.

## Site analytics: none

- Decision: the site has no analytics. Nothing collects the `data-funnel` markers in `lib/funnel.ts`; they only document the intended funnel steps.
- Measurement instead: GitHub release asset download counts of `edgeetech/taksim-releases`, read with `npm run funnel`. These are GitHub's own release statistics; the site collects nothing, so the privacy notice ("does not load a third-party analytics tracker") stays accurate. See AGENTS.md, "Funnel measurement".
- Owner decision: 2026-10-09.
- Review: analytics may be reconsidered later. Update the privacy notice before enabling anything, and count only the `data-funnel` markers.
