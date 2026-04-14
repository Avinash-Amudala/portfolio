import type { Metadata } from "next";
import ArchiveContent from "./content";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "All projects by Avinash Amudala — AI/ML, full-stack, systems, and research.",
};

export default function ArchivePage() {
  return <ArchiveContent />;
}
