"use client";

import { useState, useEffect } from "react";
import { X, Phone } from "lucide-react";
import { TELEFOON, TELEFOON_RAW } from "@/lib/constants";

export default function UrgencyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("urgency-closed") !== "1") {
      setVisible(true);
    }
  }, []);

  function close() {
    setVisible(false);
    localStorage.setItem("urgency-closed", "1");
  }

  if (!visible) return null;

  return (
    <div className="bg-[--color-navy-800] text-white text-sm py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold">Dringende herstelling?</span>
          <span className="text-slate-300 hidden sm:inline">Verstopt riool of gebarsten leiding?</span>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${TELEFOON_RAW}`}
            className="flex items-center gap-1.5 bg-[--color-cyan] hover:bg-[--color-cyan-dark] text-white font-semibold text-sm px-3 py-1.5 rounded-md transition-colors"
          >
            <Phone size={14} />
            <span>Bel nu: {TELEFOON}</span>
          </a>
          <button
            onClick={close}
            aria-label="Banner sluiten"
            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
