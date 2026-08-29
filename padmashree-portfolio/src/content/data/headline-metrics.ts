/*
  Headline metrics for the through-line strip (spec section 6.5).
*/

export type HeadlineMetric = {
  value: string;
  label: string;
  source: string;
};

export const headlineMetrics: HeadlineMetric[] = [
  { value: "25%", label: "faster month-end close", source: "NTT DATA automation" },
  {
    value: "30%",
    label: "fewer reconciliation discrepancies",
    source: "NTT DATA reconciliation model",
  },
  {
    value: "$11.1M",
    label: "facilities plan built line by line",
    source: "Harbinger Dept 120 FY26",
  },
];
