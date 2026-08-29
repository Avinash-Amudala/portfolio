/*
  Number formatting helpers. Every figure on the site should render through one of
  these (inside a `.num` element) so digits stay tabular and consistent.
*/

const compact = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });

/** Plain integer or fractional count with grouping, e.g. 1,043 or 49.7. */
export function fmtNumber(value: number, fractionDigits = 0): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

/** US dollars, no cents, e.g. $1,790,000. */
export function fmtUsd(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

/** US dollars in millions, e.g. $11.1M or $0.9M. */
export function fmtUsdM(valueInMillions: number, fractionDigits = 1): string {
  return `$${valueInMillions.toFixed(fractionDigits)}M`;
}

/** Percentage from a 0..100 value, e.g. 82%. */
export function fmtPct(value: number, fractionDigits = 0): string {
  return `${compact.format(Number(value.toFixed(fractionDigits)))}%`;
}

/** Ratio spread, e.g. 13x or 2.0x. */
export function fmtMultiple(value: number, fractionDigits = 0): string {
  return `${value.toFixed(fractionDigits)}x`;
}

/** Hours-per-unit style value, one decimal. */
export function fmtHpu(value: number | null): string {
  if (value === null || Number.isNaN(value)) return "n/a";
  return value.toFixed(1);
}

/** Short month-day label from an ISO date, e.g. "Feb 8". */
export function fmtWeekLabel(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
