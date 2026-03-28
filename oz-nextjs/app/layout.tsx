import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import UrgencyBanner   from "@/components/layout/UrgencyBanner";
import Navbar          from "@/components/layout/Navbar";
import Footer          from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import CookieBanner    from "@/components/layout/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Oz Rioleringswerken | 24/7 Spoedservice Gent & Oost-Vlaanderen",
  description:
    "Oz Rioleringswerken — 24/7 spoedservice voor riool ontstoppen, camera-inspectie, septische putten en rioleringswerken in Gent. Gemiddeld binnen 35 min ter plaatse.",
  keywords:
    "riool ontstoppen Gent, rioleringswerken Gent, septische put legen, camera-inspectie riolering, waterlekkage opsporen, spoedservice 24/7 Oost-Vlaanderen",
  openGraph: {
    title: "Oz Rioleringswerken | 24/7 Spoedservice Gent",
    description:
      "Riool verstopt? Binnen 35 minuten ter plaatse. 24/7 bereikbaar, ook in het weekend. €49 voorrijkosten incl. diagnose.",
    locale: "nl_BE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="antialiased">
        <UrgencyBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <CookieBanner />
      </body>
    </html>
  );
}
