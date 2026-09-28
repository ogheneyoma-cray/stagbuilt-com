import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Stag Built | Brand Identity & Logo Design Studio" },
      {
        name: "description",
        content:
          "Stag Built designs logos, brand identity systems, and style guides for businesses that want to look considered everywhere they show up.",
      },
    ],
  }),
});

const focusAreas = ["Logo Design", "Brand Systems", "Style Guides", "Stationery", "Social Kits"];

function Index() {
  const featured = services.slice(0, 3);

  return (
    <PageLayout>
      {/* Full-width hero */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img
          src="/images/hero-home.jpg"
          alt="A designer sketching logo concepts on paper"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-36">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Brand Identity &amp; Logo Design Studio
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            A dependable place to build the identity your business deserves.
          </h1>
          <p className="mt-6 max-w-xl text-base text-navy-foreground/80 md:text-lg">
            Logos, color systems, and guidelines, designed with the same attention whether this is
            your first order with Stag Built or your fiftieth.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold px-7 text-sm font-bold text-gold-foreground transition-colors hover:bg-gold/90"
            >
              Browse Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-navy-foreground/30 px-7 text-sm font-bold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
            {focusAreas.map((f) => (
              <span
                key={f}
                className="text-xs font-semibold uppercase tracking-widest text-navy-foreground/60"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form brand narrative, broken into readable sections */}
      <section className="mx-auto max-w-4xl px-4 py-20 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-14">
          <div>
            <h2 className="sticky top-28 text-2xl font-bold leading-snug md:text-3xl">
              A narrow, deliberate catalogue.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-foreground/85">
            <p>
              At Stag Built, brand identity and logo design studio is not a side note, it is the
              entire point of the business. We started this store to give people a dependable place
              to come back to, one that does not cut corners and does not make you guess what you
              are getting before you pay for it. That focus is why the catalogue stays narrow and
              deliberate rather than stretched thin across categories we do not fully understand. We
              would rather explain a short delay honestly than let a promise slip quietly and hope
              nobody notices the difference. Customers rarely see this part of the process directly,
              but it is the part that decides whether an order goes smoothly later on.
            </p>
            <p>
              We keep our process attentive on purpose. Every listing is checked before it goes
              live, every order is tracked from the moment it is placed, and every customer gets the
              same level of attention whether this is their first order or their fiftieth. Nothing
              about that changes as the business grows, because the moment it does is usually the
              moment a store starts losing the people who built it in the first place. That standard
              applies to every listing under brand identity and logo design studio on this site, not
              only the ones we expect to sell fastest. That has meant turning down shortcuts more
              than once when they would have quietly compromised what Stag Built is trying to stand
              for.
            </p>
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Where to start
              </p>
              <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                A few of our most requested services
              </h2>
            </div>
            <Link
              to="/services"
              className="text-sm font-bold text-navy hover:underline dark:text-gold"
            >
              View all services →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Remaining narrative content */}
      <section className="mx-auto max-w-4xl px-4 py-20 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-14">
          <div>
            <h2 className="sticky top-28 text-2xl font-bold leading-snug md:text-3xl">
              Browsing here should feel simple.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-foreground/85">
            <p>
              We group everything under brand identity and logo design studio by what people
              actually search for, keep descriptions clear and specific, and update the catalogue
              regularly so it reflects what is genuinely available rather than what looked good
              months ago. If a listing is not ready to fulfil properly, we take it down rather than
              leave it up to collect orders we cannot deliver on. We would rather be judged on the
              orders that went out this week than on the copy written for this page. It is a habit
              more than a written policy, and habits are usually what actually hold up under real
              pressure.
            </p>
            <p>
              We built this store the way we would want to shop ourselves, with clear pricing, no
              surprise fees, and a support line that is quick to respond when something needs
              sorting out. That standard did not come from a manual, it came from being frustrated
              customers ourselves at other stores and deciding to do it differently here. It is easy
              to promise good service on a homepage, the actual test is whether it still holds true
              on a busy day. None of this is unusual to say out loud, the harder part is actually
              doing it order after order without cutting a corner.
            </p>
            <p>
              Take a look through the catalogue, add what you need to your cart, and check out
              whenever you are ready. If you have a question before ordering, reach out first, we
              would rather answer it properly than have you guess and end up disappointed with the
              result. We would rather grow slowly on that basis than grow quickly and lose track of
              what made Stag Built worth choosing in the first place. We revisit this standard
              regularly rather than setting it once and assuming it holds on its own without
              checking.
            </p>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-6">
          <h2 className="max-w-xl text-2xl font-bold md:text-3xl">
            Ready to give your business an identity it can grow into?
          </h2>
          <div className="flex gap-3">
            <Link
              to="/services"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold px-7 text-sm font-bold text-gold-foreground hover:bg-gold/90"
            >
              Browse Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-navy-foreground/30 px-7 text-sm font-bold hover:bg-navy-foreground/10"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
