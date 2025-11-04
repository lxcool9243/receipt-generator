export const currency = (v: number): string =>
  Number(v).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export const formatNumber = (v: number, useComma: boolean): string =>
  useComma
    ? String(Number(v).toLocaleString("en-IN")).replace(/\./g, ",")
    : currency(v);

export const calculateSubtotal = (
  items: { qty: number; price: number }[],
): number => items.reduce((sum, it) => sum + it.qty * it.price, 0);

export const calculateTaxes = (
  subtotal: number,
  taxes: { value: number }[],
): number[] => taxes.map((tax) => (subtotal * (tax.value || 0)) / 100);

export const calculateTotal = (
  subtotal: number,
  taxAmounts: number[],
): number => subtotal + taxAmounts.reduce((a, b) => a + b, 0);
