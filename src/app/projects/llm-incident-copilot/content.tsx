"use client";

import CaseStudyLayout from "@/components/CaseStudyLayout";

function ArchitectureDiagram() {
  return (
    <div className="font-[family-name:var(--font-mono)] text-xs text-[hsl(var(--muted))]">
      <pre className="whitespace-pre overflow-x-auto leading-relaxed">
{`┌─────────────────────────────────────────────────────────┐
│                     User Query                          │
│         "Why did the payment service crash?"            │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│                  Query Engine                            │
│  ┌─────────────────────────────────────────────────┐    │
│  │         Dual Vector Store Retrieval             │    │
│  │  ┌──────────┐          ┌──────────────┐         │    │
│  │  │  FAISS   │          │   Qdrant     │         │    │
│  │  │  (local) │          │  (persistent)│         │    │
│  │  └────┬─────┘          └──────┬───────┘         │    │
│  │       └──────────┬────────────┘                 │    │
│  │            Merged + Re-ranked                   │    │
│  └──────────────────┬──────────────────────────────┘    │
│                     │                                   │
│  ┌──────────────────▼──────────────────────────────┐    │
│  │           LLM Inference Layer                   │    │
│  │    ┌──────────┐      ┌──────────┐               │    │
│  │    │  Ollama  │      │   Groq   │               │    │
│  │    │ (local)  │      │ (cloud)  │               │    │
│  │    └──────────┘      └──────────┘               │    │
│  └──────────────────┬──────────────────────────────┘    │
│                     │                                   │
│  ┌──────────────────▼──────────────────────────────┐    │
│  │       Evidence Guardrails                       │    │
│  │  Every claim must cite log line + timestamp     │    │
│  │  Unsupported claims are flagged or removed      │    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘`}
      </pre>
    </div>
  );
}

export default function LLMIncidentCopilotContent() {
  return (
    <CaseStudyLayout
      title="LLM Incident Copilot"
      subtitle="Evidence-grounded RAG for production log debugging."
      status="Released — open source"
      problem="Production incident debugging requires reading through multi-megabyte log files to find root causes. Existing AI tools generate plausible-sounding diagnoses but hallucinate details — fabricating error messages, timestamps, and causal chains that don't appear in the actual logs. In high-stakes incidents, a wrong diagnosis wastes time and can make the situation worse."
      approach="The LLM Incident Copilot is a RAG system with a strict evidence requirement: every AI conclusion must cite actual log lines with timestamps. Logs are chunked, embedded, and stored in a dual vector store (FAISS for local speed, Qdrant for persistence). At query time, relevant chunks are retrieved, re-ranked, and passed to the LLM with instructions to only make claims supported by the provided evidence. An evidence guardrail layer validates that citations correspond to real log entries."
      diagram={<ArchitectureDiagram />}
      sections={[
        {
          title: "Log Ingestion & Chunking",
          content: (
            <p>
              Production logs (multi-MB files) are ingested and split into
              chunks preserving temporal locality — each chunk retains its
              timestamp range and service context. Chunks are embedded using
              sentence-transformers and stored in both FAISS (for fast local
              retrieval) and Qdrant (for persistent, filtered queries).
            </p>
          ),
        },
        {
          title: "Dual Vector Store",
          content: (
            <p>
              FAISS provides sub-millisecond local retrieval for interactive
              debugging sessions. Qdrant adds persistent storage with metadata
              filtering (by service, severity, time range). At query time,
              results from both stores are merged and re-ranked by relevance.
            </p>
          ),
        },
        {
          title: "Evidence Guardrails",
          content: (
            <p>
              The core differentiator: the LLM is prompted with strict
              citation requirements. Every diagnostic claim must reference a
              specific log line with its timestamp. The guardrail layer
              post-processes the LLM output and validates that cited log lines
              actually exist in the retrieved context. Claims without valid
              citations are flagged.
            </p>
          ),
        },
        {
          title: "Dual Inference Backends",
          content: (
            <p>
              Supports both local inference via Ollama (for air-gapped or
              privacy-sensitive environments) and cloud inference via Groq (for
              faster responses with larger models). The backend is swappable
              without changing the retrieval pipeline.
            </p>
          ),
        },
      ]}
      metrics={[
        { label: "Citation Rate", value: "100%" },
        { label: "Vector Stores", value: "2" },
        { label: "Query Latency", value: "<3s" },
        { label: "Inference Backends", value: "2" },
      ]}
      techStack={[
        {
          layer: "Core",
          items: ["Python", "FastAPI", "LangChain"],
        },
        {
          layer: "Vector Stores",
          items: ["FAISS", "Qdrant"],
        },
        {
          layer: "LLM Inference",
          items: ["Ollama (local)", "Groq (cloud)"],
        },
        {
          layer: "Frontend",
          items: ["React", "Tailwind CSS"],
        },
        {
          layer: "Infrastructure",
          items: ["Docker", "Docker Compose"],
        },
      ]}
      links={[
        {
          label: "GitHub",
          href: "https://github.com/Avinash-Amudala/llm-incident-copilot",
          icon: "github",
        },
      ]}
      lessonsLearned="The evidence guardrail is the entire value proposition — without it, this is just another chatbot over logs. The hardest part was making the citation check fast enough to not degrade the user experience. Chunking strategy matters enormously: too small and you lose context, too large and retrieval precision drops. I ended up with a time-window-based chunking strategy that preserves temporal locality."
      timeline="Built 2025–2026. Designed as a response to hallucination problems in production debugging tools. Open source."
    />
  );
}
