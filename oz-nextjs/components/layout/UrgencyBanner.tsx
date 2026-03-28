"use client";

import { Phone } from "lucide-react";
import { TELEFOON, TELEFOON_RAW } from "@/lib/constants";

export default function UrgencyBanner() {
  return (
    <div className="bg-[--color-amber] text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <p className="text-sm font-semibold hidden sm:block">
          🔧 Dringende herstelling? Verstopt riool of gebarsten leiding?
        </p>
        <p className="text-sm font-semibold sm:hidden">
          🔧 Dringende herstelling?
        </p>
        <a
          href={`tel:${TELEFOON_RAW}`}
          className="flex items-center gap-2 bg-white text-[--color-amber] font-black text-base md:text-lg px-4 py-1.5 rounded-lg hover:bg-amber-50 transition-colors shrink-0 tracking-wide"
        >
          <Phone size={18} strokeWidth={2.5} />
          <span>{TELEFOON}</span>
        </a>
      </div>
    </div>
  );
}
