/*
  Markowitz efficient frontier inputs (spec section 4.5).

  ILLUSTRATIVE SAMPLE DATA. These are documented, plausible annualized figures for a
  five-asset equity portfolio, not live market data and not her saved inputs. The UI
  labels them as illustrative. Replace with real inputs if they become available.

  Covariance is built from volatility and the correlation matrix: Sigma_ij =
  corr_ij * vol_i * vol_j. Betas use each asset's correlation to the market proxy.
*/

export type FrontierAsset = {
  key: string;
  name: string;
  /** Expected annual return, as a decimal. */
  expectedReturn: number;
  /** Annualized volatility (standard deviation), as a decimal. */
  volatility: number;
  /** Correlation of this asset to the market proxy, for beta. */
  marketCorrelation: number;
};

export const frontierAssets: FrontierAsset[] = [
  { key: "TCH", name: "Large-cap tech A", expectedReturn: 0.14, volatility: 0.26, marketCorrelation: 0.85 },
  { key: "SFT", name: "Large-cap tech B", expectedReturn: 0.12, volatility: 0.22, marketCorrelation: 0.88 },
  { key: "HLT", name: "Healthcare", expectedReturn: 0.09, volatility: 0.16, marketCorrelation: 0.6 },
  { key: "FIN", name: "Financials", expectedReturn: 0.1, volatility: 0.2, marketCorrelation: 0.8 },
  { key: "ENR", name: "Energy", expectedReturn: 0.08, volatility: 0.24, marketCorrelation: 0.55 },
];

/** Correlation matrix, same order as frontierAssets. Symmetric, unit diagonal. */
export const correlationMatrix: number[][] = [
  [1.0, 0.75, 0.35, 0.45, 0.2],
  [0.75, 1.0, 0.4, 0.5, 0.25],
  [0.35, 0.4, 1.0, 0.3, 0.15],
  [0.45, 0.5, 0.3, 1.0, 0.35],
  [0.2, 0.25, 0.15, 0.35, 1.0],
];

export const frontierConfig = {
  riskFreeRate: 0.04,
  portfolioValueUsd: 100_000_000,
  market: {
    label: "Broad equity market (proxy)",
    expectedReturn: 0.09,
    volatility: 0.16,
  },
} as const;
