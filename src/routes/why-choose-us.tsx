import { createFileRoute, Link } from "@tanstack/react-router";
import { Gem, Headset, ListChecks, BadgeCheck } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/why-choose-us")({
  component: WhyChooseUsPage,
  head: () => ({
    meta: [
      { title: "Why Choose Us | Stag Built" },
      {
        name: "description",
        content:
          "Quality is not negotiable, support that actually helps, an attentive process, and fair pricing without hidden costs.",
      },
    ],
  }),
});

const pillars = [
  {
    icon: Gem,
    heading: "Quality is not negotiable",
    body: "Quality is not negotiable for us, even when it would be faster to skip a step. If a service does not meet our own bar for brand identity and logo design studio, it does not go on the site, no matter how it might affect the numbers on the catalogue page that week. That consistency is the actual reason people come back, not any single feature we could put in a headline. That is the bar we set for ourselves, and we would rather be told honestly if we are falling short of it. None of these points work in isolation, they only mean something when they hold together across every single order.",
  },
  {
    icon: Headset,
    heading: "Support that actually helps",
    body: "Support that actually helps, every time. Questions get real answers, not a copy pasted script, and issues get resolved rather than passed along to someone else who was not involved. That is how we want every interaction with Stag Built to feel from start to finish. It is easier to describe a standard like this than to live up to it consistently, and we know that difference matters. We check ourselves against this regularly, not just when writing a page meant to convince someone to buy. That is a deliberate choice we keep making even when a shortcut would be easier in the moment.",
  },
  {
    icon: ListChecks,
    heading: "An attentive process",
    body: "An attentive process from browsing all the way to checkout. Add what you need to your cart, review it properly, and complete your order in a few clear steps, with communication the whole way through rather than silence after you pay. That is not a claim we expect you to take on faith, it is something you can judge for yourself after one order. None of it replaces judging us by an actual order, this page is simply an honest account of what to expect. We would rather explain exactly why we do something than ask you to just take our word for it.",
  },
  {
    icon: BadgeCheck,
    heading: "Fair pricing, no hidden costs",
    body: "Fair pricing without hidden costs appearing later. What you see on the listing is what you pay, and we would rather be upfront about pricing from the start than surprise you with extra charges once you reach checkout. We would rather under-promise here than write something impressive that the rest of the site cannot actually back up. We would rather be measured against that standard than against a list of features that sound good on a page. It shows up most clearly in the small moments, a quick reply, an accurate listing, an order that arrives as described.",
  },
];

function WhyChooseUsPage() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img
          src="/images/why-choose-us.jpg"
          alt="A designer reviewing brand identity mockups"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center md:px-6 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Why Choose Us</p>
          <h1 className="mt-5 text-3xl font-bold md:text-4xl">
            Four things we hold ourselves to on every order
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.heading} className="rounded-2xl border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <p.icon className="h-6 w-6 text-navy dark:text-gold" />
              </div>
              <h2 className="mt-5 text-xl font-bold">{p.heading}</h2>
              <p className="mt-3 leading-relaxed text-foreground/80">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl space-y-5 px-4 py-16 text-base leading-relaxed text-foreground/85 md:px-6">
          <p>
            We built Stag Built around these principles because they are the reasons we would choose
            a business ourselves as customers. We hold ourselves to the same standard we would
            expect if the roles were reversed. We built this page to describe what is actually true
            about Stag Built, not what sounds best in a headline. We would rather earn that trust
            slowly and keep it than promise more than we can consistently deliver. None of this is
            meant to sound impressive, it is meant to be accurate about how Stag Built actually
            operates.
          </p>
          <div className="pt-2 text-center">
            <Link
              to="/services"
              className="inline-flex h-12 items-center justify-center rounded-md bg-navy px-7 text-sm font-bold text-navy-foreground hover:bg-navy-2"
            >
              See the full catalogue
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
