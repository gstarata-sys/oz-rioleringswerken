import Image from "next/image";
import { Award, Users, MapPin } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const STATS = [
  { icon: Award,  waarde: "10+",  label: "Jaar ervaring"     },
  { icon: Users,  waarde: "500+", label: "Tevreden klanten"  },
  { icon: MapPin, waarde: "2j",   label: "Garantie op werken"},
];

export default function AboutUs() {
  return (
    <section id="over-ons" className="py-20 md:py-28 bg-[--color-navy]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <FadeIn direction="left">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[--color-cyan] mb-3">
              Over ons
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Meer dan 10 jaar<br />vakmanschap
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-5">
              Oz Rioleringswerken is een betrouwbaar familiebedrijf actief in Gent en gans Oost-Vlaanderen. Met meer dan een decennium ervaring in rioleringswerken, grondwerken en aanverwante diensten, staan wij garant voor kwaliteit en eerlijkheid.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Elke klant verdient een eerlijke prijsopgave, een nette uitvoering en opvolging achteraf. Dat is onze belofte — en waarom onze klanten ons steeds opnieuw aanbevelen.
            </p>

            <div className="grid grid-cols-3 gap-5">
              {STATS.map(({ icon: Icon, waarde, label }) => (
                <div key={label} className="text-center bg-white/5 rounded-xl p-4">
                  <Icon size={20} className="text-[--color-cyan] mx-auto mb-2" />
                  <div className="text-2xl font-extrabold text-white">{waarde}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Photo */}
          <FadeIn direction="right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80&fit=crop&auto=format"
                alt="Team van Oz Rioleringswerken aan het werk"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[--color-navy]/60 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
