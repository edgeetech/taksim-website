# Local Cloudflare deployment

Production is served by Workers Static Assets on the exact route `taksim.edgee.tech/*`.
The existing proxied DNS record remains unchanged. Deployment does not depend on GitHub Actions.
The separately named `wrangler.static.jsonc` keeps vinext in static export mode; a root `wrangler.jsonc` would select its server build integration instead.

1. Run `npm ci` in a clean checkout of the reviewed website commit.
2. Authenticate with `npx wrangler login` and confirm the intended account with `npx wrangler whoami`.
3. If publishing a new Taksim release, synchronize and review `release/manifest.json` with `npm run release:sync -- --strict`. Publish complete release assets before updating the website's advertised commands or platforms.
4. Run `npm run deploy:local`. This validates lint, content tests, dependency security and the static build before deploying with the locally pinned Wrangler. Set `AUDIT_IGNORE_GHSA` to the repo variable's current value so the audit applies the same approved exceptions as CI (see AGENTS.md).
5. Verify English and Turkish pages at https://taksim.edgee.tech, including installation instructions, release links and a missing page.

The manifest is a committed snapshot of the public release, not a claim about unpublished local builds.
Credentials belong in Wrangler's local authentication store, never in this repository.
For rollback, inspect `npx wrangler deployments list --config wrangler.static.jsonc` and use `npx wrangler rollback --config wrangler.static.jsonc` with the previously verified version ID.
