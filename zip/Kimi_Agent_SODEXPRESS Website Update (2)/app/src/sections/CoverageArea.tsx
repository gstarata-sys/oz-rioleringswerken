import { useEffect, useRef } from 'react';
import { MapPin, Clock, Phone, ArrowRight, Navigation, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

export default function CoverageArea() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.visual-card',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.region-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.regions-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 bg-[#F6F7FB]"
      style={{ zIndex: 60 }}
    >
      <div ref={contentRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-1.5 bg-cyan-accent/10 text-cyan-dark rounded-full text-sm font-mono tracking-wide mb-4">
            WERKGEBIED
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-6">
            Wij zijn actief in heel Vlaanderen & Brussel
          </h2>
          <p className="text-navy/70 text-lg leading-relaxed">
            Van Gent tot Limburg—waar u ook woont, wij komen naar u toe. Met een gemiddelde
            responstijd van 35 minuten staan we snel bij u op de stoep.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Visual Card - Service Van Illustration */}
          <div className="visual-card relative rounded-3xl overflow-hidden shadow-card bg-gradient-to-br from-navy to-navy-dark p-8 lg:p-12">
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
                <div className="w-16 h-16 rounded-2xl bg-cyan-accent flex items-center justify-center">
                  <Navigation className="w-8 h-8 text-navy-dark" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">SODEXPRESS</h3>
                  <p className="text-white/60">24/7 Spoedservice</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-4 mb-10">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-accent flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-cyan-accent" />
                    <span className="text-white/60 text-sm">Responstijd</span>
                  </div>
                  <p className="font-display font-bold text-3xl text-white">35 min</p>
                  <p className="text-white/50 text-xs">gemiddeld</p>
                </div>
                <div className="p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-cyan-accent" />
                    <span className="text-white/60 text-sm">Dekking</span>
                  </div>
                  <p className="font-display font-bold text-3xl text-white">6</p>
                  <p className="text-white/50 text-xs">provincies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Regions Grid */}
          <div className="regions-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regions.map((region, index) => (
              <div
                key={index}
                className="region-card p-5 rounded-2xl bg-white border border-navy/10 hover:border-cyan-accent/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-semibold text-lg text-navy group-hover:text-cyan-dark transition-colors">
                    {region.name}
                  </h3>
                  <div className="flex items-center gap-1 text-amber-accent">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-mono font-medium">
                      {region.responseTime}
                    </span>
                  </div>
                </div>
                <p className="text-navy/60 text-sm">
                  {region.cities.join(' • ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-8 lg:p-10 rounded-3xl bg-navy relative overflow-hidden">
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
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mb-2">
                Staat uw regio er niet bij?
              </h3>
              <p className="text-white/70">
                Neem contact op—vaak kunnen wij u toch van dienst zijn.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0460250756">
                <Button
                  size="lg"
                  className="bg-cyan-accent text-navy-dark hover:bg-cyan-light font-semibold px-8 py-5 rounded-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Bel 04 60 25 07 56
                </Button>
              </a>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-5 rounded-xl"
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
