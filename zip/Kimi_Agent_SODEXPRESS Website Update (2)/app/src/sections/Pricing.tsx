import { useRef } from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: 'Standaard',
    price: '€55',
    unit: '/uur',
    description: 'Voor reguliere klussen tijdens kantooruren',
    features: [
      'Voorrijkosten: €49',
      'Dagtarief (08:00-18:00)',
      'Maandag t/m vrijdag',
      'Offerte vooraf',
      '3 maanden garantie',
    ],
    cta: 'Afspraak maken',
    popular: false,
  },
  {
    name: 'Spoed',
    price: '€75',
    unit: '/uur',
    description: 'Directe hulp, 24/7 beschikbaar',
    features: [
      'Voorrijkosten: €49',
      'Avond, weekend & feestdagen',
      'Directe prioriteit',
      'Offerte ter plaatse',
      '6 maanden garantie',
      'Gemiddeld 35 min responstijd',
    ],
    cta: 'Direct bellen',
    popular: true,
  },
  {
    name: 'Onderhoud',
    price: '€75',
    unit: '/maand',
    description: 'Periodiek onderhoud van uw installaties',
    features: [
      'Maandelijkse controle',
      'Prioriteit bij storing',
      '10% korting op reparaties',
      'Jaarlijks onderhoudsrapport',
      '24/7 beschikbaar',
    ],
    cta: 'Meer info',
    popular: false,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="tarieven"
      className="relative w-full py-20 lg:py-28 bg-slate-50"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-6">
            TARIEVEN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Transparante{' '}
            <span className="text-cyan-600">prijzen</span>
          </h2>
          <p className="text-lg text-navy-600">
            Geen verrassingen achteraf. Bij ons weet u precies waar u aan toe bent. Duidelijke prijzen, altijd prijsopgave vooraf.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 items-start">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl ${
                plan.popular
                  ? 'bg-navy-900 text-white shadow-xl ring-4 ring-cyan-400/30'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-amber-500 text-navy-900 text-sm font-bold rounded-full">
                    MEEST GEKOZEN
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-navy-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-cyan-400' : 'text-navy-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-navy-500'}`}>
                    {plan.unit}
                  </span>
                </div>
                <p className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-navy-600'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-cyan-400' : 'text-cyan-600'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-navy-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="tel:0460250756" className="block">
                <Button
                  className={`w-full py-5 h-auto font-semibold ${
                    plan.popular
                      ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                      : 'bg-navy-100 hover:bg-navy-200 text-navy-900'
                  }`}
                >
                  {plan.cta}
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="flex items-start gap-4 p-6 bg-amber-50 border border-amber-200 rounded-xl max-w-3xl mx-auto">
          <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-navy-700 font-medium mb-1">Materiaalkosten apart</p>
            <p className="text-navy-600 text-sm">
              U ontvangt altijd een duidelijke prijsopgave vooraf, zodat u nooit voor verrassingen komt te staan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
