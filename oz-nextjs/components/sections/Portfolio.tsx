"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

export default function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length
    );
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % PORTFOLIO_ITEMS.length
    );
  }, []);

  return (
    <section id="realisaties" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[--color-cyan] mb-3">
            Ons werk
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[--color-navy] mb-4">
            Recente realisaties
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-base leading-relaxed">
            Een greep uit onze projecten. Klik op een foto voor een groter beeld.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <StaggerItem key={item.id}>
              <button
                onClick={() => open(i)}
                className="group relative w-full rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[--color-cyan] focus:ring-offset-2"
                aria-label={`Bekijk foto: ${item.titel}`}
              >
                <Image
                  src={item.afbeelding}
                  alt={item.titel}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[--color-navy]/0 group-hover:bg-[--color-navy]/50 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn
                    size={32}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[--color-navy]/80 to-transparent p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-semibold text-sm">{item.titel}</p>
                  <p className="text-[--color-cyan] text-xs mt-0.5">{item.categorie}</p>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={close}
            onKeyDown={(e) => {
              if (e.key === "Escape") close();
              if (e.key === "ArrowLeft") prev();
              if (e.key === "ArrowRight") next();
            }}
            tabIndex={-1}
          >
            <button
              onClick={close}
              aria-label="Sluiten"
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Vorige"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors cursor-pointer"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Volgende"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors cursor-pointer"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={PORTFOLIO_ITEMS[lightboxIndex].afbeelding}
                alt={PORTFOLIO_ITEMS[lightboxIndex].titel}
                width={1200}
                height={900}
                className="w-full h-auto object-contain max-h-[80vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-white font-bold">{PORTFOLIO_ITEMS[lightboxIndex].titel}</p>
                <p className="text-[--color-cyan] text-sm">{PORTFOLIO_ITEMS[lightboxIndex].categorie}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
