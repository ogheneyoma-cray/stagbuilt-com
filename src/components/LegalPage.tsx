import type { ReactNode } from "react";
import { PageLayout } from "./PageLayout";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <PageLayout>
      <section className="border-b border-border bg-navy text-navy-foreground">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
          {updated && <p className="mt-3 text-sm text-navy-foreground/70">{updated}</p>}
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-4 py-14">
        <div className="space-y-5 text-base leading-relaxed text-foreground/90 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground">
          {children}
        </div>
      </article>
    </PageLayout>
  );
}
