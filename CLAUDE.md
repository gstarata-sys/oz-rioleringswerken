# Oz Rioleringswerken — Website Project (Premium Upgrade)

# 🎯 Project Rules: 10k+ Website Standaard
Dit project MOET voldoen aan de hoogste standaarden voor moderne, high-end websites.

- **Framework:** Next.js 15+ (App Router) met TypeScript.
- **Styling:** Tailwind CSS.
  - *Stijl:* Modern, minimalistisch, verfijnd ("Apple/Stripe-achtig").
  - *Ruimte:* Gebruik royale padding en margins (veel witruimte) voor een rustige, dure uitstraling.
- **Animations:** Framer Motion.
  - *Eis:* Geen harde overgangen. Alles moet soepel invliegen (`fade-in-up`), 'staggered' laden (items na elkaar), of micro-interacties hebben bij hover.
- **Icons:** Lucide React (consistent en scherp).
- **Typography:**
  - Font: **Inter** (via `next/font/google`).
  - Koppen (H1, H2): Bold, uppercase voor sectietitels, verhoogde `letter-spacing` (tracking).
  - Body: 16px basis, 1.8 line-height voor optimale leesbaarheid.
- **Reference:** Volg Vercel React Best Practices (Server Components waar mogelijk, schone componentenstructuur).

## 🛠️ Tech Stack & Integraties
- **Framework:** Next.js (App Router)
- **Taal:** TypeScript
- **Styling:** Tailwind CSS
- **Animaties:** Framer Motion
- **Formulier:** Formspree (geïntegreerd via React hook/state)
- **WhatsApp:** WhatsApp API (`wa.me` links)

## 📁 Projectstructuur (Next.js App Router)
/
├── app/
│   ├── layout.tsx       # Globale layout (Navbar, Footer, Font setup)
│   ├── page.tsx         # Home pagina (Single-page structuur)
│   └── globals.css      # Tailwind directives & basis stijlen
├── components/          # Herbruikbare UI componenten
│   ├── ui/              # Basis elementen (Button, Card, Input)
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Animations.tsx   # Motion wrappers
│   └── ContactForm.tsx
├── public/
│   ├── images/
│   │   ├── logo.svg     # Logo (SVG geprefereerd)
│   │   ├── hero-bg.webp # Geoptimaliseerde achtergrond
│   │   └── portfolio/   # Projectfoto's (WebP formaat)
│   └── icons/
└── CLAUDE.md             # Dit bestand


## 🎨 Kleurenpalette (Premium Toepassing)
De kleuren moeten subtiel en professioneel worden toegepast. Gebruik veel wit/lichtgrijs als basis.

| Rol | Naam | Hex | Tailwind Klasse |
| :--- | :--- | :--- | :--- |
| **Achtergrond (Donker)** / Navbar | Dark Navy | `#0D1B2A` | `bg-slate-950` |
| **Accent** / Hoofd CTA | Steel Blue | `#5B8DB8` | `bg-blue-600` |
| **Licht accent** / Hover states | Light Blue | `#7AB3D4` | `bg-blue-400` |
| **Tekst (Licht)** / Op donker | Wit | `#FFFFFF` | `text-white` |
| **Achtergrond (Licht)** / Secties | Light Grey | `#F4F6F9` | `bg-slate-50` |
| **Tekst (Donker)** / Body | Dark Grey | `#1A2633` | `text-slate-900` |
| **Subtiele Borders** | Greyish | - | `border-slate-200/50` |

## 📐 Paginaopbouw (In volgorde op Home pagina)
Alle secties moeten een geanimeerde 'scroll-reveal' hebben.

1.  **Navigatie:** Sticky, `backdrop-blur` (glassmorphism effect), logo links, nav-links rechts, opvallende "Offerte Aanvragen" CTA-knop.
2.  **Hero:** Premium achtergrondafbeelding (`next/image` met prioriteit), krachtige headline, subtitel, twee CTA's (Primair: Offerte, Secundair: WhatsApp icoon).
3.  **Diensten:** Grid van 8 Cards. Elke card heeft een Lucide icoon, titel, korte beschrijving. *Animatie: staggered fade-in.*
4.  **Waarom Ons:** 4 Trust signals (bijv. "24/7 Nooddienst", "Gecertificeerd"). Focus op iconen en korte tekst.
5.  **Realisaties:** Fotogalerij met hoogwaardige foto's van projecten. Gebruik `next/image`. Bij klik opent een geanimeerde lightbox.
6.  **Over Ons:** Professioneel bedrijfsverhaal met een foto van het team of zaakvoerder.
7.  **Contact:** Geavanceerd contactformulier (Formspree met status handling), directe WhatsApp link, telefoonnummer, interactieve kaart (optioneel).
8.  **Footer:** Uitgebreide footer met links, contactgegevens, copyright.

## 📝 Diensten (Content)
- Rioleringswerken
- Septische putten
- Grond- en graafwerken
- Buizen & leidingen aanleggen
- Herstellingen (leidingen, riolen)
- Tegelwerken & afwerking
- Ondergrondse verwarming (vloerverwarming)
- Algemene werken

## ⚙️ Vereiste Configuraties (In te vullen door gebruiker)
*Vervang deze placeholders in de `.env` of componenten:*
- `NEXT_PUBLIC_WHATSAPP_NUMBER` → `32XXXXXXXXX`
- `NEXT_PUBLIC_TELEFOON_NUMMER` → `+32 ...`
- `NEXT_PUBLIC_EMAIL_ADRES` → `...`
- `NEXT_PUBLIC_FORMSPREE_ID` → `...`

## 🦾 Richtlijnen voor Claude Code
- **Geen HTML/Vanilla JS:** Alles moet in TypeScript/React (`.tsx`) componenten worden geschreven.
- **Afbeeldingen:** Gebruik UITSLUITEND `next/image` voor automatische optimalisatie, lazy loading en WebP conversie. Zorg altijd voor een relevante `alt`-tekst.
- **Taal:** Schrijf altijd in het **Nederlands** (Belgisch-Nederlands, formele en professionele toon).
- **Mobile-first:** Ontwerp eerst voor mobiel, gebruik Tailwind's responsive modifiers (`md:`, `lg:`) voor desktop.
- **Componenten:** Houd componenten klein en gefocust. Splits grote secties op in sub-componenten in `/components`.
- **Performance:** Streef naar een perfecte Lighthouse score. Gebruik Server Components tenzij interactie (staat/hooks) vereist is (gebruik dan `'use client'`).