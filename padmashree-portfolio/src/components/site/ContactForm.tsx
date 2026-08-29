"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error" | "fallback";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  function set(field: keyof typeof values, v: string) {
    setValues((prev) => ({ ...prev, [field]: v }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = "Please add your name.";
    if (!emailRe.test(values.email)) next.email = "Please add a valid email.";
    if (values.message.trim().length < 10)
      next.message = "A sentence or two helps me reply well.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const endpoint = siteConfig.contactFormEndpoint;
    if (endpoint) {
      setStatus("submitting");
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (res.ok) {
          setStatus("success");
          setValues({ name: "", email: "", message: "" });
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
      return;
    }

    if (siteConfig.contactEmail) {
      const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
      const body = encodeURIComponent(
        `${values.message}\n\nFrom: ${values.name} <${values.email}>`,
      );
      window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    setStatus("fallback");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-hairline bg-surface p-6 text-ink"
      >
        <p className="font-display text-lg font-medium">Thank you.</p>
        <p className="mt-2 text-sm text-ink-2">
          Your message is on its way. I will get back to you soon.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-md border bg-surface px-3.5 py-2.5 text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Field id="name" label="Name" error={errors.name}>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={(e) => set("name", e.target.value)}
          aria-invalid={!!errors.name}
          className={cn(inputCls, errors.name ? "border-[var(--color-negative)]" : "border-hairline-strong")}
        />
      </Field>

      <Field id="email" label="Email" error={errors.email}>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(e) => set("email", e.target.value)}
          aria-invalid={!!errors.email}
          className={cn(inputCls, errors.email ? "border-[var(--color-negative)]" : "border-hairline-strong")}
        />
      </Field>

      <Field id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          aria-invalid={!!errors.message}
          className={cn(inputCls, "resize-y", errors.message ? "border-[var(--color-negative)]" : "border-hairline-strong")}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-[0.95rem] font-medium text-on-accent transition-colors hover:bg-accent-deep disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      <p aria-live="polite" className="text-sm">
        {status === "error" ? (
          <span className="text-[var(--color-negative)]">
            Something went wrong. Please reach out on LinkedIn instead.
          </span>
        ) : null}
        {status === "fallback" ? (
          <span className="text-ink-2">
            This form is not wired to an inbox yet. Please reach out on{" "}
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              LinkedIn
            </a>{" "}
            and I will respond.
          </span>
        ) : null}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1 text-xs text-[var(--color-negative)]">{error}</p>
      ) : null}
    </div>
  );
}
