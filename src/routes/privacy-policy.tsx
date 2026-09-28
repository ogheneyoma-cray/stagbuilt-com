import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({ meta: [{ title: "Privacy Policy | Stag Built" }] }),
});

function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        We collect the information necessary to process an order and operate this site, including
        contact details you provide at checkout, order history, and general usage information such
        as which pages are visited most often. We do not collect more than is reasonably needed to
        serve you properly. Where a third party is involved in fulfilling your order, they are only
        given what is necessary to do their part.
      </p>

      <h2>How information is used</h2>
      <p>
        Information collected is used to process and fulfil your order, respond to enquiries, and
        improve the site and catalogue over time. We may also use your email to send order updates
        or, where you have agreed to it, occasional updates about new additions under brand identity
        and logo design studio. We keep this policy in plain language on purpose, since a privacy
        policy nobody can understand does not actually protect anyone.
      </p>

      <h2>Cookies</h2>
      <p>
        This site may use cookies or similar technology to keep your cart contents while you browse
        and to understand general site usage. You can usually adjust your browser settings to limit
        or block cookies, though doing so may affect how well the cart and checkout function. None
        of this changes depending on how you found STAG BUILT LIMITED or how you are paying for an
        order.
      </p>

      <h2>How information is shared</h2>
      <p>
        We do not sell your personal information. It may be shared with service providers who help
        operate the site, such as payment processors handling your transaction securely, and only to
        the extent needed to complete an order for brand identity and logo design studio or operate
        the site properly. This applies to every customer under brand identity and logo design
        studio, not only to larger orders or repeat customers.
      </p>

      <h2>How information is protected</h2>
      <p>
        We take reasonable steps to protect the information you provide, including using secure
        connections for checkout and limiting access to customer information to those who need it to
        fulfil orders and provide support. No method of transmission over the internet is completely
        secure, but we work to keep your information protected. We would rather be conservative
        about what we collect than gather more than we can justify keeping.
      </p>

      <h2>Your rights</h2>
      <p>
        You have the right to ask what information STAG BUILT LIMITED holds about you and to request
        corrections or deletion where appropriate. To exercise any of these rights, reach out to
        admin@stagbuilt.com and we will handle the request directly. None of your information is
        used for purposes you were not told about at the point it was collected.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may revise this policy from time to time, and any changes will be reflected on this page
        with an updated date. Continuing to use STAG BUILT LIMITED after a change means you accept
        the revised policy. Questions about privacy can be sent to admin@stagbuilt.com at any time.
        If you are ever unsure what a specific piece of information is used for, ask us directly and
        we will explain plainly.
      </p>
      <p>
        Nothing here is meant to be complicated, it is written to be read and understood by an
        ordinary customer, not a lawyer.
      </p>
      <p>
        This policy applies to every order placed through the site, regardless of size, and is not
        adjusted informally on a case by case basis.
      </p>
    </LegalPage>
  );
}
