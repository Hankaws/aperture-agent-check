import { formatPrice } from "./price.ts";

export type Item = { name: string; cents: number; quantity: number };

export function cartTotal(items: Item[]): number {
  return items.reduce((total, item) => total + item.cents * item.quantity, 0);
}

export function cartLabel(items: Item[]): string {
  const count = items.reduce((n, item) => n + item.quantity, 0);
  return `${count} ${count === 1 ? "item" : "items"} · ${formatPrice(cartTotal(items))}`;
}
