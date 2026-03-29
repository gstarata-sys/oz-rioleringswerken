"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { FORMSPREE_ID } from "@/lib/constants";

const DIENSTEN_OPTIES = [
  { value: "rioleringswerken",  label: "Rioleringswerken"    },
  { value: "septische-put",     label: "Septische putten"    },
  { value: "grondwerken",       label: "Grond- & graafwerken"},
  { value: "buizen-leidingen",  label: "Buizen & leidingen"  },
  { value: "herstellingen",     label: "Herstellingen"       },
  { value: "tegelwerken",       label: "Tegelwerken"         },
  { value: "vloerverwarming",   label: "Vloerverwarming"     },
  { value: "algemene-werken",   label: "Algemene werken"     },
  { value: "spoed",             label: "Spoedinterventie"    },
  { value: "andere",            label: "Andere"              },
];

const PLANNING_OPTIES = [
  { value: "zo-snel-mogelijk", label: "Zo snel mogelijk" },
  { value: "deze-week",        label: "Deze week"        },
  { value: "deze-maand",       label: "Deze maand"       },
  { value: "specifieke-datum", label: "Specifieke datum" },
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [naam, setNaam]           = useState("");
  const [telefoon, setTelefoon]   = useState("");
  const [email, setEmail]         = useState("");
  const [bericht, setBericht]     = useState("");
  const [diensten, setDiensten]   = useState<string[]>([]);
  const [planning, setPlanning]   = useState("");
  const [datum, setDatum]         = useState("");
  const [status, setStatus]       = useState<Status>("idle");
  const [dienstError, setDienstError] = useState(false);

  function toggleDienst(value: string) {
    setDiensten((prev) =>
      prev.includes(value) ? prev.filter((d) => d !== value) : [...prev, value]
    );
    setDienstError(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (diensten.length === 0) {
      setDienstError(true);
      return;
    }
    setStatus("sending");
    try {
      const payload: Record<string, unknown> = {
        naam, telefoon, email, bericht, diensten, planning,
      };
      if (planning === "specifieke-datum" && datum) {
        payload.datum = datum;
      }
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-16 gap-4"
      >
        <CheckCircle size={52} className="text-green-500" />
        <h3 className="text-xl font-bold text-[#0f172a]">Aanvraag verstuurd!</h3>
        <p className="text-slate-500 max-w-sm">
          Bedankt! Wij nemen zo snel mogelijk contact met u op.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Naam + Telefoon */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="naam" className="block text-xs font-semibold text-[#0f172a] mb-1.5 uppercase tracking-wide">
            Naam <span className="text-red-500">*</span>
          </label>
          <input
            id="naam"
            type="text"
            required
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
            placeholder="Uw naam"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0f172a] placeholder:text-slate-300 focus:outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="telefoon" className="block text-xs font-semibold text-[#0f172a] mb-1.5 uppercase tracking-wide">
            Telefoon <span className="text-red-500">*</span>
          </label>
          <input
            id="telefoon"
            type="tel"
            required
            value={telefoon}
            onChange={(e) => setTelefoon(e.target.value)}
            placeholder="+32 ..."
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0f172a] placeholder:text-slate-300 focus:outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 transition-colors"
          />
        </div>
      </div>

      {/* E-mail */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-[#0f172a] mb-1.5 uppercase tracking-wide">
          E-mailadres
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="uw@email.be"
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0f172a] placeholder:text-slate-300 focus:outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 transition-colors"
        />
      </div>

      {/* Diensten checkboxes */}
      <div>
        <p className="text-xs font-semibold text-[#0f172a] mb-2 uppercase tracking-wide">
          Gewenste dienst(en) <span className="text-red-500">*</span>
        </p>
        <div
          className={`grid grid-cols-2 gap-2 p-3 rounded-xl transition-colors ${
            dienstError ? "ring-2 ring-red-400 bg-red-50" : "bg-slate-50"
          }`}
        >
          {DIENSTEN_OPTIES.map((opt) => {
            const checked = diensten.includes(opt.value);
            return (
              <label
                key={opt.value}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg border text-sm cursor-pointer transition-all select-none ${
                  checked
                    ? "border-[#06b6d4] bg-[#06b6d4]/10 text-[#0f172a] font-semibold"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#06b6d4]/50"
                }`}
              >
                <input
                  type="checkbox"
                  value={opt.value}
                  checked={checked}
                  onChange={() => toggleDienst(opt.value)}
                  className="sr-only"
                />
                <span
                  className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                    checked ? "bg-[#06b6d4] border-[#06b6d4]" : "border-slate-300 bg-white"
                  }`}
                >
                  {checked && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                {opt.label}
              </label>
            );
          })}
        </div>
        <AnimatePresence>
          {dienstError && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xs text-red-500 mt-1.5 flex items-center gap-1"
            >
              <AlertCircle size={12} /> Selecteer minstens één dienst.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Planning */}
      <div>
        <p className="text-xs font-semibold text-[#0f172a] mb-2 uppercase tracking-wide">
          Wanneer wenst u de werken?
        </p>
        <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl">
          {PLANNING_OPTIES.map((opt) => {
            const selected = planning === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setPlanning(opt.value)}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg border text-sm cursor-pointer transition-all select-none text-left ${
                  selected
                    ? "border-[#06b6d4] bg-[#06b6d4]/10 text-[#0f172a] font-semibold"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#06b6d4]/50"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    selected ? "bg-[#06b6d4] border-[#06b6d4]" : "border-slate-300 bg-white"
                  }`}
                >
                  {selected && <span className="w-2 h-2 rounded-full bg-white block" />}
                </span>
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Datum picker */}
        <AnimatePresence>
          {planning === "specifieke-datum" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mt-3">
                <label htmlFor="datum" className="block text-xs font-semibold text-[#0f172a] mb-1.5 uppercase tracking-wide">
                  Gewenste datum
                </label>
                <input
                  id="datum"
                  type="date"
                  value={datum}
                  onChange={(e) => setDatum(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0f172a] focus:outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 transition-colors"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bericht */}
      <div>
        <label htmlFor="bericht" className="block text-xs font-semibold text-[#0f172a] mb-1.5 uppercase tracking-wide">
          Uw bericht
        </label>
        <textarea
          id="bericht"
          rows={4}
          value={bericht}
          onChange={(e) => setBericht(e.target.value)}
          placeholder="Beschrijf kort de situatie of uw vraag..."
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0f172a] placeholder:text-slate-300 focus:outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 bg-[#06b6d4] hover:bg-[#0891b2] disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-colors cursor-pointer"
      >
        {status === "sending" ? (
          <>
            <Loader size={18} className="animate-spin" />
            Versturen…
          </>
        ) : (
          <>
            <Send size={18} />
            Offerte aanvragen
          </>
        )}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-500">
          Er ging iets mis. Bel ons direct of probeer opnieuw.
        </p>
      )}
    </form>
  );
}
