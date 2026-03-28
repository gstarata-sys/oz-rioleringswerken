import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Diensten', id: 'diensten' },
    { label: 'Tarieven', id: 'tarieven' },
    { label: 'Werkwijze', id: 'werkwijze' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo - Always visible on white background */}
            <a 
              href="#" 
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="font-bold text-2xl tracking-tight">
                <span className="text-navy-900">SOD</span>
                <span className="text-cyan-500">EXPRESS</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-medium text-navy-700 hover:text-cyan-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:0460250756"
                className="flex items-center gap-2"
              >
                <Button 
                  className="bg-amber-500 hover:bg-amber-600 text-navy-900 font-semibold px-5 py-2.5"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  04 60 25 07 56
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-navy-900"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div 
          className="absolute inset-0 bg-navy-900/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="absolute top-[72px] left-0 right-0 bg-white shadow-lg">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-4 px-4 text-navy-700 hover:text-cyan-600 font-medium border-b border-gray-100 last:border-0"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:0460250756"
              className="mt-4"
            >
              <Button 
                className="w-full bg-amber-500 hover:bg-amber-600 text-navy-900 font-semibold py-3"
              >
                <Phone className="w-4 h-4 mr-2" />
                Bel 04 60 25 07 56
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
