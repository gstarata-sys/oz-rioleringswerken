"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle, Mail, Phone } from "lucide-react";
import { WHATSAPP_URL, EMAIL, TELEFOON_RAW } from "@/lib/constants";

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowBackToTop(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {showBackToTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2"
        >
          {/* WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-11 h-11 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          >
            <MessageCircle size={20} />
          </a>

          {/* Mail */}
          <a
            href={`mailto:${EMAIL}`}
            aria-label="E-mail"
            className="w-11 h-11 bg-[#06b6d4] hover:bg-[#0891b2] text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          >
            <Mail size={20} />
          </a>

          {/* Telefoon */}
          <a
            href={`tel:${TELEFOON_RAW}`}
            aria-label="Bellen"
            className="w-11 h-11 bg-[#0f172a] hover:bg-[#334155] text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          >
            <Phone size={20} />
          </a>

          {/* Ruimte */}
          <div className="h-2" />

          {/* Terug naar boven */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Terug naar boven"
            className="w-11 h-11 bg-[#0f172a] hover:bg-[#334155] text-white rounded-full shadow-lg flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowUp size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
