// Facts for /privacy/verify, taken from the Taksim repository's docs/PRIVACY_AND_COMPLIANCE.md and
// docs/CONFIGURATION.md. Paths and hosts live here so both locales show them identically; the
// explanations live in the dictionary (verify.files, verify.network), keyed by id.

export const homeFiles = [
  { id: 'db', path: 'control-plane.db' },
  { id: 'reports', path: 'reports/' },
  { id: 'judge', path: 'judge/' },
  { id: 'routing', path: 'routing/' },
  { id: 'budgets', path: 'budgets.json' },
  { id: 'notify', path: 'notify.json' },
  { id: 'policy', path: 'policy.yaml' },
  { id: 'pricing', path: 'pricing-overrides.json' },
  { id: 'secrets', path: 'hook-secret' },
  { id: 'memory', path: 'decision-memory.key' },
  { id: 'salt', path: 'cache/installation.salt' },
  { id: 'aliases', path: 'repo-names.json' },
  { id: 'logs', path: 'logs/gateway.log' },
  { id: 'archive', path: 'context-archive/' },
] as const;

export const outsideFiles = [
  { id: 'binaries', path: '%LOCALAPPDATA%\\Taksim\\versions\\' },
  { id: 'gatewayRecord', path: '%LOCALAPPDATA%\\Taksim\\gateway.json' },
  { id: 'settings', path: 'CLAUDE_CONFIG_DIR/settings.json' },
] as const;

export const endpoints = [
  { id: 'loopback', host: '127.0.0.1:4027' },
  { id: 'provider', host: 'api.anthropic.com' },
  { id: 'releases', host: 'github.com/edgeetech/taksim-releases' },
  { id: 'anthropicJudge', host: 'api.anthropic.com' },
  { id: 'ollama', host: '127.0.0.1:11434' },
  { id: 'jev', host: 'api.typesafe.ai' },
  { id: 'githubApi', host: 'api.github.com' },
  { id: 'webhook', host: null },
  { id: 'export', host: null },
  { id: 'licence', host: null },
] as const;

export type HomeFileId = (typeof homeFiles)[number]['id'];
export type OutsideFileId = (typeof outsideFiles)[number]['id'];
export type EndpointId = (typeof endpoints)[number]['id'];

// Copy-paste commands for watching Taksim's connections with the operating system's own tools.
export const watchCommands = {
  powershell: [
    '# What the Taksim gateway listens on (expect 127.0.0.1 only)',
    'Get-NetTCPConnection -State Listen -LocalPort 4027 | Select-Object LocalAddress, LocalPort, OwningProcess',
    '',
    '# Every connection owned by taksim.exe, with its remote end',
    "$ids = (Get-Process taksim -ErrorAction SilentlyContinue).Id",
    'Get-NetTCPConnection | Where-Object { $ids -contains $_.OwningProcess } |',
    '  Select-Object State, LocalAddress, LocalPort, RemoteAddress, RemotePort, OwningProcess',
  ].join('\n'),
  netstat: [
    'tasklist /FI "IMAGENAME eq taksim.exe"',
    'netstat -ano | findstr ":4027"',
    '',
    'REM Match the PID column of netstat -ano against the PID from tasklist',
    'netstat -ano',
  ].join('\n'),
  lsof: [
    '# macOS (preview)',
    'lsof -nP -iTCP -a -c taksim',
    'lsof -nP -iTCP:4027 -sTCP:LISTEN',
  ].join('\n'),
  resmon: 'resmon',
  doctor: [
    'taksim doctor',
    '',
    '# the same check with the release lookup switched off:',
    '$env:TAKSIM_UPDATE_CHECK = "0"; taksim doctor',
  ].join('\n'),
} as const;

// A shortened `taksim doctor` result (paths and some detail trimmed). The full output
// is longer; it is JSON on stdout.
export const doctorExcerpt = `{
  "productVersion": "<version>",
  "configRoot": "C:\\\\Users\\\\you\\\\.taksim",
  "databaseStatus": "ok",
  "sourceControlConnectivity": "local-git-only",
  "claudeGatewayContextStatus": "direct-provider",
  "claudeGatewayUsed": false,
  "codexGatewayUsed": false,
  "warnings": [],
  "rawSensitiveDataCollected": false,
  "inSessionJudging": false,
  "gateway": { "status": { "running": false, "port": null } },
  "update": {
    "currentVersion": "<version>",
    "source": "disabled",
    "message": "Update check disabled (TAKSIM_UPDATE_CHECK=0)."
  }
}`;
