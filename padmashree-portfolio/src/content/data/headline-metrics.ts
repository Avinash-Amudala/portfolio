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
    label: "cost and forecasting models from a blank page",
    source: "Financial modeling",
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
