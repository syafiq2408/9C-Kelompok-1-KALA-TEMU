import { X, Trash2, ShoppingBag, ArrowRight, Tag, Sparkles } from 'lucide-react';
import { MenuItem } from '../data/cafeData';

export interface CartItem {
  cartId: string;
  item: MenuItem;
  quantity: number;
  customizations: {
    ice?: string;
    sugar?: string;
    spicy?: string;
    note?: string;
  };
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  promoCode: string;
  setPromoCode: (code: string) => void;
  discountRate: number;
  onApplyPromo: () => void;
  promoMessage: string;
  onProceedToPayment: () => void;
}

export function CartModal({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  promoCode,
  setPromoCode,
  discountRate,
  onApplyPromo,
  promoMessage,
  onProceedToPayment,
}: CartModalProps) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const discountAmount = subtotal * discountRate;
  const tax = (subtotal - discountAmount) * 0.10; // 10% tax/service
  const total = subtotal - discountAmount + tax;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-stone-900/45 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border-l border-[#E5D9CE] w-full max-w-md h-full flex flex-col justify-between shadow-2xl relative animate-slideLeft">
        
        {/* Header */}
        <div className="p-6 border-b border-[#E5D9CE] flex items-center justify-between bg-[#FAF6F0]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EAE0D5] border border-[#D7C4B7] flex items-center justify-center text-[#6F4E37] shadow-sm">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-stone-800 font-bold text-lg">KALA TEMU Cart</h3>
              <p className="text-xs text-stone-500 font-medium">{cartItems.length} menu items selected</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white text-stone-600 hover:text-stone-900 shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF6F0] flex items-center justify-center mx-auto text-[#A47E5B]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="text-stone-500 text-sm">Your shopping cart is empty. 🥺</p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#8C6D53] text-white font-bold text-xs shadow-md"
              >
                Start Choosing Menu
              </button>
            </div>
          ) : (
            cartItems.map((cartItem) => (
              <div
                key={cartItem.cartId}
                className="p-4 rounded-2xl bg-[#FAF6F0]/60 border border-[#E5D9CE] flex space-x-4 items-center shadow-sm"
              >
                <img
                  src={cartItem.item.image}
                  alt={cartItem.item.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0 shadow-sm"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-stone-800 font-bold text-sm truncate">{cartItem.item.name}</h4>
                  <p className="text-[#8C6D53] font-extrabold text-xs">
                    Rp {cartItem.item.price.toLocaleString('id-ID')}
                  </p>

                  {/* Customizations tags */}
                  <div className="flex flex-wrap gap-1 mt-1 text-[10px] text-stone-500">
                    {cartItem.customizations.ice && (
                      <span className="bg-white px-2 py-0.5 rounded-md border border-[#E5D9CE]">
                        {cartItem.customizations.ice}
                      </span>
                    )}
                    {cartItem.customizations.sugar && (
                      <span className="bg-white px-2 py-0.5 rounded-md border border-[#E5D9CE]">
                        {cartItem.customizations.sugar}
                      </span>
                    )}
                    {cartItem.customizations.spicy && (
                      <span className="bg-white px-2 py-0.5 rounded-md border border-[#E5D9CE]">
                        {cartItem.customizations.spicy}
                      </span>
                    )}
                    {cartItem.customizations.note && (
                      <span className="bg-white px-2 py-0.5 rounded-md border border-[#E5D9CE] text-[#8C6D53] font-medium">
                        Note: {cartItem.customizations.note}
                      </span>
                    )}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3 mt-3">
                    <div className="flex items-center space-x-2 bg-white border border-[#E5D9CE] px-2.5 py-1 rounded-xl shadow-sm">
                      <button
                        onClick={() => onUpdateQuantity(cartItem.cartId, -1)}
                        className="text-stone-600 hover:text-stone-950 font-bold text-xs px-1"
                      >
                        -
                      </button>
                      <span className="text-stone-800 font-bold text-xs w-4 text-center">{cartItem.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(cartItem.cartId, 1)}
                        className="text-stone-600 hover:text-stone-950 font-bold text-xs px-1"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(cartItem.cartId)}
                      className="p-1.5 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-100 transition-colors border border-rose-200"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-[#FAF6F0] border-t border-[#E5D9CE] space-y-4">
            
            {/* Promo Code Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center space-x-1.5">
                <Tag className="w-3.5 h-3.5 text-[#8C6D53]" />
                <span>Have a Promo Code?</span>
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="e.g., TECHNGROPI"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-white border border-[#E5D9CE] rounded-xl px-3 py-2 text-xs text-stone-800 uppercase placeholder-stone-400 focus:outline-none focus:border-[#8C6D53] shadow-sm"
                />
                <button
                  onClick={onApplyPromo}
                  className="px-4 py-2 bg-[#EAE0D5] hover:bg-[#D7C4B7] text-[#6F4E37] font-bold text-xs rounded-xl border border-[#D7C4B7] transition-colors"
                >
                  Apply
                </button>
              </div>
              {promoMessage && (
                <p className={`text-xs font-bold ${discountRate > 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
                  {promoMessage}
                </p>
              )}
            </div>

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-stone-600 pt-2 border-t border-[#E5D9CE] font-medium">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rp {subtotal.toLocaleString('id-ID')}</span>
              </div>
              {discountRate > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Promo Discount ({discountRate * 100}%)</span>
                  <span>- Rp {discountAmount.toLocaleString('id-ID')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Tax & Service (10%)</span>
                <span>Rp {tax.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-stone-800 font-extrabold text-base pt-2 border-t border-[#E5D9CE]">
                <span>Total Payment</span>
                <span className="text-[#8C6D53]">Rp {total.toLocaleString('id-ID')}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={onProceedToPayment}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#8C6D53] to-[#A47E5B] text-white font-bold text-sm shadow-lg shadow-[#8C6D53]/30 hover:scale-[1.02] transition-all flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span>Proceed to Payment Simulation</span>
              <ArrowRight className="w-5 h-5" />
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
