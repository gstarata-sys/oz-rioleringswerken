"use client";

import { Check, Phone, Info } from "lucide-react";
import { TARIEVEN, TELEFOON_RAW, VOORRIJKOSTEN } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";

export default function Pricing() {

  return (
    <section id="tarieven" className="py-20 md:py-28 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#06b6d4] mb-3">
            Prijzen
          </span>
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Transparante tarieven
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base leading-relaxed">
            Geen verrassingen. Altijd een duidelijke offerte vóór de start van de werken.
          </p>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {TARIEVEN.map((tarief) => (
            <div key={tarief.naam} className="gsap-card">
              <div
                className={`relative rounded-2xl p-7 h-full flex flex-col transition-all duration-300 ${
                  tarief.featured
                    ? "bg-white md:scale-[1.02]"
                    : "bg-white/5 border border-white/10 hover:bg-white/10 hover-glow-dark"
                }`}
                style={tarief.featured ? {
                  boxShadow: "0 0 0 2px #06b6d4, 0 0 40px rgba(6,182,212,0.25), 0 20px 40px rgba(0,0,0,0.3)"
                } : undefined}
              >
                {tarief.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f59e0b] text-white text-xs font-black px-3 py-1 rounded-full">
                    {tarief.badge}
                  </span>
                )}

                <h3
                  className={`font-extrabold text-xl mb-1 normal-case ${
                    tarief.featured ? "text-[#0f172a]" : "text-white"
                  }`}
                >
                  {tarief.naam}
                </h3>
                <p className={`text-sm mb-6 ${tarief.featured ? "text-slate-500" : "text-slate-400"}`}>
                  {tarief.omschrijving}
                </p>

                <div className={`text-3xl font-black mb-6 ${tarief.featured ? "text-[#f59e0b]" : "text-[#06b6d4]"}`}>
                  {tarief.prijs}
                </div>

                <ul className="space-y-3 flex-1">
                  {tarief.kenmerken.map((k) => (
                    <li key={k} className="flex items-center gap-2.5">
                      <Check
                        size={15}
                        className={`shrink-0 ${tarief.featured ? "text-[#0891b2]" : "text-[#06b6d4]"}`}
                      />
                      <span className={`text-sm ${tarief.featured ? "text-slate-600" : "text-slate-300"}`}>
                        {k}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`tel:${TELEFOON_RAW}`}
                  className={`mt-6 flex items-center justify-center gap-2 font-bold text-sm py-3 rounded-xl btn-press ${
                    tarief.featured
                      ? "bg-[#f59e0b] text-white hover:bg-amber-500"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  <Phone size={15} />
                  Offerte aanvragen
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Voorrijkosten note */}
        <FadeIn delay={0.3} className="mt-8 flex items-center justify-center gap-2 text-slate-400 text-sm">
          <Info size={14} className="text-[#06b6d4] shrink-0" />
          <span>Voorrijkosten {VOORRIJKOSTEN} inclusief diagnose ter plaatse. Materiaalkosten apart. Altijd prijsopgave vooraf.</span>
        </FadeIn>
      </div>
    </section>
  );
}
