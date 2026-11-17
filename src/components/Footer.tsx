import { Coffee, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5D9CE] py-16 text-stone-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#E5D9CE]">
          
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#A47E5B] to-[#C8B6A6] flex items-center justify-center shadow-md shadow-[#8C6D53]/20">
                <Coffee className="w-5 h-5 text-white stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-[#6F4E37] via-[#A47E5B] to-[#8C6D53] bg-clip-text text-transparent font-serif-heading">
                KALA TEMU
              </span>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">
              A warm brown pastel latte smart cafe where taste, time, and future IoT technology meet. 🤎
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-stone-800 font-bold text-sm uppercase tracking-wider">Main Menu</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#menu" className="hover:text-[#8C6D53] transition-colors">Cappuccino & Matcha</a></li>
              <li><a href="#menu" className="hover:text-[#8C6D53] transition-colors">Fried Rice & Noodles</a></li>
              <li><a href="#menu" className="hover:text-[#8C6D53] transition-colors">Pizza, Spaghetti & Mac and Cheese</a></li>
              <li><a href="#menu" className="hover:text-[#8C6D53] transition-colors">Fries, Dimsum & Mozzarella Sticks</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-stone-800 font-bold text-sm uppercase tracking-wider">Smart Technology</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#tech" className="hover:text-[#8C6D53] transition-colors">IoT Smart Tables</a></li>
              <li><a href="#tech" className="hover:text-[#8C6D53] transition-colors">AI Robotic Barista</a></li>
              <li><a href="#tech" className="hover:text-[#8C6D53] transition-colors">Qi Wireless Charging</a></li>
              <li><a href="#tech" className="hover:text-[#8C6D53] transition-colors">Smart Lighting Ambiance</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-stone-800 font-bold text-sm uppercase tracking-wider">Development Team</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              Princessa Mikayla, Adiva Ferdin, Raffa Shaquille, Danadipa Natasatria, and Andi Alena Sophia. 🤎
            </p>
            <div className="text-xs text-[#8C6D53] font-bold pt-1">
              Smart Cafe Project 2026
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 space-y-4 sm:space-y-0">
          <p>© 2026 KALA TEMU Smart Cafe. All rights reserved. 🤎</p>
          <p className="flex items-center space-x-1">
            <span>Built with warmth & smart technology</span>
            <Heart className="w-3.5 h-3.5 text-[#8C6D53] fill-[#8C6D53]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
