// English only for now; locale routes show UntranslatedNote above it.
export function TermsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Terms</p>
          <h1>Clear boundaries for Taksim use.</h1>
          <p>
            These preview terms capture the intended product and pricing
            boundaries. Final production terms require legal review.
          </p>
        </div>
      </section>
      <section className="content-section">
        <article className="shell narrow prose">
          <p className="notice">
            <strong>Preview status.</strong> This is implementation copy, not
            the final legally approved agreement.
          </p>
          <h2>1. About Taksim</h2>
          <p>
            Taksim is a local-first sufficiency ledger for AI coding developed by EdgeeTech Ltd.
            It works with third-party coding agents, model providers, and
            runtimes; it is not the underlying model provider.
          </p>
          <h2>2. Developer use</h2>
          <p>
            The Taksim CLI is free for any individual developer, including for
            work performed for an employer or client.
          </p>
          <h2>3. Team use</h2>
          <p>
            Team features, such as the team roll-up across developer exports,
            the team section of the savings digest and team budgets, are part
            of the paid Team plan. Team pricing is published on the pricing
            page.
          </p>
          <h2>4. Customer responsibilities</h2>
          <p>
            You remain responsible for source review, credentials, provider
            terms, software licences, organisational approvals, security review,
            and deployment decisions.
          </p>
          <h2>5. Third-party services</h2>
          <p>
            Availability and output from coding agents, model providers,
            source-control services, and provider-native planners remain subject
            to their own terms and technical behavior. Taksim does not control
            or warrant those outputs.
          </p>
          <h2>6. Verification</h2>
          <p>
            <code>VERIFIED</code> means configured and available engineering
            evidence satisfied the applicable Taksim verification rules. It does
            not guarantee that code is correct, secure, complete, or fit for
            purpose.
          </p>
          <h2>7. Estimates and recommendations</h2>
          <p>
            Shadow recommendations, counterfactual plans, optimisation ranges,
            and estimated savings are not execution evidence or realised
            savings. Illustrative website values are examples only.
          </p>
          <h2>8. Availability, liability, and termination</h2>
          <p>
            Final provisions covering service availability, warranties,
            liability limits, suspension, termination, governing law, disputes,
            and changes will be included following legal review.
          </p>
          <h2>9. Contact</h2>
          <p>
            Questions may be sent to{' '}
            <a href="mailto:info@edgee.tech">info@edgee.tech</a>.
          </p>
          <p>
            <strong>Effective:</strong> 8 September 2026.
          </p>
        </article>
      </section>
    </main>
  );
}
