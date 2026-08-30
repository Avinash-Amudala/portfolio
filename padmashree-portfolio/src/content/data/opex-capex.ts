/*
  OpEx and CapEx forecast, built line by line (spec section 6.3).
  A facilities department, FY26.

  Illustrative sample figures, not any employer's actual data. The structure of
  the plan is the point, and it rebuilds for any cost center.
*/

export type OpexSlice = { category: string; value: number; method: string };
export type CapexPhase = { phase: string; value: number };

export const opexCapex = {
  department: "Facilities",
  fiscalYear: "FY26",
  totalPlanUsdM: 9.6,
  opexUsdM: 6.8,
  capexUsdM: 2.8,
  forecastLines: 240,
  openCommitmentUsdM: 1.45,

  opexBreakdownUsdM: [
    { category: "Rent", value: 5.4, method: "Lease schedule for contractual costs" },
    { category: "CAM fees", value: 0.5, method: "Lease schedule for contractual costs" },
    { category: "All other", value: 0.9, method: "Trailing run rate for recurring services" },
  ] satisfies OpexSlice[],

  capexPhasingUsdM: [
    { phase: "H1 actual", value: 0.6 },
    { phase: "H2 forecast", value: 2.2 },
  ] satisfies CapexPhase[],

  insights: [
    "Rent and CAM are 87% of facilities OpEx; only about $0.9M is genuinely discretionary. A facilities cost conversation is really a lease conversation, not a spend-control one.",
    "79% of CapEx lands in H2, so phasing matters more than the annual total, and H2 carries the forecast risk.",
  ],

  methods: [
    "Lease schedule for contractual costs",
    "Trailing run rate for recurring services",
    "Milestone phasing for project work",
  ],
} as const;
