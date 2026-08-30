/*
  Headline metrics for the through-line strip (spec section 6.5).
*/

export type HeadlineMetric = {
  value: string;
  label: string;
  source: string;
};

export const headlineMetrics: HeadlineMetric[] = [
  {
    value: "Built",
    label: "cost models from a blank page for a manufacturing ramp",
    source: "Manufacturing and operations finance",
  },
  {
    value: "Automated",
    label: "the month-end close, now self-service",
    source: "Process automation",
  },
  {
    value: "Adopted",
    label: "a reconciliation model that became the team standard",
    source: "FP&A",
  },
];
