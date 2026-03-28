import { MapPin, MessageCircle } from "lucide-react";
import { WERKGEBIED_STEDEN, WHATSAPP_URL } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";

export default function ServiceArea() {
  return (
    <section id="werkgebied" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <FadeIn direction="left">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[--color-cyan] mb-3">
              Werkgebied
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[--color-navy] mb-5">
              Actief in Gent<br />& Oost-Vlaanderen
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-7">
              Wij zijn actief in heel Oost-Vlaanderen. Niet zeker of wij bij u in de buurt werken? Stuur ons een berichtje via WhatsApp.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
              {WERKGEBIED_STEDEN.map((stad) => (
                <div
                  key={stad}
                  className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2 text-sm text-slate-600"
                >
                  <MapPin size={13} className="text-[--color-cyan] shrink-0" />
                  {stad}
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-5 py-3 rounded-xl transition-colors"
            >
              <MessageCircle size={18} />
              Controleer uw gemeente
            </a>
          </FadeIn>

          {/* Map */}
          <FadeIn direction="right">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <iframe
                title="Werkgebied Oz Rioleringswerken"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80271.79048143745!2d3.6441!3d51.0500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c37a07b4b63a39%3A0x40099ab2f4d5f10!2sGent!5e0!3m2!1snl!2sbe!4v1640000000000!5m2!1snl!2sbe"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
