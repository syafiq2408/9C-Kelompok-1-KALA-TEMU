import { useState } from 'react';
import { Cpu, Wifi, Zap, Bot, Sliders, CheckCircle2, Sparkles, Coffee } from 'lucide-react';

export function SmartTechSection() {
  const [tableNumber, setTableNumber] = useState(7);
  const [ambientColor, setAmbientColor] = useState<'mocha' | 'amber' | 'latte' | 'emerald'>('mocha');
  const [wirelessChargingActive, setWirelessChargingActive] = useState(true);
  const [roboticStatus, setRoboticStatus] = useState('Brewing Cappuccino #104 with precise 92°C water temperature...');
  const [simulating, setSimulating] = useState(false);

  const colors = {
    mocha: { bg: 'from-[#D7C4B7]/40 to-[#B89B82]/40', border: 'border-[#A47E5B]', text: 'text-[#6F4E37]', name: 'Mocha Brown Glow' },
    amber: { bg: 'from-amber-100 to-orange-100', border: 'border-amber-300', text: 'text-amber-700', name: 'Warm Cream Amber' },
    latte: { bg: 'from-[#F5EBE6] to-[#E3D5CA]', border: 'border-[#D5BDAF]', text: 'text-[#5C4033]', name: 'Caramel Latte Cream' },
    emerald: { bg: 'from-emerald-100 to-teal-100', border: 'border-emerald-300', text: 'text-emerald-700', name: 'Mint Matcha Green' },
  };

  const handleRunRobotSimulation = () => {
    setSimulating(true);
    setRoboticStatus('🤖 AI Barista scanning bean grind profile & moisture...');
    setTimeout(() => {
      setRoboticStatus('☕ Espresso extraction in progress (28 seconds)...');
    }, 1200);
    setTimeout(() => {
      setRoboticStatus('🚀 Cute Autonomous Delivery Rover bringing drink to Table #' + tableNumber + '...');
    }, 2500);
    setTimeout(() => {
      setRoboticStatus('✅ Delivered successfully! Enjoy your sweet beverage at KALA TEMU.');
      setSimulating(false);
    }, 4000);
  };

  return (
    <section id="tech" className="py-24 bg-white/75 relative overflow-hidden border-t border-[#E5D9CE]">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#E6D5C3]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#EAE0D5] border border-[#D7C4B7] text-[#6F4E37] text-xs font-bold tracking-wide">
            <Cpu className="w-4 h-4" />
            <span>Smart Technology & IoT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-800 font-serif-heading tracking-tight">
            Advanced Technology with a Latte Vibe
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            At KALA TEMU, technology enhances your coffee experience to be practical, cozy, and warm.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#FAF4EC] to-white border border-[#E5D9CE] shadow-xl shadow-stone-900/5 group hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#EAE0D5] border border-[#D7C4B7] flex items-center justify-center text-[#6F4E37] mb-6 group-hover:scale-110 transition-transform">
              <Wifi className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-3">IoT Smart Tables ✨</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Interactive tables with touch panels to call waiters, adjust brown pastel ambient lighting, and track order status in real time.
            </p>
          </div>

          <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#FAF4EC] to-white border border-[#E5D9CE] shadow-xl shadow-stone-900/5 group hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#EAE0D5] border border-[#D7C4B7] flex items-center justify-center text-[#6F4E37] mb-6 group-hover:scale-110 transition-transform">
              <Bot className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-3">AI Robotic Barista 🤖</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Combining professional human baristas with high-tech automated coffee extraction systems for perfect flavor consistency.
            </p>
          </div>

          <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#FAF4EC] to-white border border-[#E5D9CE] shadow-xl shadow-stone-900/5 group hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#EAE0D5] border border-[#D7C4B7] flex items-center justify-center text-[#6F4E37] mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-3">Qi Wireless Charging ⚡</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Never worry about running out of battery! Every table features built-in high-speed wireless charging pads.
            </p>
          </div>

        </div>

        {/* Interactive Smart Table Simulator */}
        <div className="rounded-[2.5rem] bg-white border-2 border-[#E5D9CE] p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E6D5C3]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-[#8C6D53] text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Live Interactive Smart Table Simulator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-800 font-serif-heading">
                Try Customizing Your Smart Table! 🤎
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Select your table number, change the brown pastel ambient lighting, activate wireless charging, and test the robotic coffee ordering simulation.
              </p>

              {/* Table Number Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Select Your Table Number (1 - 24)</label>
                <div className="flex items-center space-x-3">
                  {[1, 7, 12, 19, 24].map((num) => (
                    <button
                      key={num}
                      onClick={() => setTableNumber(num)}
                      className={`px-4 py-2.5 rounded-xl font-bold text-sm border transition-all ${
                        tableNumber === num
                          ? 'bg-[#8C6D53] border-[#6F4E37] text-white shadow-md shadow-[#8C6D53]/30'
                          : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-[#E5D9CE]'
                      }`}
                    >
                      Table #{num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ambient Light Color Picker */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center space-x-2">
                  <Sliders className="w-4 h-4 text-[#8C6D53]" />
                  <span>Brown Pastel Ambient Lighting Control</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(Object.keys(colors) as Array<keyof typeof colors>).map((colKey) => (
                    <button
                      key={colKey}
                      onClick={() => setAmbientColor(colKey)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold border transition-all flex items-center space-x-2 ${
                        ambientColor === colKey
                          ? `border-[#8C6D53] text-[#6F4E37] bg-[#FAF6F0] shadow-sm`
                          : 'border-stone-200 text-stone-600 bg-stone-50 hover:border-[#E5D9CE]'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full bg-[#A47E5B]" />
                      <span className="truncate">{colKey}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Wireless Charging Toggle */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${wirelessChargingActive ? 'bg-emerald-100 text-emerald-600' : 'bg-stone-200 text-stone-400'}`}>
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-stone-800 text-sm font-bold">Qi Wireless Charging Pad</h4>
                    <p className="text-stone-500 text-xs">Fast charge ready for smartphones</p>
                  </div>
                </div>
                <button
                  onClick={() => setWirelessChargingActive(!wirelessChargingActive)}
                  className={`w-12 h-7 rounded-full p-1 transition-colors ${wirelessChargingActive ? 'bg-emerald-500' : 'bg-stone-300'}`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform ${wirelessChargingActive ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

            </div>

            {/* Right Col: Smart Table UI Preview & Robotic Simulation */}
            <div className="lg:col-span-6">
              <div className={`rounded-[2.5rem] p-6 bg-gradient-to-br ${colors[ambientColor].bg} border-2 ${colors[ambientColor].border} shadow-xl space-y-6 transition-all duration-500`}>
                
                <div className="flex items-center justify-between border-b border-stone-200/60 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#8C6D53] font-extrabold shadow-sm">
                      #{tableNumber}
                    </div>
                    <div>
                      <h4 className="text-stone-800 font-bold text-base">Smart Table Dashboard</h4>
                      <p className="text-xs text-[#8C6D53] font-semibold">Status: Active & Connected 🤎</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>IoT Online</span>
                  </div>
                </div>

                {/* Simulated Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/90 border border-stone-200 shadow-sm space-y-1">
                    <span className="text-[10px] uppercase text-stone-400 font-bold">Wireless Charging</span>
                    <span className={`block text-sm font-bold ${wirelessChargingActive ? 'text-emerald-600' : 'text-stone-400'}`}>
                      {wirelessChargingActive ? '⚡ Active (15W Fast)' : '💤 Standby'}
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/90 border border-stone-200 shadow-sm space-y-1">
                    <span className="text-[10px] uppercase text-stone-400 font-bold">Ambient Lighting</span>
                    <span className={`block text-sm font-bold ${colors[ambientColor].text}`}>
                      {colors[ambientColor].name}
                    </span>
                  </div>
                </div>

                {/* Robotic Barista Status Box */}
                <div className="p-4 rounded-2xl bg-white/95 border border-stone-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-700 flex items-center space-x-1.5">
                      <Bot className="w-4 h-4 text-[#8C6D53]" />
                      <span>AI Robotic Barista Status</span>
                    </span>
                    <span className="text-[10px] bg-[#EAE0D5] text-[#6F4E37] px-2.5 py-0.5 rounded-full font-bold">Live AI</span>
                  </div>
                  <p className="text-xs text-stone-600 font-mono bg-stone-50 p-3 rounded-xl border border-stone-200">
                    {roboticStatus}
                  </p>
                  
                  <button
                    onClick={handleRunRobotSimulation}
                    disabled={simulating}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8C6D53] to-[#A47E5B] text-white font-bold text-xs shadow-md shadow-[#8C6D53]/30 hover:scale-[1.02] transition-all flex items-center justify-center space-x-2"
                  >
                    <Coffee className="w-4 h-4 text-white" />
                    <span>{simulating ? 'Simulation Running...' : 'Test Robotic Coffee Order Simulation'}</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
