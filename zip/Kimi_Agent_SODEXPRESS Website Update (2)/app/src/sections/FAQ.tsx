import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Wat kost een spoedklus?',
    answer:
      'Voor spoedklussen hanteren wij een tarief van €75 per uur (inclusief voorrijkosten). Dit geldt voor avond, weekend en feestdagen. Voor reguliere klussen tijdens kantooruren betaalt u €55 per uur. U ontvangt altijd een duidelijke prijsopgave vooraf.',
  },
  {
    question: 'Zit er garantie op het werk?',
    answer:
      'Ja, wij geven 100% garantie op al ons werk. Voor standaard reparaties geldt een garantietermijn van 3 maanden, voor spoedreparaties 6 maanden, en voor onderhoudscontracten geldt volledige dekking. Mocht er iets misgaan, komen wij kosteloos terug.',
  },
  {
    question: 'Hoe snel bent u ter plaatse?',
    answer:
      'Onze gemiddelde responstijd is 35 minuten. Dit kan variëren afhankelijk van uw locatie en het moment van de dag. In drukke periodes kan dit oplopen tot maximaal 60 minuten. We houden u altijd op de hoogte van de verwachte aankomsttijd.',
  },
  {
    question: 'Werkt u ook in het weekend?',
    answer:
      'Absoluut! Wij zijn 24 uur per dag, 7 dagen per week beschikbaar—ook in het weekend en op feestdagen. Voor weekend en avondklussen hanteren wij ons spoedtarief van €75 per uur.',
  },
  {
    question: 'Moet ik voorrijkosten betalen?',
    answer:
      'De voorrijkosten zijn €49 en zijn inclusief diagnose ter plaatse. Als u de reparatie direct laat uitvoeren, worden de voorrijkosten verrekend met het arbeidstarief. Bij afname van een onderhoudscontract zijn er geen voorrijkosten.',
  },
  {
    question: 'Hoe kan ik betalen?',
    answer:
      'Wij accepteren diverse betaalmethoden: contant, pin, creditcard (Visa, Mastercard), en mobiel betalen (Apple Pay, Google Pay). Voor grotere projecten kunt u ook op factuur betalen met een betaaltermijn van 14 dagen.',
  },
  {
    question: 'Wat als het probleem groter is dan verwacht?',
    answer:
      'Als tijdens de reparatie blijkt dat er meer werk nodig is dan initiaal ingeschat, bespreken wij dit altijd eerst met u. U ontvangt een nieuwe offerte en beslist zelf of u verder wilt gaan. Er zijn nooit verrassingen achteraf.',
  },
  {
    question: 'Kan ik een afspraak maken voor later?',
    answer:
      'Jazeker! U kunt telefonisch of via ons contactformulier een afspraak inplannen op een tijdstip dat u schikt. Voor gepland onderhoud hanteren wij ons standaardtarief van €55 per uur, ook in het weekend.',
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.faq-list',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative w-full py-20 lg:py-28 bg-navy"
      style={{ zIndex: 70 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Sticky */}
          <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
            <span className="inline-block px-4 py-1.5 bg-cyan-accent/10 text-cyan-accent rounded-full text-sm font-mono tracking-wide mb-4">
              VEELGESTELDE VRAGEN
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-6">
              Staat uw vraag er niet tussen?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Neem gerust contact op. Onze servicedesk staat 24/7 voor u klaar om al uw vragen te
              beantwoorden.
            </p>

            <div className="flex flex-col gap-4">
              <a href="tel:0460250756">
                <Button
                  size="lg"
                  className="w-full bg-cyan-accent text-navy-dark hover:bg-cyan-light font-semibold py-5 rounded-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Bel 04 60 25 07 56
                </Button>
              </a>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="w-full border-white/20 text-white hover:bg-white/10 font-semibold py-5 rounded-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Stuur een bericht
              </Button>
            </div>

            {/* Quick Contact Info */}
            <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <p className="text-white/60 text-sm mb-3">Bereikbaarheid</p>
              <div className="space-y-2">
                <p className="text-white font-mono">Ma-Zo: 24/7</p>
                <p className="text-cyan-accent font-mono">04 60 25 07 56</p>
                <p className="text-white/60 text-sm">info@sodexpress.be</p>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ List */}
          <div className="lg:col-span-3 faq-list space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? 'bg-white/10 border-cyan-accent/40'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
                >
                  <span className="font-display font-semibold text-lg text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-accent flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
