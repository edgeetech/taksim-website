// Read-only check of the deployed site: `npm run live-check`. It only issues GET requests, is not part of
// `npm test` (tests never touch the network) and never deploys anything. Set LIVE_CHECK_BASE to point it at a
// preview. It runs every check, prints each result, then exits 1 and names the first failing check if any failed.
const base = (process.env.LIVE_CHECK_BASE ?? 'https://taksim.edgee.tech').replace(/\/+$/, '');
const certification = /SOC ?2|ISO[ /]?(?:IEC )?27001/;

const cache = new Map();
function get(path) {
  if (!cache.has(path)) {
    cache.set(
      path,
      fetch(`${base}${path}`, { method: 'GET', redirect: 'follow', signal: AbortSignal.timeout(20_000) })
        .then(async (response) => ({ status: response.status, headers: response.headers, body: await response.text() }))
        .catch((error) => ({ status: 0, headers: new Headers(), body: '', error: String(error.cause?.code ?? error.message) })),
    );
  }
  return cache.get(path);
}

const checks = [];
const check = (name, run) => checks.push({ name, run });

for (const path of ['/', '/pricing/', '/proof/', '/compare/', '/security/', '/changelog/', '/tr/proof/', '/.well-known/security.txt']) {
  check(`200 on ${path}`, async () => {
    const page = await get(path);
    return page.status === 200 || `got ${page.status || page.error}`;
  });
}

check('/pricing/ shows $12 and $18', async () => {
  const { body } = await get('/pricing/');
  const missing = ['$12', '$18'].filter((price) => !body.includes(price));
  return missing.length === 0 || `missing ${missing.join(', ')}`;
});
check('/pricing/ has no "$8 per active developer"', async () => {
  const { body } = await get('/pricing/');
  return !body.includes('$8 per active developer') || 'the retired $8 per active developer price is still live';
});
for (const path of ['/', '/pricing/']) {
  check(`no SOC 2 or ISO 27001 on ${path}`, async () => {
    const { body } = await get(path);
    const hit = certification.exec(body);
    return !hit || `found "${hit[0]}"`;
  });
}
for (const header of ['strict-transport-security', 'content-security-policy']) {
  check(`${header} header on /`, async () => {
    const { headers } = await get('/');
    return headers.has(header) || 'header missing';
  });
}
for (const path of ['/proof/', '/compare/']) {
  check(`/sitemap.xml lists ${path}`, async () => {
    const { body } = await get('/sitemap.xml');
    return body.includes(`<loc>${base}${path}</loc>`) || 'not listed';
  });
}

const failed = [];
for (const { name, run } of checks) {
  const result = await run();
  if (result === true) {
    console.log(`ok   ${name}`);
  } else {
    console.log(`FAIL ${name}: ${result}`);
    failed.push(name);
  }
}

if (failed.length) {
  console.error(`\n${failed.length} of ${checks.length} checks failed against ${base}. First failure: ${failed[0]}`);
  process.exit(1);
}
console.log(`\nAll ${checks.length} checks passed against ${base}.`);
