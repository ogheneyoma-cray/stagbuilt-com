export type Service = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number; // NGN
  summary: string;
  description: string;
  image: string;
  deliverables: string[];
  turnaround: string;
};

export const services: Service[] = [
  {
    id: "1",
    slug: "signature-logo-design",
    name: "Signature Logo Design",
    category: "Logo Design",
    price: 85000,
    summary:
      "A bespoke primary mark built from two original concept directions, refined into one confident logo.",
    description:
      "Signature Logo Design is where most brands start with us. We research your positioning, sketch multiple concept routes by hand, and develop two distinct directions before narrowing to a single refined mark. You receive a primary logo, a simplified secondary version, and a favicon-ready icon, each delivered in vector and raster formats so it holds up on a shopfront sign or a phone screen alike.",
    image: "/images/service-logo-design.jpg",
    deliverables: [
      "Two initial concept directions",
      "One refined primary logo mark",
      "Secondary and icon-only versions",
      "Vector (SVG, AI, EPS) and raster (PNG, JPG) files",
    ],
    turnaround: "7 to 10 working days",
  },
  {
    id: "2",
    slug: "startup-brand-identity-package",
    name: "Startup Brand Identity Package",
    category: "Brand Identity",
    price: 180000,
    summary:
      "Logo, color palette, and a working type system bundled for founders launching a new brand.",
    description:
      "The Startup Brand Identity Package gives a new business the full visual foundation it needs to launch with confidence. Beyond the logo itself, you get a considered color palette with usage notes, a primary and secondary typeface pairing, and a short usage guide covering spacing, minimum size, and incorrect use. It is built for founders who need to look established from day one without commissioning a dozen separate projects.",
    image: "/images/service-startup-identity.jpg",
    deliverables: [
      "Primary logo and icon mark",
      "Color palette with hex, RGB and CMYK values",
      "Typeface pairing and hierarchy",
      "Compact usage guide (PDF)",
    ],
    turnaround: "10 to 14 working days",
  },
  {
    id: "3",
    slug: "complete-brand-identity-system",
    name: "Complete Brand Identity System",
    category: "Brand Identity",
    price: 320000,
    summary:
      "Our most thorough offering: full logo suite, detailed guidelines, stationery, and a social starter kit.",
    description:
      "The Complete Brand Identity System is built for businesses that need every touchpoint to feel considered. It combines a full logo suite, an in-depth brand guidelines document, print-ready stationery, and a social media starter kit into one coordinated system. Every asset is cross-checked against the others before delivery, so your brand looks like one decision rather than a collection of separate files.",
    image: "/images/service-brand-system.jpg",
    deliverables: [
      "Full logo suite (primary, secondary, icon, monogram)",
      "Detailed brand guidelines document",
      "Business card and letterhead templates",
      "Social media profile and post templates",
    ],
    turnaround: "3 to 4 weeks",
  },
  {
    id: "4",
    slug: "logo-refresh-and-redesign",
    name: "Logo Refresh & Redesign",
    category: "Logo Design",
    price: 95000,
    summary:
      "A careful modernization of an existing mark that keeps what customers already recognize.",
    description:
      "A Logo Refresh & Redesign is for brands with genuine equity in their current mark but a design that has started to feel dated. We study what customers already recognize, keep the elements worth keeping, and rebuild the rest with cleaner construction, better scalability, and a palette that reads well across today's screens. The result feels familiar on day one and sharper on every application after.",
    image: "/images/service-logo-refresh.jpg",
    deliverables: [
      "Audit of the existing mark",
      "One refined redesign direction",
      "Updated color and type specification",
      "Full vector and raster file set",
    ],
    turnaround: "7 to 10 working days",
  },
  {
    id: "5",
    slug: "brand-style-guide-development",
    name: "Brand Style Guide Development",
    category: "Guidelines",
    price: 110000,
    summary:
      "A comprehensive reference document so your team and vendors apply the brand consistently.",
    description:
      "Brand Style Guide Development turns an existing identity into a document your team, printers, and agency partners can actually follow. We document logo construction and clear space, the full color system, typography rules, imagery direction, and do and don't examples pulled from real applications. It is written to be handed to a new designer with no other briefing required.",
    image: "/images/service-style-guide.jpg",
    deliverables: [
      "Logo construction and clear space rules",
      "Full color and typography specification",
      "Imagery and tone direction",
      "Do and don't application examples",
    ],
    turnaround: "10 to 12 working days",
  },
  {
    id: "6",
    slug: "business-card-and-stationery-design",
    name: "Business Card & Stationery Design",
    category: "Print Design",
    price: 45000,
    summary:
      "Print-ready business cards, letterhead, and envelopes designed to match your identity.",
    description:
      "Business Card & Stationery Design applies your identity to the everyday items a business actually hands people. We design a business card, letterhead, and envelope that share one consistent system, then deliver print-ready files set up correctly for your printer of choice, including bleed and safe area guides so nothing gets clipped at the trim.",
    image: "/images/service-stationery.jpg",
    deliverables: [
      "Business card, front and back",
      "Letterhead and envelope design",
      "Print-ready files with bleed and safe area",
      "Digital versions for email signatures",
    ],
    turnaround: "5 to 7 working days",
  },
  {
    id: "7",
    slug: "social-media-brand-kit",
    name: "Social Media Brand Kit",
    category: "Digital Assets",
    price: 60000,
    summary:
      "Profile images, highlight icons, and post templates so your feed matches the rest of your brand.",
    description:
      "The Social Media Brand Kit takes your identity onto the platforms your customers actually check daily. You get profile and cover images sized correctly for the major platforms, a set of custom highlight icons, and a small library of editable post templates built around your color palette and typography, so your feed looks intentional from the first post.",
    image: "/images/service-social-kit.jpg",
    deliverables: [
      "Profile and cover images, all major platforms",
      "Custom story highlight icon set",
      "Editable post template library",
      "Quick-start usage notes",
    ],
    turnaround: "5 to 7 working days",
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
