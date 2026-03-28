"use client";

import { useRef } from "react";
import { Phone } from "lucide-react";
import { WERKWIJZE_STAPPEN, TELEFOON_RAW } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import CounterStat from "@/components/animations/CounterStat";
import { useGsapStaggerIn } from "@/components/animations/useGsapScrollFade";

export default function Werkwijze() {
  const stepsRef = useRef<HTMLDivElement>(null);
  useGsapStaggerIn(stepsRef, ".gsap-step", 0.12);

  return (
    <section id="werkwijze" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[--color-cyan] mb-3">
            Hoe het werkt
          </span>
          <h2 className="text-3xl md:text-4xl text-[--color-navy] mb-4">
            5 stappen naar een oplossing
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-base leading-relaxed">
            Ons werkproces is transparant en efficiënt — van uw eerste telefoontje tot de definitieve oplossing.
          </p>
        </FadeIn>

        {/* Steps — GSAP stagger */}
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
          {WERKWIJZE_STAPPEN.map((stap, index) => (
            <div key={stap.nummer} className="gsap-step opacity-0">
              <div className="relative flex flex-col items-center text-center">
                {index < WERKWIJZE_STAPPEN.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[calc(50%+28px)] right-[-50%] h-px bg-slate-200" />
                )}
                <div className="w-11 h-11 bg-[--color-navy] text-white rounded-full flex items-center justify-center font-mono font-bold text-sm mb-4 relative z-10 shrink-0">
                  {stap.nummer}
                </div>
                <h3 className="font-bold text-[--color-navy] text-sm mb-2 normal-case">{stap.titel}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{stap.beschrijving}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div className="bg-[--color-navy] rounded-2xl py-10 px-8">
          <div className="grid grid-cols-3 gap-6 divide-x divide-white/10">
            <CounterStat value={35}  suffix=" min" label="Gemiddelde responstijd" />
            <CounterStat value={0}   suffix="" label="24/7 bereikbaar" staticDisplay="24/7" />
            <CounterStat value={100} suffix="%" label="Tevredenheidsgarantie" />
          </div>
          <div className="mt-8 text-center">
            <a
              href={`tel:${TELEFOON_RAW}`}
              className="inline-flex items-center gap-2 bg-[--color-amber] hover:bg-amber-500 hover:scale-105 text-white font-black px-6 py-3.5 rounded-xl transition-all"
            >
              <Phone size={18} />
              Bel ons direct aan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
