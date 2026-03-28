"use client";

import {
  Waves, CircleDot, Shovel, Pipette, HardHat, Filter, Droplets, Camera, Phone,
} from "lucide-react";
import { DIENSTEN, TELEFOON_RAW } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";

const ICON_MAP: Record<string, React.ElementType> = {
  Waves, CircleDot, Shovel, Pipette, HardHat, Filter, Droplets, Camera,
};

export default function Services() {

  return (
    <section id="diensten" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#06b6d4] mb-3">
            Onze diensten
          </span>
          <h2 className="text-3xl md:text-4xl text-[#0f172a] mb-4">
            Alles voor uw rioleringswerk
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Van spoedinterventies tot complete rioleringsprojecten — wij zijn uw specialist in Gent en omgeving.
          </p>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIENSTEN.map((dienst) => {
            const Icon = ICON_MAP[dienst.icon];
            return (
              <div key={dienst.id} className="gsap-card">
                <div className="group bg-white rounded-[12px] p-6 border-2 border-transparent hover:border-[#00b4d8] hover:-translate-y-1 h-full flex flex-col cursor-pointer transition-all duration-300"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.05)" }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 0 4px rgba(0,180,216,0.25), 0 8px 30px rgba(0,180,216,0.2)")}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.05)")}
                >

                  {/* Icon circle */}
                  <div className="w-12 h-12 bg-[#06b6d4] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {Icon && <Icon size={22} className="text-white" />}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[#0f172a] text-base mb-1 normal-case">{dienst.titel}</h3>

                  {/* Price */}
                  <p className="text-[#f59e0b] font-black text-sm mb-3">{dienst.prijs}</p>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{dienst.beschrijving}</p>

                  {/* Meer info link */}
                  <a
                    href={`tel:${TELEFOON_RAW}`}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-[#06b6d4] hover:text-[#0891b2] transition-colors"
                  >
                    Meer info →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Spoed CTA */}
        <FadeIn delay={0.3} className="mt-12 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-[#0f172a] text-base">Spoed? Wij komen direct!</p>
            <p className="text-sm text-slate-500 mt-0.5">Gemiddeld binnen 35 minuten ter plaatse in Gent en omgeving.</p>
          </div>
          <a
            href={`tel:${TELEFOON_RAW}`}
            className="flex items-center gap-2 bg-[#f59e0b] hover:bg-amber-500 text-white font-black px-5 py-3 rounded-xl shadow-sm shrink-0 btn-press"
          >
            <Phone size={16} strokeWidth={2.5} />
            Bel Nu
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
