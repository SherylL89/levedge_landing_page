import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-display",
});

const ui = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-ui",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Levedge — Leverage AI to create an edge",
  description:
    "Levedge embeds with founders and growing teams to build AI-native engines for growth and operations: founder-led sales, AI SDRs, CRM and pipeline systems, and human-AI workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${ui.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
