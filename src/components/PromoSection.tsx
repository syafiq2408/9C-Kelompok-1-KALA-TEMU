import { useState } from 'react';
import { PROMOS } from '../data/cafeData';
import { Tag, Copy, Check, Clock, MapPin, Gift } from 'lucide-react';

export function PromoSection() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="promo" className="py-24 bg-[#F2EBE1] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#E6D5C3]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#EAE0D5] border border-[#D7C4B7] text-[#6F4E37] text-xs font-bold tracking-wide">
            <Tag className="w-4 h-4" />
            <span>Business & Promotions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-800 font-serif-heading tracking-tight">
            Special Promos & Sweet Offers 🤎
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Enjoy special savings, student discounts, and special family packages from KALA TEMU Smart Cafe.
          </p>
        </div>

        {/* Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PROMOS.map((promo) => (
            <div
              key={promo.id}
              className="rounded-[2rem] bg-white border border-[#E5D9CE] overflow-hidden hover:border-[#8C6D53] hover:shadow-xl transition-all shadow-md flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-[#8C6D53] text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-md">
                  {promo.discount}
                </span>
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-stone-700 text-xs font-bold px-3 py-1 rounded-full border border-[#E5D9CE] shadow-sm">
                  {promo.validUntil}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-stone-800 font-bold text-xl mb-2">{promo.title}</h3>
                  <p className="text-stone-600 text-xs leading-relaxed">{promo.description}</p>
                </div>

                <div className="pt-4 border-t border-[#F7F3EE] flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] uppercase text-stone-400 font-bold">Promo Code</span>
                    <span className="text-[#8C6D53] font-mono font-bold text-sm tracking-wider">
                      {promo.code}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopyCode(promo.code)}
                    className="px-4 py-2.5 rounded-xl bg-[#FAF6F0] hover:bg-[#EAE0D5] text-[#8C6D53] font-bold text-xs flex items-center space-x-1.5 transition-colors border border-[#E5D9CE]"
                  >
                    {copiedCode === promo.code ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#8C6D53]" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Business Hours & Location Info Banner */}
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#FAF4EC] via-white to-[#EAE0D5] border-2 border-[#E5D9CE] p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAE0D5] border border-[#D7C4B7] flex items-center justify-center text-[#6F4E37] shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-stone-800 font-bold text-lg">Operating Hours 🤎</h4>
              <p className="text-stone-600 text-sm">
                Monday – Friday: 08:00 – 23:00 WIB<br />
                Saturday – Sunday: 08:00 – 24:00 WIB
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAE0D5] border border-[#D7C4B7] flex items-center justify-center text-[#6F4E37] shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-stone-800 font-bold text-lg">Smart Cafe Location 📍</h4>
              <p className="text-stone-600 text-sm">
                Jl. Inovasi Teknologi No. 88, Creative District<br />
                South Jakarta, Indonesia
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAE0D5] border border-[#D7C4B7] flex items-center justify-center text-[#6F4E37] shadow-sm">
                <Gift className="w-6 h-6" />
              </div>
              <h4 className="text-stone-800 font-bold text-lg">Kala Temu Loyalty Club ✨</h4>
              <p className="text-stone-600 text-sm">
                Join free membership via table QR, collect points on every purchase, and redeem for free coffee!
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
