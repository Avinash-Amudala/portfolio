"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  PenLine,
  FolderGit2,
  Mic2,
  Clock,
  Mail,
  FileText,
  Github,
  Package,
  GraduationCap,
  SunMoon,
  Copy,
  Search,
  Archive,
  SquareTerminal,
  type LucideIcon,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

interface Command {
  id: string;
  label: string;
  hint?: string;
  section: "Pages" | "Projects" | "Links" | "Actions";
  icon: LucideIcon;
  run: () => void;
}

export const OPEN_PALETTE_EVENT = "open-command-palette";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
    setCopied(false);
  }, []);

  const commands = useMemo<Command[]>(() => {
    const go = (href: string) => () => {
      close();
      router.push(href);
    };
    const ext = (href: string) => () => {
      close();
      window.open(href, "_blank", "noopener,noreferrer");
    };
    return [
      { id: "home", label: "Home", section: "Pages", icon: Home, run: go("/") },
      { id: "about", label: "About", section: "Pages", icon: User, run: go("/about") },
      { id: "writing", label: "Writing", section: "Pages", icon: PenLine, run: go("/writing") },
      { id: "projects", label: "Projects", section: "Pages", icon: FolderGit2, run: go("/projects") },
      { id: "talks", label: "Talks", section: "Pages", icon: Mic2, run: go("/talks") },
      { id: "now", label: "Now", section: "Pages", icon: Clock, run: go("/now") },
      { id: "archive", label: "Archive", section: "Pages", icon: Archive, run: go("/archive") },
      {
        id: "terminal",
        label: "Terminal",
        hint: "Interactive shell",
        section: "Pages",
        icon: SquareTerminal,
        run: go("/terminal"),
      },
      { id: "contact", label: "Contact", section: "Pages", icon: Mail, run: go("/contact") },
      {
        id: "mcp-telecom",
        label: "MCP-Telecom",
        hint: "Case study",
        section: "Projects",
        icon: FolderGit2,
        run: go("/projects/mcp-telecom"),
      },
      {
        id: "proxima",
        label: "PROXIMA",
        hint: "Case study",
        section: "Projects",
        icon: FolderGit2,
        run: go("/projects/proxima"),
      },
      {
        id: "incident-copilot",
        label: "LLM Incident Copilot",
        hint: "Case study",
        section: "Projects",
        icon: FolderGit2,
        run: go("/projects/llm-incident-copilot"),
      },
      {
        id: "github",
        label: "GitHub",
        hint: "github.com/Avinash-Amudala",
        section: "Links",
        icon: Github,
        run: ext(personalInfo.github),
      },
      {
        id: "pypi",
        label: "PyPI · mcp-telecom",
        section: "Links",
        icon: Package,
        run: ext(personalInfo.pypi),
      },
      {
        id: "scholar",
        label: "Google Scholar",
        section: "Links",
        icon: GraduationCap,
        run: ext(personalInfo.scholar),
      },
      {
        id: "resume",
        label: "Resume (PDF)",
        section: "Links",
        icon: FileText,
        run: ext("/resumes/avinash-amudala-swe.pdf"),
      },
      {
        id: "theme",
        label: "Toggle theme",
        hint: "Light / dark",
        section: "Actions",
        icon: SunMoon,
        run: () => {
          const next = !document.documentElement.classList.contains("dark");
          document.documentElement.classList.toggle("dark", next);
          localStorage.setItem("theme", next ? "dark" : "light");
          close();
        },
      },
      {
        id: "email",
        label: "Copy email address",
        hint: personalInfo.email,
        section: "Actions",
        icon: Copy,
        run: () => {
          navigator.clipboard?.writeText(personalInfo.email);
          setCopied(true);
          setTimeout(close, 700);
        },
      },
    ];
  }, [close, router]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.hint?.toLowerCase().includes(q) ||
        c.section.toLowerCase().includes(q)
    );
  }, [commands, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        close();
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
    };
  }, [close]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[activeIndex]?.run();
    }
  };

  let lastSection: string | null = null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[90] flex items-start justify-center bg-[hsl(var(--bg)/0.6)] backdrop-blur-sm px-4 pt-[18vh]"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="glass w-full max-w-[560px] overflow-hidden rounded-2xl shadow-2xl shadow-[hsl(var(--accent)/0.1)]"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={onListKey}
          >
            <div className="flex items-center gap-3 border-b border-[hsl(var(--border))] px-4">
              <Search size={16} className="shrink-0 text-[hsl(var(--muted))]" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                placeholder="Search pages, projects, actions…"
                className="w-full bg-transparent py-4 text-sm text-[hsl(var(--fg))] placeholder:text-[hsl(var(--muted))] focus:outline-none"
              />
              <kbd className="shrink-0 rounded border border-[hsl(var(--border))] bg-[hsl(var(--subtle))] px-1.5 py-0.5 text-[10px] font-[family-name:var(--font-mono)] text-[hsl(var(--muted))]">
                ESC
              </kbd>
            </div>

            <div className="max-h-[320px] overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p className="px-4 py-6 text-center text-sm text-[hsl(var(--muted))]">
                  No results for &ldquo;{query}&rdquo;
                </p>
              )}
              {filtered.map((cmd, i) => {
                const showSection = cmd.section !== lastSection;
                lastSection = cmd.section;
                const Icon = cmd.icon;
                return (
                  <div key={cmd.id}>
                    {showSection && (
                      <p className="px-4 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-widest text-[hsl(var(--muted))]">
                        {cmd.section}
                      </p>
                    )}
                    <button
                      onClick={cmd.run}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                        i === activeIndex
                          ? "bg-[hsl(var(--accent)/0.12)] text-[hsl(var(--fg))]"
                          : "text-[hsl(var(--muted))]"
                      }`}
                    >
                      <Icon
                        size={15}
                        className={
                          i === activeIndex
                            ? "text-[hsl(var(--accent))]"
                            : "text-[hsl(var(--muted))]"
                        }
                      />
                      <span className="flex-1">
                        {cmd.id === "email" && copied ? "Copied!" : cmd.label}
                      </span>
                      {cmd.hint && (
                        <span className="text-xs text-[hsl(var(--muted))]">
                          {cmd.hint}
                        </span>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 border-t border-[hsl(var(--border))] px-4 py-2 text-[10px] text-[hsl(var(--muted))]">
              <span>
                <kbd className="font-[family-name:var(--font-mono)]">↑↓</kbd> navigate
              </span>
              <span>
                <kbd className="font-[family-name:var(--font-mono)]">↵</kbd> select
              </span>
              <span>
                <kbd className="font-[family-name:var(--font-mono)]">esc</kbd> close
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
