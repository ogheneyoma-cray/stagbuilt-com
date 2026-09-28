import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Logo } from "@/components/Logo";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { cartCount } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative py-1 text-sm font-semibold text-foreground/75 transition-colors hover:text-foreground [&.active]:text-foreground [&.active]:after:absolute [&.active]:after:-bottom-1 [&.active]:after:left-0 [&.active]:after:h-0.5 [&.active]:after:w-full [&.active]:after:bg-gold"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "active" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden h-11 items-center justify-center rounded-md border border-navy px-5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-navy-foreground dark:border-gold dark:text-gold dark:hover:bg-gold dark:hover:text-gold-foreground md:inline-flex"
          >
            Start a Project
          </Link>

          <Link
            to="/cart"
            aria-label="Cart"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-md hover:bg-accent"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-xs font-bold text-gold-foreground">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md hover:bg-accent lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center text-base font-semibold text-foreground/90 hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="my-2 flex h-11 items-center justify-center rounded-md bg-navy text-sm font-semibold text-navy-foreground"
            >
              Start a Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
