import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { SmartTechSection } from './components/SmartTechSection';
import { PromoSection } from './components/PromoSection';
import { ReportTextSection } from './components/ReportTextSection';
import { CartModal, CartItem } from './components/CartModal';
import { PaymentModal } from './components/PaymentModal';
import { Footer } from './components/Footer';
import { MenuItem } from './data/cafeData';

export default function App() {
  const [activeSection, setActiveSection] = useState('menu');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  // Promo code state
  const [promoCode, setPromoCode] = useState('');
  const [discountRate, setDiscountRate] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');

  useEffect(() => {
    // Scroll to menu on initial load as requested (tampilan pertama langsung menu)
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleAddToCart = (
    item: MenuItem,
    quantity: number,
    customizations: { ice?: string; sugar?: string; spicy?: string; note?: string }
  ) => {
    const cartId = `${item.id}-${JSON.stringify(customizations)}`;
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((ci) => ci.cartId === cartId);
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += quantity;
        return copy;
      } else {
        return [...prev, { cartId, item, quantity, customizations }];
      }
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((ci) => {
          if (ci.cartId === cartId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (cartId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.cartId !== cartId));
  };

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'TECHNGROPI' || code === 'KALAMUDAH') {
      setDiscountRate(0.20);
      setPromoMessage('Promo berhasil digunakan! Diskon 20%.');
    } else if (code === 'FAMILYTEMU') {
      setDiscountRate(0.15);
      setPromoMessage('Promo Weekend Family berhasil! Diskon 15%.');
    } else {
      setDiscountRate(0);
      setPromoMessage('Kode promo tidak valid atau kadaluarsa.');
    }
  };

  const handleProceedToPayment = () => {
    setIsCartOpen(false);
    setIsPaymentOpen(true);
  };

  const handlePaymentSuccess = () => {
    setCartItems([]);
    setPromoCode('');
    setDiscountRate(0);
    setPromoMessage('');
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F7F3EE] text-stone-700 flex flex-col selection:bg-[#8C6D53] selection:text-white">
      
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Sections - Menu is placed first as requested ("tampilan pertamanya langsung menu") */}
      <main className="flex-1">
        <MenuSection onAddToCart={handleAddToCart} />

        <Hero
          onExploreMenu={() => {
            setActiveSection('menu');
            document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreTech={() => {
            setActiveSection('tech');
            document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <AboutSection />

        <SmartTechSection />

        <PromoSection />

        <ReportTextSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        promoCode={promoCode}
        setPromoCode={setPromoCode}
        discountRate={discountRate}
        onApplyPromo={handleApplyPromo}
        promoMessage={promoMessage}
        onProceedToPayment={handleProceedToPayment}
      />

      {/* Payment & Simulation Modal */}
      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        cartItems={cartItems}
        discountRate={discountRate}
        onPaymentSuccess={handlePaymentSuccess}
      />

    </div>
  );
}
