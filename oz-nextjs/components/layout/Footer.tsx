import Image from "next/image";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { TELEFOON, TELEFOON_RAW, WHATSAPP_URL, WERKGEBIED_STEDEN } from "@/lib/constants";

const DIENSTEN_FOOTER = [
  "Rioleringswerken",
  "Septische putten",
  "Grond- & graafwerken",
  "Buizen & leidingen",
  "Herstellingen",
  "Tegelwerken",
  "Ondergrondse verwarming",
  "Algemene werken",
];

const NAV_LINKS_FOOTER = [
  { label: "Diensten",    href: "#diensten"   },
  { label: "Werkwijze",   href: "#werkwijze"  },
  { label: "Realisaties", href: "#realisaties"},
  { label: "Tarieven",    href: "#tarieven"   },
  { label: "Over ons",    href: "#over-ons"   },
  { label: "Contact",     href: "#contact"    },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[--color-navy] text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="Oz Rioleringswerken"
                width={44}
                height={44}
                className="rounded-lg brightness-0 invert opacity-90"
              />
              <div>
                <p className="font-bold text-white">OZ Rioleringswerken</p>
                <p className="text-xs text-slate-400">Gent & Oost-Vlaanderen</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Uw specialist voor riolering, septische putten en grondwerken. Vakkundig, betrouwbaar en altijd bereikbaar.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${TELEFOON_RAW}`}
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-[--color-cyan]" />
                {TELEFOON}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <MessageCircle size={14} className="text-[#25D366]" />
                WhatsApp
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin size={14} className="text-[--color-cyan]" />
                Gent & Oost-Vlaanderen
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Clock size={14} className="text-[--color-cyan]" />
                Ma–Za: 07:00–19:00
              </div>
            </div>
          </div>

          {/* Navigatie */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-5">
              Navigatie
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS_FOOTER.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-5">
              Diensten
            </h3>
            <ul className="space-y-2.5">
              {DIENSTEN_FOOTER.map((d) => (
                <li key={d}>
                  <a
                    href="#diensten"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Werkgebied */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-5">
              Werkgebied
            </h3>
            <ul className="space-y-2.5">
              {WERKGEBIED_STEDEN.slice(0, 8).map((stad) => (
                <li key={stad} className="text-sm text-slate-400">
                  {stad}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} OZ Rioleringswerken. Alle rechten voorbehouden.</p>
          <p>Gent, Oost-Vlaanderen — BTW BE0XXX.XXX.XXX</p>
        </div>
      </div>
    </footer>
  );
}
