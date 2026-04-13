import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://avinash-amudala.com"),
  title: {
    default: "Avinash Amudala — AI Systems & Telecom Engineer",
    template: "%s | Avinash Amudala",
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
    "RAG",
    "FAISS",
    "Network Automation",
    "PyPI",
  ],
  authors: [{ name: "Avinash Amudala" }],
  openGraph: {
    title: "Avinash Amudala — AI Systems & Telecom Engineer",
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
        alt: "Avinash Amudala — AI Systems & Telecom Engineer. Creator of MCP-Telecom.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinash Amudala — AI Systems & Telecom Engineer",
    description:
      "Creator of MCP-Telecom: the first MCP server for network equipment. Software Engineer at Nokia.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://avinash-amudala.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="dark">
      <body className="antialiased">
        <div className="noise">
          <SiteNav />
          <main className="min-h-screen pt-16">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
