# Agent notes

## Security audit

`npm run audit` runs `scripts/audit-gate.mjs`, the same gate the Validate workflow (`.github/workflows/pages.yml`) runs. It reads `npm audit --json` and fails on any remaining high or critical advisory; moderate and low advisories are listed but do not fail.

The security audit skips advisories listed in the `AUDIT_IGNORE_GHSA` repo variable (`GHSA-id:YYYY-MM-DD`, comma-separated, date at most 30 days ahead) until each date passes. Locally the gate reads the same variable from the environment, for example `AUDIT_IGNORE_GHSA=GHSA-xxxx-xxxx-xxxx:2026-11-08 npm run audit`.

- The id must match `^GHSA(-[0-9a-z]{4}){3}$` and the date must be a real calendar day no more than 30 days ahead. Expired, invalid or too-far entries raise a `::warning::` and are not applied.
- Ignoring an advisory also clears the packages npm lists only because they depend on the affected package. A package that has another, non-ignored high or critical advisory still fails.
- An entry that matches no advisory raises a warning; remove it.
- Only add an entry for an advisory with no patched release. Every entry needs a matching record in `.agents/local/security-decisions.md` with the owner's approval and expiry. Renew an entry only if upstream is still unpatched, and update the record when you do.

## Funnel measurement

By owner decision on 2026-10-09 the site has no analytics. Nothing collects the `data-funnel` markers (`lib/funnel.ts`); they only document the intended steps. The free-tier funnel is measured from the GitHub release asset download counts of `edgeetech/taksim-releases`, which are GitHub's own release statistics, so the privacy notice ("does not load a third-party analytics tracker") stays accurate. Analytics may be reconsidered later; the privacy notice must be updated before anything is enabled.

`npm run funnel` (`scripts/funnel-report.mjs`) reads the public releases API, with `GITHUB_TOKEN` if set and anonymously otherwise. It prints per-release and per-asset counts split by kind, then a funnel summary: install-script downloads, platform binary downloads, and binaries per install-script download.

- Asset kinds: installer script (`install.ps1`, `install.sh`), second-stage installer (`install-release.ps1`, fetched by `install.ps1`; it counts as the installer only on old releases without `install.ps1`), Windows, macOS and Linux binaries, checksums (`SHA256SUMS.txt`) and manifest (`taksim-release-manifest.json`).
- Checksum and manifest downloads are not installs. A Windows install fetches `install.ps1`, then `SHA256SUMS.txt`, the zip and `install-release.ps1`.
- This site's own release sync (`scripts/release.mjs sync`, run by every Validate workflow run, including the 6-hourly schedule) downloads `install.ps1`, `SHA256SUMS.txt` and the manifest of the latest release. Installers never fetch the manifest, so the report subtracts manifest downloads from install-script downloads per release to estimate real install attempts.
- Counts are cumulative, include retries and bots, and cannot be tied to a visitor or a site page.
- Print the report only; do not commit counts or results.
