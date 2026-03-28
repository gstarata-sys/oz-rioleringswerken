import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#06b6d4] mb-3">
            Wat klanten zeggen
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-4">
            Google recensies
          </h2>
          <div className="flex items-center justify-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
            ))}
            <span className="ml-2 font-bold text-[#0f172a]">5.0</span>
            <span className="text-slate-400 text-sm">/ 5 op Google</span>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <StaggerItem key={review.naam}>
              <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#06b6d4] rounded-full flex items-center justify-center shrink-0">
                    <span className="font-bold text-white text-sm">
                      {review.naam.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f172a] text-sm">{review.naam}</p>
                    <p className="text-xs text-slate-400">{review.locatie}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(review.sterren)].map((_, i) => (
                      <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{review.tekst}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
