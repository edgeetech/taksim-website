# Launch demo: storyboard and shot list

A 60 to 90 second terminal recording: install, `taksim claude`, a routed reply, the dashboard and the cost report. Target length 80 seconds. This file describes what to record; nothing is recorded yet. It is internal and is not served by the site (the site only serves `public/` and the routes under `app/`).

Where the finished video goes: host the MP4 on a domain EdgeeTech controls (no YouTube or Vimeo embed, so the page loads no third-party player), then set `PUBLIC_DEMO_VIDEO_URL` at build time (and `PUBLIC_DEMO_CAPTIONS_URL` for the `.vtt`). `/pricing` and `/tr/pricing` show the block when the variable is set and nothing when it is not. See `AGENTS.md`, "Launch switches".

## Recording rules

- Use an EdgeeTech Anthropic Console API key and a throwaway demo repository. No employer account, no employer repository, names or numbers.
- Windows Terminal, PowerShell 7, font size 16 or larger, window about 110x30, dark theme, prompt set to `PS>` (`function prompt { "PS> " }`).
- Record the install on a clean machine or Windows Sandbox. Record the rest against a fresh `TAKSIM_HOME` that holds only demo data, so reports show demo repo aliases and nothing personal.
- Dry-run every command first and read the output for paths, usernames, repo names or keys. Crop or re-record anything that shows them. Never show the API key.
- No Anthropic or Claude logos and no Claude UI screenshots: terminal and the Taksim dashboard only.
- Every caption must be backed by what is on screen. Numbers in captions come from the actual output of that take; if you re-record, update the captions.

## Shot list

| Time | Screen | Action | Caption (EN) |
|---|---|---|---|
| 0:00-0:05 | Title card on black | None | "Claude Code on your own API key, routed and receipted." |
| 0:05-0:15 | Clean PowerShell | Paste the one-line installer from the install guide (`release.installCommand`, copy it from the live site; speed the download up 4x) | "One line. It checks every file against SHA256SUMS. No account." |
| 0:15-0:22 | Same window | Let `taksim setup` run on its own after the install | "It finds your coding clients and imports the history they already keep." |
| 0:22-0:32 | New terminal in the demo repo | `taksim claude`, wait for the status line | "Launch Claude Code through Taksim. Your key, your provider, a local gateway." |
| 0:32-0:50 | Claude Code session | Give it one small task, then one harder task. Let the status line show the model for each turn | "Taksim picks the model per turn. The status line shows which." |
| 0:50-0:56 | Second terminal | `taksim routing explain-latest` | "Every choice has a recorded reason." |
| 0:56-1:06 | Terminal, then browser | `taksim dashboard` (opens on 127.0.0.1) | "A local dashboard. Spend by model, from your own machine." |
| 1:06-1:15 | Terminal | `taksim report cost --by repo --since 7d` | "Billed dollars by repo alias. Estimates are labelled as estimates." |
| 1:15-1:20 | End card | None | "Free to see. Pro to route. taksim.edgee.tech/pricing" |

Notes:

- If the routed reply does not escalate on camera, do not stage it. Show whatever the session really did; the caption describes what is on screen. If a real escalation happens in a take, a caption such as "Escalated to the stronger model for the harder task" is fine for that take only.
- Trim long output with `| Select-Object -First 25` and check on the dry run that the visible lines hold the numbers the caption names.
- Keep the cursor still while text prints; hold each result for at least two seconds so captions are readable.

## Deliverables

| File | Spec |
|---|---|
| `taksim-demo.mp4` | H.264, 1920x1080, 30 fps, under 30 MB, no audio track needed |
| `taksim-demo.webm` | Optional VP9 version of the same cut |
| `taksim-demo.en.vtt`, `taksim-demo.tr.vtt` | Captions with the table text above (the page takes one `.vtt`; the Turkish page can point at the Turkish file) |
| `taksim-demo.gif` | 12 fps at most, under 8 MB, for X and the README |
| Poster frame | Optional PNG of the dashboard shot |

## Claims check before it ships

- Says "routed" only for Claude Code on an API key. Nothing about subscription routing, the Claude desktop app or Codex routing.
- No savings percentage in captions or on the end card. If a number is shown, it is a number from this take's own output.
- No mention of context savings.
- Says "signed" only after the installer is code-signed. Until then, if SmartScreen appears during the install, show it and say so in the caption.
- No "official", "approved" or "partner" wording, and no `-AllowUnsigned` flag in the pasted install line unless the live install guide shows it.
