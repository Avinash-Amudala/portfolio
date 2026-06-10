"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { personalInfo, flagshipProjects } from "@/data/portfolio-data";

interface HistoryEntry {
  command: string;
  output: string[];
}

const WELCOME = [
  "avinash-amudala.com — interactive shell v1.0",
  "Type `help` to see available commands.",
  "",
];

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const [commandLog, setCommandLog] = useState<string[]>([]);
  const [logIndex, setLogIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const run = (raw: string): string[] => {
    const cmd = raw.trim().toLowerCase();
    switch (cmd) {
      case "help":
        return [
          "Available commands:",
          "  whoami      who is this guy",
          "  projects    flagship work",
          "  stack       technologies I use",
          "  now         what I'm working on",
          "  resume      open my resume (PDF)",
          "  contact     how to reach me",
          "  social      links elsewhere",
          "  theme       toggle light/dark",
          "  clear       clear the screen",
          "  exit        back to the homepage",
          "",
        ];
      case "whoami":
        return [
          "Avinash Amudala — Software Engineer @ Nokia, Sunnyvale.",
          "I build AI systems for telecom and experimentation.",
          "Creator of MCP-Telecom: the first Model Context Protocol",
          "server for network equipment (60+ tools, 7 vendors, on PyPI).",
          "",
        ];
      case "projects":
        return [
          ...flagshipProjects.map(
            (p) => `  ${p.title.padEnd(22)} ${p.tagline}`
          ),
          "",
          "Run `open <name>` or visit /projects for case studies.",
          "",
        ];
      case "stack":
        return [
          "Python · TypeScript · C++ · FastAPI · React · Next.js",
          "FAISS · Qdrant · Ollama · MCP SDK · NETCONF · gNMI · SNMP",
          "Kubernetes · Docker · Kafka · GraphQL · PostgreSQL · AWS",
          "",
        ];
      case "now":
        return [
          "→ Shipping MCP-Telecom releases on PyPI",
          "→ Researching proxy metric validation (PROXIMA)",
          "→ Building AI test automation platforms at Nokia",
          "",
        ];
      case "resume":
        window.open("/resumes/avinash-amudala-swe.pdf", "_blank");
        return ["Opening resume…", ""];
      case "contact":
        return [
          `  email     ${personalInfo.email}`,
          "  form      /contact",
          "",
        ];
      case "social":
        return [
          `  github    ${personalInfo.github}`,
          `  linkedin  ${personalInfo.linkedin}`,
          `  pypi      ${personalInfo.pypi}`,
          `  scholar   ${personalInfo.scholar}`,
          "",
        ];
      case "theme": {
        const next = !document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
        return [`Switched to ${next ? "dark" : "light"} mode.`, ""];
      }
      case "clear":
        setHistory([]);
        return [];
      case "exit":
        router.push("/");
        return ["Bye! 👋", ""];
      case "sudo":
      case "sudo su":
      case "sudo rm -rf /":
        return ["Nice try. This network has a safety layer. 🛡️", ""];
      case "ls":
        return ["projects/  writing/  talks/  resume.pdf  secrets.txt", ""];
      case "cat secrets.txt":
        return ["Permission denied. (It's just my coffee order anyway.)", ""];
      case "pip install mcp-telecom":
        return [
          "Collecting mcp-telecom…",
          "Successfully installed mcp-telecom-0.2.0",
          "✓ 60+ tools · 7 vendors · 4 transport protocols",
          "",
        ];
      case "":
        return [];
      default:
        if (cmd.startsWith("open ")) {
          const name = cmd.slice(5).trim();
          const match = flagshipProjects.find((p) =>
            p.title.toLowerCase().includes(name)
          );
          if (match) {
            router.push(`/projects/${match.slug}`);
            return [`Opening ${match.title}…`, ""];
          }
          return [`No project matching "${name}". Try \`projects\`.`, ""];
        }
        return [`command not found: ${cmd}. Type \`help\`.`, ""];
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const command = input;
    const output = run(command);
    if (command.trim().toLowerCase() !== "clear") {
      setHistory((h) => [...h, { command, output }]);
    }
    if (command.trim()) {
      setCommandLog((l) => [...l, command]);
    }
    setLogIndex(-1);
    setInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const next =
        logIndex === -1 ? commandLog.length - 1 : Math.max(0, logIndex - 1);
      if (commandLog[next] !== undefined) {
        setLogIndex(next);
        setInput(commandLog[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (logIndex === -1) return;
      const next = logIndex + 1;
      if (next >= commandLog.length) {
        setLogIndex(-1);
        setInput("");
      } else {
        setLogIndex(next);
        setInput(commandLog[next]);
      }
    }
  };

  return (
    <div
      className="gradient-ring overflow-hidden rounded-xl"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="glass rounded-[11px]">
        <div className="flex items-center gap-1.5 border-b border-[hsl(var(--border))] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-[family-name:var(--font-mono)] text-[11px] text-[hsl(var(--muted))]">
            visitor@avinash-amudala.com ~ interactive
          </span>
        </div>

        <div className="h-[420px] overflow-y-auto p-4 font-[family-name:var(--font-mono)] text-[13px] leading-relaxed">
          {WELCOME.map((line, i) => (
            <p key={`w-${i}`} className="text-[hsl(var(--muted))]">
              {line || " "}
            </p>
          ))}
          {history.map((entry, i) => (
            <div key={i}>
              <p className="text-[hsl(var(--fg))]">
                <span className="mr-2 text-[hsl(var(--accent))]">❯</span>
                {entry.command}
              </p>
              {entry.output.map((line, j) => (
                <p key={j} className="whitespace-pre-wrap text-[hsl(var(--muted))]">
                  {line || " "}
                </p>
              ))}
            </div>
          ))}

          <form onSubmit={onSubmit} className="flex items-center">
            <span className="mr-2 text-[hsl(var(--accent))]">❯</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              autoFocus
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="Terminal input"
              className="w-full bg-transparent text-[hsl(var(--fg))] caret-[hsl(var(--accent))] focus:outline-none"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
