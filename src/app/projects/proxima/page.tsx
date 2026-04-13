import type { Metadata } from "next";
import ProximaContent from "./content";

export const metadata: Metadata = {
  title: "PROXIMA — Proxy Metric Validation for A/B Testing",
  description:
    "Statistical framework for evaluating proxy metric reliability in A/B tests. 98.4% oracle agreement on Criteo (14M observations) and KuaiRec (7.2K users). Detects Simpson's Paradox reversals.",
};

export default function ProximaPage() {
  return <ProximaContent />;
}
