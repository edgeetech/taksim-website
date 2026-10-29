// Recent releases, written by `node scripts/release.mjs changelog <path to the product CHANGELOG.md>`.
// The build never reads the product repository; this committed file is the only input.
import changelog from '../data/changelog.json' with { type: 'json' };

export type ChangelogItem = { summary: string; details: string; points: string[] };
export type ChangelogEntry = { version: string; date: string | null; items: ChangelogItem[] };

export const changelogEntries: ChangelogEntry[] = changelog.entries;
