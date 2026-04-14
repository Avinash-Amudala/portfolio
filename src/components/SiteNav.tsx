"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[hsl(var(--bg)/0.85)] backdrop-blur-md border-b border-[hsl(var(--border))] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-lg font-bold tracking-tight font-[family-name:var(--font-mono)] text-[hsl(var(--fg))] hover:text-[hsl(var(--accent))] transition-colors"
            >
              AA
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(link.href)
                      ? "text-[hsl(var(--fg))]"
                      : "text-[hsl(var(--muted))] hover:text-[hsl(var(--fg))]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="ml-2 border-l border-[hsl(var(--border))] pl-2">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-1">
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
            className="fixed inset-0 z-40 bg-[hsl(var(--bg)/0.95)] backdrop-blur-md pt-20"
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
