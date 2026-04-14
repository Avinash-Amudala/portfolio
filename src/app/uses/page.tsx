import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description: "Hardware, software, and developer tools Avinash Amudala uses.",
};

const categories = [
  {
    name: "Development",
    items: [
      { name: "Editor", value: "Cursor (primary), VS Code (secondary)" },
      { name: "Terminal", value: "Windows Terminal + PowerShell / zsh on Linux" },
      { name: "Version control", value: "Git + GitHub" },
      { name: "AI pair programmer", value: "Claude (Opus), Cursor built-in" },
      { name: "Languages I reach for", value: "Python, TypeScript, C++, Bash" },
    ],
  },
  {
    name: "Infrastructure",
    items: [
      { name: "Containers", value: "Docker, Kubernetes, Containerlab" },
      { name: "CI/CD", value: "GitHub Actions, Jenkins" },
      { name: "Cloud", value: "AWS (Lambda, S3, SageMaker), Vercel" },
      { name: "Monitoring", value: "Prometheus, Grafana" },
    ],
  },
  {
    name: "Productivity",
    items: [
      { name: "Browser", value: "Arc / Chrome" },
      { name: "Notes", value: "Obsidian" },
      { name: "Design", value: "Figma (when needed)" },
    ],
  },
  {
    name: "This site",
    items: [
      { name: "Framework", value: "Next.js 16 (App Router)" },
      { name: "Styling", value: "Tailwind CSS v4" },
      { name: "Fonts", value: "Inter + JetBrains Mono (next/font)" },
      { name: "Animation", value: "Framer Motion" },
      { name: "Hosting", value: "Vercel" },
      { name: "Source", value: "github.com/Avinash-Amudala/portfolio" },
    ],
  },
];

export default function UsesPage() {
  return (
    <article className="section-gap px-6">
      <div className="mx-auto max-w-[720px]">
        <h1 className="text-[48px] font-bold leading-[1.1] text-[hsl(var(--fg))] mb-4">
          Uses
        </h1>
        <p className="text-[hsl(var(--muted))] mb-16">
          Hardware, software, and tools I use daily.
        </p>

        <div className="space-y-12">
          {categories.map((cat) => (
            <section key={cat.name}>
              <h2 className="text-lg font-semibold text-[hsl(var(--fg))] mb-4">
                {cat.name}
              </h2>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex gap-4 text-[15px]">
                    <span className="shrink-0 w-40 font-medium text-[hsl(var(--fg))]">
                      {item.name}
                    </span>
                    <span className="text-[hsl(var(--muted))]">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
