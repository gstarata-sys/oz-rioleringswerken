import { useEffect, useRef } from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Real Google Reviews from SODEXPRESS Google Business Profile
const googleReviewsData = {
  rating: 4.6,
  totalReviews: 291,
  profileUrl: 'https://www.google.com/maps/place/SODEXPRESS/@50.2054266,4.6251097,17z/data=!4m8!3m7!1s0x47c3db005eab77b9:0xfac7eeca923e32f4!8m2!3d50.2054266!4d4.6251097!9m1!1b1!16s%2Fg%2F11yf6g7mw6'
};

const testimonials = [
  {
    name: 'Elena Novakovska',
    location: 'Local Guide · 19 reviews',
    rating: 5,
    text: 'Service impeccable ! L\'équipe est très professionnelle et courtoise. Ils ont rapidement localisé une fuite sous le plancher et l\'ont réparée efficacement. Grâce à leur équipement de pointe, dont une caméra, il n\'a pas été nécessaire de démonter tous les carreaux. Un grand merci pour leur réactivité et leur expertise. Je recommande vivement cette entreprise !',
    avatar: 'EN',
  },
  {
    name: 'Veronique Sterckendries',
    location: '10 reviews · 1 photo',
    rating: 5,
    text: 'Herstel zeer professioneel en ook de service is top. Communicatie met de technieker op zaterdag wat haperig maar het bedrijf heeft ons op zondag vlot geholpen met vriendelijkheid. Bedankt Barich bedrijf. Bij een volgende keer zal ik zeker bij hen aankloppen.',
    avatar: 'VS',
  },
  {
    name: 'Wendy Janssens',
    location: '3 reviews',
    rating: 5,
    text: 'Zeer tevreden, probleem meteen opgelost, snelle en efficiënte service, personeel zeer vriendelijk. Een echte aanrader!',
    avatar: 'WJ',
  },
  {
    name: 'Cherkaoui Mouad',
    location: '2 reviews · 2 photos',
    rating: 5,
    text: 'Très satisfait. Rapide et professionnel. J\'ai eu une canalisation qui a éclaté, j\'ai appelé la société Sodexpress. Ils sont intervenus très rapidement et ont réparé. Je les recommande à 100%.',
    avatar: 'CM',
  },
  {
    name: 'Amira Tafranti',
    location: '3 reviews',
    rating: 5,
    text: 'Ce plombier est génial ! Réactif, travail impeccable et très professionnel. Il a pris le temps d\'expliquer le problème et la solution, et le prix était juste. Un artisan fiable et sympathique, rare de nos jours. Je le recommande vivement !',
    avatar: 'AT',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.testimonial-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 bg-navy overflow-hidden"
      style={{ zIndex: 50 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/tool_closeup.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-cyan-accent/10 text-cyan-accent rounded-full text-sm font-mono tracking-wide mb-4">
              GOOGLE REVIEWS
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Tevreden klanten
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Onze klanten beoordelen ons op Google. Bekijk hieronder wat zij van onze service vinden.
            </p>
          </div>

          {/* Rating Summary */}
          <div className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-6 h-6 ${
                      star <= Math.round(googleReviewsData.rating)
                        ? 'fill-amber-accent text-amber-accent'
                        : 'fill-white/20 text-white/20'
                    }`}
                  />
                ))}
              </div>
              <p className="font-display font-bold text-4xl text-white">{googleReviewsData.rating}/5</p>
              <p className="text-white/60 text-sm">gemiddelde score</p>
            </div>
            <div className="w-px h-16 bg-white/10" />
            <div className="text-center">
              <p className="font-display font-bold text-4xl text-cyan-accent">{googleReviewsData.totalReviews}</p>
              <p className="text-white/60 text-sm">Google reviews</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card relative p-6 lg:p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-accent/30 transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-cyan-accent/20" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-accent text-amber-accent"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/80 leading-relaxed mb-6 line-clamp-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-accent to-cyan-dark flex items-center justify-center text-navy-dark font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-white/50 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={googleReviewsData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-5 rounded-xl"
            >
              Bekijk alle Google reviews
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
