import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollProgress from "@/components/ScrollProgress";
import ParticleField from "@/components/ParticleField";
import CommandPalette from "@/components/CommandPalette";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avinash-amudala.com"),
  title: {
    default: "Avinash Amudala · AI Systems & Telecom Engineer",
    template: "%s · Avinash Amudala",
  },
  description:
    "Software Engineer at Nokia building AI systems for telecom. Creator of MCP-Telecom, the first Model Context Protocol server for network equipment. 60+ tools, 7 vendors, on PyPI.",
  keywords: [
    "Avinash Amudala",
    "MCP-Telecom",
    "Model Context Protocol",
    "PROXIMA",
    "Software Engineer",
    "AI Engineer",
    "Nokia",
    "Telecom AI",
    "Network Automation",
    "PyPI",
  ],
  authors: [{ name: "Avinash Amudala" }],
  openGraph: {
    title: "Avinash Amudala · AI Systems & Telecom Engineer",
    description:
      "Creator of MCP-Telecom: the first MCP server for network equipment (60+ tools, 7 vendors, on PyPI). Software Engineer at Nokia.",
    url: "https://avinash-amudala.com",
    siteName: "Avinash Amudala",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinash Amudala · AI Systems & Telecom Engineer",
    description:
      "Creator of MCP-Telecom: the first MCP server for network equipment. Software Engineer at Nokia.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://avinash-amudala.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-[family-name:var(--font-sans)] antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}`,
          }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ParticleField />
        <ScrollProgress />
        <SiteNav />
        <CommandPalette />
        <main id="main" className="min-h-screen pt-16">
          {children}
        </main>
        <BackToTop />
        <SiteFooter />
      </body>
    </html>
  );
}
