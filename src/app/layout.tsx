import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeuralForge — The Trust Layer for AI Agents",
  description: "Verify AI agent decisions with multi-model consensus scoring, domain drift detection, and consent-gated execution. The trust layer that sits between AI agents and the real world.",
  keywords: ["AI verification", "AI trust", "PSZN", "consensus scoring", "AI agents", "NeuralForge", "domain drift", "AI safety"],
  openGraph: {
    title: "NeuralForge — The Trust Layer for AI Agents",
    description: "Multi-model consensus scoring. Domain drift detection. Consent-gated execution. Trust, verified.",
    url: "https://neuralforge.fm",
    siteName: "NeuralForge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuralForge — The Trust Layer for AI Agents",
    description: "Multi-model consensus scoring. Domain drift detection. Consent-gated execution.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="noise-overlay grid-bg antialiased">
        {children}
      </body>
    </html>
  );
}
