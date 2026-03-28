"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ChevronDown } from "lucide-react";
import { TELEFOON, TELEFOON_RAW, WHATSAPP_URL } from "@/lib/constants";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&fit=crop&auto=format"
        alt="Rioleringswerken aan het werk"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[--color-navy]/90 via-[--color-navy]/70 to-[--color-navy]/40" />

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
        <div className="max-w-2xl">

          {/* Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[--color-amber] text-[--color-navy] text-xs font-black px-3.5 py-2 rounded-full mb-6"
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
            <span className="text-[--color-cyan]">Altijd beschikbaar.</span>
          </motion.h1>

          {/* Description — separate block, never overlapping H1 */}
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
            {/* Primary: phone */}
            <a
              href={`tel:${TELEFOON_RAW}`}
              className="flex items-center gap-2.5 bg-[--color-amber] hover:bg-amber-500 text-white font-black text-base px-6 py-3.5 rounded-xl transition-colors shadow-lg shadow-amber-500/30"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Phone size={20} strokeWidth={2.5} />
              Bel Nu: {TELEFOON}
            </a>

            {/* Secondary: bekijk diensten */}
            <a
              href="#diensten"
              className="flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-base px-6 py-3.5 rounded-xl border-2 border-white/60 hover:border-white transition-colors"
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
              <span className="text-[--color-amber]">✓</span> Voorrijkosten €49 incl. diagnose
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[--color-amber]">✓</span> 2 jaar garantie
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[--color-amber]">✓</span> Geen verborgen kosten
            </span>
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
