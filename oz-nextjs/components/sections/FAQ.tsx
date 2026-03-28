"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <FadeIn className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#06b6d4] mb-3">
            Vragen
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-4">
            Veelgestelde vragen
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer group"
                >
                  <span className="font-semibold text-[#0f172a] text-sm leading-snug group-hover:text-[#06b6d4] transition-colors">
                    {item.vraag}
                  </span>
                  <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#06b6d4]/10 transition-colors">
                    {openIndex === i ? (
                      <Minus size={14} className="text-[#06b6d4]" />
                    ) : (
                      <Plus size={14} className="text-slate-500" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5">
                        <p className="text-slate-500 text-sm leading-relaxed">{item.antwoord}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
