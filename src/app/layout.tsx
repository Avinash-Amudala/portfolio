import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Avinash Amudala — AI Systems & Telecom Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinash Amudala · AI Systems & Telecom Engineer",
    description:
      "Creator of MCP-Telecom: the first MCP server for network equipment. Software Engineer at Nokia.",
    images: ["/og-image.png"],
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
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteNav />
        <main id="main" className="min-h-screen pt-16">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
