"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Talks", href: "/talks" },
  { name: "Writing", href: "/writing" },
  { name: "Now", href: "/now" },
  { name: "Archive", href: "/archive" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="group flex items-center gap-2 text-lg font-bold tracking-tight font-mono"
            >
              <span className="gradient-text">AA</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                      isActive
                        ? "text-white"
                        : "text-[var(--color-text-secondary)] hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-x-1 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-cyan)]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
              <ThemeToggle />
              <a
                href="/resumes/avinash-amudala-swe.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
              >
                <Download size={14} />
                Resume
              </a>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-surface-light)] transition-all"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass pt-20"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, i) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-xl font-medium transition-colors ${
                        isActive
                          ? "gradient-text"
                          : "text-[var(--color-text-primary)] hover:text-[var(--color-accent)]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <a
                href="/resumes/avinash-amudala-swe.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-blue-600 px-6 py-3 text-sm font-semibold text-white"
              >
                <Download size={14} />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
