import { Phone, Clock, Zap, MapPin, Receipt } from "lucide-react";
import { TELEFOON, TELEFOON_RAW } from "@/lib/constants";

const ITEMS = [
  {
    icon: <Phone size={14} strokeWidth={2.5} />,
    label: TELEFOON,
    href: `tel:${TELEFOON_RAW}`,
  },
  {
    icon: <Clock size={14} strokeWidth={2.5} />,
    label: "24/7 Bereikbaar",
  },
  {
    icon: <Zap size={14} strokeWidth={2.5} />,
    label: "Spoedservice",
  },
  {
    icon: <MapPin size={14} strokeWidth={2.5} />,
    label: "Oost-Vlaanderen",
  },
  {
    icon: <Receipt size={14} strokeWidth={2.5} />,
    label: "Transparante tarieven",
  },
];

// Duplicate for seamless loop
const TRACK = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

export default function UrgencyBanner() {
  return (
    <div className="bg-[#f59e0b] py-2 overflow-hidden">
      <div className="flex items-center animate-marquee whitespace-nowrap w-max">
        {TRACK.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            {item.href ? (
              <a
                href={item.href}
                className="inline-flex items-center gap-1.5 text-[#111111] text-sm font-bold px-6 hover:underline"
              >
                {item.icon}
                {item.label}
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[#111111] text-sm font-semibold px-6">
                {item.icon}
                {item.label}
              </span>
            )}
            <span className="text-[#111111]/30 text-xs select-none">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
