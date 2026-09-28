type LogoProps = {
  className?: string;
  variant?: "full" | "icon";
  monochrome?: boolean;
};

/**
 * Stag Built mark: a faceted stag-antler silhouette inside a rounded
 * shield, built from straight construction lines so it reads clearly
 * at favicon size and scales cleanly on a hero banner alike.
 */
export function LogoMark({ className, monochrome }: { className?: string; monochrome?: boolean }) {
  const gold = monochrome ? "currentColor" : "var(--gold, #C9A24B)";
  const navy = monochrome ? "currentColor" : "var(--navy, #101B33)";
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Stag Built mark"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="62" height="62" rx="16" fill={navy} />
      <path
        d="M32 12c-1.1 0-2 .9-2 2v6.2l-6.6-6.6a2 2 0 0 0-2.9 2.9l5.6 5.6-7.8-1.4a2 2 0 0 0-.7 3.9l9.4 1.7-6.9 6.9a2 2 0 1 0 2.8 2.8l6.1-6.1V44a2 2 0 0 0 4 0V30l6.1 6.1a2 2 0 1 0 2.8-2.8l-6.9-6.9 9.4-1.7a2 2 0 1 0-.7-3.9l-7.8 1.4 5.6-5.6a2 2 0 1 0-2.9-2.9L34 20.2V14c0-1.1-.9-2-2-2Z"
        fill={gold}
      />
      <rect x="24" y="46" width="16" height="4" rx="2" fill={gold} />
    </svg>
  );
}

export function Logo({ className, variant = "full", monochrome }: LogoProps) {
  if (variant === "icon") {
    return <LogoMark className={className} monochrome={monochrome} />;
  }
  return (
    <span className={"inline-flex items-center gap-2.5 " + (className ?? "")}>
      <LogoMark className="h-9 w-9 flex-shrink-0" monochrome={monochrome} />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight">
          Stag <span className="text-gold">Built</span>
        </span>
        <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Brand &amp; Logo Studio
        </span>
      </span>
    </span>
  );
}
