import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
            Stag Built is a brand identity and logo design studio. We build logos, color systems,
            and guidelines that hold together across every place a business shows up.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-gold">Studio</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/75">
            <li>
              <Link to="/services" className="hover:text-gold">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/why-choose-us" className="hover:text-gold">
                Why Choose Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-gold">Legal</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/75">
            <li>
              <Link to="/terms" className="hover:text-gold">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-gold">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="hover:text-gold">
                Refund Policy
              </Link>
            </li>
          </ul>
          <a
            href="mailto:admin@stagbuilt.com"
            className="mt-4 inline-flex items-center gap-2 text-sm text-navy-foreground/75 hover:text-gold"
          >
            <Mail className="h-4 w-4" />
            admin@stagbuilt.com
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-navy-foreground/55 md:px-6">
          © {new Date().getFullYear()} Stag Built. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
