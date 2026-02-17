"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Download, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "@/data/portfolio-data";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: "#",
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
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-4xl">
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
                className="flex items-center gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-all hover:border-[var(--color-accent)]/30 hover:shadow-lg hover:shadow-blue-500/5 group"
              >
                <div className="rounded-lg bg-[var(--color-accent)]/10 p-2.5">
                  <link.icon size={18} className="text-[var(--color-accent)]" />
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
                  className="flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-accent)]/30 hover:text-white"
                >
                  <link.icon size={16} />
                  {link.label}
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Resume Downloads */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Download Resume
              </h3>
              <div className="space-y-3">
                <a
                  href="/resumes/Avinash Resume-software-FTE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg bg-[var(--color-accent)] px-4 py-3 text-sm font-medium text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <span>Full-time Resume</span>
                  <Download size={16} />
                </a>
                <a
                  href="/resumes/Avinash Resume-software-coop.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-light)] px-4 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-all hover:border-[var(--color-accent)]/30 hover:text-white"
                >
                  <span>Co-op/Intern Resume</span>
                  <Download size={16} />
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-xl border border-[var(--color-accent)]/20 bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-accent-purple)]/5 p-6 text-center">
              <p className="mb-3 text-sm text-[var(--color-text-secondary)]">
                Interested in working together?
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Mail size={14} />
                Send an Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
