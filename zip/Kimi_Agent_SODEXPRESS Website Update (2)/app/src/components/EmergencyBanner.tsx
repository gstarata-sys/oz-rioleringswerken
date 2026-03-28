import { Phone, Clock } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[150] bg-navy-dark border-t border-white/10 lg:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-accent/20 flex items-center justify-center">
            <Clock className="w-5 h-5 text-amber-accent" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">24/7 Spoedservice</p>
            <p className="text-white/60 text-xs">Gemiddeld 35 minuten</p>
          </div>
        </div>
        <a
          href="tel:0460250756"
          className="flex items-center gap-2 px-4 py-2.5 bg-cyan-accent text-navy-dark rounded-xl font-semibold text-sm"
        >
          <Phone className="w-4 h-4" />
          Bel nu
        </a>
      </div>
    </div>
  );
}
