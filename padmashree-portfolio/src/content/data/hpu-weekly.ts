/*
  Hours per unit, weekly 2026 year to date (spec section 6.1).
  Real figures from the Harbinger internship review deck.

  Derived facts surfaced in the UI:
  - Raw range about 42 to 545 hours per unit (roughly 13x spread).
  - Filtered to weeks with at least 13 units built, the range tightens to about
    42 to 96 (roughly 2x). The swing was the denominator (units), not the crew.
  - The model supports battery pack, EDU, general assembly, full vehicle, and HPC
    lines, weekly, monthly, and quarterly. Only the total series is shipped here.
*/

export type HpuWeek = {
  /** ISO date of the week ending. */
  weekEnding: string;
  /** Hours per unit for the week. Null when no units were built. */
  hoursPerUnit: number | null;
  /** Units built that week (the denominator). */
  unitsBuilt: number;
};

export const hpuWeekly: HpuWeek[] = [
  { weekEnding: "2026-01-18", hoursPerUnit: 49.7, unitsBuilt: 29 },
  { weekEnding: "2026-01-25", hoursPerUnit: 50.6, unitsBuilt: 29 },
  { weekEnding: "2026-02-01", hoursPerUnit: 62.2, unitsBuilt: 21 },
  { weekEnding: "2026-02-08", hoursPerUnit: 96.0, unitsBuilt: 14 },
  { weekEnding: "2026-02-15", hoursPerUnit: 42.4, unitsBuilt: 34 },
  { weekEnding: "2026-02-22", hoursPerUnit: 46.3, unitsBuilt: 30 },
  { weekEnding: "2026-03-01", hoursPerUnit: 89.2, unitsBuilt: 13 },
  { weekEnding: "2026-03-08", hoursPerUnit: 75.8, unitsBuilt: 15 },
  { weekEnding: "2026-03-15", hoursPerUnit: 50.7, unitsBuilt: 23 },
  { weekEnding: "2026-03-22", hoursPerUnit: 60.5, unitsBuilt: 20 },
  { weekEnding: "2026-03-29", hoursPerUnit: 74.0, unitsBuilt: 15 },
  { weekEnding: "2026-04-05", hoursPerUnit: 83.8, unitsBuilt: 13 },
  { weekEnding: "2026-04-12", hoursPerUnit: 212.2, unitsBuilt: 5 },
  { weekEnding: "2026-04-19", hoursPerUnit: 214.4, unitsBuilt: 5 },
  { weekEnding: "2026-04-26", hoursPerUnit: 184.8, unitsBuilt: 5 },
  { weekEnding: "2026-05-03", hoursPerUnit: 186.0, unitsBuilt: 5 },
  { weekEnding: "2026-05-10", hoursPerUnit: 100.6, unitsBuilt: 9 },
  { weekEnding: "2026-05-17", hoursPerUnit: 91.3, unitsBuilt: 10 },
  { weekEnding: "2026-05-24", hoursPerUnit: 79.1, unitsBuilt: 10 },
  { weekEnding: "2026-05-31", hoursPerUnit: 156.7, unitsBuilt: 3 },
  { weekEnding: "2026-06-07", hoursPerUnit: 122.4, unitsBuilt: 7 },
  { weekEnding: "2026-06-14", hoursPerUnit: 227.8, unitsBuilt: 4 },
  { weekEnding: "2026-06-21", hoursPerUnit: null, unitsBuilt: 0 },
  { weekEnding: "2026-06-28", hoursPerUnit: 171.9, unitsBuilt: 5 },
  { weekEnding: "2026-07-05", hoursPerUnit: 167.4, unitsBuilt: 5 },
  { weekEnding: "2026-07-12", hoursPerUnit: 149.1, unitsBuilt: 5 },
  { weekEnding: "2026-07-19", hoursPerUnit: 195.7, unitsBuilt: 5 },
  { weekEnding: "2026-07-26", hoursPerUnit: 195.2, unitsBuilt: 6 },
  { weekEnding: "2026-08-02", hoursPerUnit: 545.2, unitsBuilt: 2 },
  { weekEnding: "2026-08-09", hoursPerUnit: 530.8, unitsBuilt: 2 },
  { weekEnding: "2026-08-16", hoursPerUnit: 80.4, unitsBuilt: 18 },
];

export const hpuAssemblyLines = [
  "Battery pack",
  "EDU",
  "General assembly",
  "Full vehicle",
  "HPC",
] as const;

/** Compute the hours-per-unit range across weeks meeting a minimum unit volume. */
export function hpuRangeAtThreshold(minVolume: number): {
  min: number;
  max: number;
  spread: number;
  weeksIncluded: number;
  weeksTotal: number;
} {
  const eligible = hpuWeekly.filter(
    (w) => w.hoursPerUnit !== null && w.unitsBuilt >= minVolume,
  ) as Array<HpuWeek & { hoursPerUnit: number }>;

  const weeksTotal = hpuWeekly.filter((w) => w.hoursPerUnit !== null).length;

  if (eligible.length === 0) {
    return { min: 0, max: 0, spread: 0, weeksIncluded: 0, weeksTotal };
  }

  const values = eligible.map((w) => w.hoursPerUnit);
  const min = Math.min(...values);
  const max = Math.max(...values);
  return {
    min,
    max,
    spread: min > 0 ? max / min : 0,
    weeksIncluded: eligible.length,
    weeksTotal,
  };
}
