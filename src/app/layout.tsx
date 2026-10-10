import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — Sourcing, Contrôle Qualité & Export depuis la Chine`,
  description: siteConfig.baseline,
  keywords: [
    "sourcing Chine",
    "import Chine",
    "contrôle qualité Chine",
    "intermédiation d'affaires",
    "export Chine Afrique",
    "YESI GROUP BUSINESS",
  ],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.baseline,
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-slate-50 font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}