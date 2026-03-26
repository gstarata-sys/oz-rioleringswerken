# Oz Rioleringswerken — Website Project

## Over het project
Statische leadgeneratie-website voor **Oz Rioleringswerken**, gevestigd in **Gent, Oost-Vlaanderen**.
Het doel van de site is het genereren van offerteaanvragen via een contactformulier en WhatsApp.

## Tech stack
- **HTML5** — semantische structuur, single-page
- **CSS3** — mobile-first, geen framework
- **Vanilla JavaScript** — geen externe frameworks
- **Formspree** — contactformulier (geen backend nodig)
- **WhatsApp API** — `wa.me` links voor directe berichten

## Bestandsstructuur
```
/
├── index.html          # Hoofdpagina (single-page)
├── css/
│   └── style.css       # Alle stijlen
├── js/
│   └── main.js         # Interacties, animaties, formulier
├── images/
│   ├── logo.png        # Logo (toe te voegen)
│   ├── hero-bg.jpg     # Hero achtergrond (toe te voegen)
│   └── portfolio/      # Projectfoto's (toe te voegen)
└── CLAUDE.md           # Dit bestand
```

## Kleurenpalette (afgeleid van logo)
| Rol                        | Naam        | Hex        |
|----------------------------|-------------|------------|
| Primair / navbar           | Dark Navy   | `#0D1B2A`  |
| Accent / CTA-knoppen       | Steel Blue  | `#5B8DB8`  |
| Licht accent / hover       | Light Blue  | `#7AB3D4`  |
| Tekst op donkere achtergrond | Wit       | `#FFFFFF`  |
| Sectie achtergrond (licht) | Light Grey  | `#F4F6F9`  |
| Tekst op lichte achtergrond| Dark Grey   | `#1A2633`  |

## Typografie
- **Font**: Inter (Google Fonts)
- **Headings**: bold, uppercase voor sectietitels
- **Body**: 16px base, 1.6 line-height

## Paginasecties (in volgorde)
1. **Navigatie** — sticky, logo links, nav rechts, CTA-knop
2. **Hero** — headline, subtitel, 2 CTA's (offerte + WhatsApp)
3. **Diensten** — 8 cards met icoon + titel + beschrijving
4. **Waarom ons** — 4 trust signals
5. **Realisaties** — fotogalerij met lightbox
6. **Over ons** — bedrijfsverhaal
7. **Contact** — formulier (Formspree) + WhatsApp + telefoon
8. **Footer** — links, copyright

## Diensten
- Rioleringswerken
- Septische putten
- Grond- en graafwerken
- Buizen & leidingen aanleggen
- Herstellingen (leidingen, riolen)
- Tegelwerken & afwerking
- Ondergrondse verwarming (vloerverwarming)
- Algemene werken

## Nog in te vullen (placeholders in code)
- `WHATSAPP_NUMMER` → vervangen door echt nummer (formaat: 32XXXXXXXXX)
- `TELEFOON_NUMMER` → vervangen door echt telefoonnummer
- `EMAIL_ADRES` → vervangen door e-mail voor Formspree
- `FORMSPREE_ID` → na registratie op formspree.io invullen
- Logo en foto's toevoegen aan `/images/`

## Richtlijnen voor Claude
- Schrijf altijd in het **Nederlands** (Belgisch-Nederlands)
- Houd de code clean en zonder onnodige dependencies
- Mobile-first: altijd eerst mobile, dan desktop via media queries
- Gebruik CSS custom properties (variabelen) voor alle kleuren
- Gebruik semantische HTML5 elementen (`<section>`, `<nav>`, `<article>`, etc.)
- Afbeeldingen altijd met `loading="lazy"` en `alt` attribuut
- Geen inline styles — alles in style.css
