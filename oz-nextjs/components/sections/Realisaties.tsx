import Image from "next/image";
import { MapPin } from "lucide-react";
import { REALISATIES } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";

const TRACK = [...REALISATIES, ...REALISATIES, ...REALISATIES];

export default function Realisaties() {
  return (
    <section id="realisaties" className="py-20 md:py-28 bg-white overflow-hidden">
      {/* Header */}
      <FadeIn className="max-w-7xl mx-auto px-5 md:px-8 mb-10 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#06b6d4] mb-3">
          Realisaties
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-3">
          Onze uitgevoerde werken
        </h2>
        <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
          Een greep uit onze recente projecten in Gent en omgeving.
        </p>
      </FadeIn>

      {/* Infinite scroll strip */}
      <div className="overflow-hidden">
        <div className="flex gap-4 animate-marquee-realisaties w-max">
          {TRACK.map((item, i) => (
            <div
              key={i}
              className="relative w-72 h-52 rounded-2xl overflow-hidden shrink-0"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.10)" }}
            >
              <Image
                src={item.afbeelding}
                fill
                sizes="288px"
                style={{ objectFit: "cover" }}
                alt={`Realisatie in ${item.locatie}`}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              {/* Locatie badge */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                <MapPin size={11} className="shrink-0" />
                {item.locatie}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Link naar volledige pagina */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 mt-8 text-center">
        <a
          href="/realisaties"
          className="inline-flex items-center gap-2 text-[#06b6d4] font-semibold text-sm hover:text-[#0891b2] transition-colors"
        >
          Bekijk alle realisaties →
        </a>
      </div>
    </section>
  );
}
