/*
  OpEx and CapEx forecast, built line by line (spec section 6.3).
  Department 120, Facilities, FY26.
*/

export type OpexSlice = { category: string; value: number; method: string };
export type CapexPhase = { phase: string; value: number };

export const opexCapex = {
  department: "120 Facilities",
  fiscalYear: "FY26",
  totalPlanUsdM: 11.1,
  opexUsdM: 7.9,
  capexUsdM: 3.2,
  forecastLines: 258,
  openCommitmentUsdM: 1.79,

  opexBreakdownUsdM: [
    { category: "Rent", value: 6.51, method: "Lease schedule for contractual costs" },
    { category: "CAM fees", value: 0.49, method: "Lease schedule for contractual costs" },
    { category: "All other", value: 0.9, method: "Trailing run rate for recurring services" },
  ] satisfies OpexSlice[],

  capexPhasingUsdM: [
    { phase: "H1 actual", value: 0.56 },
    { phase: "H2 forecast", value: 2.64 },
  ] satisfies CapexPhase[],

  insights: [
    "Rent and CAM are 89% of facilities OpEx; only about $0.9M is genuinely discretionary. A facilities cost conversation is really a lease conversation, not a spend-control one.",
    "82% of CapEx lands in H2, so phasing matters more than the annual total, and H2 carries the forecast risk.",
  ],

  methods: [
    "Lease schedule for contractual costs",
    "Trailing run rate for recurring services",
    "Milestone phasing for project work",
  ],
} as const;
