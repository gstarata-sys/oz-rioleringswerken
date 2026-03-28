"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ChevronDown, Star } from "lucide-react";
import { TELEFOON, TELEFOON_RAW } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&fit=crop&auto=format"
        alt="Loodgieter aan het werk onder aanrecht"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-[#0f172a]/40" />

      {/* Cyan diagonal band */}
      <motion.div
        initial={{ x: "-70vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(160deg, rgba(6,182,212,0.50) 0%, rgba(8,145,178,0.30) 60%, transparent 100%)",
          clipPath: "polygon(0 0, 65% 0, 48% 100%, 0 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* Left: text */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#f59e0b] text-[#111111] text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/30 mb-6"
            >
              ⏱ 24/7 Spoedservice
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[2.6rem] sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-wide uppercase mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Snel.<br />
              Professioneel.<br />
              <span className="text-[#06b6d4]">Altijd beschikbaar.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-slate-200 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Professionele rioleringswerken 24/7 klaar voor al uw spoedreparaties
              in Gent en omgeving. Gemiddeld binnen 35 minuten bij u.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={`tel:${TELEFOON_RAW}`}
                className="flex items-center gap-2.5 bg-[#f59e0b] hover:bg-amber-500 text-white font-semibold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/30 btn-press"
              >
                <Phone size={20} strokeWidth={2.5} />
                Bel Nu: {TELEFOON}
              </a>

              <a
                href="#diensten"
                className="flex items-center gap-2 bg-transparent hover:bg-white/10 hover:scale-105 text-white font-bold text-base px-6 py-3.5 rounded-xl border-2 border-white/60 hover:border-white transition-all"
              >
                Bekijk diensten →
              </a>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-wrap items-center gap-5 mt-10 text-white/70 text-sm"
            >
              <span className="flex items-center gap-1.5">
                <span className="text-[#f59e0b]">✓</span> Voorrijkosten €49 incl. diagnose
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#f59e0b]">✓</span> 2 jaar garantie
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#f59e0b]">✓</span> Geen verborgen kosten
              </span>
            </motion.div>
          </div>

          {/* Right: image card */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ width: "340px", height: "400px" }}>
            <Image
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80&fit=crop"
              alt="Vakkundige loodgieter aan het werk"
              fill
              className="object-cover"
              sizes="340px"
            />
            {/* Google reviews badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#f59e0b] fill-[#f59e0b]" />
                ))}
              </div>
              <div>
                <span className="font-bold text-[#0f172a] text-sm">4.6/5</span>
                <span className="text-[#4a5568] text-xs ml-1">· 291 Google reviews</span>
              </div>
            </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#diensten"
        aria-label="Scroll naar diensten"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2, duration: 0.5 }, y: { repeat: Infinity, duration: 1.8 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
