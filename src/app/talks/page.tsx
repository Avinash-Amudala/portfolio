import type { Metadata } from "next";
import TalksContent from "./content";

export const metadata: Metadata = {
  title: "Talks & Publications",
  description:
    "Guest lectures at SJSU, peer reviewer for ACM, AIAI, DMLR, Elsevier, Springer. IEEE ICESC 2022 publication. PROXIMA preprint.",
};

export default function TalksPage() {
  return <TalksContent />;
}
