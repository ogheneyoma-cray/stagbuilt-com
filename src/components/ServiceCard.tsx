import { Link } from "@tanstack/react-router";
import { useCart } from "@/context/CartContext";
import { formatNaira } from "@/lib/format";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const { addToCart } = useCart();
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl">
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="block aspect-[4/3] overflow-hidden bg-muted"
      >
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-gold">
          {service.category}
        </p>
        <Link
          to="/services/$slug"
          params={{ slug: service.slug }}
          className="mt-1.5 text-base font-bold leading-tight hover:text-gold"
        >
          {service.name}
        </Link>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{service.summary}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-lg font-bold text-navy dark:text-foreground">
            {formatNaira(service.price)}
          </p>
          <button
            onClick={() => addToCart(service.id)}
            className="inline-flex h-10 items-center justify-center rounded-md bg-navy px-4 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
