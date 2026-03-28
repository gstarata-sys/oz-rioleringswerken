"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/constants";

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
    <>
      {/* WhatsApp FAB */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp contact"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20b858] text-white rounded-full shadow-xl flex items-center justify-center transition-colors"
      >
        <WhatsAppIcon size={26} />
      </a>

      {/* Back to top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Terug naar boven"
            className="fixed bottom-24 right-6 z-40 w-11 h-11 bg-[#0f172a] hover:bg-[#334155] text-white rounded-full shadow-lg flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
