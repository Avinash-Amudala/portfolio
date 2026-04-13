import type { Metadata } from "next";
import LLMIncidentCopilotContent from "./content";

export const metadata: Metadata = {
  title: "LLM Incident Copilot — Evidence-Grounded RAG for Log Debugging",
  description:
    "RAG system for production incident debugging where every AI conclusion must cite real log lines. FAISS + Qdrant dual vector store, local (Ollama) and cloud (Groq) inference.",
};

export default function LLMIncidentCopilotPage() {
  return <LLMIncidentCopilotContent />;
}
