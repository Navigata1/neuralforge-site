import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "NeuralForge.fm | The Trust Layer for AI Agents",
  description:
    "Verify AI agent decisions with PSZN consensus, domain drift detection, and consent-gated execution.",
  keywords: [
    "AI verification",
    "AI trust",
    "PSZN",
    "consensus scoring",
    "AI agents",
    "NeuralForge",
    "domain drift",
    "AI safety",
  ],
  openGraph: {
    title: "NeuralForge.fm | The Trust Layer for AI Agents",
    description:
      "Multi-model consensus scoring. Domain drift detection. Consent-gated execution.",
    url: "https://neuralforge.fm",
    siteName: "NeuralForge.fm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuralForge.fm | The Trust Layer for AI Agents",
    description:
      "Multi-model consensus scoring. Domain drift detection. Consent-gated execution.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="antialiased">
        <div className="mesh-bg" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          <div className="blob blob-4" />
        </div>
        {children}
      </body>
    </html>
  );
}
