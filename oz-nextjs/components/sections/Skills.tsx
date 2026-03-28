"use client";

import { useEffect, useRef, useState } from "react";
import { Waves, Camera, Droplets, Shovel, CircleDot, Pipette } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const SKILLS = [
  { icon: Waves,    naam: "Riool & Afvoer Ontstopping",        pct: 98 },
  { icon: Camera,   naam: "Camera-inspectie & Diagnose",        pct: 95 },
  { icon: Droplets, naam: "Waterlekkage Opsporing",             pct: 92 },
  { icon: Shovel,   naam: "Rioleringswerken & Aanleg",          pct: 90 },
  { icon: CircleDot,naam: "Septische Putten & Vetafscheiders",  pct: 88 },
  { icon: Pipette,  naam: "Sanitair & Huisaansluitingen",       pct: 85 },
];

function SkillCard({ icon: Icon, naam, pct }: { icon: React.ElementType; naam: string; pct: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay so CSS transition plays visibly
          setTimeout(() => setWidth(pct), 100);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div
      ref={ref}
      className="bg-white rounded-[12px] p-6 flex items-start gap-4 transition-all duration-300 cursor-default"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.05)" }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 0 4px rgba(0,180,216,0.25), 0 8px 30px rgba(0,180,216,0.2)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.05)")}
    >
      {/* Icon */}
      <div className="w-11 h-11 bg-[#e0f7fa] rounded-xl flex items-center justify-center shrink-0">
        <Icon size={22} className="text-[#00b4d8]" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-[#1a3a5c] text-sm leading-snug">{naam}</span>
          <span className="text-[#00b4d8] font-bold text-sm ml-3 shrink-0">{pct}%</span>
        </div>
        {/* Progress bar */}
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#00b4d8] rounded-full skill-bar"
            style={{ width: `${width}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[2px] text-[#00b4d8] mb-3">
            Onze expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">
            Gebouwd op vakmanschap & ervaring
          </h2>
          <p className="text-[#4a5568] max-w-[600px] mx-auto text-base leading-relaxed">
            Onze skills zijn uw zekerheid. Van diagnose tot perfecte uitvoering.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILLS.map((skill, i) => (
            <FadeIn key={skill.naam} delay={i * 0.08}>
              <SkillCard {...skill} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
