import { Zap, Receipt, ShieldCheck, Clock } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const ITEMS = [
  {
    icon: Zap,
    titel: "35 min gemiddelde responstijd",
    beschrijving: "Snelste service in Gent en omgeving — dag en nacht",
  },
  {
    icon: Clock,
    titel: "24/7 bereikbaar",
    beschrijving: "Ook 's nachts, in het weekend en op feestdagen beschikbaar",
  },
  {
    icon: Receipt,
    titel: "Vaste prijzen, geen verrassingen",
    beschrijving: "€49 voorrijkosten incl. diagnose — altijd offerte vooraf",
  },
  {
    icon: ShieldCheck,
    titel: "2 jaar garantie",
    beschrijving: "Op alle uitgevoerde werken, zonder discussie",
  },
];

export default function USP() {
  return (
    <section className="bg-[#0f172a] pt-2 pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn className="text-center mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#06b6d4] mb-3">
            Waarom Oz?
          </span>
          <h2 className="text-2xl md:text-3xl text-white">
            Waarom klanten ons kiezen
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map(({ icon: Icon, titel, beschrijving }) => (
            <StaggerItem key={titel}>
              <div className="flex flex-col items-start gap-3 bg-white/5 hover:bg-white/10 rounded-2xl px-5 py-5 h-full hover-glow-dark">
                <div className="w-11 h-11 bg-[#06b6d4]/15 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-[#06b6d4]" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm leading-snug mb-1">{titel}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{beschrijving}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
