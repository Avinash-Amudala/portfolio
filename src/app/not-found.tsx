import Link from "next/link";

export default function NotFound() {
  return (
    <article className="section-gap px-6">
      <div className="mx-auto max-w-[720px] text-center">
        <p className="text-[80px] font-bold text-[hsl(var(--accent))] mb-4 font-[family-name:var(--font-mono)]">
          404
        </p>
        <h1 className="text-[28px] font-bold text-[hsl(var(--fg))] mb-4">
          Page not found
        </h1>
        <p className="text-[hsl(var(--muted))] mb-10">
          This route doesn&apos;t exist. Maybe one of these is what you were looking for:
        </p>
        <nav className="flex flex-col items-center gap-3 text-sm">
          {[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: "Writing", href: "/writing" },
            { label: "Talks", href: "/talks" },
            { label: "About", href: "/about" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[hsl(var(--accent))] hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </article>
  );
}
