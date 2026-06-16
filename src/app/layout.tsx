import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "JYOSI Pharmaceuticals | Makers of RNA+ | Premium Healthcare Solutions",
    template: "%s | JYOSI Pharmaceuticals",
  },
  description:
    "JYOSI Pharmaceuticals - A leading pharmaceutical company in Hyderabad, India. Makers of RNA+. 500+ products across 12 therapeutic areas including Cardiology, Diabetology, Neurology, and more.",
  keywords: [
    "JYOSI Pharmaceuticals",
    "RNA+",
    "pharmaceutical company India",
    "Hyderabad pharma",
    "cardiology medicines",
    "diabetology products",
    "anti-infectives",
    "neurology drugs",
  ],
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "JYOSI Pharmaceuticals",
    title: "JYOSI Pharmaceuticals | Makers of RNA+",
    description:
      "Leading pharmaceutical company with 500+ products across 12 therapeutic areas. WHO-GMP certified, ISO 9001:2015 compliant.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JYOSI Pharmaceuticals | Makers of RNA+",
    description: "Leading pharmaceutical company with 500+ products.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-[#0A2540] bg-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
