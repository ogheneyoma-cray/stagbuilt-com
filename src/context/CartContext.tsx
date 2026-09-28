import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { services, type Service } from "@/data/services";

export type CartItem = { id: string; quantity: number };

type CartContextValue = {
  items: CartItem[];
  addToCart: (id: string, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number; // NGN
  detailed: Array<{ service: Service; quantity: number; lineTotal: number }>;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "stagbuilt-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addToCart = (id: string, quantity = 1) =>
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing)
        return prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + quantity } : i));
      return [...prev, { id, quantity }];
    });

  const removeFromCart = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  const updateQuantity = (id: string, quantity: number) =>
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((i) => i.id !== id)
        : prev.map((i) => (i.id === id ? { ...i, quantity } : i)),
    );

  const clearCart = () => setItems([]);

  const detailed = useMemo(
    () =>
      items
        .map((i) => {
          const service = services.find((s) => s.id === i.id);
          if (!service) return null;
          return {
            service,
            quantity: i.quantity,
            lineTotal: service.price * i.quantity,
          };
        })
        .filter((x): x is NonNullable<typeof x> => x !== null),
    [items],
  );

  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = detailed.reduce((sum, d) => sum + d.lineTotal, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        detailed,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
