"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localStorage.getItem("cookie-accepted") !== "1") {
        setVisible(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  function accept() {
    localStorage.setItem("cookie-accepted", "1");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2.5rem)] max-w-lg bg-[#0f172a] text-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-4"
        >
          <Cookie size={22} className="shrink-0 text-[#f59e0b]" />
          <p className="text-sm text-slate-300 flex-1">
            Wij gebruiken cookies voor een betere ervaring.{" "}
            <span className="text-white">Meer info in ons privacybeleid.</span>
          </p>
          <button
            onClick={accept}
            className="shrink-0 bg-[#06b6d4] hover:bg-[#0891b2] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Accepteren
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
