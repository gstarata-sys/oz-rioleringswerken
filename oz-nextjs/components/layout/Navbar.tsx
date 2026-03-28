"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, AlertCircle, Menu, X } from "lucide-react";
import { TELEFOON, TELEFOON_RAW } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Diensten",    href: "#diensten"   },
  { label: "Werkwijze",   href: "#werkwijze"  },
  { label: "Realisaties", href: "#realisaties"},
  { label: "Over ons",    href: "#over-ons"   },
  { label: "Contact",     href: "#contact"    },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.jpg"
            alt="Oz Rioleringswerken logo"
            width={40}
            height={40}
            className="rounded-lg"
            priority
          />
          <span className="font-bold text-[--color-navy] text-base leading-tight hidden sm:block">
            OZ<br />
            <span className="font-normal text-xs text-slate-500 tracking-wide">Rioleringswerken</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[--color-navy] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTAs — phone always visible */}
        <div className="flex items-center gap-2">
          {/* Spoed button — desktop only */}
          <a
            href={`tel:${TELEFOON_RAW}`}
            className="hidden lg:flex items-center gap-1.5 bg-red-500 hover:bg-red-600 text-white text-sm font-bold px-3 py-2 rounded-lg transition-colors"
            style={{ animation: "pulse-red 2.5s ease infinite" }}
          >
            <AlertCircle size={15} />
            <span>Spoed</span>
          </a>

          {/* Phone button — always visible */}
          <a
            href={`tel:${TELEFOON_RAW}`}
            className="flex items-center gap-1.5 bg-[--color-amber] hover:bg-amber-500 text-white font-black px-3 md:px-4 py-2 rounded-lg transition-colors text-sm md:text-base"
          >
            <Phone size={16} strokeWidth={2.5} />
            <span className="hidden sm:inline">{TELEFOON}</span>
            <span className="sm:hidden">Bellen</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu openen"
            className="lg:hidden p-2 text-slate-600 hover:text-[--color-navy] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-slate-100 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="text-base font-medium text-slate-700 hover:text-[--color-navy] hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 mt-3 pt-3 border-t border-slate-100">
                <a
                  href={`tel:${TELEFOON_RAW}`}
                  className="flex-1 flex items-center justify-center gap-1.5 bg-red-500 text-white text-sm font-bold px-3 py-2.5 rounded-lg"
                  onClick={closeMobile}
                >
                  <AlertCircle size={15} />
                  Spoed
                </a>
                <a
                  href={`tel:${TELEFOON_RAW}`}
                  className="flex-1 flex items-center justify-center gap-1.5 bg-[--color-amber] text-white text-sm font-bold px-3 py-2.5 rounded-lg"
                  onClick={closeMobile}
                >
                  <Phone size={15} />
                  Bellen
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes pulse-red {
          0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.35); }
          50%       { box-shadow: 0 0 0 7px rgba(239, 68, 68, 0); }
        }
      `}</style>
    </header>
  );
}
