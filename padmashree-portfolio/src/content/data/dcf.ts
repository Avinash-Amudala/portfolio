/*
  Equity valuation sensitivity, Dollar General (spec section 4.5).

  ILLUSTRATIVE SAMPLE ASSUMPTIONS. These are round, clearly-labeled placeholders for
  a valuation exercise, not audited Dollar General financials and not investment
  advice. The UI labels them as illustrative. Replace with real inputs if available.

  Two linked methods:
  - Discounted cash flow: project free cash flow, add a Gordon terminal value,
    discount at WACC, subtract net debt, divide by shares.
  - Residual income cross-check: book value plus discounted economic profit.
*/

export const dcfModel = {
  company: "Dollar General",
  illustrative: true,
  unit: "USD millions",

  baseFreeCashFlowUsdM: 2400,
  nearTermGrowth: 0.06,
  projectionYears: 5,

  sharesOutstandingM: 220,
  netDebtUsdM: 6000,

  wacc: { base: 0.085, min: 0.06, max: 0.12, step: 0.0025 },
  terminalGrowth: { base: 0.025, min: 0.0, max: 0.04, step: 0.0025 },

  /** Residual income cross-check inputs (per share). */
  residualIncome: {
    bookValuePerShare: 34,
    eps: 7.5,
    epsGrowth: 0.06,
    costOfEquity: 0.09,
    years: 5,
  },

  /** Illustrative market reference price, for context only. */
  referencePriceUsd: 120,
} as const;
