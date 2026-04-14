import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Avinash Amudala is working on — April 2026. MCP-Telecom v0.3, PROXIMA arXiv, SJSU lectures.",
};

export default function NowPage() {
  return (
    <article className="section-gap px-6">
      <div className="mx-auto max-w-[720px]">
        <h1 className="text-[48px] font-bold leading-[1.1] text-[hsl(var(--fg))] mb-2">
          Now
        </h1>
        <p className="text-sm text-[hsl(var(--muted))] mb-2">
          What I&apos;m working on — April 2026
        </p>
        <p className="text-sm text-[hsl(var(--muted))] mb-12">
          Inspired by{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--accent))] hover:underline"
          >
            Derek Sivers&apos; /now movement
          </a>
          .
        </p>

        <div className="text-[17px] leading-[1.65] text-[hsl(var(--muted))] space-y-6">
          <p>
            <strong className="text-[hsl(var(--fg))]">Work.</strong> At Nokia,
            I&apos;m extending the AI Test Automation platform to cover a new
            family of 5G core services, and quietly porting the diagnostics
            copilot onto a newer retrieval stack. The team has grown and I&apos;m
            spending more time on design reviews than I used to.
          </p>
          <p>
            <strong className="text-[hsl(var(--fg))]">Open source.</strong>{" "}
            MCP-Telecom v0.3 is in flight — adding RESTCONF transport, expanded
            Arista EOS coverage, and reworking the safety gate into a pluggable
            policy layer.
          </p>
          <p>
            <strong className="text-[hsl(var(--fg))]">Research.</strong> PROXIMA
            is waiting on arXiv endorsement for stat.ME. Once it clears, I&apos;ll
            cross-list to cs.LG and write a companion blog post.
          </p>
          <p>
            <strong className="text-[hsl(var(--fg))]">Teaching.</strong>{" "}
            Preparing three guest lectures at San José State University for the
            Fall 2026 and Spring 2027 semesters — two for Dr. Maryam Khazaei
            (Intro to AI, Foundations of Robotics) and one for Dr. Navrati
            Saxena (5G/V2X).
          </p>
          <p className="text-sm font-[family-name:var(--font-mono)]">
            Last updated: April 2026.
          </p>
        </div>
      </div>
    </article>
  );
}
