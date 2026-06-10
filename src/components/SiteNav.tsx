"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { OPEN_PALETTE_EVENT } from "./CommandPalette";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Writing", href: "/writing" },
  { name: "Projects", href: "/projects" },
  { name: "Talks", href: "/talks" },
  { name: "Now", href: "/now" },
  { name: "Contact", href: "/contact" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const openPalette = () => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT));

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b shadow-lg shadow-[hsl(var(--accent)/0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 text-sm font-bold tracking-tight text-[hsl(var(--fg))]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] font-[family-name:var(--font-mono)] text-[11px] font-bold text-[hsl(var(--accent-fg))] shadow-[0_0_16px_hsl(var(--accent)/0.4)] transition-shadow group-hover:shadow-[0_0_24px_hsl(var(--accent)/0.6)]">
                AA
              </span>
              <span className="hidden sm:inline transition-colors group-hover:text-[hsl(var(--accent))]">
                Avinash Amudala
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-[hsl(var(--fg))]"
                      : "text-[hsl(var(--muted))] hover:text-[hsl(var(--fg))]"
                  }`}
                >
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-md bg-[hsl(var(--accent)/0.1)] ring-1 ring-[hsl(var(--accent)/0.25)]"
                    />
                  )}
                  <span className="relative">{link.name}</span>
                </Link>
              ))}

              <button
                onClick={openPalette}
                aria-label="Open command palette"
                className="ml-2 inline-flex items-center gap-1.5 rounded-md border border-[hsl(var(--border))] px-2.5 py-1.5 text-xs text-[hsl(var(--muted))] transition-colors hover:border-[hsl(var(--accent)/0.4)] hover:text-[hsl(var(--fg))]"
              >
                <Command size={12} />
                <span className="font-[family-name:var(--font-mono)]">K</span>
              </button>

              <div className="ml-2 border-l border-[hsl(var(--border))] pl-2">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-1">
              <button
                onClick={openPalette}
                aria-label="Open command palette"
                className="p-2 rounded-md text-[hsl(var(--muted))] hover:text-[hsl(var(--fg))] transition-colors"
              >
                <Command size={18} />
              </button>
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-md text-[hsl(var(--muted))] hover:text-[hsl(var(--fg))] hover:bg-[hsl(var(--subtle))] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[hsl(var(--bg)/0.92)] backdrop-blur-xl pt-20"
          >
            <div className="flex flex-col items-center gap-2 p-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-6 py-3 text-lg font-medium rounded-md transition-colors ${
                      isActive(link.href)
                        ? "text-[hsl(var(--accent))]"
                        : "text-[hsl(var(--fg))] hover:text-[hsl(var(--accent))]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
