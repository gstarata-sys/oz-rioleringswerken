import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight">
                <span className={isScrolled ? 'text-navy-900' : 'text-white'}>SOD</span>
                <span className="text-cyan-500">EXPRESS</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('diensten')}
                className={`text-sm transition-colors ${isScrolled ? 'text-navy-600 hover:text-cyan-500' : 'text-white/80 hover:text-cyan-400'}`}
              >
                Diensten
              </button>
              <button
                onClick={() => scrollToSection('tarieven')}
                className={`text-sm transition-colors ${isScrolled ? 'text-navy-600 hover:text-cyan-500' : 'text-white/80 hover:text-cyan-400'}`}
              >
                Tarieven
              </button>
              <button
                onClick={() => scrollToSection('werkwijze')}
                className={`text-sm transition-colors ${isScrolled ? 'text-navy-600 hover:text-cyan-500' : 'text-white/80 hover:text-cyan-400'}`}
              >
                Werkwijze
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className={`text-sm transition-colors ${isScrolled ? 'text-navy-600 hover:text-cyan-500' : 'text-white/80 hover:text-cyan-400'}`}
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-sm transition-colors ${isScrolled ? 'text-navy-600 hover:text-cyan-500' : 'text-white/80 hover:text-cyan-400'}`}
              >
                Contact
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:0460250756"
                className={`flex items-center gap-2 font-mono text-sm transition-colors ${isScrolled ? 'text-navy-600' : 'text-white'}`}
              >
                <Phone className="w-4 h-4 text-cyan-500" />
                04 60 25 07 56
              </a>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-cyan-500 text-white hover:bg-cyan-600 font-semibold px-5"
              >
                Offerte aanvragen
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-navy-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-navy/98 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button
            onClick={() => scrollToSection('diensten')}
            className="text-2xl text-white hover:text-cyan-accent transition-colors"
          >
            Diensten
          </button>
          <button
            onClick={() => scrollToSection('tarieven')}
            className="text-2xl text-white hover:text-cyan-accent transition-colors"
          >
            Tarieven
          </button>
          <button
            onClick={() => scrollToSection('werkwijze')}
            className="text-2xl text-white hover:text-cyan-accent transition-colors"
          >
            Werkwijze
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-2xl text-white hover:text-cyan-accent transition-colors"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-2xl text-white hover:text-cyan-accent transition-colors"
          >
            Contact
          </button>
          <a
            href="tel:0460250756"
            className="flex items-center gap-3 mt-4 px-8 py-4 bg-cyan-accent text-navy-dark rounded-xl font-semibold"
          >
            <Phone className="w-5 h-5" />
            Bel 04 60 25 07 56
          </a>
        </div>
      </div>
    </>
  );
}
