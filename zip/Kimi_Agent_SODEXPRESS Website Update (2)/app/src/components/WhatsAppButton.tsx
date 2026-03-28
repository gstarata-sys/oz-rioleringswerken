import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = '32460250756';
  const message = encodeURIComponent(
    'Hallo SODEXPRESS, ik heb een vraag over uw loodgietersdiensten.'
  );

  return (
    <>
      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-[200]">
        {/* Chat Popup */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-3xl shadow-2xl overflow-hidden animate-slide-up">
            <div className="p-4 bg-[#25D366] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">SODEXPRESS</p>
                  <p className="text-white/80 text-xs">Meestal direct antwoord</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="p-4 bg-gray-50">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm mb-4">
                <p className="text-gray-700 text-sm">
                  Hallo! 👋 Hoe kunnen wij u helpen? Stuur ons een bericht en we reageren zo snel
                  mogelijk.
                </p>
                <p className="text-gray-400 text-xs mt-2">SODEXPRESS Team</p>
              </div>
              <a
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Start chat op WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-7 h-7" />
          )}
        </button>
      </div>
    </>
  );
}
