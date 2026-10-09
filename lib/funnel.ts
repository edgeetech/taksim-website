// Free-tier acquisition funnel steps, marked on the elements as data-funnel="<step>". The install-guide
// view is the page view of /docs/quick-start itself; installGuide marks links that lead there.
// Nothing is collected yet: the site loads no analytics, and the privacy notice says no production
// analytics may be enabled before it is updated. When aggregate first-party counting is approved, it
// should count these markers only (no prompt, code, repo or machine data, no cross-site identifiers).
export const funnel = {
  getFree: 'get-free',
  seeHow: 'see-how',
  installGuide: 'install-guide',
  installCopy: 'install-copy',
  docsNext: 'docs-next',
  teamContact: 'team-contact',
} as const;
