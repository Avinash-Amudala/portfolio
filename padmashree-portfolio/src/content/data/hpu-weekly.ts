/*
  Hours per unit, weekly, for the denominator interactive (spec section 6.1).

  Illustrative sample data, not any employer's actual figures. The shape of the
  story is what matters and what transfers to any manufacturer.

  Derived facts surfaced in the UI:
  - Raw range about 39 to 463 hours per unit (roughly 12x spread).
  - Filtered to weeks with at least 12 units built, the range tightens to about
    39 to 84 (roughly 2x). The swing was the denominator (units), not the crew.
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
  { weekEnding: "2026-01-17", hoursPerUnit: 45.2, unitsBuilt: 30 },
  { weekEnding: "2026-01-24", hoursPerUnit: 48.9, unitsBuilt: 28 },
  { weekEnding: "2026-01-31", hoursPerUnit: 38.6, unitsBuilt: 35 },
  { weekEnding: "2026-02-07", hoursPerUnit: 52.3, unitsBuilt: 26 },
  { weekEnding: "2026-02-14", hoursPerUnit: 41.7, unitsBuilt: 33 },
  { weekEnding: "2026-02-21", hoursPerUnit: 57.8, unitsBuilt: 24 },
  { weekEnding: "2026-02-28", hoursPerUnit: 63.1, unitsBuilt: 22 },
  { weekEnding: "2026-03-07", hoursPerUnit: 69.4, unitsBuilt: 20 },
  { weekEnding: "2026-03-14", hoursPerUnit: 74.6, unitsBuilt: 18 },
  { weekEnding: "2026-03-21", hoursPerUnit: 81.2, unitsBuilt: 16 },
  { weekEnding: "2026-03-28", hoursPerUnit: 79.0, unitsBuilt: 14 },
  { weekEnding: "2026-04-04", hoursPerUnit: 76.5, unitsBuilt: 13 },
  { weekEnding: "2026-04-11", hoursPerUnit: 60.3, unitsBuilt: 21 },
  { weekEnding: "2026-04-18", hoursPerUnit: 55.0, unitsBuilt: 25 },
  { weekEnding: "2026-04-25", hoursPerUnit: 78.9, unitsBuilt: 17 },
  { weekEnding: "2026-05-02", hoursPerUnit: 84.4, unitsBuilt: 15 },
  { weekEnding: "2026-05-09", hoursPerUnit: 82.0, unitsBuilt: 12 },
  { weekEnding: "2026-05-16", hoursPerUnit: 50.1, unitsBuilt: 27 },
  { weekEnding: "2026-05-23", hoursPerUnit: 142.5, unitsBuilt: 8 },
  { weekEnding: "2026-05-30", hoursPerUnit: 168.0, unitsBuilt: 6 },
  { weekEnding: "2026-06-06", hoursPerUnit: 158.7, unitsBuilt: 6 },
  { weekEnding: "2026-06-13", hoursPerUnit: 205.4, unitsBuilt: 4 },
  { weekEnding: "2026-06-20", hoursPerUnit: 223.9, unitsBuilt: 4 },
  { weekEnding: "2026-06-27", hoursPerUnit: null, unitsBuilt: 0 },
  { weekEnding: "2026-07-04", hoursPerUnit: 271.6, unitsBuilt: 3 },
  { weekEnding: "2026-07-11", hoursPerUnit: 298.2, unitsBuilt: 3 },
  { weekEnding: "2026-07-18", hoursPerUnit: 187.3, unitsBuilt: 5 },
  { weekEnding: "2026-07-25", hoursPerUnit: 351.0, unitsBuilt: 2 },
  { weekEnding: "2026-08-01", hoursPerUnit: 462.8, unitsBuilt: 2 },
  { weekEnding: "2026-08-08", hoursPerUnit: 133.9, unitsBuilt: 9 },
  { weekEnding: "2026-08-15", hoursPerUnit: 96.5, unitsBuilt: 11 },
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
