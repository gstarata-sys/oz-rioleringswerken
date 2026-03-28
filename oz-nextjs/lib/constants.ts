export const TELEFOON = "+32 477 53 17 77";
export const TELEFOON_RAW = "+32477531777";
export const WHATSAPP_NUMBER = "32477531777";
export const EMAIL = "ataturk_2000@hotmail.com";
export const STAD = "Gent";
export const VOORRIJKOSTEN = "€49";
export const FORMSPREE_ID = "xreobepr";

// Kept for Portfolio component (not shown on main page)
export const PORTFOLIO_ITEMS: Array<{ id: number; titel: string; categorie: string; afbeelding: string }> = [];

export const REVIEWS: Array<{ naam: string; locatie: string; tekst: string; sterren: number }> = [];

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Goedendag%2C%20ik%20wil%20graag%20een%20offerte%20aanvragen.`;

export const DIENSTEN = [
  {
    id: "riool-ontstoppen",
    icon: "Waves",
    titel: "Riool Ontstoppen",
    prijs: "vanaf €149",
    beschrijving: "Snelle en definitieve ontstopping van verstopte riolen.",
    details: [
      "Riool volledig vrijmaken",
      "Camera-controle na werk",
      "Ter plaatse binnen 35 min",
      "2 jaar garantie",
    ],
  },
  {
    id: "afvoer-ontstoppen",
    icon: "Pipette",
    titel: "Afvoer Ontstoppen",
    prijs: "vanaf €89",
    beschrijving: "Bad, douche, wastafel, keukenafvoer — snel opgelost.",
    details: [
      "Binnenhuisafvoeren",
      "Keuken & badkamer",
      "Geen beschadigingen",
      "Directe service",
    ],
  },
  {
    id: "camera-inspectie",
    icon: "Camera",
    titel: "Camera-inspectie",
    prijs: "vanaf €125",
    beschrijving: "Exacte diagnose met HD camera in uw riolering.",
    details: [
      "HD beeldkwaliteit",
      "Rapport + videobeelden",
      "Scheurinspectie",
      "Locatiebepaling lek",
    ],
  },
  {
    id: "rioleringswerken",
    icon: "Shovel",
    titel: "Rioleringswerken & Aanleg",
    prijs: "Op offerte",
    beschrijving: "Nieuwe aanleg en renovatie van rioleringen.",
    details: [
      "Nieuwe riolering aanleggen",
      "Renovatie bestaande riolering",
      "Graafwerken inbegrepen",
      "Conform EPB-normen",
    ],
  },
  {
    id: "septische-put",
    icon: "CircleDot",
    titel: "Septische Put Ruimen",
    prijs: "Op offerte",
    beschrijving: "Professioneel ledigen en reinigen van septische putten.",
    details: [
      "Vacuüm-lediging",
      "Reiniging binnenwanden",
      "Controle en keuring",
      "Verslag voor gemeente",
    ],
  },
  {
    id: "vetafscheider",
    icon: "Filter",
    titel: "Vetafscheider Ruimen",
    prijs: "Op offerte",
    beschrijving: "Reinigen van vetafscheiders voor horeca en bedrijven.",
    details: [
      "Horecasector",
      "Industrie & bedrijven",
      "Conform wetgeving",
      "Reinigingsattest",
    ],
  },
  {
    id: "huisaansluiting",
    icon: "HardHat",
    titel: "Huisaansluiting Riolering",
    prijs: "Op offerte",
    beschrijving: "Correcte aansluiting van uw woning op het rioolnet.",
    details: [
      "Nieuwbouw & renovatie",
      "Aansluiting rioolnet",
      "DWA & RWA gescheiden",
      "Keuring voorzien",
    ],
  },
  {
    id: "lekdetectie",
    icon: "Droplets",
    titel: "Waterlekkage Opsporen",
    prijs: "vanaf €79",
    beschrijving: "Lekdetectie zonder destructief zoeken.",
    details: [
      "Niet-destructief",
      "Thermische camera",
      "Exact lekpunt",
      "Snel rapport",
    ],
  },
] as const;

export const FAQ_ITEMS = [
  {
    vraag: "Hoe snel zijn jullie ter plaatse bij een dringende herstelling?",
    antwoord:
      "Bij spoed zijn wij gemiddeld binnen 35 minuten ter plaatse in Gent en omgeving. Voor minder dringende gevallen plannen wij een afspraak op uw maat.",
  },
  {
    vraag: "Wat kost een riool of afvoer ontstoppen?",
    antwoord:
      "Een afvoer ontstoppen start vanaf €89, een riool vanaf €149. Altijd een vaste prijsopgave vooraf. Voorrijkosten zijn €49 inclusief diagnose.",
  },
  {
    vraag: "Werken jullie ook 's nachts en in het weekend?",
    antwoord:
      "Ja, wij zijn 24/7 beschikbaar, ook op feestdagen. Het spoedtarief (€75/uur) is van toepassing buiten normale werkuren (ma–vr 07:00–19:00).",
  },
  {
    vraag: "Geven jullie garantie op uitgevoerde werken?",
    antwoord:
      "Absoluut. Wij geven 2 jaar garantie op alle uitgevoerde werken. Bij problemen te wijten aan onze uitvoering komen wij kosteloos langs.",
  },
  {
    vraag: "In welke regio zijn jullie actief?",
    antwoord:
      "Wij zijn actief in Gent en heel Oost-Vlaanderen: Merelbeke, Melle, Wetteren, Aalst, Dendermonde, Sint-Niklaas, Lochristi, Destelbergen en meer.",
  },
  {
    vraag: "Wat zijn de voorrijkosten?",
    antwoord:
      "Wij rekenen €49 voorrijkosten, inclusief de eerste diagnose ter plaatse. Geen verborgen kosten — altijd transparante prijzen.",
  },
] as const;

export const WERKGEBIED_STEDEN = [
  "Gent",
  "Merelbeke",
  "Melle",
  "Wetteren",
  "Aalst",
  "Dendermonde",
  "Sint-Niklaas",
  "Lochristi",
  "Destelbergen",
  "Gavere",
  "Zottegem",
  "Ronse",
] as const;

export const TARIEVEN = [
  {
    naam: "Standaard",
    prijs: "€55/uur",
    omschrijving: "Voor geplande werken en onderhoud",
    kenmerken: [
      "Gratis diagnose ter plaatse",
      "Transparante prijsopgave",
      "Flexibele planning",
      "2 jaar garantie",
    ],
    featured: false,
    badge: null,
  },
  {
    naam: "Spoedreparatie",
    prijs: "€75/uur",
    omschrijving: "Avond, weekend & feestdagen",
    kenmerken: [
      "Respons binnen 35 min",
      "7 dagen per week, 24/7",
      "Directe oplossing ter plaatse",
      "Noodreparatie & tijdelijke fix",
    ],
    featured: true,
    badge: "MEEST GEVRAAGD",
  },
  {
    naam: "Onderhoudscontract",
    prijs: "Op maat",
    omschrijving: "Periodiek onderhoud voor bedrijven",
    kenmerken: [
      "Vaste onderhoudsplanning",
      "Prioriteit bij storingen",
      "Jaarlijkse camera-inspectie",
      "Voordelig tarief",
    ],
    featured: false,
    badge: null,
  },
] as const;

export const WERKWIJZE_STAPPEN = [
  {
    nummer: "01",
    titel: "Contact opnemen",
    beschrijving: "Bel, WhatsApp of vul het formulier in. We reageren onmiddellijk.",
  },
  {
    nummer: "02",
    titel: "Snelle diagnose",
    beschrijving: "Wij komen ter plaatse en stellen het probleem exact vast.",
  },
  {
    nummer: "03",
    titel: "Offerte & akkoord",
    beschrijving: "U ontvangt een transparante prijsopgave zonder verborgen kosten.",
  },
  {
    nummer: "04",
    titel: "Vakkundige uitvoering",
    beschrijving: "Onze specialisten lossen het probleem professioneel op.",
  },
  {
    nummer: "05",
    titel: "Nazorg & garantie",
    beschrijving: "2 jaar garantie. Wij volgen uw dossier op achteraf.",
  },
] as const;
