import Link from 'next/link';
import type { ReactNode } from 'react';
import { CopyCommand } from '@/components/copy-command';
import { Rich } from '@/components/rich';
import {
  copyTokens,
  fillKnown,
  formatUsd,
  report,
} from '@/lib/benchmark/report';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';
import { funnel } from '@/lib/funnel';
import { proofExport } from '@/lib/plans';
import {
  FAMILIES,
  int,
  ms,
  overhead,
  pct,
  pctRange,
  proofFile,
  seconds,
  snapshot,
  type Range,
} from '@/lib/proof/report';
import { release } from '@/lib/release';

const SONNET = 'claude-sonnet-5-5';

type Status = 'measured' | 'observed' | 'notYet';

function StatusChip({ status, label }: { status: Status; label: string }) {
  return (
    <span className="status-chip" data-status={status}>
      {label}
    </span>
  );
}

function Section({
  id,
  title,
  status,
  statusLabel,
  children,
}: {
  id: string;
  title: string;
  status?: Status;
  statusLabel?: string;
  children: ReactNode;
}) {
  return (
    <section className="proof-section" aria-labelledby={`proof-${id}`}>
      <h2 id={`proof-${id}`}>{title}</h2>
      {status && statusLabel ? (
        <p className="proof-status">
          <StatusChip status={status} label={statusLabel} />
        </p>
      ) : null}
      {children}
    </section>
  );
}

export function ProofPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const pilot = dict.home.pilot;
  const labels = {
    notMeasured: pilot.notMeasured,
    undefinedPerAccepted: pilot.undefinedPerAccepted,
  };
  const onOff = (value: boolean) =>
    value
      ? locale === 'tr'
        ? 'açık'
        : 'on'
      : locale === 'tr'
        ? 'kapalı'
        : 'off';
  const s = snapshot;
  const { judge, levers, counterfactual } = s;
  const judgedTurns =
    judge.strongConsensus +
    judge.weakConsensus +
    judge.disputed +
    judge.singleJudgeNotCounted;
  const nativeAdded = overhead.native.addedTtftMs;
  const calibration = judge.calibration;
  const decimal = (value: number) =>
    locale === 'tr' ? value.toFixed(2).replace('.', ',') : value.toFixed(2);
  const tokens: Record<string, string> = {
    ...copyTokens(report, locale, labels),
    warmServedSonnet: String(report.warm.served[SONNET] ?? 0),
    since: s.window.since,
    until: s.window.until,
    days: String(s.window.days),
    prevSince: s.window.previousWindow.since,
    prevUntil: s.window.previousWindow.until,
    date: s.generatedAt,
    mode: s.routing.routingEnabled.mode,
    autoState: onOff(s.routing.routingEnabled.routingAuto),
    subscriptionState: onOff(s.routing.routingEnabled.routingSubscription),
    routedDecisions: int(s.routing.routedDecisions, locale),
    routedCostShare: pct(s.routing.routedLiveCostSharePct, locale),
    notRecordedShare: pct(
      s.spend.byCredentialKind.not_recorded.executionSharePct,
      locale,
    ),
    pricedShare: pct(s.spend.pricedSharePct, locale),
    opusTokensNow: pct(s.modelMix.window.sharePct.opus, locale),
    opusTokensBefore: pct(s.modelMix.previousWindow.sharePct.opus, locale),
    cacheHit: pct(s.cache.hitRatioPct, locale),
    cacheDefinition: s.cache.definition,
    countedTurns: int(counterfactual.countedTurns, locale),
    strong: int(judge.strongConsensus, locale),
    right: int(judge.rightServed, locale),
    over: int(judge.overServed, locale),
    crossPairs: int(calibration?.pairs ?? 0, locale),
    exact:
      calibration?.exactAgreementPct == null
        ? '–'
        : pct(calibration.exactAgreementPct, locale),
    within:
      calibration?.withinOneTierPct == null
        ? '–'
        : pct(calibration.withinOneTierPct, locale),
    kappa: calibration?.kappa == null ? '–' : decimal(calibration.kappa),
    minPairs: int(calibration?.thresholds.minimumPairs ?? 0, locale),
    minExact: pct(
      calibration?.thresholds.minimumExactAgreementPct ?? 0,
      locale,
    ),
    minKappa: decimal(calibration?.thresholds.minimumKappa ?? 0),
    minConfidence: locale === 'tr' ? '0,8' : '0.8',
    under: int(judge.underServed, locale),
    verdicts: int(judge.storedVerdicts, locale),
    judgedTurns: int(judgedTurns, locale),
    measuredOn: overhead.measuredOn,
    requests: int(overhead.synthetic.managedRequests, locale),
    levels: String(overhead.synthetic.levels.length),
    errors: String(overhead.synthetic.errors),
    degraded: String(overhead.synthetic.degraded),
    byteMismatches: String(overhead.synthetic.byteMismatches),
    pairs: String(overhead.native.pairs),
    nativeP50: seconds(nativeAdded.p50, locale),
    build: overhead.native.build,
    claudeCli: overhead.native.claudeCli,
    samples: int(s.overhead.gatewayPerformanceSampleCount, locale),
    releaseVersion: `v${release.version}`,
    version: s.generatedBy.taksimVersion,
  };
  const t = fillKnown(dict.proof, tokens);
  const rich = (text: string) => <Rich text={text} locale={locale} />;
  const href = (path: string) => localePath(locale, path);
  const { cold } = report;
  const arms = [
    { id: 'opus', arm: cold.opus },
    { id: 'sonnet', arm: cold.sonnet },
    { id: 'taksim', arm: cold.taksim },
  ] as const;
  const acceptedOf = (n: number, total: number) =>
    t.a.acceptedOf.replace('{n}', String(n)).replace('{total}', String(total));
  const proofPending = proofExport.shippedIn === null;

  const leverRows: {
    id: keyof typeof t.b.levers;
    share: Range;
    events: string;
  }[] = [
    {
      id: 'contextOver200k',
      share: levers.contextOver200k.costSharePct,
      events: t.b.events.contextOver200k.replace(
        '{share}',
        pct(levers.contextOver200k.turnsSharePct, locale),
      ),
    },
    {
      id: 'cacheBreak',
      share: levers.cacheBreak.costSharePct,
      events: t.b.events.cacheBreak.replace(
        '{n}',
        int(levers.cacheBreak.breaks, locale),
      ),
    },
    {
      id: 'idleGap',
      share: levers.idleGap.costSharePct,
      events: t.b.events.idleGap.replace(
        '{n}',
        int(levers.idleGap.breaks, locale),
      ),
    },
    {
      id: 'failureLoops',
      share: levers.failureLoops.costSharePct,
      events: t.b.events.failureLoops.replace(
        '{n}',
        int(levers.failureLoops.count, locale),
      ),
    },
    {
      id: 'counterfactual',
      share: counterfactual.savingSharePct,
      events: t.b.events.counterfactual.replace(
        '{n}',
        int(counterfactual.countedTurns, locale),
      ),
    },
  ];
  leverRows.sort((a, b) => b.share.high - a.share.high);

  const judgeRows = [
    { id: 'strong', count: judge.strongConsensus, counted: true },
    { id: 'weak', count: judge.weakConsensus, counted: false },
    { id: 'disputed', count: judge.disputed, counted: false },
    { id: 'single', count: judge.singleJudgeNotCounted, counted: false },
  ] as const;

  return (
    <main className="proof">
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p>{t.lede}</p>
        </div>
      </section>
      <section className="content-section">
        <article className="shell narrow prose">
          <h2 className="proof-headline">{t.headline}</h2>
          <section className="proof-summary" aria-labelledby="proof-summary">
            <h3 id="proof-summary">{t.summary.title}</h3>
            <ul>
              {(['a', 'b', 'c', 'd', 'e'] as const).map((id) => (
                <li key={id}>
                  <a className="proof-summary-link" href={`#proof-${id}`}>
                    {t.summary.items[id].label}
                  </a>
                  <p>{t.summary.items[id].body}</p>
                </li>
              ))}
            </ul>
          </section>
          <nav className="proof-toc" aria-label={t.onPage}>
            <p>{t.onPage}</p>
            <ol>
              {(
                [
                  ['a', t.a.title],
                  ['b', t.b.title],
                  ['c', t.c.title],
                  ['d', t.d.title],
                  ['e', t.e.title],
                  ['f', t.f.title],
                  ['g', t.g.title],
                ] as const
              ).map(([id, title]) => (
                <li key={id}>
                  <a href={`#proof-${id}`}>{title}</a>
                </li>
              ))}
            </ol>
          </nav>
          <details className="proof-details">
            <summary>{t.snapshot.details}</summary>
            <dl className="proof-facts">
              <div>
                <dt>{t.snapshot.date}</dt>
                <dd>
                  <time dateTime={s.generatedAt}>{s.generatedAt}</time>
                </dd>
              </div>
              <div>
                <dt>{t.snapshot.version}</dt>
                <dd>
                  <code>{s.generatedBy.taksimVersion}</code>
                  <br />
                  {t.snapshot.localBuild}
                </dd>
              </div>
              <div>
                <dt>{t.snapshot.window}</dt>
                <dd>{t.snapshot.windowValue}</dd>
              </div>
              <div>
                <dt>{t.snapshot.download}</dt>
                <dd>
                  <a href={proofFile.path} download>
                    <code>{proofFile.name}</code>
                  </a>
                </dd>
              </div>
              <div>
                <dt>{t.snapshot.hash}</dt>
                <dd>
                  <code className="proof-hash">{s.sha256}</code>
                </dd>
              </div>
              <div>
                <dt>{t.snapshot.source}</dt>
                <dd>
                  <code className="proof-hash">
                    {s.publication.sourceSha256}
                  </code>
                </dd>
              </div>
            </dl>
            <p>{t.snapshot.refreshed}</p>
          </details>
          <div className="notice proof-legend">
            <p>
              <strong>{t.statusLabel}</strong>
            </p>
            <ul>
              {(['measured', 'observed', 'notYet'] as const).map((status) => (
                <li key={status}>
                  <StatusChip status={status} label={t.status[status].label} />{' '}
                  {t.status[status].body}
                </li>
              ))}
            </ul>
          </div>

          <Section
            id="a"
            title={t.a.title}
            status="measured"
            statusLabel={t.status.measured.label}
          >
            <p>{t.a.intro}</p>
            <section
              className="table-scroll"
              tabIndex={0}
              aria-label={t.a.caption}
            >
              <table className="tabular proof-table">
                <caption className="sr-only">{t.a.caption}</caption>
                <thead>
                  <tr>
                    <th scope="col">{t.a.cols.arm}</th>
                    <th scope="col">{t.a.cols.accepted}</th>
                    <th scope="col">{t.a.cols.cost}</th>
                    <th scope="col">{t.a.cols.perAccepted}</th>
                  </tr>
                </thead>
                <tbody>
                  {arms.map(({ id, arm }) => (
                    <tr key={id}>
                      <th scope="row">{t.a.arms[id]}</th>
                      <td>{acceptedOf(arm.accepted, arm.runs)}</td>
                      <td>{formatUsd(arm.totalUsd, 2, labels)}</td>
                      <td>{formatUsd(arm.perAccepted, 3, labels)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
            <p>
              <strong>{t.a.saving}</strong> {t.a.savingDetail}
            </p>
            <p>{t.a.noise}</p>
            <p>{t.a.served}</p>
            <p>{t.a.learned}</p>
            <p>{rich(t.a.method)}</p>
          </Section>

          <Section
            id="b"
            title={t.b.title}
            status="observed"
            statusLabel={t.status.observed.label}
          >
            <p className="proof-statement">
              <strong>{t.b.notRouted}</strong>
            </p>
            <p>{rich(t.b.intro)}</p>
            <p>
              <strong>{t.b.basis}</strong> {t.b.credential}
            </p>
            <p>{t.b.ratiosOnly}</p>
            <h3>{t.b.mixTitle}</h3>
            <section
              className="table-scroll"
              tabIndex={0}
              aria-label={t.b.mixCaption}
            >
              <table className="tabular proof-table">
                <caption className="sr-only">{t.b.mixCaption}</caption>
                <thead>
                  <tr>
                    <th scope="col">{t.b.mixCols.family}</th>
                    <th scope="col">{t.b.mixCols.cost}</th>
                    <th scope="col">{t.b.mixCols.now}</th>
                    <th scope="col">{t.b.mixCols.before}</th>
                  </tr>
                </thead>
                <tbody>
                  {FAMILIES.map((family) => (
                    <tr key={family}>
                      <th scope="row">{t.b.families[family]}</th>
                      <td>
                        {pct(s.spend.byFamily[family].costSharePct, locale)}
                      </td>
                      <td>{pct(s.modelMix.window.sharePct[family], locale)}</td>
                      <td>
                        {pct(
                          s.modelMix.previousWindow.sharePct[family],
                          locale,
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
            <p>{t.b.mix}</p>
            <p>{t.b.cache}</p>
            <h3>{t.b.leversTitle}</h3>
            <p>{t.b.leversIntro}</p>
            <section
              className="table-scroll"
              tabIndex={0}
              aria-label={t.b.leversCaption}
            >
              <table className="tabular proof-table proof-levers">
                <caption className="sr-only">{t.b.leversCaption}</caption>
                <thead>
                  <tr>
                    <th scope="col">{t.b.leversCols.lever}</th>
                    <th scope="col">{t.b.leversCols.events}</th>
                    <th scope="col">{t.b.leversCols.share}</th>
                  </tr>
                </thead>
                <tbody>
                  {leverRows.map((row) => (
                    <tr key={row.id} data-lever={row.id}>
                      <th scope="row">{t.b.levers[row.id]}</th>
                      <td>{row.events}</td>
                      <td>{pctRange(row.share, locale)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
            <p>{t.b.spikes.replace('{n}', String(levers.spendSpikeDays))}</p>
            <p>{t.b.leversRead}</p>
          </Section>

          <Section
            id="c"
            title={t.c.title}
            status="measured"
            statusLabel={t.status.measured.label}
          >
            <p>{t.c.intro}</p>
            <section
              className="table-scroll"
              tabIndex={0}
              aria-label={t.c.caption}
            >
              <table className="tabular proof-table">
                <caption className="sr-only">{t.c.caption}</caption>
                <thead>
                  <tr>
                    <th scope="col">{t.c.cols.kind}</th>
                    <th scope="col">{t.c.cols.turns}</th>
                    <th scope="col">{t.c.cols.counted}</th>
                  </tr>
                </thead>
                <tbody>
                  {judgeRows.map((row) => (
                    <tr key={row.id}>
                      <th scope="row">{t.c.rows[row.id]}</th>
                      <td>{int(row.count, locale)}</td>
                      <td>{row.counted ? t.c.yes : t.c.no}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
            <p>{t.c.stored}</p>
            {calibration && calibration.pairs > 0 ? (
              <>
                <h3>{t.c.crossTitle}</h3>
                <p>{t.c.cross}</p>
                <p>{t.c.agreement}</p>
                <p>
                  {calibration.calibrated
                    ? t.c.calibratedYes
                    : t.c.calibratedNo}
                </p>
              </>
            ) : null}
            <p>{t.c.outcome}</p>
            <section
              className="table-scroll"
              tabIndex={0}
              aria-label={t.c.matrixCaption}
            >
              <table className="tabular proof-table">
                <caption className="sr-only">{t.c.matrixCaption}</caption>
                <thead>
                  <tr>
                    <th scope="col">{t.c.matrixCols.ran}</th>
                    <th scope="col">{t.c.matrixCols.enough}</th>
                    <th scope="col">{t.c.matrixCols.turns}</th>
                  </tr>
                </thead>
                <tbody>
                  {judge.confusionMatrix.map((cell) => (
                    <tr key={`${cell.requested}-${cell.sufficient}`}>
                      <th scope="row">
                        {t.b.families[
                          cell.requested as keyof typeof t.b.families
                        ] ?? cell.requested}
                      </th>
                      <td>
                        {t.b.families[
                          cell.sufficient as keyof typeof t.b.families
                        ] ?? cell.sufficient}
                      </td>
                      <td>{int(cell.turns, locale)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
            <p>
              <strong>{t.c.honesty}</strong> {t.c.small}
            </p>
          </Section>

          <Section
            id="d"
            title={t.d.title}
            status="measured"
            statusLabel={t.status.measured.label}
          >
            <p className="proof-label">{t.d.label}</p>
            <p>{t.d.intro}</p>
            <section
              className="table-scroll"
              tabIndex={0}
              aria-label={t.d.caption}
            >
              <table className="tabular proof-table">
                <caption className="sr-only">{t.d.caption}</caption>
                <thead>
                  <tr>
                    <th scope="col">{t.d.cols.concurrency}</th>
                    <th scope="col">{t.d.cols.p50}</th>
                    <th scope="col">{t.d.cols.p95}</th>
                  </tr>
                </thead>
                <tbody>
                  {overhead.synthetic.rows.map((row) => (
                    <tr key={row.concurrency}>
                      <th scope="row">{row.concurrency}</th>
                      <td>{ms(row.addedTtfbMs.p50, locale)}</td>
                      <td>{ms(row.addedTtfbMs.p95, locale)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
            <h3>{t.d.nativeTitle}</h3>
            <section
              className="table-scroll"
              tabIndex={0}
              aria-label={t.d.nativeCaption}
            >
              <table className="tabular proof-table proof-native">
                <caption className="sr-only">{t.d.nativeCaption}</caption>
                <thead>
                  <tr>
                    <th scope="col">{t.d.nativeCols.metric}</th>
                    <th scope="col">{t.d.nativeCols.p50}</th>
                    <th scope="col">{t.d.nativeCols.p95}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-row="native-added">
                    <th scope="row">{t.d.native.added}</th>
                    <td>
                      +{seconds(overhead.native.addedTtftMs.p50, locale)} s
                    </td>
                    <td>
                      +{seconds(overhead.native.addedTtftMs.p95, locale)} s
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">{t.d.native.prep}</th>
                    <td>
                      {seconds(overhead.native.localPreparationMs.p50, locale)}{' '}
                      s
                    </td>
                    <td>
                      {seconds(overhead.native.localPreparationMs.p95, locale)}{' '}
                      s
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">{t.d.native.direct}</th>
                    <td>
                      {seconds(overhead.native.directTtftMs.p50, locale)} s
                    </td>
                    <td>
                      {seconds(overhead.native.directTtftMs.p95, locale)} s
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <p>
              <strong>{t.d.nativeSentence}</strong>
            </p>
            <p>{t.d.nativeScope}</p>
            <p>{t.d.real}</p>
          </Section>

          <Section
            id="e"
            title={t.e.title}
            status="notYet"
            statusLabel={t.status.notYet.label}
          >
            <p>{t.e.intro}</p>
            <ul className="proof-unproven">
              {t.e.items.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <br />
                  {item.body}
                  <br />
                  <span className="proof-by">
                    {t.e.commandLabel}: {rich(item.by)}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="f" title={t.f.title}>
            <p>{t.f.intro}</p>
            {proofPending ? (
              <p className="notice">{rich(t.f.pending)}</p>
            ) : null}
            <ul className="proof-commands">
              {t.f.commands.map((item) => (
                <li key={item.command}>
                  <CopyCommand
                    command={item.command}
                    copy={dict.quickStart.install.copy}
                    copied={dict.quickStart.install.copied}
                  />
                  <p>{item.about}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="g" title={t.g.title}>
            <ul>
              {t.g.method.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>{t.g.publishTitle}</h3>
            <p>{t.g.publish}</p>
            <ul className="proof-removed">
              {s.publication.removed.map((field) => (
                <li key={field}>
                  <code>{field}</code>
                </li>
              ))}
            </ul>
            <h3>{t.g.hashTitle}</h3>
            <p>{t.g.hash}</p>
            <h3>{t.g.caveatsTitle}</h3>
            <ul>
              {s.caveats.map((code) => (
                <li key={code}>
                  {t.g.caveats[code as keyof typeof t.g.caveats] ?? code}{' '}
                  <code className="proof-code">{code}</code>
                </li>
              ))}
            </ul>
            <h3>{t.g.logTitle}</h3>
            <p>{t.g.logBody}</p>
            <ol className="proof-log">
              {t.g.log.map((entry) => (
                <li key={entry.date}>
                  <time dateTime={entry.date}>{entry.date}</time>: {entry.text}
                </li>
              ))}
            </ol>
          </Section>

          <section className="proof-cta" aria-labelledby="proof-cta">
            <h2 id="proof-cta">{t.cta.title}</h2>
            <p>{t.cta.body}</p>
            <div className="button-row">
              <Link
                className="btn btn-primary"
                href={href('/docs/quick-start')}
                data-funnel={funnel.getFree}
              >
                {t.cta.install}
              </Link>
              <Link className="btn btn-ghost" href={href('/benchmark')}>
                {t.cta.benchmark}
              </Link>
            </div>
          </section>
        </article>
      </section>
    </main>
  );
}
