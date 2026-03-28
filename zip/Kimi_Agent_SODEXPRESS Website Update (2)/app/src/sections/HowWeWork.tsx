import { useRef } from 'react';
import { Phone, Timer, ClipboardCheck, Wrench, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'U belt, wij komen',
    description: 'Bel ons 24/7. Onze servicedesk staat altijd voor u klaar om uw probleem te registreren.',
  },
  {
    number: '02',
    icon: Timer,
    title: 'Snelle aankomst',
    description: 'Gemiddeld binnen 35 minuten bij u ter plaatse. Ook in de avond en in het weekend.',
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Diagnose & offerte',
    description: 'Duidelijke prijsopgave vooraf. Geen verrassingen, u weet precies wat het kost.',
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Vakkundige reparatie',
    description: 'Direct uitgevoerd door onze gecertificeerde vakmensen met professioneel gereedschap.',
  },
  {
    number: '05',
    icon: ThumbsUp,
    title: 'Tevreden klant',
    description: 'Garantie op al ons werk. Pas tevreden als u tevreden bent.',
  },
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="werkwijze"
      className="relative w-full py-20 lg:py-28 bg-white"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-6">
            ZO WERKEN WIJ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            5 stappen naar{' '}
            <span className="text-cyan-600">een oplossing</span>
          </h2>
          <p className="text-lg text-navy-600">
            Ons werkproces is ontworpen om u snel en efficiënt te helpen. Van melding tot oplossing—transparant en professioneel.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-1 bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-200 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center group"
              >
                {/* Icon Circle */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-white border-4 border-cyan-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:border-cyan-400 group-hover:shadow-cyan-200/50 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-cyan-600" />
                </div>

                {/* Number Badge */}
                <div className="absolute top-0 right-1/4 lg:right-1/3 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-navy-900 text-sm font-bold shadow-md">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-gray-200 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold text-cyan-600 mb-2">35</p>
            <p className="text-navy-600 text-sm">minuten gemiddelde responstijd</p>
          </div>
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold text-cyan-600 mb-2">24/7</p>
            <p className="text-navy-600 text-sm">beschikbaar, ook feestdagen</p>
          </div>
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold text-cyan-600 mb-2">100%</p>
            <p className="text-navy-600 text-sm">garantie op al ons werk</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="tel:0460250756">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-lg px-8 py-6 h-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel nu voor directe hulp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
