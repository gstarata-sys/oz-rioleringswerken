"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Waves, Pipette, Flame, ChevronDown, Check } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const CATEGORIEEN = [
  {
    icon: Waves,
    naam: "Rioleringswerken",
    omschrijving: "Onze kernactiviteit — 24/7 spoedservice voor alle rioleringswerken",
    diensten: [
      "Riool ontstoppen",
      "WC & toilet ontstoppen",
      "Afvoer ontstoppen (bad, douche, wastafel)",
      "Rioleringswerken & aanleg",
      "Camera-inspectie riolering",
      "Septische put ledigen & reinigen",
      "Vetafscheider ruimen",
    ],
  },
  {
    icon: Pipette,
    naam: "Loodgieterij & Sanitair",
    omschrijving: "Van lekkages tot complete sanitaire installaties",
    diensten: [
      "Sanitair installatie & renovatie",
      "Leidingen installeren & vervangen",
      "Waterlekkage opsporing",
      "Huisaansluiting riolering",
      "Kraan & toilet reparatie",
    ],
  },
  {
    icon: Flame,
    naam: "Verwarming & Afwerking",
    omschrijving: "Afwerkingswerken en verwarmingsinstallaties",
    diensten: [
      "Vloerverwarming (installatie & herstelling)",
      "Tegels zetten (vloer & wand)",
      "Algemene werken",
    ],
  },
];

export default function Skills() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([0]));

  function toggle(i: number) {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  return (
    <section id="expertise" className="pt-10 md:pt-14 pb-20 md:pb-28 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[2px] text-[#00b4d8] mb-3">
            Onze expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">
            Gebouwd op vakmanschap & ervaring
          </h2>
          <p className="text-[#4a5568] max-w-[600px] mx-auto text-base leading-relaxed">
            Klik op een categorie om alle diensten te bekijken.
          </p>
        </FadeIn>

        <div className="space-y-4">
          {CATEGORIEEN.map((cat, i) => {
            const Icon = cat.icon;
            const isOpen = openIndexes.has(i);
            return (
              <FadeIn key={cat.naam} delay={i * 0.08}>
                <div
                  className="bg-white rounded-[12px] overflow-hidden transition-all duration-300 cursor-pointer"
                  style={{
                    boxShadow: isOpen
                      ? "0 0 0 2px #00b4d8, 0 8px 24px rgba(0,180,216,0.12)"
                      : "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.05)",
                  }}
                  onMouseEnter={e => {
                    if (!isOpen) e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,180,216,0.4), 0 8px 24px rgba(0,180,216,0.1)";
                  }}
                  onMouseLeave={e => {
                    if (!isOpen) e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.05)";
                  }}
                  onClick={() => toggle(i)}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 px-6 py-5 select-none">
                    <div className="w-12 h-12 bg-[#e0f7fa] rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-[#00b4d8]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[#1a3a5c] text-base leading-snug">{cat.naam}</p>
                      <p className="text-sm text-[#4a5568] mt-0.5">{cat.omschrijving}</p>
                    </div>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${isOpen ? "bg-[#00b4d8]" : "bg-slate-100"}`}>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : "text-[#4a5568]"}`}
                      />
                    </div>
                  </div>

                  {/* Dropdown body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                      >
                        <div className="px-6 pb-5 pt-1 border-t border-slate-100">
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-3">
                            {cat.diensten.map((dienst) => (
                              <li key={dienst} className="flex items-center gap-2.5 text-sm text-[#4a5568]">
                                <Check size={14} className="text-[#00b4d8] shrink-0" />
                                {dienst}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
