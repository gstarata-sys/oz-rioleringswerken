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
    id: "camera-inspectie",
    icon: "Camera",
    titel: "Camera-inspectie",
    prijs: "vanaf €125",
    beschrijving: "Exacte diagnose met HD camera in uw riolering.",
    details: ["HD beeldkwaliteit", "Rapport + videobeelden", "Scheurinspectie", "Locatiebepaling lek"],
    popup: {
      intro: "Met onze HD camera-inspectie brengen wij de toestand van uw riolering exact in kaart. U ontvangt een visueel rapport met videobeelden — ideaal voor aan- en verkoop van een woning of bij aanhoudende problemen.",
      punten: ["HD beeldkwaliteit in kleur", "Scheurdetectie & wortels opsporen", "Exacte locatiebepaling van lekken", "Rapport + videobeelden als bijlage", "Geschikt voor keuring bij verkoop woning"],
      cta: "Plan een inspectie",
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
    titel: "Septische Put Ruimen",
    prijs: "Op offerte",
    beschrijving: "Professioneel ledigen en reinigen van septische putten.",
    details: ["Vacuüm-lediging", "Reiniging binnenwanden", "Controle en keuring", "Verslag voor gemeente"],
    popup: {
      intro: "De prijs voor het ruimen van een septische put hangt af van het aantal liters en het type put (beton of kunststof). Een gemiddelde betonnen put van 3.000L start vanaf €180. Wij bezorgen u vooraf altijd een vaste prijs.",
      punten: ["Vacuüm-lediging van alle putformaten", "Reiniging van binnenwanden inbegrepen", "Controle op scheuren en lekkages", "Officieel verslag voor gemeente of VMM", "Beton én kunststof septische putten"],
      cta: "Vraag een offerte op maat",
    },
  },
  {
    id: "vetafscheider",
    icon: "Filter",
    titel: "Vetafscheider Ruimen",
    prijs: "Op offerte",
    beschrijving: "Reinigen van vetafscheiders voor horeca en bedrijven.",
    details: ["Horecasector", "Industrie & bedrijven", "Conform wetgeving", "Reinigingsattest"],
    popup: {
      intro: "Vetafscheiders in horeca en industrie moeten wettelijk regelmatig gereinigd worden. Wij reinigen uw vetafscheider conform de geldende wetgeving en leveren ter plaatse een reinigingsattest af. De prijs hangt af van het volume en de vervuilingsgraad.",
      punten: ["Horeca, bakkerijen & industriële keukens", "Reinigen + spoelen van alle compartimenten", "Reinigingsattest ter plaatse afgeleverd", "Conform wetgeving (VLAREM)", "Onderhoudscontract mogelijk voor vaste prijs"],
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
    id: "lekdetectie",
    icon: "Droplets",
    titel: "Waterlekkage Opsporen",
    prijs: "vanaf €79",
    beschrijving: "Lekdetectie zonder destructief zoeken.",
    details: ["Niet-destructief", "Thermische camera", "Exact lekpunt", "Snel rapport"],
    popup: {
      intro: "Een verborgen waterlek kan grote schade veroorzaken. Met niet-destructieve technieken (thermische camera, akoestische detectie) vinden wij het exacte lekpunt zonder slopen. U ontvangt een rapport met de locatie en aanbevolen herstelwerkzaamheden.",
      punten: ["Niet-destructief — geen onnodige sloopwerken", "Thermische camera & akoestische detectie", "Exact lekpunt bepaald in één bezoek", "Snel schriftelijk rapport achteraf", "Combineerbaar met herstel ter plaatse"],
      cta: "Bel voor snelle lekdetectie",
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
