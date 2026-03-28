import { useEffect, useRef } from 'react';
import { Shield, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '15+', label: 'Jaar ervaring', icon: Award },
  { value: '245+', label: 'Tevreden klanten', icon: Users },
  { value: '100%', label: 'Gecertificeerd', icon: Shield },
];

const values = [
  'Snelle responstijd—gemiddeld 35 minuten',
  'Transparante prijzen—geen verrassingen',
  'Gecertificeerde vakmensen',
  'Garantie op al ons werk',
  '24/7 beschikbaarheid',
  'Milieuverantwoord werken',
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-image',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.about-content',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.value-item',
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.values-list',
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
      style={{ zIndex: 80 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="about-content order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 bg-cyan-accent/10 text-cyan-dark rounded-full text-sm font-mono tracking-wide mb-4">
              OVER ONS
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy leading-tight mb-6">
              Een team van ervaren vakmensen
            </h2>
            <p className="text-navy/70 text-lg leading-relaxed mb-6">
              SODEXPRESS is uw betrouwbare partner voor alle loodgieterswerkzaamheden in Gent en
              omgeving. Al meer dan 15 jaar staan wij dag en nacht klaar voor onze klanten.
            </p>
            <p className="text-navy/70 leading-relaxed mb-8">
              Ons team bestaat uit gecertificeerde professionals die continu bijgeschoold worden in
              de nieuwste technieken en materialen. Wij zijn verzekerd, klantgericht en staan voor
              kwaliteit. Pas tevreden als u tevreden bent.
            </p>

            {/* Values List */}
            <div className="values-list space-y-3 mb-8">
              {values.map((value, index) => (
                <div key={index} className="value-item flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-dark flex-shrink-0" />
                  <span className="text-navy/80">{value}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-navy text-white hover:bg-navy-light font-semibold px-8 py-5 rounded-xl"
            >
              Maak kennis met het team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-navy/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-cyan-accent/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-cyan-dark" />
                  </div>
                  <p className="font-display font-bold text-2xl lg:text-3xl text-navy">
                    {stat.value}
                  </p>
                  <p className="text-navy/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="about-image order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src="/team_portrait.jpg"
                alt="SODEXPRESS team"
                className="w-full h-auto object-cover"
              />

              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-accent to-cyan-dark flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-navy">15+</p>
                    <p className="text-navy/60 text-sm">Jaar ervaring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
