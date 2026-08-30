/*
  Experience (spec section 4.6). Roles ordered most recent first.
  Facts and dates are taken from her resume. Wins that map to a playbook link to it.
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
  location?: string;
  period: string;
  current?: boolean;
  /** Scope, in plain language. */
  summary: string;
  /** Systems used, shown as small tags. */
  systems: string[];
  wins: RoleWin[];
};

export const experience: Role[] = [
  {
    id: "harbinger",
    company: "Harbinger Motors",
    title: "Finance Intern, FP&A (Production)",
    location: "United States",
    period: "Jun 2026 to Aug 2026",
    summary:
      "Supported the Production organization at an EV manufacturer through a US manufacturing ramp, building the cost models and decision tools operations leaders used for resource planning while the processes were still being invented.",
    systems: ["NetSuite", "NetSuite Analytics Warehouse", "Google Sheets", "Excel"],
    wins: [
      {
        text: "Built cost models from scratch for direct and indirect labor, material, inventory, and freight, used by operations as decision tools as the line scaled. The hours-per-unit metric is one of them.",
        playbookSlug: "hours-per-unit",
      },
      {
        text: "Investigated cost variances to root cause with Engineering, Operations, and Accounting, fixing data and GL coding at the source so the same exceptions stopped recurring.",
        playbookSlug: "hours-per-unit-data-quality",
      },
      {
        text: "Standardized reporting templates and automated manual handoffs across NetSuite, NetSuite Analytics Warehouse, and Google Sheets, so decisions ran on current numbers instead of stale ones.",
        playbookSlug: "month-end-close-automation",
      },
      {
        text: "Delivered monthly reporting and budget vs actual variance analysis with driver commentary that told operations leaders where cost was moving and why.",
      },
      {
        text: "Reconciled material demand against inventory supply for monthly production planning, surfacing shortages and excess before they became line stoppages or carrying cost.",
      },
      {
        text: "Quantified quality and scrap costs and flagged the biggest cost focus areas so improvement effort went where the money was.",
      },
    ],
  },
  {
    id: "ntt-data",
    company: "NTT DATA",
    title: "Senior Financial Planning and Analysis Specialist",
    location: "Multinational",
    period: "Sep 2023 to Aug 2025",
    summary:
      "Full-cycle FP&A for four business functions: KPIs across revenue, cost of sales, OpEx, and CapEx, rolling forecasts, annual budgets, headcount planning, and the automation that made them faster and cleaner.",
    systems: ["Excel", "Power BI", "Power Query"],
    wins: [
      {
        text: "Self-initiated Excel and Power BI automation of close validation and reconciliation, adopted as the team standard, materially cutting reconciliation exceptions and close time.",
      },
      {
        text: "Built a driver-based multi-year cost allocation forecasting model from a blank page, presented across historical, budget, and forecast views and used in annual planning.",
      },
      {
        text: "Owned the monthly rolling forecast for OpEx, CapEx, and headcount, and the annual budget with cross-functional leaders.",
      },
      {
        text: "Presented executive-ready variance analysis and scenario analyses directly to senior business leaders.",
      },
    ],
  },
  {
    id: "sri-ramulu-naidu",
    company: "Sri Ramulu Naidu & Co.",
    title: "Articled Assistant, Audit and Accounting",
    location: "Mangalore, India",
    period: "Sep 2019 to Sep 2022",
    summary:
      "Three years of audit and accounting during the Chartered Accountancy articleship: complete financial statements for multi-entity clients under US GAAP and Ind AS / IFRS.",
    systems: ["Tally", "Excel"],
    wins: [
      {
        text: "Prepared and analyzed complete financial statements (P&L, Balance Sheet, Cash Flow) for multi-entity clients, reconciling accounts and analyzing cost structures and margins.",
      },
      {
        text: "Reviewed revenue recognition and cost accounting, recommended adjustments, and presented findings to client CFOs and audit committees.",
      },
      {
        text: "Managed concurrent engagements with hard statutory deadlines independently, delivering accurate work under pressure.",
      },
    ],
  },
];
