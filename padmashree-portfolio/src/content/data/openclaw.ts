/*
  OpenClaw: an equity-research AI skill (spec section 10 resolved).

  Real project. FIN 671 final project for the MS in Finance at Saint Mary's College.
  She built a reusable agent skill, company-performance-analysis, that runs locally on
  the OpenClaw agent framework with Anthropic's Claude and produces sector-aware equity
  research reports on US public companies. Facts are from her project report and deck.
*/

export type Recommendation = "Buy" | "Hold" | "Sell";

export type SectorTest = {
  ticker: string;
  company: string;
  sector: string;
  method: string;
  recommendation: Recommendation;
  finding: string;
};

export const openclaw = {
  course: "FIN 671 final project",
  program: "MS Finance, Saint Mary's College",
  date: "May 2026",
  framework: "OpenClaw",
  model: "Anthropic's Claude",
  skillName: "company-performance-analysis",
  fileCount: 5,
  sizeKb: 44,
  outputWords: "1,800 to 2,500",
  runtimeMinutes: 5,
  costPerReportUsd: 2,
  totalProjectUsd: 10,
  dataSources: ["SEC EDGAR", "Yahoo Finance", "StockAnalysis.com", "Company IR"],

  files: [
    { name: "SKILL.md", purpose: "Trigger, scope check, and the 7-step workflow", sizeKb: 5 },
    { name: "financial-ratios.md", purpose: "Ratio formulas, 3-year trend lens, sector benchmarks", sizeKb: 7 },
    { name: "valuation-frameworks.md", purpose: "WACC and CAPM, 5-year DCF, reverse DCF, multiples, sector pivots", sizeKb: 10 },
    { name: "esg-checklist.md", purpose: "Materiality lens, 10-K extraction, governance red flags", sizeKb: 10 },
    { name: "report-template.md", purpose: "The standardized 6-section report and citation discipline", sizeKb: 12 },
  ],

  workflow: [
    "Scope check: is this a US public company with 3+ years of filings?",
    "Company snapshot: business model, market cap, price",
    "Financial health: 3-year ratio trends from the 10-K",
    "Valuation: DCF, multiples, and a reverse DCF",
    "Competitive position: peer comparison and moat",
    "ESG: material disclosures only",
    "Investment thesis: Buy, Hold, or Sell with a 12-month target",
  ],

  // Validation across five sectors. NVDA, MSFT, JPM produced Hold; TSLA broke the streak
  // with Sell on demo day. AAPL was the initial build-and-validate ticker.
  sectorTests: [
    {
      ticker: "NVDA",
      company: "NVIDIA",
      sector: "Semiconductors",
      method: "DCF + multiples",
      recommendation: "Hold",
      finding:
        "Full DCF and peer multiples. The calibration held: not every high-quality name is a Buy.",
    },
    {
      ticker: "MSFT",
      company: "Microsoft",
      sector: "Software (stable tech)",
      method: "DCF + multiples",
      recommendation: "Hold",
      finding: "A steady-compounder profile, valued on DCF with a multiples cross-check.",
    },
    {
      ticker: "JPM",
      company: "JPMorgan",
      sector: "Banking",
      method: "Justified P/TBV + dividend discount",
      recommendation: "Hold",
      finding:
        "The skill refused DCF for a bank, swapped debt-to-equity for the CET1 capital ratio, used Justified P/TBV with a dividend-discount cross-check, and picked a bank peer set (BAC, C, WFC, GS). Methodological judgment, not template substitution.",
    },
    {
      ticker: "TSLA",
      company: "Tesla",
      sector: "Automotive",
      method: "DCF + reverse DCF",
      recommendation: "Sell",
      finding:
        "The live demo. An audience member picked TSLA, unseen. In about five minutes the skill produced a 2,400-word report with a Sell and a $200 target, breaking a three-Hold streak through its anti-confirmation-bias guardrails.",
    },
  ] satisfies SectorTest[],

  // The Tesla reverse-DCF decomposition, the most analytically interesting result.
  tesla: {
    currentBusinessValue: 30,
    target: 200,
    marketPrice: 435.79,
    downsidePct: 54,
    optionalityUsdTn: 1.5,
    note: "A DCF of the current auto and energy businesses came to about $30 a share. The reverse DCF at the market price implied operationally impossible assumptions, roughly $3.8T of Year-5 revenue, showing that about $1.5T of market cap was pure optionality on pre-commercial robotaxi and humanoid-robot businesses.",
  },

  designDecisions: [
    "Lean trigger, heavy references: routing logic separated from execution logic, so methodology can change without touching the trigger, and tokens load only when the skill fires.",
    "Calibration built in: expect roughly one-third Buy, Hold, Sell, and stress-test against consensus rather than defaulting to Buy.",
    "Sector-aware methodology: banks get Justified P/TBV and a dividend-discount cross-check, not DCF, and the skill announces the pivot.",
    "Anti-confirmation-bias: a reverse DCF is required as a check before any recommendation.",
    "Honest limitations stated upfront: the ESG section says plainly it is not an MSCI-grade rating.",
  ],
} as const;
