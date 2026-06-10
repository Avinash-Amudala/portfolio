"use client";

const stack = [
  "Python",
  "TypeScript",
  "FastAPI",
  "React",
  "Next.js",
  "FAISS",
  "Qdrant",
  "Ollama",
  "MCP SDK",
  "NETCONF",
  "gNMI",
  "SNMP",
  "Kubernetes",
  "Docker",
  "Kafka",
  "GraphQL",
  "PostgreSQL",
  "AWS",
  "C++",
];

export default function TechMarquee() {
  const row = [...stack, ...stack];
  return (
    <section
      aria-label="Technology stack"
      className="marquee-mask overflow-hidden border-y border-[hsl(var(--border))] py-5"
    >
      <div className="marquee-track gap-3 pr-3">
        {row.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            aria-hidden={i >= stack.length}
            className="glass shrink-0 rounded-full px-4 py-1.5 font-[family-name:var(--font-mono)] text-xs text-[hsl(var(--muted))]"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
