// Funnel steps left in the reference docs, marked on the elements as data-funnel="<step>". Taksim is closed
// as a commercial product, so the acquisition steps (get free, pricing, team contact) are gone.
// The markers only document the intended steps. Nothing collects them: by owner decision on
// 2026-10-09 the site has no analytics, and the funnel is measured from GitHub release download
// counts instead (npm run funnel, see AGENTS.md). If analytics is reconsidered, the privacy notice
// must be updated first, and only these markers may be counted (no prompt, code, repo or machine
// data, no cross-site identifiers).
export const funnel = {
  installCopy: 'install-copy',
  docsNext: 'docs-next',
} as const;
