"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ChevronDown, Star, Award } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { TELEFOON, TELEFOON_RAW, WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&fit=crop&auto=format"
        alt="Vakman aan het werk"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[--color-navy]/88 via-[--color-navy]/65 to-[--color-navy]/35" />

      {/* Cyan diagonal band */}
      <motion.div
        initial={{ x: "-70vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(160deg, rgba(6,182,212,0.55) 0%, rgba(8,145,178,0.35) 60%, transparent 100%)",
          clipPath: "polygon(0 0, 72% 0, 55% 100%, 0 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3.5 py-2 rounded-full border border-white/20 mb-6"
            >
              <Star size={13} className="text-amber-400 fill-amber-400" />
              500+ tevreden klanten in Gent & Oost-Vlaanderen
            </motion.div>

            <motion.h1
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-wide uppercase mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Vakkundig.<br />
              Betrouwbaar.<br />
              <span className="text-[--color-amber]">Altijd bereikbaar.</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Specialist in rioleringswerken, septische putten en grondwerken in Gent en omgeving. Snel, vakkundig en met 2 jaar garantie.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={`tel:${TELEFOON_RAW}`}
                className="flex items-center gap-2 bg-[--color-amber] hover:bg-amber-500 text-white font-black text-lg px-6 py-3.5 rounded-xl transition-colors shadow-lg shadow-amber-500/30 tracking-wide"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Phone size={20} strokeWidth={2.5} />
                {TELEFOON}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-6 py-3.5 rounded-xl border border-white/25 transition-colors"
              >
                <WhatsAppIcon size={18} />
                WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Hero card */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block"
          >
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Review badge */}
              <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-[--color-navy] text-xs">5.0</span>
                <span className="text-slate-400 text-xs">Google</span>
              </div>

              {/* Photo */}
              <div className="relative aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&fit=crop&crop=center&auto=format"
                  alt="Vakman rioleringswerken aan het werk"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>

              {/* Exp badge */}
              <div className="absolute bottom-3.5 left-3.5 z-10 flex items-center gap-2 bg-[--color-navy]/90 backdrop-blur-sm text-white px-3.5 py-2.5 rounded-xl">
                <Award size={18} className="text-[--color-cyan]" />
                <div>
                  <p className="font-extrabold text-sm leading-none">10+</p>
                  <p className="text-xs text-slate-300 mt-0.5">Jaar ervaring</p>
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
