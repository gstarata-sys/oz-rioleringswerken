"use client";

import { Phone, Clock, ClipboardList, Wrench, ThumbsUp } from "lucide-react";
import { TELEFOON_RAW } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import CounterStat from "@/components/animations/CounterStat";

const STAPPEN = [
  {
    icon: Phone,
    titel: "U belt, wij komen",
    beschrijving: "Bel ons 24/7. Onze servicedesk staat altijd voor u klaar om uw probleem te registreren.",
  },
  {
    icon: Clock,
    titel: "Snelle aankomst",
    beschrijving: "Gemiddeld binnen 35 minuten bij u ter plaatse. Ook in de avond en in het weekend.",
  },
  {
    icon: ClipboardList,
    titel: "Diagnose & offerte",
    beschrijving: "Duidelijke prijsopgave vooraf. Geen verrassingen, u weet precies wat het kost.",
  },
  {
    icon: Wrench,
    titel: "Vakkundige reparatie",
    beschrijving: "Direct uitgevoerd door onze gecertificeerde vakmensen met professioneel gereedschap.",
  },
  {
    icon: ThumbsUp,
    titel: "Tevreden klant",
    beschrijving: "Garantie op al ons werk. Pas tevreden als u tevreden bent.",
  },
];

export default function Werkwijze() {
  return (
    <section id="werkwijze" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[2px] text-[#00b4d8] mb-3">
            Hoe het werkt
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">
            5 stappen naar{" "}
            <span className="text-[#00b4d8]">een oplossing</span>
          </h2>
          <p className="text-[#4a5568] max-w-[600px] mx-auto text-base leading-relaxed">
            Ons werkproces is transparant en efficiënt — van uw eerste telefoontje tot de definitieve oplossing.
          </p>
        </FadeIn>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
          {STAPPEN.map((stap, index) => {
            const Icon = stap.icon;
            return (
              <FadeIn key={stap.titel} delay={index * 0.1}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Connector line */}
                  {index < STAPPEN.length - 1 && (
                    <div className="hidden md:block absolute top-[30px] left-[calc(50%+30px)] right-[-50%] h-px bg-[#00b4d8]/30" />
                  )}

                  {/* Icon box */}
                  <div className="w-[60px] h-[60px] bg-[#e0f7fa] rounded-2xl flex items-center justify-center mb-4 relative z-10 shrink-0 transition-transform duration-200 hover:scale-110">
                    <Icon size={26} className="text-[#00b4d8]" />
                  </div>

                  <h3 className="font-bold text-[#1a3a5c] text-sm mb-2 leading-snug">{stap.titel}</h3>
                  <p className="text-xs text-[#4a5568] leading-relaxed">{stap.beschrijving}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Stats + CTA banner */}
        <FadeIn delay={0.3}>
          <div className="border border-slate-100 rounded-2xl py-10 px-8"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.05)" }}>
            <div className="grid grid-cols-3 gap-6 divide-x divide-slate-200 mb-8">
              <CounterStat value={35} suffix=" min" label="Gemiddelde responstijd" />
              <CounterStat value={0} suffix="" label="Beschikbaar, ook feestdagen" staticDisplay="24/7" />
              <CounterStat value={100} suffix="%" label="Garantie op al ons werk" />
            </div>
            <div className="text-center">
              <a
                href={`tel:${TELEFOON_RAW}`}
                className="inline-flex items-center gap-2 bg-[#00b4d8] hover:bg-[#0096b8] text-white font-bold px-8 py-3.5 rounded-xl btn-press"
              >
                <Phone size={18} />
                Bel nu voor directe hulp
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
