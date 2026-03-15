import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avinash Amudala | Full-Stack & AI Engineer",
  description:
    "Full-stack engineer building production AI platforms. Experienced in LLM systems, hybrid search, real-time analytics, and scalable distributed systems.",
  keywords: [
    "Avinash Amudala",
    "Software Engineer",
    "AI Engineer",
    "Full-Stack Developer",
    "Machine Learning",
    "RAG",
    "LLM",
    "Nokia",
    "Portfolio",
  ],
  authors: [{ name: "Avinash Amudala" }],
  openGraph: {
    title: "Avinash Amudala | Full-Stack & AI Engineer",
    description:
      "Full-stack engineer building production AI platforms with LLM systems, hybrid search, and real-time analytics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
