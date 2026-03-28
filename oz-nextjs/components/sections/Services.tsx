import {
  Waves, CircleDot, Shovel, Pipette, Wrench, Grid2X2, Thermometer, HardHat, PhoneCall,
} from "lucide-react";
import { DIENSTEN } from "@/lib/constants";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import FadeIn from "@/components/animations/FadeIn";

const ICON_MAP: Record<string, React.ElementType> = {
  Waves, CircleDot, Shovel, Pipette, Wrench, Grid2X2, Thermometer, HardHat,
};

export default function Services() {
  return (
    <section id="diensten" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[--color-cyan] mb-3">
            Wat wij doen
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[--color-navy] mb-4">
            Onze diensten
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Van rioleringswerken tot vloerverwarming — wij bieden een volledig pakket voor uw ondergrondse infrastructuur.
          </p>
        </FadeIn>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIENSTEN.map((dienst) => {
            const Icon = ICON_MAP[dienst.icon];
            return (
              <StaggerItem key={dienst.id}>
                <div className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-[--color-cyan]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer h-full flex flex-col">
                  <div className="w-11 h-11 bg-[--color-cyan]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[--color-cyan]/20 transition-colors">
                    {Icon && <Icon size={22} className="text-[--color-cyan]" />}
                  </div>
                  <h3 className="font-bold text-[--color-navy] mb-2">{dienst.titel}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{dienst.beschrijving}</p>
                  <ul className="mt-4 space-y-1.5">
                    {dienst.details.map((d) => (
                      <li key={d} className="text-xs text-slate-400 flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-[--color-cyan] rounded-full shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Spoed CTA */}
        <FadeIn delay={0.3} className="mt-10 text-center">
          <a
            href="tel:+32477531777"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3.5 rounded-xl transition-colors shadow-lg shadow-red-500/25"
          >
            <PhoneCall size={18} />
            Spoedinterventie nodig? Bel nu
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
