import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 lg:py-28 bg-white"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-6">
            CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Klaar om te{' '}
            <span className="text-cyan-600">beginnen?</span>
          </h2>
          <p className="text-lg text-navy-600">
            Vul het formulier in en we reageren binnen 30 minuten. Of bel ons direct voor spoed—wij staan 24/7 voor u klaar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl hover:bg-cyan-50 transition-colors">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-navy-500 text-sm mb-1">Telefoon (24/7)</p>
                  <a
                    href="tel:0460250756"
                    className="text-navy-900 font-mono text-lg hover:text-cyan-600 transition-colors"
                  >
                    04 60 25 07 56
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl hover:bg-cyan-50 transition-colors">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-navy-500 text-sm mb-1">E-mail</p>
                  <a
                    href="mailto:info@sodexpress.be"
                    className="text-navy-900 font-mono text-lg hover:text-cyan-600 transition-colors"
                  >
                    info@sodexpress.be
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl hover:bg-cyan-50 transition-colors">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-navy-500 text-sm mb-1">Adres</p>
                  <p className="text-navy-900 font-mono text-lg">Gent, België</p>
                  <p className="text-navy-500 text-sm">Werkzaam in heel Vlaanderen</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl hover:bg-cyan-50 transition-colors">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-navy-500 text-sm mb-1">Openingstijden</p>
                  <p className="text-navy-900 font-mono text-lg">24/7 beschikbaar</p>
                  <p className="text-navy-500 text-sm">Ook in weekend en op feestdagen</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 p-6 bg-navy-900 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-semibold">Vertrouwd & Veilig</span>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">• SSL-beveiligde verbinding</p>
                <p className="text-gray-400">• Geen voorrijkosten bij afname</p>
                <p className="text-gray-400">• 100% garantie op werk</p>
                <p className="text-gray-400">• KvK: 1234.567.890</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-6 lg:p-10 bg-white rounded-3xl shadow-xl border border-gray-100">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-bold text-2xl text-navy-900 mb-2">
                    Bedankt voor uw aanvraag!
                  </h3>
                  <p className="text-navy-600">
                    We nemen binnen 30 minuten contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="font-semibold text-2xl text-navy-900 mb-6">
                    Vraag een offerte aan
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-navy-600 text-sm font-medium mb-2">Naam *</label>
                      <Input
                        type="text"
                        placeholder="Uw naam"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-navy-600 text-sm font-medium mb-2">E-mailadres *</label>
                      <Input
                        type="email"
                        placeholder="uw@email.be"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-navy-600 text-sm font-medium mb-2">Telefoonnummer</label>
                      <Input
                        type="tel"
                        placeholder="04xx xxx xxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-navy-600 text-sm font-medium mb-2">Onderwerp *</label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) => setFormData({ ...formData, subject: value })}
                      >
                        <SelectTrigger className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-cyan-500 focus:ring-cyan-500">
                          <SelectValue placeholder="Selecteer onderwerp" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="spoed">Spoedreparatie</SelectItem>
                          <SelectItem value="lekkage">Lekkage</SelectItem>
                          <SelectItem value="ontstopping">Ontstopping</SelectItem>
                          <SelectItem value="cv">CV-ketel</SelectItem>
                          <SelectItem value="installatie">Installatie</SelectItem>
                          <SelectItem value="onderhoud">Onderhoud</SelectItem>
                          <SelectItem value="anders">Anders</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-navy-600 text-sm font-medium mb-2">Bericht *</label>
                    <Textarea
                      placeholder="Beschrijf uw probleem of vraag..."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-cyan-500 focus:ring-cyan-500 resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 mb-6">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="w-5 h-5 mt-0.5 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                    />
                    <label htmlFor="privacy" className="text-navy-600 text-sm">
                      Ik ga akkoord met de{' '}
                      <a href="#" className="text-cyan-600 hover:underline">
                        privacyverklaring
                      </a>{' '}
                      en geef toestemming om mijn gegevens te verwerken.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-5 h-auto"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Verstuur aanvraag
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
