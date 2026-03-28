import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const quickLinks = [
  { label: 'Diensten', id: 'diensten' },
  { label: 'Tarieven', id: 'tarieven' },
  { label: 'Werkwijze', id: 'werkwijze' },
  { label: 'Contact', id: 'contact' },
];

const services = [
  'WC & Afvoer Ontstoppen',
  'Riool Ontstoppen',
  'Waterlekkage',
  'CV-Ketel Service',
  'Video-inspectie',
  'Sanitair Installatie',
];

const regions = [
  'Oost-Vlaanderen',
  'West-Vlaanderen',
  'Antwerpen',
  'Vlaams-Brabant',
  'Limburg',
  'Brussel',
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-navy-900 pt-16 lg:pt-20 pb-8">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-gray-800">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a 
              href="#" 
              className="inline-block mb-6"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="font-bold text-2xl tracking-tight">
                <span className="text-white">SOD</span>
                <span className="text-cyan-400">EXPRESS</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Uw betrouwbare 24/7 loodgieter in Gent en omgeving. Snel, deskundig en altijd beschikbaar voor al uw spoedreparaties.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:0460250756"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-mono">04 60 25 07 56</span>
              </a>
              <a
                href="mailto:info@sodexpress.be"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">info@sodexpress.be</span>
              </a>
              <div className="flex items-center gap-3 text-gray-500">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">Gent, België</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">24/7 beschikbaar</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Snelle Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6">Onze Diensten</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-white mb-6">Werkgebied</h4>
            <ul className="space-y-3">
              {regions.map((region, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm">{region}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} SODEXPRESS. Alle rechten voorbehouden.</p>
            <p className="mt-1">
              KvK: 1234.567.890 | BTW: BE0123.456.789
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
              Privacybeleid
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
              Algemene Voorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
