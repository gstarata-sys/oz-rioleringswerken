import { Phone } from "lucide-react";
import { WERKWIJZE_STAPPEN, TELEFOON_RAW } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import CounterStat from "@/components/animations/CounterStat";

export default function Werkwijze() {
  return (
    <section id="werkwijze" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[--color-cyan] mb-3">
            Hoe het werkt
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[--color-navy] mb-4">
            Van aanvraag tot oplevering
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-base leading-relaxed">
            Wij geloven in eenvoud en transparantie. Ons proces is helder van begin tot eind.
          </p>
        </FadeIn>

        {/* Steps */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
          {WERKWIJZE_STAPPEN.map((stap, index) => (
            <StaggerItem key={stap.nummer}>
              <div className="relative flex flex-col items-center text-center">
                {/* Connector line */}
                {index < WERKWIJZE_STAPPEN.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[calc(50%+28px)] right-[-50%] h-px bg-slate-200" />
                )}
                <div className="w-11 h-11 bg-[--color-navy] text-white rounded-full flex items-center justify-center font-mono font-bold text-sm mb-4 relative z-10 shrink-0">
                  {stap.nummer}
                </div>
                <h3 className="font-bold text-[--color-navy] text-sm mb-2">{stap.titel}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{stap.beschrijving}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Counter stats */}
        <div className="bg-[--color-navy] rounded-2xl py-10 px-8">
          <div className="grid grid-cols-3 gap-6 divide-x divide-white/10">
            <CounterStat value={500} suffix="+" label="Projecten afgerond" />
            <CounterStat value={10}  suffix="+" label="Jaar ervaring"      />
            <CounterStat value={100} suffix="%" label="Tevredenheidsgarantie" />
          </div>
          <div className="mt-8 text-center">
            <a
              href={`tel:${TELEFOON_RAW}`}
              className="inline-flex items-center gap-2 bg-[--color-cyan] hover:bg-[--color-cyan-dark] text-white font-bold px-6 py-3.5 rounded-xl transition-colors"
            >
              <Phone size={18} />
              Gratis offerte aanvragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
