import { useState, useEffect } from 'react';
import { Coffee, ShoppingBag, Menu as MenuIcon, X, Sparkles, Cpu, BookOpen, Users, Tag } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navbar({ cartCount, onOpenCart, activeSection, setActiveSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'menu', label: 'Menu List', icon: Sparkles },
    { id: 'hero', label: 'Home', icon: Coffee },
    { id: 'about', label: 'About Us', icon: Users },
    { id: 'tech', label: 'Smart Tech', icon: Cpu },
    { id: 'promo', label: 'Promo & Business', icon: Tag },
    { id: 'report', label: 'Report Text', icon: BookOpen },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#E5D9CE] shadow-lg shadow-stone-900/5 py-3' 
        : 'bg-gradient-to-b from-[#F7F3EE] to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('menu')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#A47E5B] to-[#C8B6A6] flex items-center justify-center shadow-md shadow-stone-800/10 group-hover:scale-105 transition-transform">
              <Coffee className="w-6 h-6 text-white stroke-[2.5]" />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-[#6F4E37] font-extrabold">
                ☕ Kala Temu Smart Cafe
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/80 border border-[#E5D9CE] px-3 py-1.5 rounded-full shadow-sm backdrop-blur-sm">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive 
                      ? 'bg-[#8C6D53] text-white shadow-md shadow-[#8C6D53]/30' 
                      : 'text-stone-600 hover:text-[#8C6D53] hover:bg-[#F7F3EE]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#A47E5B]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-2xl bg-white border border-[#E5D9CE] text-stone-700 hover:text-[#8C6D53] hover:border-[#A47E5B] transition-all shadow-sm group flex items-center space-x-2"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 text-[#8C6D53] group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs font-bold">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#A47E5B] text-white font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-2xl bg-white border border-[#E5D9CE] text-stone-700 hover:text-[#8C6D53]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#8C6D53]" /> : <MenuIcon className="w-6 h-6 text-[#8C6D53]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-[#E5D9CE] shadow-2xl py-4 px-6 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                    isActive 
                      ? 'bg-[#8C6D53] text-white shadow-md' 
                      : 'text-stone-600 hover:bg-[#F7F3EE]'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#A47E5B]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
