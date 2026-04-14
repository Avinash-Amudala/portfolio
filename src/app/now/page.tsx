import type { Metadata } from "next";
import NowContent from "./content";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Avinash Amudala is working on right now — MCP-Telecom v0.3, PROXIMA arXiv submission, SJSU lectures.",
};

export default function NowPage() {
  return <NowContent />;
}
