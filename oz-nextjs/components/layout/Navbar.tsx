"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { TELEFOON, TELEFOON_RAW } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Diensten",   href: "#diensten"  },
  { label: "Tarieven",   href: "#tarieven"  },
  { label: "Werkgebied", href: "#werkgebied"},
  { label: "Contact",    href: "#contact"   },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <span className="font-black text-xl text-[--color-navy]">Oz</span>
          <span className="font-bold text-xl text-[--color-cyan]">Rioleringswerken</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8">
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

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${TELEFOON_RAW}`}
            className="flex items-center gap-2 bg-[--color-amber] hover:bg-amber-500 text-white font-black px-5 py-2.5 rounded-xl transition-colors shadow-sm"
          >
            <Phone size={16} strokeWidth={2.5} />
            <span>Bel Nu: {TELEFOON}</span>
          </a>
        </div>

        {/* Mobile: phone + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={`tel:${TELEFOON_RAW}`}
            className="flex items-center gap-1.5 bg-[--color-amber] hover:bg-amber-500 text-white font-black text-sm px-3 py-2 rounded-lg transition-colors"
          >
            <Phone size={15} strokeWidth={2.5} />
            <span className="hidden sm:inline">{TELEFOON}</span>
            <span className="sm:hidden">Bellen</span>
          </a>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu openen"
            className="p-2 text-slate-600 hover:text-[--color-navy] transition-colors cursor-pointer"
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
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-slate-700 hover:text-[--color-navy] hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
