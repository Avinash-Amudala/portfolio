/*
  The playbook index. Source of truth for the Selected Work cards, ordering, and
  which interactive centerpiece each full write-up carries. The long-form body for
  each full playbook lives in src/content/work/<slug>.mdx and renders at /work/<slug>.

  Public portfolio note: the case studies drawn from prior FP&A roles are shown
  with illustrative sample figures, not any employer's actual data. They are
  attributed by function rather than by company. The point is the method and the
  tool, which rebuild for any company. The academic and OpenClaw pieces use public
  or clearly-labeled sample inputs.
*/

export type InteractiveKey =
  | "hpu-denominator"
  | "data-quality"
  | "opex-capex"
  | "close-automation"
  | "efficient-frontier"
  | "dcf"
  | "openclaw-skill";

export type PlaybookImpact = { value: string; label: string };

export type Playbook = {
  slug: string;
  order: number;
  kind: "playbook" | "card" | "stub";
  title: string;
  org: string;
  period: string;
  /** One-line problem. */
  problem: string;
  /** What she found, stated up front. */
  insight: string;
  impact: PlaybookImpact[];
  /** Systems and methods, shown as small tags. */
  tags: string[];
  interactive?: InteractiveKey;
  /** True when a full /work/<slug> write-up exists. */
  hasWriteup: boolean;
  /** Marks illustrative (non-proprietary) datasets. */
  illustrative?: boolean;
  /** Unresolved stub, kept out of the public listing. */
  unresolved?: boolean;
};

export const playbooks: Playbook[] = [
  {
    slug: "hours-per-unit",
    order: 1,
    kind: "playbook",
    title: "Hours per unit: the denominator problem",
    org: "Manufacturing FP&A",
    period: "2026",
    problem:
      "Hours per unit swung from about 39 to 463 across the year. Was the line falling apart?",
    insight:
      "The swing was the denominator, not the crew. Every spike in hours per unit lined up with a trough in units built.",
    impact: [
      { value: "12x to 2x", label: "spread once read on a minimum weekly volume" },
      { value: "30 weeks", label: "modeled, per line and as a rollup" },
    ],
    tags: ["ERP data", "Excel", "Unit economics", "Production ramp"],
    interactive: "hpu-denominator",
    hasWriteup: true,
    illustrative: true,
  },
  {
    slug: "hours-per-unit-data-quality",
    order: 2,
    kind: "playbook",
    title: "Hours per unit: the data-quality fix",
    org: "Manufacturing FP&A",
    period: "2026",
    problem:
      "Overlapping payroll exports left thousands of duplicated hours. The metric could not be trusted.",
    insight:
      "Fix the source before the metric. Replace a day whole, tag every row, and write down the tie-break rule.",
    impact: [
      { value: "1,180 to 0", label: "duplicated employee-days" },
      { value: "2,040", label: "conflicts logged, not hidden" },
    ],
    tags: ["Payroll data", "Excel", "Data quality", "Reconciliation"],
    interactive: "data-quality",
    hasWriteup: true,
    illustrative: true,
  },
  {
    slug: "opex-capex-forecast",
    order: 3,
    kind: "playbook",
    title: "OpEx and CapEx forecast, line by line",
    org: "Manufacturing FP&A",
    period: "FY26",
    problem:
      "Build a $9.6M facilities plan that a director can actually steer.",
    insight:
      "A facilities cost conversation is really a lease conversation. Only about $0.9M is discretionary.",
    impact: [
      { value: "$9.6M", label: "planned across 240 lines" },
      { value: "79%", label: "of CapEx phased into H2" },
    ],
    tags: ["Excel", "Lease schedules", "ASC 842", "CapEx planning"],
    interactive: "opex-capex",
    hasWriteup: true,
    illustrative: true,
  },
  {
    slug: "month-end-close-automation",
    order: 4,
    kind: "playbook",
    title: "Month-end close automation",
    org: "Manufacturing FP&A",
    period: "2026",
    problem:
      "The month-end GL report was pulled by hand and broke on merged cells every close.",
    insight:
      "Make it load itself and find columns by name, so the answer stops depending on who ran it.",
    impact: [
      { value: "135 to 25 min", label: "per close" },
      { value: "6 months", label: "running live" },
    ],
    tags: ["ERP", "Automation", "Google Apps Script", "Month-end close"],
    interactive: "close-automation",
    hasWriteup: true,
    illustrative: true,
  },
  {
    slug: "efficient-frontier",
    order: 5,
    kind: "playbook",
    title: "Markowitz efficient frontier",
    org: "MS Finance, Saint Mary's College",
    period: "2026",
    problem:
      "Allocate a $100M equity portfolio across five stocks at the right level of risk.",
    insight:
      "The efficient frontier makes the trade-off explicit: past a point, more risk stops paying.",
    impact: [
      { value: "$100M", label: "illustrative portfolio, five stocks" },
      { value: "4 ratios", label: "Sharpe, Treynor, Alpha, Information" },
    ],
    tags: ["Portfolio theory", "Markowitz", "Mean-variance", "Illustrative data"],
    interactive: "efficient-frontier",
    hasWriteup: true,
    illustrative: true,
  },
  {
    slug: "dollar-general-valuation",
    order: 6,
    kind: "playbook",
    title: "Equity valuation sensitivity: Dollar General",
    org: "MS Finance, Saint Mary's College",
    period: "2026",
    problem: "What is Dollar General worth, and how sensitive is that to a few assumptions?",
    insight:
      "Intrinsic value is a function of a handful of assumptions. WACC and terminal growth move it most.",
    impact: [
      { value: "DCF + RI", label: "two methods, cross-checked" },
      { value: "2 drivers", label: "WACC and terminal growth, live" },
    ],
    tags: ["Valuation", "DCF", "Residual income", "Illustrative data"],
    interactive: "dcf",
    hasWriteup: true,
    illustrative: true,
  },

  {
    slug: "openclaw",
    order: 7,
    kind: "playbook",
    title: "An equity-research skill that runs itself",
    org: "MS Finance, Saint Mary's College",
    period: "2026",
    problem:
      "First-draft equity research is repeatable work. Could an agent produce a defensible one, on free data, for a couple of dollars?",
    insight:
      "Yes, if you encode the judgment. The value is the methodology the skill carries, not the code that runs it.",
    impact: [
      { value: "5 sectors", label: "validated, methodology adapts per sector" },
      { value: "~$2 · ~5 min", label: "per report, under $10 for the project" },
    ],
    tags: ["OpenClaw", "AI agent skill", "Equity research", "DCF", "SEC filings"],
    interactive: "openclaw-skill",
    hasWriteup: true,
  },

  // Short cards (spec section 6.6). No full route.
  {
    slug: "financial-close-reporting-automation",
    order: 8,
    kind: "card",
    title: "Financial close and reporting automation",
    org: "Corporate FP&A",
    period: "2024",
    problem: "Close data validation and reconciliation were manual and slow.",
    insight:
      "Self-initiated Excel and Power BI automation of the checks, adopted as the team standard.",
    impact: [{ value: "Team standard", label: "adopted across the team" }],
    tags: ["Excel", "Power BI", "Reconciliation"],
    hasWriteup: false,
    illustrative: true,
  },
  {
    slug: "multi-year-cost-allocation",
    order: 9,
    kind: "card",
    title: "Multi-year cost allocation forecasting model",
    org: "Corporate FP&A",
    period: "2025",
    problem: "Planning needed a driver-based multi-year cost view built from a blank page.",
    insight:
      "Historical, budget, and forecast views in one model, used in annual planning.",
    impact: [{ value: "Multi-year", label: "driver-based model" }],
    tags: ["Excel", "Driver-based modeling", "Forecasting"],
    hasWriteup: false,
    illustrative: true,
  },
  {
    slug: "powerbi-expense-forecasting",
    order: 10,
    kind: "card",
    title: "Power BI expense forecasting dashboard",
    org: "B.Com capstone",
    period: "2022",
    problem: "Forecast expenses and present them in an interactive dashboard.",
    insight: "A Power BI expense forecasting dashboard built for the capstone.",
    impact: [{ value: "Capstone", label: "Power BI dashboard" }],
    tags: ["Power BI", "Forecasting"],
    hasWriteup: false,
  },

];

/** Public playbooks and cards, ordered, excluding unresolved stubs. */
export const publicPlaybooks = playbooks
  .filter((p) => !p.unresolved)
  .sort((a, b) => a.order - b.order);

export const fullPlaybooks = publicPlaybooks.filter((p) => p.kind === "playbook");
export const workCards = publicPlaybooks.filter((p) => p.kind === "card");

export function getPlaybook(slug: string): Playbook | undefined {
  return playbooks.find((p) => p.slug === slug);
}
