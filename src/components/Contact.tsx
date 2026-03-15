"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Download, ArrowUpRight, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "@/data/portfolio-data";
import { Spotlight } from "@/components/ui/spotlight";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#3b82f6",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: "#06b6d4",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: "#",
    color: "#8b5cf6",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: personalInfo.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: personalInfo.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-[var(--color-accent)] opacity-[0.03] blur-[120px]" />

      <div className="mx-auto max-w-4xl relative">
        <SectionHeading
          title="Get In Touch"
          subtitle="Open to opportunities, collaborations, and interesting conversations"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 glass-card rounded-xl p-4 group"
              >
                <div
                  className="rounded-xl p-2.5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${link.color}15` }}
                >
                  <link.icon size={18} style={{ color: link.color }} />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    {link.label}
                  </p>
                  <p className="text-sm font-medium text-white group-hover:text-[var(--color-accent)] transition-colors">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 glass-card rounded-xl px-4 py-3 text-sm text-[var(--color-text-secondary)] group"
                >
                  <link.icon size={16} className="group-hover:text-white transition-colors" />
                  <span className="group-hover:text-white transition-colors">{link.label}</span>
                  <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Resume Downloads & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 relative overflow-hidden">
              <Spotlight size={300} className="from-blue-500/15 via-transparent to-transparent" />
              <h3 className="mb-4 text-lg font-bold text-white flex items-center gap-2">
                <Download size={18} className="text-[var(--color-accent)]" />
                Download Resume
              </h3>
              <div className="space-y-3">
                <a
                  href="/resumes/Avinash Resume-software-FTE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 group"
                >
                  <span>Software Engineer Resume</span>
                  <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-[var(--color-accent)]/20 bg-gradient-to-br from-[var(--color-accent)]/5 via-[var(--color-accent-purple)]/5 to-[var(--color-accent-cyan)]/5 p-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/5 to-[var(--color-accent-purple)]/5 animate-shimmer" />
              <div className="relative">
                <p className="mb-2 text-lg font-bold text-white">
                  Interested in working together?
                </p>
                <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
                  Let&apos;s build something amazing
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-purple)] px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 group"
                >
                  <Send size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  Send an Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
