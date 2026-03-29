import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowLeft } from "lucide-react";
import { REALISATIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Realisaties | Oz Rioleringswerken",
  description: "Een overzicht van onze uitgevoerde werken in Gent en Oost-Vlaanderen.",
};

export default function RealisatiesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Terugknop */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#06b6d4] text-sm font-medium transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Terug naar home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#06b6d4] mb-3">
            Realisaties
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] mb-4">
            Onze uitgevoerde werken
          </h1>
          <p className="text-slate-500 text-base leading-relaxed max-w-xl">
            Een overzicht van onze recente projecten in Gent en omgeving. Van rioleringen tot tegelwerken — vakmanschap in elke klus.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {REALISATIES.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] group"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.10)" }}
            >
              <Image
                src={item.afbeelding}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
                alt={`Realisatie in ${item.locatie}`}
                className="group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              {/* Locatie badge */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                <MapPin size={11} className="shrink-0" />
                {item.locatie}
              </div>
            </div>
          ))}
        </div>

        {/* CTA onderaan */}
        <div className="mt-16 text-center bg-white rounded-2xl p-10 border border-slate-100" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
          <h2 className="text-2xl font-extrabold text-[#0f172a] mb-3">Ook een project laten uitvoeren?</h2>
          <p className="text-slate-500 mb-6 max-w-sm mx-auto">Vraag een gratis offerte aan of bel ons direct voor meer informatie.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-amber-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-amber-500/30 transition-colors"
          >
            Offerte aanvragen →
          </Link>
        </div>
      </div>
    </main>
  );
}
