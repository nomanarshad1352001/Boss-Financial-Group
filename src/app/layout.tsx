import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuotePopup from "@/components/QuotePopup";
import FloatingCall from "@/components/FloatingCall";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BOSS Financial Group — Tax Consulting, Bookkeeping & Business Brokerage",
    template: "%s | BOSS Financial Group",
  },
  description:
    "BOSS Financial Group delivers tax consulting, bookkeeping, SETC credit recovery and business sale brokerage with white-glove, personalized service. Austin, TX & 16+ countries worldwide.",
  keywords: [
    "tax consulting",
    "bookkeeping",
    "SETC",
    "business sale brokerage",
    "Austin TX financial services",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="bg-ivory text-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <QuotePopup />
        <FloatingCall />
      </body>
    </html>
  );
}
