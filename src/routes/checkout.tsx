import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Lock } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useCart } from "@/context/CartContext";
import { formatNaira } from "@/lib/format";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
  head: () => ({ meta: [{ title: "Checkout | Stag Built" }] }),
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  businessName: z.string().trim().min(2, "Enter a business or project name").max(150),
  phone: z.string().trim().min(5, "Enter your phone number").max(30),
  cardName: z.string().trim().min(2, "Enter the name on your card").max(100),
  cardNumber: z
    .string()
    .trim()
    .regex(/^\d{4} \d{4} \d{4} \d{4}$/, "Enter a valid 16-digit card number"),
  cardExpiry: z
    .string()
    .trim()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Enter expiry as MM/YY"),
  cardCvv: z
    .string()
    .trim()
    .regex(/^\d{3,4}$/, "Enter a valid CVV (3 or 4 digits)"),
});

function formatCardNumber(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
  return digits;
}

function CheckoutPage() {
  const { detailed, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    businessName: "",
    phone: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    if (detailed.length === 0) return;
    const orderNumber = "SB-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    clearCart();
    navigate({ to: "/order-confirmation", search: { order: orderNumber } });
  };

  if (detailed.length === 0) {
    return (
      <PageLayout>
        <div className="mx-auto max-w-2xl px-4 py-24 text-center">
          <h1 className="text-2xl font-bold">Nothing to check out</h1>
          <p className="mt-2 text-muted-foreground">Add a service to your cart first.</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <h1 className="text-3xl font-bold md:text-4xl">Checkout</h1>
        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <form onSubmit={onSubmit} className="space-y-8 lg:col-span-2" noValidate>
            <section className="space-y-5">
              <h2 className="text-lg font-bold">Contact information</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold">
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
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
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className="mt-2 h-12 w-full rounded-md border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-semibold">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    className="mt-2 h-12 w-full rounded-md border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="businessName" className="text-sm font-semibold">
                    Business or project name
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    value={form.businessName}
                    onChange={(e) => set("businessName", e.target.value)}
                    className="mt-2 h-12 w-full rounded-md border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                  {errors.businessName && (
                    <p className="mt-1 text-xs text-destructive">{errors.businessName}</p>
                  )}
                </div>
              </div>
            </section>

            <section className="space-y-5">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold">Payment details</h2>
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                  <Lock className="h-3 w-3" /> Secure
                </span>
              </div>
              <div>
                <label htmlFor="cardName" className="text-sm font-semibold">
                  Name on card
                </label>
                <input
                  id="cardName"
                  type="text"
                  autoComplete="cc-name"
                  placeholder="As it appears on your card"
                  value={form.cardName}
                  onChange={(e) => set("cardName", e.target.value)}
                  className="mt-2 h-12 w-full rounded-md border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
                {errors.cardName && (
                  <p className="mt-1 text-xs text-destructive">{errors.cardName}</p>
                )}
              </div>
              <div>
                <label htmlFor="cardNumber" className="text-sm font-semibold">
                  Card number
                </label>
                <input
                  id="cardNumber"
                  type="text"
                  inputMode="numeric"
                  autoComplete="cc-number"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  value={form.cardNumber}
                  onChange={(e) => set("cardNumber", formatCardNumber(e.target.value))}
                  className="mt-2 h-12 w-full rounded-md border border-border bg-background px-4 font-mono text-sm tracking-widest focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
                {errors.cardNumber && (
                  <p className="mt-1 text-xs text-destructive">{errors.cardNumber}</p>
                )}
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="cardExpiry" className="text-sm font-semibold">
                    Expiry date
                  </label>
                  <input
                    id="cardExpiry"
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-exp"
                    placeholder="MM/YY"
                    maxLength={5}
                    value={form.cardExpiry}
                    onChange={(e) => set("cardExpiry", formatExpiry(e.target.value))}
                    className="mt-2 h-12 w-full rounded-md border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                  {errors.cardExpiry && (
                    <p className="mt-1 text-xs text-destructive">{errors.cardExpiry}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="cardCvv" className="text-sm font-semibold">
                    CVV / CVC
                  </label>
                  <input
                    id="cardCvv"
                    type="password"
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    placeholder="•••"
                    maxLength={4}
                    value={form.cardCvv}
                    onChange={(e) => set("cardCvv", e.target.value.replace(/\D/g, "").slice(0, 4))}
                    className="mt-2 h-12 w-full rounded-md border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                  {errors.cardCvv && (
                    <p className="mt-1 text-xs text-destructive">{errors.cardCvv}</p>
                  )}
                </div>
              </div>
            </section>

            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-navy px-6 text-sm font-semibold text-navy-foreground hover:bg-navy-2"
            >
              <Lock className="h-4 w-4" />
              Place Order
            </button>
          </form>

          <aside className="h-fit rounded-xl border border-border bg-secondary/40 p-6">
            <h2 className="text-lg font-bold">Order Summary</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {detailed.map(({ service, quantity, lineTotal }) => (
                <li key={service.id} className="flex justify-between gap-4">
                  <span className="text-muted-foreground">
                    {service.name} × {quantity}
                  </span>
                  <span className="font-semibold">{formatNaira(lineTotal)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between border-t border-border pt-4 text-base font-bold">
              <span>Total</span>
              <span>{formatNaira(cartTotal)}</span>
            </div>
            <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="h-3 w-3" />
              Your payment information is encrypted and secure.
            </p>
          </aside>
        </div>
      </div>
    </PageLayout>
  );
}
