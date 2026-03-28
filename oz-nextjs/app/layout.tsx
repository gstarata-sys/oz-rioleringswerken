import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import UrgencyBanner   from "@/components/layout/UrgencyBanner";
import Navbar          from "@/components/layout/Navbar";
import Footer          from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import CookieBanner    from "@/components/layout/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Oz Rioleringswerken | Rioleringen & Grondwerken Gent",
  description:
    "Oz Rioleringswerken — uw specialist voor riolering, septische putten, grondwerken en ondergrondse verwarming in Gent en Oost-Vlaanderen. Vraag gratis een offerte aan.",
  keywords:
    "rioleringswerken Gent, septische put Oost-Vlaanderen, grondwerken Gent, leidingen aanleggen, vloerverwarming Gent, tegelwerken, riool herstellen",
  openGraph: {
    title: "Oz Rioleringswerken | Specialist in Gent & Oost-Vlaanderen",
    description:
      "Vakkundige rioleringswerken, septische putten, grondwerken en meer. Snel, betrouwbaar, met 2 jaar garantie.",
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
    <html lang="nl" className={`${inter.variable} ${ibmPlexMono.variable}`}>
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
