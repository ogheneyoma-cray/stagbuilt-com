import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | Stag Built" },
      {
        name: "description",
        content:
          "Stag Built started with a straightforward idea, that brand identity and logo design deserved a better, more dependable option.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <PageLayout>
      <section className="grid gap-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-navy px-4 py-16 text-navy-foreground md:px-6 md:py-24 lg:py-32">
          <div className="mx-auto max-w-lg lg:mx-0">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
              About Stag Built
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
              Where Stag Built began
            </h1>
            <p className="mt-6 text-navy-foreground/80">
              Stag Built started with a straightforward idea, that brand identity and logo design
              studio deserved a better, more dependable option than what was already out there. We
              were not satisfied with slow replies, vague descriptions, and inconsistent quality, so
              we set out to build something better and put our name on it publicly, knowing we would
              be judged on every single order that went out the door. We would rather stay
              accountable to that idea than let it quietly become a slogan we stopped checking
              ourselves against. A few early decisions turned out to be wrong, and adjusting them
              mattered more to us than pretending they were right all along.
            </p>
          </div>
        </div>
        <div className="h-64 lg:h-auto">
          <img
            src="/images/about-studio.jpg"
            alt="Stag Built creative studio team at work"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-12 px-4 py-16 md:px-6 md:py-24">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Our mission</h2>
          <p className="mt-4 leading-relaxed text-foreground/85">
            Our mission is to make brand identity and logo design studio accessible without cutting
            corners on quality anywhere along the way. We measure success by whether a customer's
            second order was easier than their first, not by how many banners we can fit on a page
            or how many listings we can publish in a week. That consistency is harder to maintain
            than it sounds, especially once a business has more customers to answer to. It shapes
            hiring, sourcing, and even which questions get answered first when several things need
            attention at once.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold md:text-3xl">What sets us apart</h2>
          <p className="mt-4 leading-relaxed text-foreground/85">
            What sets us apart is attention to the small things, accurate descriptions, honest
            turnaround times, and a team that treats a support message as a priority rather than a
            formality to get through. Those details add up over time, and they are the actual reason
            people come back instead of trying a competitor the next time they need something. That
            belief has been tested more than once as the business has grown, and it has held up each
            time we checked it honestly. We expect to keep adjusting the details as brand identity
            and logo design studio changes, while keeping this same underlying approach in place.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Built around one principle</h2>
          <p className="mt-4 leading-relaxed text-foreground/85">
            We built a team around one clear principle, that everyone involved should genuinely
            understand brand identity and logo design studio, not just process orders without
            thinking about them. That understanding shows up in the recommendations we make and in
            the way we handle questions that do not have an obvious answer. None of it happened by
            accident, every part of how Stag Built runs was a deliberate choice made more than once.
            That is part of why Stag Built still feels like a small operation in the way decisions
            actually get made day to day.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Still growing</h2>
          <p className="mt-4 leading-relaxed text-foreground/85">
            We are still growing, and we treat every order as a chance to prove the standard we set
            for ourselves rather than something we already achieved and stopped thinking about.
            Thank you for considering Stag Built, we genuinely do not take it for granted. It is the
            kind of standard that only really shows up over a long series of ordinary orders, not
            one big moment. We would rather be honest about what we are still improving than pretend
            everything about Stag Built is already finished.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/85">
            We would rather move a little slower and get an order right than rush it out and have to
            fix a mistake afterward, because the fix rarely feels as good as getting it right the
            first time.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-secondary/40 p-8 text-center">
          <p className="text-lg font-semibold">
            Ready to see how Stag Built would approach your identity?
          </p>
          <Link
            to="/services"
            className="mt-5 inline-flex h-12 items-center justify-center rounded-md bg-navy px-7 text-sm font-bold text-navy-foreground hover:bg-navy-2"
          >
            Browse Services
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
