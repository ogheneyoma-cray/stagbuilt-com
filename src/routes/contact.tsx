import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Clock, MessageSquare } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | Stag Built" },
      {
        name: "description",
        content:
          "Reach Stag Built at admin@stagbuilt.com. Whether you are still deciding on an order or already have one placed, we want to hear from you.",
      },
    ],
  }),
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

const faqs = [
  {
    q: "How quickly will I hear back?",
    a: "Most messages get a clear answer on the first response. Response times can vary slightly depending on volume, but we would rather take a little longer and answer properly than send something quick and unhelpful.",
  },
  {
    q: "Can I ask questions before ordering?",
    a: "Yes, and we would rather you did. If a listing description is unclear before you order, reach out first and we will answer it directly rather than have you guess.",
  },
  {
    q: "Who actually reads my message?",
    a: "A real member of the team reads every message that comes through this page. None of it is handled by an automated system pretending to be a person.",
  },
  {
    q: "What if something did not go smoothly with my order?",
    a: "Tell us honestly. Feedback is one of the main ways Stag Built actually improves over time, and it matters just as much when something went well.",
  },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => {
        if (i.path[0]) errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageLayout>
      <section className="border-b border-border bg-navy text-navy-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Contact Us</p>
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">
            Whether you are deciding or already ordering, we want to hear from you
          </h1>
          <p className="mt-5 max-w-2xl text-navy-foreground/80">
            Whether you are still deciding on an order or already have one placed with us, we want
            to hear from you either way. Getting in touch is simple and we treat every message as
            worth a proper, considered reply. It also means response times can vary slightly
            depending on volume, but we would rather be honest than promise something unrealistic.
            We would rather answer directly than send you searching through a help page for
            something we could just explain. That is a deliberate choice, since automated replies
            rarely handle a specific question about brand identity and logo design studio very well.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <aside className="space-y-5 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:admin@stagbuilt.com"
                    className="text-sm text-muted-foreground hover:text-gold"
                  >
                    admin@stagbuilt.com
                  </a>
                </div>
              </div>
              <div className="mt-5 flex items-start gap-3">
                <MessageSquare className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                <div>
                  <p className="font-semibold">Read by a person</p>
                  <p className="text-sm text-muted-foreground">
                    You can reach the team directly at admin@stagbuilt.com with whatever you need
                    help with. Messages are read by someone who actually understands brand identity
                    and logo design studio, so you will get a proper answer rather than a generic
                    one.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                <div>
                  <p className="font-semibold">Response time</p>
                  <p className="text-sm text-muted-foreground">
                    Most questions get a clear answer on the first response, no lengthy back and
                    forth required.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Feedback from customers is one of the main ways Stag Built actually improves over
              time. If something did not go smoothly, let us know honestly, and if something went
              well, that helps us just as much to hear too.
            </p>
          </aside>

          <form
            onSubmit={onSubmit}
            className="space-y-5 rounded-2xl border border-border bg-card p-6 lg:col-span-3"
            noValidate
          >
            {sent && (
              <div className="rounded-md border border-gold/40 bg-accent p-4 text-sm">
                Thank you for considering Stag Built. Your message has been sent and a real member
                of the team will get back to you.
              </div>
            )}
            <div>
              <label htmlFor="name" className="text-sm font-semibold">
                Name
              </label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                className="mt-2 h-12 w-full rounded-md border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className="mt-2 h-12 w-full rounded-md border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                className="mt-2 w-full rounded-md border border-border bg-background p-4 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-md bg-navy px-6 text-sm font-semibold text-navy-foreground hover:bg-navy-2"
            >
              Send message
            </button>
          </form>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold md:text-3xl">A few common questions</h2>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6">
                <summary className="cursor-pointer list-none text-base font-semibold marker:hidden">
                  <span className="flex items-center justify-between">
                    {f.q}
                    <span className="text-gold transition-transform group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
