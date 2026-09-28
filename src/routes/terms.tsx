import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({ meta: [{ title: "Terms & Conditions | Stag Built" }] }),
});

function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>
        By accessing or placing an order on this website, you agree to these Terms and Conditions in
        full. If you do not agree with any part of these terms, please do not use the site or place
        an order for brand identity and logo design studio through STAG BUILT LIMITED. We may update
        these terms occasionally, and the version published on this page at the time of your order
        is the one that applies. We apply this the same way to every order under brand identity and
        logo design studio, regardless of size, so there is no separate informal standard for a
        larger or smaller purchase.
      </p>

      <h2>Eligibility and use</h2>
      <p>
        Use of this site is intended for individuals and organizations able to legally purchase
        brand identity and logo design studio. We reserve the right to refuse service, cancel an
        order, or limit quantities at our discretion, particularly where an order appears
        fraudulent, duplicated in error, or otherwise inconsistent with normal use of the site. We
        would rather explain the reasoning behind a clause than simply state it without context.
      </p>

      <h2>Orders and pricing</h2>
      <p>
        Once an order for brand identity and logo design studio is placed and paid for, delivery of
        access or service details typically follows within the timeframe stated on the relevant
        listing. Prices are shown at the time of ordering and are subject to change for future
        orders, though a completed order is honored at the price paid. These terms exist to protect
        ordinary customers as much as they protect STAG BUILT LIMITED, not to hide anything in fine
        print.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on this site, including text, product or service descriptions, graphics, and the
        STAG BUILT LIMITED logo, is the property of STAG BUILT LIMITED or its licensors and is
        protected by applicable intellectual property law. You may not copy, reproduce, or reuse
        this content for commercial purposes without prior written permission. Where local consumer
        protection law gives you stronger rights than stated here, those rights are not reduced by
        this page.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, STAG BUILT LIMITED is not liable for indirect or
        consequential loss arising from the use of this site or from brand identity and logo design
        studio purchased through it, beyond the value of the order itself. Nothing in these terms
        limits liability in ways not permitted under applicable law. This is written to be read by
        an ordinary customer, not a lawyer, and we are happy to explain any part of it in plain
        language if you ask.
      </p>

      <h2>Governing law and contact</h2>
      <p>
        These terms are governed by applicable law and should be read alongside our Privacy Policy
        and Refund Policy. If any part of these terms is found unenforceable, the remaining terms
        continue to apply in full. Questions about this page can be sent through the Contact page.
        This applies equally whether you are ordering for the first time or are a returning customer
        under brand identity and logo design studio.
      </p>
      <p>
        Where a specific situation is not covered explicitly on this page, contact us and we will
        explain how it is handled rather than leaving you to guess.
      </p>
    </LegalPage>
  );
}
