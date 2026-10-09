# Agent notes

## Security audit

`npm run audit` runs `scripts/audit-gate.mjs`, the same gate the Validate workflow (`.github/workflows/pages.yml`) runs. It reads `npm audit --json` and fails on any remaining high or critical advisory; moderate and low advisories are listed but do not fail.

The security audit skips advisories listed in the `AUDIT_IGNORE_GHSA` repo variable (`GHSA-id:YYYY-MM-DD`, comma-separated, date at most 30 days ahead) until each date passes. Locally the gate reads the same variable from the environment, for example `AUDIT_IGNORE_GHSA=GHSA-xxxx-xxxx-xxxx:2026-11-08 npm run audit`.

- The id must match `^GHSA(-[0-9a-z]{4}){3}$` and the date must be a real calendar day no more than 30 days ahead. Expired, invalid or too-far entries raise a `::warning::` and are not applied.
- Ignoring an advisory also clears the packages npm lists only because they depend on the affected package. A package that has another, non-ignored high or critical advisory still fails.
- An entry that matches no advisory raises a warning; remove it.
- Only add an entry for an advisory with no patched release. Every entry needs a matching record in `.agents/local/security-decisions.md` with the owner's approval and expiry. Renew an entry only if upstream is still unpatched, and update the record when you do.
