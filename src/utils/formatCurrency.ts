/**
 * Formats a numeric amount into Pakistani Rupee (PKR / Rs.) notation.
 * Supports compact formatting for cards/KPIs (e.g. ₨ 12.5M).
 */
export function formatCurrency(
  amount: number,
  options?: {
    compact?: boolean;
    showSymbol?: boolean;
    precision?: number;
  }
): string {
  const { compact = false, showSymbol = true, precision = 2 } = options || {};
  const symbol = showSymbol ? '₨ ' : '';

  if (compact) {
    const abs = Math.abs(amount);
    const sign = amount < 0 ? '-' : '';

    if (abs >= 10_000_000) {
      // Crores
      return `${sign}${symbol}${(abs / 10_000_000).toFixed(precision)} Cr`;
    }
    if (abs >= 100_000) {
      // Lakhs
      return `${sign}${symbol}${(abs / 100_000).toFixed(precision)} L`;
    }
    if (abs >= 1_000) {
      return `${sign}${symbol}${(abs / 1_000).toFixed(1)}k`;
    }
    return `${sign}${symbol}${abs.toLocaleString('en-PK')}`;
  }

  const formattedNumber = new Intl.NumberFormat('en-PK', {
    minimumFractionDigits: 0,
    maximumFractionDigits: precision,
  }).format(amount);

  return `${symbol}${formattedNumber}`;
}
