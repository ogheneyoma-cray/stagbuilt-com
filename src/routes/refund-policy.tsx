import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicyPage,
  head: () => ({ meta: [{ title: "Refund Policy | Stag Built" }] }),
});

function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy">
      <p>
        Because brand identity and logo design studio is delivered digitally, access is typically
        granted immediately or shortly after payment is confirmed. Given the nature of digital
        delivery, refund requests are handled differently from a physical product return and are
        assessed on a case by case basis. None of this replaces your rights under applicable
        consumer protection law, which continue to apply alongside this policy. This applies the
        same way regardless of how the order under brand identity and logo design studio was paid
        for.
      </p>

      <h2>When a refund applies</h2>
      <p>
        We will consider a refund if you were charged in error, if access was never successfully
        delivered after payment, or if there is a genuine fault with the brand identity and logo
        design studio you ordered that we cannot correct within a reasonable time. We keep a record
        of every refund request so patterns in brand identity and logo design studio orders can be
        addressed properly rather than repeated. None of this is meant to make a refund difficult to
        obtain when it is genuinely owed.
      </p>

      <h2>When a refund does not apply</h2>
      <p>
        We do not offer refunds for change of mind once digital access under brand identity and logo
        design studio has been delivered and used. If a listing description was unclear before you
        ordered, contact us first, we would rather answer the question than process a refund after
        the fact. We would rather resolve a genuine issue quickly than let it turn into a drawn out
        dispute. We assess these requests honestly rather than looking for a reason to decline them.
      </p>

      <h2>How to request a refund</h2>
      <p>
        To request a refund, email admin@stagbuilt.com with your order reference and a description
        of the issue. We aim to review refund requests within a few business days and will let you
        know the outcome directly rather than leaving the request unanswered. We aim to make this
        process as straightforward as the ordering process itself. If you are unsure whether your
        situation qualifies, ask before assuming either way, we would rather clarify it directly.
      </p>

      <h2>Processing times</h2>
      <p>
        Approved refunds are typically processed within a reasonable number of business days, though
        the time it takes to appear on your statement depends on your bank or payment provider
        rather than on us. We would rather take a short amount of extra time reviewing a request
        than issue a blanket no without actually looking into it. We would rather lose a little on
        an individual refund than damage the trust STAG BUILT LIMITED has built with its customers.
      </p>

      <h2>Fair review</h2>
      <p>
        We aim to be fair and reasonable when reviewing refund requests for brand identity and logo
        design studio. If something about our decision does not seem right to you, tell us and we
        will reconsider it properly. This policy is applied consistently across every order, not
        adjusted informally case by case without a stated reason. A refund decision is never made to
        save a little money at the expense of a genuine complaint being addressed properly.
      </p>
      <p>
        If any part of this page is unclear, contact us directly rather than assuming, we would
        rather clarify it than have you guess.
      </p>
    </LegalPage>
  );
}
