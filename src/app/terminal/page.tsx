import type { Metadata } from "next";
import InteractiveTerminal from "@/components/InteractiveTerminal";

export const metadata: Metadata = {
  title: "Terminal",
  description:
    "An interactive terminal for exploring Avinash Amudala's portfolio. Type `help` to get started.",
};

export default function TerminalPage() {
  return (
    <section className="section-gap px-6">
      <div className="mx-auto max-w-[760px]">
        <h1 className="mb-2 text-[40px] font-bold leading-[1.1] text-[hsl(var(--fg))]">
          Terminal
        </h1>
        <p className="mb-10 text-[hsl(var(--muted))]">
          Explore this portfolio the way it was meant to be explored. Type{" "}
          <code className="rounded bg-[hsl(var(--code-bg))] px-1.5 py-0.5 font-[family-name:var(--font-mono)] text-sm text-[hsl(var(--accent))]">
            help
          </code>{" "}
          to get started.
        </p>
        <InteractiveTerminal />
      </div>
    </section>
  );
}
