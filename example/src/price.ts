/** Cents as a price: 1999 → "$19.99". */
export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}
