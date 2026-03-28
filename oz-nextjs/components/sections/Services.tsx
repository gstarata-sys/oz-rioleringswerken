import {
  Waves, CircleDot, Shovel, Pipette, HardHat, Filter, Droplets, Camera, Phone,
} from "lucide-react";
import { DIENSTEN, TELEFOON_RAW } from "@/lib/constants";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import FadeIn from "@/components/animations/FadeIn";

const ICON_MAP: Record<string, React.ElementType> = {
  Waves, CircleDot, Shovel, Pipette, HardHat, Filter, Droplets, Camera,
};

export default function Services() {
  return (
    <section id="diensten" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[--color-cyan] mb-3">
            Onze diensten
          </span>
          <h2 className="text-3xl md:text-4xl text-[--color-navy] mb-4">
            Alles voor uw rioleringswerk
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Van spoedinterventies tot complete rioleringsprojecten — wij zijn uw specialist in Gent en omgeving.
          </p>
        </FadeIn>

        {/* Cards grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIENSTEN.map((dienst) => {
            const Icon = ICON_MAP[dienst.icon];
            return (
              <StaggerItem key={dienst.id}>
                <div className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-[--color-cyan]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">

                  {/* Icon circle */}
                  <div className="w-12 h-12 bg-[--color-cyan] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {Icon && <Icon size={22} className="text-white" />}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[--color-navy] text-base mb-1">{dienst.titel}</h3>

                  {/* Price */}
                  <p className="text-[--color-amber] font-black text-sm mb-3">{dienst.prijs}</p>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{dienst.beschrijving}</p>

                  {/* Meer info link */}
                  <a
                    href={`tel:${TELEFOON_RAW}`}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-[--color-cyan] hover:text-[--color-cyan-dark] transition-colors"
                  >
                    Meer info →
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Spoed CTA */}
        <FadeIn delay={0.3} className="mt-12 bg-[--color-amber]/10 border border-[--color-amber]/30 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-[--color-navy] text-base">Spoed? Wij komen direct!</p>
            <p className="text-sm text-slate-500 mt-0.5">Gemiddeld binnen 35 minuten ter plaatse in Gent en omgeving.</p>
          </div>
          <a
            href={`tel:${TELEFOON_RAW}`}
            className="flex items-center gap-2 bg-[--color-amber] hover:bg-amber-500 text-white font-black px-5 py-3 rounded-xl transition-colors shadow-sm shrink-0"
          >
            <Phone size={16} strokeWidth={2.5} />
            Bel Nu
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
