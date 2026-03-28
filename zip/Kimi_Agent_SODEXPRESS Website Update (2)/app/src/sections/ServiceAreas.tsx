import { useRef } from 'react';
import { MapPin, Clock, Phone, ArrowRight, Navigation, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const regions = [
  {
    name: 'Oost-Vlaanderen',
    cities: ['Gent', 'Aalst', 'Dendermonde', 'Sint-Niklaas'],
    responseTime: '25-35 min',
  },
  {
    name: 'West-Vlaanderen',
    cities: ['Brugge', 'Kortrijk', 'Oostende', 'Roeselare'],
    responseTime: '35-50 min',
  },
  {
    name: 'Antwerpen',
    cities: ['Antwerpen', 'Mechelen', 'Turnhout', 'Lier'],
    responseTime: '30-45 min',
  },
  {
    name: 'Vlaams-Brabant',
    cities: ['Leuven', 'Vilvoorde', 'Halle', 'Diest'],
    responseTime: '35-50 min',
  },
  {
    name: 'Limburg',
    cities: ['Hasselt', 'Genk', 'Sint-Truiden', 'Tongeren'],
    responseTime: '40-55 min',
  },
  {
    name: 'Brussel & Omgeving',
    cities: ['Brussel', 'Sint-Pieters-Leeuw', 'Dilbeek', 'Zaventem'],
    responseTime: '30-45 min',
  },
];

const highlights = [
  '24/7 spoedservice',
  'Gemiddeld 35 minuten ter plaatse',
  'Alle merken CV-ketels',
  'Gecertificeerde vakmensen',
];

export default function ServiceAreas() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 bg-slate-50"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-6">
            WERKGEBIED
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Wij zijn actief in{' '}
            <span className="text-cyan-600">heel Vlaanderen</span>
          </h2>
          <p className="text-lg text-navy-600">
            Van Gent tot Limburg—waar u ook woont, wij komen naar u toe. Met een gemiddelde responstijd van 35 minuten.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Visual Card */}
          <div className="relative rounded-3xl overflow-hidden bg-navy-900 p-8 lg:p-12 shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '30px 30px',
                }}
              />
            </div>

            <div className="relative">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Navigation className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-white">SODEXPRESS</h3>
                  <p className="text-gray-400">24/7 Spoedservice</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-4 mb-10">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-400 text-sm">Responstijd</span>
                  </div>
                  <p className="font-bold text-3xl text-white">35 min</p>
                  <p className="text-gray-500 text-xs">gemiddeld</p>
                </div>
                <div className="p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-400 text-sm">Dekking</span>
                  </div>
                  <p className="font-bold text-3xl text-white">6</p>
                  <p className="text-gray-500 text-xs">provincies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Regions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regions.map((region, index) => (
              <div
                key={index}
                className="p-5 bg-white border border-gray-200 rounded-2xl hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg text-navy-900">
                    {region.name}
                  </h3>
                  <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs font-mono font-medium">
                      {region.responseTime}
                    </span>
                  </div>
                </div>
                <p className="text-navy-500 text-sm">
                  {region.cities.join(' • ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-8 lg:p-10 rounded-3xl bg-navy-900 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-bold text-2xl lg:text-3xl text-white mb-2">
                Staat uw regio er niet bij?
              </h3>
              <p className="text-gray-400">
                Neem contact op—vaak kunnen wij u toch van dienst zijn.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0460250756">
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-5 h-auto"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Bel 04 60 25 07 56
                </Button>
              </a>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-5 h-auto"
              >
                Controleer beschikbaarheid
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
