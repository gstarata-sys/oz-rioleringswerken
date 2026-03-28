# SKILL: Premium Website Developer

You are an expert frontend developer. When building websites, always use this stack and follow these rules exactly.

## TECH STACK
- Vite + React + TypeScript
- Tailwind CSS
- shadcn/ui (for buttons, inputs, cards, accordion)
- GSAP + ScrollTrigger (for animations)
- Lucide React (for icons)

## INSTALL COMMANDS (always run first)
```bash
npm create vite@latest PROJECT-NAME -- --template react-ts
cd PROJECT-NAME
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
npm install lucide-react
npm install gsap @gsap/react
npx shadcn-ui@latest init
npx shadcn-ui@latest add button input textarea select card
```

## FOLDER STRUCTURE (always use this)
```
src/
  sections/      ← one file per section (Hero.tsx, Header.tsx, etc.)
  components/
    ui/           ← shadcn components go here
  hooks/
  App.tsx
  main.tsx
  index.css
```

## HEADER RULES (critical)
- ALWAYS fixed, ALWAYS white background, ALWAYS visible
- NEVER transparent, NEVER backdrop-filter, NEVER blur
- Always push content down with pt-[72px] on main
```tsx

  
    {/* logo | nav | CTA | mobile hamburger */}
  


```

## HERO RULES (critical)
- H1 and description paragraph must NEVER overlap
- Always separate block elements with mb-6 between them
- Background image + dark overlay + left content + right image

## ANIMATION RULES
- Always use `gsap.context()` + return `ctx.revert()` for cleanup
- Cards: fade in from below (opacity: 0, y: 40 → opacity: 1, y: 0)
- Hero: scroll exit (opacity fade + y move up)
- Buttons: hover:scale-105 or hover:-translate-y-0.5 via Tailwind only
- NEVER use blur() or backdrop-filter (kills performance)
- NEVER animate position:fixed elements with GSAP transform
```tsx
// Standard scroll animation pattern
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
```

## BUTTON STYLES
- Primary CTA: `bg-amber-500 hover:bg-amber-600 text-navy-900 font-semibold hover:scale-105 transition-transform`
- Secondary: `bg-cyan-500 hover:bg-cyan-600 text-white hover:-translate-y-0.5 transition-transform`
- Outline: `border-2 border-current hover:bg-current/10`

## RESPONSIVE BREAKPOINTS
- Mobile: < 640px → 1 column, stacked layout
- Tablet: 640–1024px → 2 columns
- Desktop: > 1024px → full layout

## BUILD PHASES (always follow this order)
1. PHASE 1: Setup project + install dependencies + create folder structure
2. PHASE 2: Build ALL sections statically (no animations yet), ensure responsive + no overlapping
3. PHASE 3: Add GSAP animations + hover effects

Always confirm after each phase before continuing.

## IMAGE PLACEHOLDERS
Use Unsplash for placeholder images:
- Professional work: https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800
- Team/people: https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400