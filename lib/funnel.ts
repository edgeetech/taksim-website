// Free-tier acquisition funnel steps, marked on the elements as data-funnel="<step>". The install-guide
// view is the page view of /docs/quick-start itself; installGuide marks links that lead there.
// The markers only document the intended steps. Nothing collects them: by owner decision on
// 2026-10-09 the site has no analytics, and the funnel is measured from GitHub release download
// counts instead (npm run funnel, see AGENTS.md). If analytics is reconsidered, the privacy notice
// must be updated first, and only these markers may be counted (no prompt, code, repo or machine
// data, no cross-site identifiers).
export const funnel = {
  getFree: 'get-free',
  seeHow: 'see-how',
  installGuide: 'install-guide',
  installCopy: 'install-copy',
  docsNext: 'docs-next',
  teamContact: 'team-contact',
} as const;
