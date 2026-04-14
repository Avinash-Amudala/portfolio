import type { Metadata } from "next";
import WritingContent from "./content";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Technical writing by Avinash Amudala — MCP-Telecom, PROXIMA, PyPI packaging, and more.",
};

export default function WritingPage() {
  return <WritingContent />;
}
