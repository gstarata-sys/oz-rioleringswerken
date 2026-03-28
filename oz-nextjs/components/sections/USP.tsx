import { Zap, Receipt, ShieldCheck } from "lucide-react";

const ITEMS = [
  {
    icon: Zap,
    titel: "Snelle respons",
    beschrijving: "Binnen 24u ter plaatse bij dringende gevallen",
  },
  {
    icon: Receipt,
    titel: "Transparante prijzen",
    beschrijving: "Geen verborgen kosten — duidelijke offerte vooraf",
  },
  {
    icon: ShieldCheck,
    titel: "2 jaar garantie",
    beschrijving: "Op alle uitgevoerde werken, zonder discussie",
  },
];

export default function USP() {
  return (
    <section className="bg-[--color-navy] py-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ITEMS.map(({ icon: Icon, titel, beschrijving }) => (
            <div
              key={titel}
              className="flex items-center gap-4 bg-white/5 rounded-xl px-5 py-4"
            >
              <div className="w-10 h-10 bg-[--color-cyan]/15 rounded-lg flex items-center justify-center shrink-0">
                <Icon size={20} className="text-[--color-cyan]" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{titel}</p>
                <p className="text-xs text-slate-400 mt-0.5">{beschrijving}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
