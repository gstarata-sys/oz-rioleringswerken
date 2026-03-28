import { Phone, Award, ShieldCheck, Clock, MapPin, Mail } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { TELEFOON, TELEFOON_RAW, WHATSAPP_URL, EMAIL, STAD } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "./ContactForm";

const VERTROUWEN = [
  { icon: ShieldCheck, text: "2 jaar garantie op alle werken" },
  { icon: Award,       text: "Geen verborgen kosten"          },
  { icon: Clock,       text: "Snelle respons binnen 24u"      },
  { icon: MapPin,      text: "Actief in heel Oost-Vlaanderen" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[--color-cyan] mb-3">
            Neem contact op
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[--color-navy] mb-4">
            Gratis offerte aanvragen
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-base leading-relaxed">
            Vul het formulier in of bel ons direct. Wij reageren snel.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left sidebar */}
          <FadeIn direction="left" className="lg:col-span-2 space-y-6">
            {/* Direct contact */}
            <div className="bg-[--color-navy] rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-4">Direct contact</h3>
              <div className="space-y-3">
                <a
                  href={`tel:${TELEFOON_RAW}`}
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors"
                >
                  <Phone size={18} className="text-[--color-cyan] shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Bellen</p>
                    <p className="font-bold text-sm">{TELEFOON}</p>
                  </div>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors"
                >
                  <WhatsAppIcon size={18} className="text-[#25D366] shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">WhatsApp</p>
                    <p className="font-bold text-sm">Stuur een bericht</p>
                  </div>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors"
                >
                  <Mail size={18} className="text-[--color-cyan] shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">E-mail</p>
                    <p className="font-bold text-sm">{EMAIL}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Trust */}
            <div className="bg-slate-50 rounded-2xl p-5">
              <h4 className="font-bold text-[--color-navy] text-sm mb-4">Waarom OZ Rioleringswerken?</h4>
              <ul className="space-y-3">
                {VERTROUWEN.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <Icon size={16} className="text-[--color-cyan] shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <iframe
                title="Oz Rioleringswerken locatie"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80271.79048143745!2d3.6441!3d51.0500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c37a07b4b63a39%3A0x40099ab2f4d5f10!2sGent!5e0!3m2!1snl!2sbe!4v1640000000000!5m2!1snl!2sbe"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="right" className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
