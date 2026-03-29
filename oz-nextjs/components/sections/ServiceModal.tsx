"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Phone } from "lucide-react";
import { TELEFOON, TELEFOON_RAW } from "@/lib/constants";

type Dienst = {
  titel: string;
  prijs: string;
  popup: {
    intro: string;
    punten: readonly string[];
    cta: string;
  };
};

type Props = {
  dienst: Dienst | null;
  onClose: () => void;
};

export default function ServiceModal({ dienst, onClose }: Props) {
  return (
    <AnimatePresence>
      {dienst && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sluit knop */}
              <button
                onClick={onClose}
                aria-label="Sluiten"
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Titel + prijs */}
              <h3 className="font-bold text-[#0f172a] text-xl mb-1 normal-case pr-8">{dienst.titel}</h3>
              <p className="text-[#f59e0b] font-black text-sm mb-4">{dienst.prijs}</p>

              {/* Intro tekst */}
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{dienst.popup.intro}</p>

              {/* Punten */}
              <ul className="space-y-2 mb-6">
                {dienst.popup.punten.map((punt) => (
                  <li key={punt} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check size={15} className="text-[#06b6d4] shrink-0 mt-0.5" />
                    {punt}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`tel:${TELEFOON_RAW}`}
                className="flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-amber-500 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md btn-press w-full"
              >
                <Phone size={16} strokeWidth={2.5} />
                {dienst.popup.cta} — {TELEFOON}
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
