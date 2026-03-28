import { useRef } from 'react';
import { Droplets, Waves, Search, Flame, Video, Bath, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Droplets,
    title: 'WC of Afvoer Ontstoppen',
    price: 'vanaf €89',
    description: 'Snelle en effectieve ontstopping van uw toilet of afvoer. Geen gedoe, direct resultaat.',
  },
  {
    icon: Waves,
    title: 'Riool Ontstoppen',
    price: 'vanaf €149',
    description: 'Professionele rioolontstopping met garantie. Ook voor hardnekkige verstoppingen.',
  },
  {
    icon: Search,
    title: 'Waterlekkage Opsporen',
    price: 'vanaf €79',
    description: 'Snel lekdetectie met professionele apparatuur. Reparatie direct ter plaatse.',
  },
  {
    icon: Flame,
    title: 'CV-Ketel Service',
    price: 'vanaf €95',
    description: 'Onderhoud en reparatie van alle merken CV-ketels. Gecertificeerde monteurs.',
  },
  {
    icon: Video,
    title: 'Video-inspectie',
    price: 'vanaf €125',
    description: 'Camera-inspectie van leidingen om problemen nauwkeurig te lokaliseren.',
  },
  {
    icon: Bath,
    title: 'Sanitair Installatie',
    price: 'op offerte',
    description: 'Complete installatie van badkamers, keukens en toilet. Van ontwerp tot oplevering.',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="diensten"
      className="relative w-full py-20 lg:py-28 bg-white"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-6">
            ONZE DIENSTEN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Alles voor uw{' '}
            <span className="text-cyan-600">loodgieterswerk</span>
          </h2>
          <p className="text-lg text-navy-600">
            Van lekkage tot complete installatie—geregeld in één bezoek. Onze gecertificeerde vakmensen staan 24/7 voor u klaar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-cyan-300 hover:shadow-[0_12px_40px_rgba(6,182,212,0.15)] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                {service.title}
              </h3>
              <p className="text-amber-600 font-bold text-lg mb-4">
                {service.price}
              </p>
              <p className="text-navy-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <button className="flex items-center gap-2 text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors">
                Meer info
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Emergency CTA */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8 lg:p-10 border border-amber-200">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-2">
                Spoed? Wij komen direct!
              </h3>
              <p className="text-navy-600">
                Gemiddeld binnen 35 minuten bij u ter plaatse. Bel nu voor directe hulp.
              </p>
            </div>
            <a href="tel:0460250756">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-navy-900 font-semibold px-8 py-6 h-auto"
              >
                Bel 04 60 25 07 56
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
