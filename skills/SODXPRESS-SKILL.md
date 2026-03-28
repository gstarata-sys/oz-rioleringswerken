You are an expert React + TypeScript + Tailwind CSS + GSAP developer. 
Build me a professional, premium website called SODEXPRESS.

=== TECH STACK (MANDATORY) ===
- Vite + React + TypeScript
- Tailwind CSS
- shadcn/ui components
- GSAP + ScrollTrigger for animations
- Lucide React icons

=== SETUP COMMANDS (run these first) ===
npm create vite@latest sodexpress -- --template react-ts
cd sodexpress
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
npm install lucide-react
npm install gsap @gsap/react
npx shadcn-ui@latest init
# shadcn setup: Default style, CSS variables: yes, base color: slate
npx shadcn-ui@latest add button input textarea select card

=== FOLDER STRUCTURE ===
src/
  sections/
    Header.tsx
    Hero.tsx
    Services.tsx
    HowWeWork.tsx
    Pricing.tsx
    WhyChooseUs.tsx
    ServiceAreas.tsx
    FAQ.tsx
    Contact.tsx
    Footer.tsx
  components/
    ui/ (shadcn components here)
  App.tsx
  main.tsx
  index.css

=== COMPANY INFO ===
- Name: SODEXPRESS
- Logo: "SOD" in navy bold + "EXPRESS" in cyan bold
- Tagline: "Snel. Deskundig. Altijd beschikbaar."
- Phone: 04 60 25 07 56 (tel:0460250756)
- Email: info@sodexpress.be
- Location: Gent, Belgium
- Coverage: Oost-Vlaanderen, West-Vlaanderen, Antwerpen, Vlaams-Brabant, Limburg, Brussel
- Language: DUTCH (Nederlands) — ALL text must be in Dutch

=== DESIGN SYSTEM ===
Colors:
- Navy (primary): #0f172a (bg-navy-900)
- Cyan (accent): #06b6d4 (bg-cyan-500)
- Amber (CTA/urgent): #f59e0b (bg-amber-500)
- White backgrounds, light gray: #f8fafc

Typography: Inter or system font, clean and modern

Buttons:
- Primary CTA: bg-amber-500 hover:bg-amber-600 text-navy-900 font-semibold → scale-105 on hover
- Secondary: bg-cyan-500 hover:bg-cyan-600 text-white → translateY(-2px) on hover
- Outline: border-2 border-current hover:bg-current/10

=== CRITICAL HEADER RULES ===
The header MUST always be visible on all backgrounds. Use this exact pattern:

<header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
  <div className="h-[72px] flex items-center justify-between px-4 lg:px-12">
    {/* Logo: SOD in navy, EXPRESS in cyan */}
    {/* Nav links */}
    {/* CTA button (amber bg) */}
    {/* Mobile hamburger */}
  </div>
</header>
<main className="pt-[72px]"> {/* always push content below fixed header */}

NEVER use backdrop-filter or blur on header. NEVER make header transparent.

=== HERO SECTION RULES ===
The hero text and description MUST be separate, non-overlapping elements:

Structure:
1. Full viewport background image (plumber working)
2. Dark overlay (bg-navy-900/70)
3. Left side content (z-10, relative):
   - Badge: "⏱ 24/7 Spoedservice" (amber pill)
   - H1: "Snel. Deskundig. Altijd beschikbaar." (white, bold, large)
   - [CLEAR SPACING - margin-bottom 24px minimum]
   - Description paragraph: separate div below the h1, NOT overlapping
   - Two CTA buttons: "Bel Nu: 04 60 25 07 56" + "Bekijk diensten →"
4. Right side: plumber image with cyan diagonal band

GSAP Hero Animation:
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Pin the hero on scroll, fade out on scroll down
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to(heroRef.current, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  });
  return () => ctx.revert();
}, []);

=== ANIMATION RULES ===
1. Hero: GSAP scroll exit (fade + moveUp)
2. Section cards: fade in from below on scroll (opacity 0 → 1, y: 40 → 0)
3. Buttons: hover:scale-105 or hover:-translate-y-0.5 via Tailwind only
4. NEVER use blur() or backdrop-filter (performance issues)
5. NEVER use transform + position:fixed together on header
6. Use transform and opacity only for animations

Card scroll animation pattern:
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo('.animate-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  });
  return () => ctx.revert();
}, []);

=== SECTIONS TO BUILD ===

1. HEADER (sticky, always white bg, never transparent)

2. HERO
   - Background: hero-plumber.jpg (use Unsplash plumber image as fallback)
   - Cyan diagonal band separating left text from right image
   - H1: "Snel. Deskundig. Altijd beschikbaar."
   - Description: "Professionele loodgieters staan 24/7 klaar voor al uw spoedreparaties in Gent en omgeving. Gemiddeld binnen 35 minuten bij u."
   - CTAs: amber "Bel Nu: 04 60 25 07 56" + outline "Bekijk diensten →"
   - Stats bar: "500+ klanten | 35 min responstijd | 15+ jaar ervaring | 24/7 beschikbaar"

3. SERVICES (8 cards, bg-white)
   Cards:
   - WC of Afvoer Ontstoppen (vanaf €89)
   - Riool Ontstoppen (vanaf €149)
   - Waterlekkage Opsporen & Repareren (vanaf €79)
   - CV-Ketel Service & Reparatie (vanaf €95)
   - Video-inspectie Leidingen (vanaf €125)
   - Leidingwerk & Buisreparaties (vanaf €110)
   - Sanitair Installatie & Vervanging (op offerte)
   - Dakgoot Reparatie & Ontstoppen (vanaf €95)
   Each card: icon (cyan circle), title (navy bold), price (amber), description, "Meer info →" link

4. HOW WE WORK (bg-slate-50)
   5 steps with icons:
   1. Bel ons 24/7
   2. We komen snel
   3. Diagnose ter plaatse
   4. Offerte vooraf
   5. Probleem opgelost

5. PRICING (bg-white)
   - Voorrijkosten: €49 (inclusief diagnose)
   - Arbeidstarief: €55/uur
   - Spoedtarief: €75/uur (avond/weekend/feestdagen)
   - Note: "Materiaalkosten apart. Altijd prijsopgave vooraf."
   Packages:
   - Standaard: €55/uur, Dagdienst (8-18u), features list, "Offerte aanvragen" CTA
   - Spoed (highlighted/popular): €75/uur, 24/7 service, "Direct bellen" CTA (amber)
   - Onderhoud: €75/maand, Periodiek onderhoud, "Meer info" CTA

6. WHY CHOOSE US (bg-navy-900, white text)
   Stats: 500+ tevreden klanten, 35 min gemiddelde responstijd, 15+ jaar ervaring, 24/7 beschikbaar
   Trust badges: Gecertificeerd vakmanschap, Vaste prijsafspraken, 6 maanden garantie

7. SERVICE AREAS (bg-slate-50)
   Map visual + province list:
   - Oost-Vlaanderen (Gent, Aalst, Sint-Niklaas...)
   - West-Vlaanderen (Brugge, Kortrijk, Oostende)
   - Antwerpen (Antwerpen, Mechelen, Turnhout)
   - Vlaams-Brabant (Leuven, Vilvoorde, Halle)
   - Limburg (Hasselt, Genk, Sint-Truiden)
   - Brussel & Omgeving

8. FAQ (bg-white, accordion)
   6-8 questions about emergency plumbing in Dutch
   Use shadcn Accordion component

9. CONTACT (bg-navy-900)
   Left: large amber CTA "Bel Nu: 04 60 25 07 56"
   Right: contact form (name, phone, email, subject, message) using shadcn components

10. FOOTER (bg-slate-900, white text)
    Logo | Services links | Contact | Service Areas | Privacy/Terms

=== RESPONSIVE BREAKPOINTS ===
- Mobile: < 640px (1 column)
- Tablet: 640px - 1024px (2 columns)
- Desktop: > 1024px (full layout)

=== PHASE APPROACH ===
Build in 3 phases:
PHASE 1 (Setup): Create project + install all dependencies + folder structure
PHASE 2 (Static): Build ALL sections WITHOUT animations first. Make everything responsive. Ensure NO text overlapping.
PHASE 3 (Polish): Add GSAP animations, hover effects, transitions

=== IMPORTANT RULES ===
1. Always use `const sectionRef = useRef<HTMLElement>(null)` for animation refs
2. Always wrap GSAP in `gsap.context()` and return `ctx.revert()` for cleanup
3. All Dutch text - no English on the visible website
4. Images: use Unsplash URLs for placeholder images (professional plumber photos)
   Example: https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800
5. shadcn Button component for all buttons
6. Mobile menu must work (toggle open/close)
7. Smooth scroll to sections when nav links clicked

Start with PHASE 1. Confirm when done before moving to PHASE 2.