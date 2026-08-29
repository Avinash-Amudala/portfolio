/*
  Experience (spec section 4.6). Roles ordered most recent first.
  Wins that map to a playbook link straight to it.

  Note: employment date ranges are approximate and should be confirmed. See the
  README open questions. Facts anchored by the spec: CA cleared Jul 2023,
  B.Com Feb 2022, MS Finance expected Aug 2026.
*/

export type RoleWin = {
  text: string;
  /** Links this win to a full playbook when one exists. */
  playbookSlug?: string;
};

export type Role = {
  id: string;
  company: string;
  title: string;
  period: string;
  current?: boolean;
  /** Scope, in plain language. */
  summary: string;
  /** Systems used, shown as small tags. */
  systems: string[];
  wins: RoleWin[];
  /** Optional supporting role shown more quietly. */
  supporting?: boolean;
};

export const experience: Role[] = [
  {
    id: "harbinger",
    company: "Harbinger Motors",
    title: "Production Finance (Finance Intern)",
    period: "2025-Present",
    current: true,
    summary:
      "Supports the Production organization at an EV manufacturer through a US production ramp. Builds the cost models, metrics, and pipelines that the ramp runs on.",
    systems: ["NetSuite", "Excel", "Google Sheets", "Google Apps Script"],
    wins: [
      {
        text: "Built the hours-per-unit metric and showed the swing was the denominator, not the crew.",
        playbookSlug: "hours-per-unit",
      },
      {
        text: "Fixed the payroll source data behind the metric: 1,043 duplicated employee-days down to zero, with an exceptions log.",
        playbookSlug: "hours-per-unit-data-quality",
      },
      {
        text: "Built the $11.1M FY26 facilities plan for Department 120 across 258 lines, and showed only about $0.9M was discretionary.",
        playbookSlug: "opex-capex-forecast",
      },
      {
        text: "Automated the month-end GL report so it loads itself, cutting a close step from about 2 hours to 30 minutes.",
        playbookSlug: "month-end-close-automation",
      },
      {
        text: "Built a manufacturing overhead absorption model under ASC 330 with a GL tie-out and an idle-capacity bridge.",
      },
      {
        text: "Caught a contractor-labor misclassification and a revenue discrepancy before close.",
      },
      {
        text: "Redesigned CapEx reconciliation with a shared identifier and a two-level area coding scheme, mapping about 2,400 historical PO lines to the capital budget, and wrote the SOP.",
      },
      {
        text: "Segmented about 1,100 PO lines into a four-stage payment lifecycle for director review.",
      },
    ],
  },
  {
    id: "ntt-data",
    company: "NTT DATA",
    title: "Senior FP&A Specialist",
    period: "2022-2024",
    summary:
      "Two-plus years of full-cycle FP&A: budgeting, forecasting, reporting, and the automation that made them faster and cleaner.",
    systems: ["Excel", "Power BI"],
    wins: [
      {
        text: "Self-initiated close and reconciliation automation in Excel and Power BI, adopted as the team standard, cutting discrepancies by 30%.",
        playbookSlug: "financial-close-reporting-automation",
      },
      {
        text: "Built a driver-based multi-year cost allocation forecasting model from a blank page, used in annual planning.",
        playbookSlug: "multi-year-cost-allocation",
      },
      {
        text: "Ran month-end close and management reporting, and cut a close cycle by about 25% through automation.",
      },
    ],
  },
  {
    id: "sri-ramulu-naidu",
    company: "Sri Ramulu Naidu and Co.",
    title: "Articled Assistant (Audit and Accounting)",
    period: "2019-2022",
    summary:
      "Three years of audit and accounting in India during the Chartered Accountancy articleship: statutory audits, financial statements, and compliance.",
    systems: ["Tally", "Excel"],
    wins: [
      { text: "Executed statutory and internal audits across client engagements." },
      { text: "Prepared financial statements and supported statutory compliance filings." },
    ],
  },
  {
    id: "smc-research",
    company: "Saint Mary's College of California",
    title: "Student Assistant, Office of Research",
    period: "2025-2026",
    supporting: true,
    summary:
      "Supports the Office of Research alongside the MS in Finance (STEM) program.",
    systems: ["Excel"],
    wins: [{ text: "Research and administrative support during the graduate program." }],
  },
];
