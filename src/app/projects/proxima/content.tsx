"use client";

import CaseStudyLayout from "@/components/CaseStudyLayout";

function ApproachDiagram() {
  return (
    <div className="font-[family-name:var(--font-mono)] text-xs text-[hsl(var(--muted))]">
      <pre className="whitespace-pre overflow-x-auto leading-relaxed">
{`┌─────────────────────────────────────────────────────────┐
│                  A/B Test Platform                       │
│         (proxy metric P, long-term oracle O)            │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│              PROXIMA Pipeline                            │
│                                                         │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │ Directional │  │    Rank      │  │   Segment     │  │
│  │ Agreement   │  │ Preservation │  │   Fragility   │  │
│  │   (DA)      │  │    (τ_b)     │  │  (Simpson's)  │  │
│  └──────┬──────┘  └──────┬───────┘  └──────┬────────┘  │
│         │                │                  │           │
│  ┌──────▼────────────────▼──────────────────▼────────┐  │
│  │         Composite Reliability Score               │  │
│  │              R ∈ [0, 1]                           │  │
│  │   R = w₁·DA + w₂·τ_b + w₃·(1 - fragility)      │  │
│  └──────────────────────┬────────────────────────────┘  │
│                         │                               │
│  ┌──────────────────────▼────────────────────────────┐  │
│  │         Shipping Decision Simulator               │  │
│  │     Estimates regret and false-ship rate          │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘`}
      </pre>
    </div>
  );
}

export default function ProximaContent() {
  return (
    <CaseStudyLayout
      title="PROXIMA"
      subtitle="A validation framework for proxy metrics in online controlled experiments."
      status="Research / Preprint (stat.ME, pending)"
      problem="Teams running A/B tests often rely on short-term proxy metrics (e.g., click-through rate) to make shipping decisions about long-term outcomes (e.g., retention). If the proxy is unreliable — due to sign flips, segment-level paradoxes, or weak correlation — teams unknowingly ship regressions. There is no standard framework for quantifying whether a proxy metric is trustworthy enough to base decisions on."
      approach="PROXIMA introduces a formal framework for proxy metric validation. It computes a composite reliability score R ∈ [0,1] based on three pillars: directional agreement (does the proxy agree with the oracle on which variant wins?), rank preservation (Kendall's τ_b across experiments), and segment-level fragility detection (Simpson's Paradox reversals where the proxy says one thing for the whole population but the opposite for subgroups). A shipping decision simulator then estimates the expected regret of trusting the proxy."
      diagram={<ApproachDiagram />}
      sections={[
        {
          title: "Directional Agreement",
          content: (
            <p>
              For each simulated experiment, PROXIMA checks whether the proxy
              metric P and the long-term oracle O agree on which variant
              (treatment vs. control) is better. Across 80 experiments on two
              datasets, PROXIMA achieves 98.4% agreement with the oracle —
              meaning it correctly identifies when a proxy would have led to
              the wrong shipping decision in 98.4% of cases.
            </p>
          ),
        },
        {
          title: "Simpson's Paradox Detection",
          content: (
            <p>
              PROXIMA segments users by covariates (e.g., device type, region,
              tenure) and checks for sign reversals: cases where the proxy
              shows a positive effect overall but a negative effect in one or
              more subgroups. These reversals indicate structural fragility in
              the metric. The framework reports which segments are reversed and
              their sample sizes.
            </p>
          ),
        },
        {
          title: "Composite Reliability Score",
          content: (
            <p>
              The three pillars are combined into a single score R ∈ [0,1] via
              a weighted formula: R = w₁·DA + w₂·τ_b + w₃·(1 - fragility).
              Proposition 1 in the paper proves that R is monotonically
              decreasing in proxy unreliability under mild regularity
              conditions. Algorithm 1 provides the full computation procedure.
            </p>
          ),
        },
        {
          title: "Evaluation Datasets",
          content: (
            <p>
              Evaluated on two public datasets: Criteo Uplift (14 million
              observations, 50 simulated experiments) for e-commerce and
              KuaiRec (7,176 users, 30 simulated experiments) for
              recommendation systems. Both datasets provide ground-truth
              long-term outcomes, enabling direct oracle comparison.
            </p>
          ),
        },
      ]}
      metrics={[
        { label: "Oracle Agreement", value: "98.4%" },
        { label: "Criteo Observations", value: "14M" },
        { label: "KuaiRec Users", value: "7.2K" },
        { label: "Simulated Experiments", value: "80" },
        { label: "Paper Length", value: "14 pages" },
        { label: "Formal Propositions", value: "1" },
      ]}
      techStack={[
        {
          layer: "Core",
          items: ["Python", "NumPy", "SciPy", "pandas"],
        },
        {
          layer: "Statistical Methods",
          items: [
            "Kendall's τ_b",
            "Bootstrap CI",
            "Simpson's Paradox detection",
            "Uplift modeling",
          ],
        },
        {
          layer: "Evaluation",
          items: ["Criteo Uplift Dataset", "KuaiRec Dataset"],
        },
        {
          layer: "Interface",
          items: ["FastAPI", "React Dashboard"],
        },
      ]}
      links={[
        {
          label: "GitHub",
          href: "https://github.com/Avinash-Amudala/PROXIMA",
          icon: "github",
        },
        {
          label: "Zenodo DOI",
          href: "https://doi.org/10.5281/zenodo.15483241",
          icon: "paper",
        },
      ]}
      lessonsLearned="The hardest part wasn't the statistics — it was defining what 'reliable' means precisely enough to compute. The framework went through three complete redesigns of the scoring function before converging on the composite R. I also learned that evaluation on public datasets is necessary for credibility, but the datasets that have both proxy and long-term outcomes are rare. Criteo and KuaiRec were the only viable options."
      timeline="Research started June 2025. 14-page paper with formal definitions, Proposition 1, Algorithm 1. Zenodo DOI registered. arXiv submission to stat.ME pending. Code and data publicly available on GitHub."
    />
  );
}
