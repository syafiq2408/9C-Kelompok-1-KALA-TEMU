import { Coffee, Cpu, Sparkles, ArrowRight, ShieldCheck, Wifi, Clock, Star } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onExploreTech: () => void;
}

export function Hero({ onExploreMenu, onExploreTech }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#FAF4EC] via-[#F7F3EE] to-[#F2EBE1]">
      
      {/* Background Soft Coffee Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E6D5C3]/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#D7C4B7]/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#EAE0D5] border border-[#D7C4B7] text-[#6F4E37] text-xs font-bold tracking-wide shadow-sm animate-pulse">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>☕ Cafe Open • 24 Smart Tables Ready • Cozy Latte Vibe</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-800 font-serif-heading leading-[1.1]">
              Where Time Meets <br />
              <span className="bg-gradient-to-r from-[#6F4E37] via-[#A47E5B] to-[#8C6D53] bg-clip-text text-transparent">
                Coffee Taste & Tech
              </span>
            </h1>

            <p className="text-stone-600 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Welcome to <strong className="text-[#8C6D53]">KALA TEMU</strong> 🤎 — A super cozy brown pastel latte smart cafe featuring delicious artisanal coffee, favorite dishes, and adorable IoT technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#8C6D53] to-[#A47E5B] text-white font-extrabold text-base shadow-lg shadow-[#8C6D53]/30 hover:shadow-[#8C6D53]/50 hover:scale-105 transition-all flex items-center justify-center space-x-2 group"
              >
                <Sparkles className="w-5 h-5 text-white" />
                <span>Explore Menu & Order</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreTech}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border-2 border-[#D7C4B7] text-stone-700 font-bold text-base hover:bg-[#FAF6F0] hover:border-[#A47E5B] transition-all flex items-center justify-center space-x-2 shadow-sm"
              >
                <Cpu className="w-5 h-5 text-[#8C6D53]" />
                <span>Smart Tech Simulation</span>
              </button>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#E5D9CE] max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 text-stone-600 text-sm font-medium">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>100% Halal & Fresh</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-600 text-sm font-medium">
                <Wifi className="w-5 h-5 text-[#8C6D53] shrink-0" />
                <span>Fast Wi-Fi</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-600 text-sm font-medium">
                <Clock className="w-5 h-5 text-[#A47E5B] shrink-0" />
                <span>08:00 - 23:00</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl shadow-stone-800/10 bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80"
                  alt="Kala Temu Smart Cafe Ambiance"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                
                {/* Floating Badge 1 */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5D9CE] shadow-xl flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#F7F3EE] border border-[#D7C4B7] flex items-center justify-center text-[#8C6D53]">
                      <Coffee className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-stone-800 font-bold text-sm">Signature Cappuccino</h4>
                      <p className="text-[#8C6D53] text-xs font-bold">Rp 32.000 • Best Seller ☕</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 bg-amber-100 px-2.5 py-1 rounded-full text-amber-800 text-xs font-extrabold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badge Top Right */}
              <div className="absolute -top-6 -right-6 hidden sm:flex items-center space-x-3 bg-white border-2 border-[#E5D9CE] px-4 py-3 rounded-2xl shadow-xl backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-[#F7F3EE] flex items-center justify-center text-[#8C6D53]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-stone-400 font-semibold">IoT Smart Table</span>
                  <span className="text-sm font-extrabold text-stone-800">Table #07 ✨</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
