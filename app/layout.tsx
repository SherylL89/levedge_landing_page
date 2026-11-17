import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const ui = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-ui",
});

const mono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
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
    <html lang="en" className={`${ui.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
