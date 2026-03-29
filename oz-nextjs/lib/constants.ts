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
    details: ["Riool volledig vrijmaken", "Camera-controle na werk", "Ter plaatse binnen 35 min", "2 jaar garantie"],
    popup: {
      intro: "Een verstopt riool kan leiden tot wateroverlast en onaangename geuren. Wij lossen het probleem snel en definitief op met professionele hogedrukspuiting. Na de ontstopping voeren wij standaard een camera-controle uit om te controleren of het riool volledig vrij is.",
      punten: ["Hogedrukspuiting tot 200 bar", "Camera-controle inbegrepen na werk", "Gemiddeld ter plaatse binnen 35 min", "Vaste prijs — geen verrassingen achteraf", "2 jaar garantie op de uitvoering"],
      cta: "Bel voor directe hulp",
    },
  },
  {
    id: "afvoer-ontstoppen",
    icon: "Pipette",
    titel: "Afvoer Ontstoppen",
    prijs: "vanaf €89",
    beschrijving: "Bad, douche, wastafel, keukenafvoer — snel opgelost.",
    details: ["Binnenhuisafvoeren", "Keuken & badkamer", "Geen beschadigingen", "Directe service"],
    popup: {
      intro: "Verstopte bad, douche, wastafel of keukenafvoer? Wij reinigen alle binnenhuisafvoeren snel en zonder beschadigingen. De meeste verstoppingen lossen wij op tijdens het eerste bezoek.",
      punten: ["Bad, douche, wastafel & keuken", "Spiraalreiniging of hogedruk", "Geen beschadigingen aan leidingen", "Directe service — zelfde dag mogelijk", "Prijs vanaf €89 incl. diagnose"],
      cta: "Bel of stuur een bericht",
    },
  },
  {
    id: "vloerverwarming",
    icon: "Flame",
    titel: "Vloerverwarming",
    prijs: "Op offerte",
    beschrijving: "Installatie en herstelling van vloerverwarming (elektrisch & water).",
    details: ["Elektrisch & watervloerverwarming", "Nieuwbouw & renovatie", "Thermostaat inbegrepen", "Gecombineerd met chape"],
    popup: {
      intro: "Vloerverwarming zorgt voor een aangenaam en energiezuinig binnenklimaat. Wij installeren zowel elektrische als watervloerverwarming, geschikt voor nieuwbouw én renovatie. Na een gratis plaatsbezoek bezorgen wij u een offerte op maat.",
      punten: ["Elektrische & watervloerverwarming", "Nieuwbouw én bestaande woningen", "Thermostaat plaatsing inbegrepen", "Gecombineerd met chapewerken mogelijk", "Gratis plaatsbezoek en offerte"],
      cta: "Vraag een gratis offerte",
    },
  },
  {
    id: "rioleringswerken",
    icon: "Shovel",
    titel: "Rioleringswerken & Aanleg",
    prijs: "Op offerte",
    beschrijving: "Nieuwe aanleg en renovatie van rioleringen.",
    details: ["Nieuwe riolering aanleggen", "Renovatie bestaande riolering", "Graafwerken inbegrepen", "Conform EPB-normen"],
    popup: {
      intro: "Voor de aanleg van nieuwe rioleringen of renovatie van bestaande leidingen bezorgen wij u een vrijblijvende offerte na een gratis plaatsbezoek. De prijs hangt af van de lengte, het type leiding en de graafdiepte.",
      punten: ["Nieuwe riolering aanleggen (DWA & RWA)", "Renovatie & relining bestaande leidingen", "Graafwerken volledig inbegrepen", "Conform EPB- en rioleringsnormen", "Offerte altijd gratis en vrijblijvend"],
      cta: "Vraag een gratis offerte",
    },
  },
  {
    id: "septische-put",
    icon: "CircleDot",
    titel: "Septische Put Plaatsen",
    prijs: "Op offerte",
    beschrijving: "Plaatsing van beton of kunststof septische putten op maat.",
    details: ["Betonnen & kunststof putten", "Graafwerken inbegrepen", "Keuring & attest", "Conform wetgeving"],
    popup: {
      intro: "De prijs voor het plaatsen van een septische put hangt af van het volume en het type put (beton of kunststof). Wij voorzien de volledige plaatsing inclusief graafwerken en conformiteitsattest. Na een gratis plaatsbezoek ontvangt u een vaste offerte.",
      punten: ["Betonnen én kunststof septische putten", "Graafwerken volledig inbegrepen", "Keuring en conformiteitsattest voorzien", "Conform VMM- en rioleringsnormen", "Offerte na gratis plaatsbezoek"],
      cta: "Vraag een offerte op maat",
    },
  },
  {
    id: "chapewerken",
    icon: "Layers",
    titel: "Chapewerken",
    prijs: "Op offerte",
    beschrijving: "Cementdekvloer voor nieuwbouw, renovatie en vloerverwarming.",
    details: ["Cementdekvloer", "Nivellering", "Nieuwbouw & renovatie", "Sneldrogende chape"],
    popup: {
      intro: "Een kwalitatieve dekvloer is de basis van elke afwerking. Wij leggen cementgebonden en anhydrietdekvloeren voor nieuwbouw, renovatie en in combinatie met vloerverwarming. De prijs wordt bepaald per m² na een gratis plaatsbezoek.",
      punten: ["Cementgebonden & anhydrietdekvloer", "Voorbereiding & grondlaag inbegrepen", "Gecombineerd met vloerverwarming mogelijk", "Sneldrogende chape op aanvraag", "Prijs per m² op offerte"],
      cta: "Vraag een offerte",
    },
  },
  {
    id: "huisaansluiting",
    icon: "HardHat",
    titel: "Huisaansluiting Riolering",
    prijs: "Op offerte",
    beschrijving: "Correcte aansluiting van uw woning op het rioolnet.",
    details: ["Nieuwbouw & renovatie", "Aansluiting rioolnet", "DWA & RWA gescheiden", "Keuring voorzien"],
    popup: {
      intro: "Bij nieuwbouw of renovatie is een correcte aansluiting op het rioolnet verplicht. Wij verzorgen de volledige aansluiting inclusief de scheiding van vuil water (DWA) en regenwater (RWA), en regelen het conformiteitsattest.",
      punten: ["Nieuwbouw & bestaande woningen", "Gescheiden stelsel DWA & RWA", "Aansluiting op gemeentelijk rioolnet", "Keuring en conformiteitsattest voorzien", "Graafwerken volledig inbegrepen"],
      cta: "Plan een plaatsbezoek",
    },
  },
  {
    id: "tegels-zetten",
    icon: "Grid3X3",
    titel: "Tegels Zetten",
    prijs: "Op offerte",
    beschrijving: "Vloer- en wandtegels voor badkamer, keuken en andere ruimtes.",
    details: ["Vloer- & wandtegels", "Badkamer & keuken", "Waterdichte afwerking", "Nette voegen"],
    popup: {
      intro: "Wij plaatsen vloer- en wandtegels in alle formaten en stijlen, van badkamer en keuken tot leefruimte en terras. Inclusief waterdichte ondervloer en nette voegen. De prijs wordt bepaald per m² na een gratis plaatsbezoek.",
      punten: ["Vloer- & wandtegels in alle formaten", "Badkamer, keuken & leefruimte", "Waterdichte ondervloer voorzien", "Nette voegen & professionele afwerking", "Prijs per m² op offerte"],
      cta: "Vraag een offerte",
    },
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
      "Ja, wij zijn 24/7 beschikbaar, ook op feestdagen. Het spoedtarief (€125/uur) is van toepassing buiten normale werkuren (ma–vr 07:00–19:00).",
  },
  {
    vraag: "Geven jullie garantie op uitgevoerde werken?",
    antwoord:
      "Absoluut. Wij geven 2 jaar garantie op alle uitgevoerde werken. Bij problemen te wijten aan onze uitvoering komen wij kosteloos langs.",
  },
  {
    vraag: "In welke regio zijn jullie actief?",
    antwoord:
      "Wij zijn actief in Gent en heel Oost-Vlaanderen: Merelbeke, Melle, Wetteren, Aalst, Dendermonde, Sint-Niklaas, Lochristi, Destelbergen en meer. Buiten Oost-Vlaanderen werken wij ook — hiervoor rekenen wij een kilometervergoeding van €0,45/km.",
  },
  {
    vraag: "Wat zijn de voorrijkosten?",
    antwoord:
      "Wij rekenen €49 voorrijkosten, inclusief de eerste diagnose ter plaatse. Geen verborgen kosten — altijd transparante prijzen.",
  },
  {
    vraag: "Doen jullie ook vloerverwarming, chapewerken en tegelwerken?",
    antwoord:
      "Ja, naast rioleringswerken voeren wij ook vloerverwarming (elektrisch & water), chapewerken en tegelwerken uit. Vraag een gratis offerte aan via ons contactformulier of bel ons direct.",
  },
  {
    vraag: "Plaatsen jullie ook septische putten?",
    antwoord:
      "Ja, wij plaatsen zowel betonnen als kunststof septische putten, inclusief graafwerken, keuring en conformiteitsattest. Na een gratis plaatsbezoek ontvangt u een offerte op maat.",
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
    prijs: "€125/uur",
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
