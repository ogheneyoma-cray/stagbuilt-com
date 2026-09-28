import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | Stag Built" },
      {
        name: "description",
        content:
          "Browse the full Stag Built catalogue: logo design, brand identity systems, style guides, stationery, and social media kits.",
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <PageLayout>
      <section className="border-b border-border bg-navy text-navy-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Services</p>
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">Every service, one honest page.</h1>
          <div className="mt-6 space-y-4 text-navy-foreground/80">
            <p>
              Our services page brings together the full range we currently offer under brand
              identity and logo design studio in one place. We keep the layout dependable on
              purpose, with clean categories, honest photos or summaries, and pricing that is
              visible upfront rather than buried until the very last step of checkout. A listing
              that fails that check gets fixed or removed, it does not stay up just because it took
              time to prepare. We treat this page as something to maintain properly, not something
              to publish once and leave alone indefinitely. It also means updates happen even to
              older listings, not only to the ones added most recently.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl space-y-6 px-4 py-16 text-base leading-relaxed text-foreground/85 md:px-6">
          <h2 className="text-2xl font-bold md:text-3xl">Why this page stays this way</h2>
          <p>
            Before anything is added to this page, it goes through an attentive review, checking
            whether it meets our own standard, whether the description is accurate, and whether we
            would be comfortable recommending it to a friend ordering for themselves. If the answer
            is no on any count, it does not get listed until that is fixed. None of this is visible
            to a first-time visitor, but it is exactly what makes a second visit worth having. We
            would rather catch an issue ourselves than have a customer point it out after an order
            has already gone through. We check this page the way we would want a store to check its
            own shelves, regularly and honestly.
          </p>
          <p>
            You will find a reasonable spread of options here, enough choice to compare properly,
            without the page turning into an endless scroll of near identical listings. We would
            rather curate a shorter, better list than flood the page just to look impressive. We
            would rather keep this page accurate than keep it large, since accuracy is what actually
            earns repeat orders. That review happens quietly in the background, well before a
            listing is visible to anyone browsing the page. It is a plain habit rather than a
            marketing point, but it is the habit that actually keeps this page worth trusting.
          </p>
          <p>
            Ordering through this page is straightforward, browse, add to your cart, and check out
            whenever you are ready to complete the order. Your order status is tracked from the
            moment it is placed, and updates are sent so you are never left wondering where things
            stand along the way. That habit is part of why customers tend to trust what is written
            here rather than double-checking it elsewhere first. That approach means the page
            sometimes grows more slowly than it could, and we are fine with that outcome. That is
            simply how we think a catalogue page ought to work, whether anyone is watching that
            closely or not.
          </p>
          <p>
            We back every listing here with proper support after the order is placed, not just
            before you pay. If something is not right, we would rather fix it directly than have you
            left guessing what to do next. It is a slower way to run a catalogue page, and we have
            decided that trade-off is worth making consistently. We would rather answer a question
            about a listing directly than leave any ambiguity for you to sort out alone. We would
            rather spend the extra time here than have a customer discover the gap after an order is
            already placed.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
