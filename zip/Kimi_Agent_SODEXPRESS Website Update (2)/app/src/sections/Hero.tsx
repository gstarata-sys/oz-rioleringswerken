import { useEffect, useRef } from 'react';
import { Phone, ArrowRight, Clock, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial load animation
      const loadTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      loadTl
        .fromTo(bandRef.current, { x: '-70vw', opacity: 0 }, { x: 0, opacity: 1, duration: 0.9 })
        .fromTo(
          headlineRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          subheadlineRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          '-=0.3'
        )
        .fromTo(
          imageRef.current,
          { x: '18vw', scale: 0.96, opacity: 0 },
          { x: 0, scale: 1, opacity: 1, duration: 0.9 },
          '-=0.6'
        )
        .fromTo(
          badgeRef.current,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          '-=0.4'
        );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // Phase 3: EXIT (70-100%)
      scrollTl
        .fromTo(
          bandRef.current,
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          headlineRef.current,
          { y: 0, opacity: 1 },
          { y: '-10vh', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          subheadlineRef.current,
          { y: 0, opacity: 1 },
          { y: '-8vh', opacity: 0, ease: 'power2.in' },
          0.72
        )
        .fromTo(
          imageRef.current,
          { x: 0, scale: 1, opacity: 1 },
          { x: '12vw', scale: 0.98, opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          ctaRef.current,
          { y: 0, opacity: 1 },
          { y: '6vh', opacity: 0, ease: 'power2.in' },
          0.75
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Pinned Hero Section */}
      <section
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden bg-navy-900"
        style={{ zIndex: 10 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero-plumber.jpg"
            alt="Professional plumber at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/60" />
        </div>

        {/* Cyan Band */}
        <div
          ref={bandRef}
          className="absolute left-0 top-0 w-[62vw] h-full bg-cyan-500/90"
          style={{ clipPath: 'polygon(0 0, 78% 0, 62% 100%, 0 100%)' }}
        />

        {/* Content Container */}
        <div className="relative h-full w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-[72px]">
          {/* Emergency Badge */}
          <div
            ref={badgeRef}
            className="absolute left-4 sm:left-6 lg:left-[6vw] top-[10vh] lg:top-[14vh]"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-navy-900 rounded-full text-sm font-semibold font-mono tracking-wide shadow-lg">
              <Clock className="w-4 h-4" />
              24/7 Spoedservice
            </span>
          </div>

          {/* Headline - Better contrast with text shadow */}
          <div
            ref={headlineRef}
            className="absolute left-4 sm:left-6 lg:left-[6vw] top-[16vh] lg:top-[20vh] max-w-[90vw] lg:max-w-[40vw]"
          >
            <h1 className="font-bold text-navy-900 leading-[1.05] tracking-tight">
              <span className="block text-3xl sm:text-5xl lg:text-6xl xl:text-7xl drop-shadow-sm">
                Snel.
              </span>
              <span className="block text-3xl sm:text-5xl lg:text-6xl xl:text-7xl mt-1 drop-shadow-sm">
                Deskundig.
              </span>
              <span className="block text-3xl sm:text-5xl lg:text-6xl xl:text-7xl mt-1 drop-shadow-sm">
                Altijd{' '}
                <span className="relative">
                  beschikbaar.
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-navy-900/30 rounded-full" />
                </span>
              </span>
            </h1>
          </div>

          {/* Subheadline - Clean, readable text */}
          <p
            ref={subheadlineRef}
            className="absolute left-4 sm:left-6 lg:left-[6vw] top-[44vh] lg:top-[46vh] max-w-[90vw] lg:max-w-[36vw] text-base sm:text-lg text-navy-900 leading-relaxed font-medium bg-white/40 backdrop-blur-sm px-4 py-3 rounded-xl"
          >
            Professionele loodgieters staan 24/7 klaar voor al uw spoedreparaties in Gent en omgeving. Gemiddeld binnen 35 minuten bij u.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="absolute left-4 sm:left-6 lg:left-[6vw] top-[70vh] lg:top-[62vh]"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0460250756">
                <Button
                  size="lg"
                  className="bg-navy-900 text-white hover:bg-navy-800 font-bold text-lg px-8 py-6 h-auto shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Bel Nu: 04 60 25 07 56
                </Button>
              </a>
              <Button
                onClick={() => scrollToSection('diensten')}
                variant="outline"
                size="lg"
                className="border-2 border-navy-900/30 text-navy-900 hover:bg-navy-900/10 font-semibold text-lg px-8 py-6 h-auto bg-white/50 backdrop-blur-sm"
              >
                Bekijk diensten
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Image Card */}
          <div
            ref={imageRef}
            className="hidden lg:block absolute right-[4vw] top-[18vh] w-[34vw] h-[64vh] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/plumber-portrait.jpg"
              alt="Professional plumber"
              className="w-full h-full object-cover"
            />
            {/* Trust Badge on Image */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-sm rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 border-2 border-white flex items-center justify-center"
                    >
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span className="font-bold text-navy-900">4.6/5</span>
                  </div>
                  <p className="text-xs text-navy-600">291 Google reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Badges - Outside pinned section, scrolls normally */}
      <div className="relative bg-white py-8 -mt-20 z-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-5 py-3 bg-cyan-50 border border-cyan-200 rounded-xl">
              <Clock className="w-5 h-5 text-cyan-600" />
              <span className="text-sm font-semibold text-navy-900">35 minuten responstijd</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-cyan-50 border border-cyan-200 rounded-xl">
              <Shield className="w-5 h-5 text-cyan-600" />
              <span className="text-sm font-semibold text-navy-900">Vaste tarieven</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-cyan-50 border border-cyan-200 rounded-xl">
              <Star className="w-5 h-5 text-cyan-600" />
              <span className="text-sm font-semibold text-navy-900">4.6/5 beoordeling</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
