import { useState } from 'react';
import { MENU_ITEMS, MenuItem } from '../data/cafeData';
import { Plus, Star, Flame, Check, SlidersHorizontal, Sparkles, X } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, quantity: number, customizations: { ice?: string; sugar?: string; spicy?: string; note?: string }) => void;
}

export function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'beverage' | 'food' | 'snack' | 'kids'>('all');
  
  // Customization Modal State
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedIce, setSelectedIce] = useState<string>('');
  const [selectedSugar, setSelectedSugar] = useState<string>('');
  const [selectedSpicy, setSelectedSpicy] = useState<string>('');
  const [note, setNote] = useState('');
  const [addedSuccess, setAddedSuccess] = useState(false);

  const categories = [
    { id: 'all', label: '🤎 All Menu' },
    { id: 'beverage', label: '☕ Beverages' },
    { id: 'food', label: '🍲 Foods' },
    { id: 'snack', label: '🍟 Snacks & Bites' },
    { id: 'kids', label: '🧸 Kids Menu' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    return selectedCategory === 'all' || item.category === selectedCategory;
  });

  const handleOpenCustomize = (item: MenuItem) => {
    setActiveItem(item);
    setQuantity(1);
    setSelectedIce(item.options?.iceLevel ? item.options.iceLevel[0] : '');
    setSelectedSugar(item.options?.sugarLevel ? item.options.sugarLevel[0] : '');
    setSelectedSpicy(item.options?.spicyLevel ? item.options.spicyLevel[0] : '');
    setNote('');
    setAddedSuccess(false);
  };

  const handleConfirmAddToCart = () => {
    if (!activeItem) return;
    onAddToCart(activeItem, quantity, {
      ice: selectedIce,
      sugar: selectedSugar,
      spicy: selectedSpicy,
      note: note
    });
    setAddedSuccess(true);
    setTimeout(() => {
      setActiveItem(null);
      setAddedSuccess(false);
    }, 900);
  };

  return (
    <section id="menu" className="py-24 bg-[#F7F3EE] relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#E6D5C3]/45 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#EAE0D5] border border-[#D7C4B7] text-[#6F4E37] text-xs font-bold tracking-wide">
            <Sparkles className="w-4 h-4" />
            <span>Delicious Catalog & Menu</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-800 font-serif-heading tracking-tight">
            Choose Your Favorite at KALA TEMU
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            From soothing latte coffee and comforting meals to sweet brown pastel snacks.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white p-2 rounded-2xl border border-[#E5D9CE] shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#8C6D53] text-white shadow-md shadow-[#8C6D53]/30'
                    : 'text-stone-600 hover:text-[#8C6D53] hover:bg-[#FAF6F0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-[2rem] bg-white border border-[#E5D9CE] overflow-hidden hover:border-[#8C6D53] hover:shadow-xl transition-all shadow-md flex flex-col group"
            >
              {/* Image & Tags */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
                
                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="bg-white/90 backdrop-blur-md text-[#8C6D53] text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-[#E5D9CE] shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-bold px-2.5 py-1 rounded-full border border-[#E5D9CE] flex items-center space-x-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{item.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-stone-800 font-bold text-lg">{item.name}</h3>
                    <span className="text-xs text-stone-400 shrink-0 font-medium">{item.calories}</span>
                  </div>
                  <p className="text-stone-600 text-xs leading-relaxed line-clamp-2">{item.description}</p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#F7F3EE]">
                  <div>
                    <span className="block text-[10px] uppercase text-stone-400 font-bold">Price</span>
                    <span className="text-[#8C6D53] font-extrabold text-lg">
                      Rp {item.price.toLocaleString('id-ID')}
                    </span>
                  </div>

                  <button
                    onClick={() => handleOpenCustomize(item)}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#8C6D53] to-[#A47E5B] text-white font-bold text-xs shadow-md shadow-[#8C6D53]/30 hover:scale-105 transition-all flex items-center space-x-1.5"
                  >
                    <Plus className="w-4 h-4 stroke-[3]" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <p className="text-stone-500 text-lg">No menu items found. 🥺</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-6 py-2.5 rounded-xl bg-[#8C6D53] text-white font-bold text-sm shadow-md"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>

      {/* Customization & Order Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border border-[#E5D9CE] rounded-[2.5rem] max-w-lg w-full overflow-hidden shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 text-stone-600 hover:text-stone-900 shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header Image */}
            <div className="relative h-56">
              <img src={activeItem.image} alt={activeItem.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="bg-white/90 text-[#8C6D53] border border-[#E5D9CE] text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block shadow-sm">
                  {activeItem.category.toUpperCase()}
                </span>
                <h3 className="text-2xl font-bold text-white font-serif-heading">{activeItem.name}</h3>
                <p className="text-[#E6D5C3] font-extrabold text-lg">Rp {activeItem.price.toLocaleString('id-ID')}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
              <p className="text-stone-600 text-sm">{activeItem.description}</p>

              {/* Options: Ice Level */}
              {activeItem.options?.iceLevel && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center space-x-1.5">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#8C6D53]" />
                    <span>Ice / Temperature Level</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {activeItem.options.iceLevel.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedIce(opt)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-bold border transition-all text-left ${
                          selectedIce === opt
                            ? 'bg-[#EAE0D5] border-[#8C6D53] text-[#6F4E37]'
                            : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-[#E5D9CE]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Options: Sugar Level */}
              {activeItem.options?.sugarLevel && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center space-x-1.5">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#8C6D53]" />
                    <span>Sugar Level</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {activeItem.options.sugarLevel.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedSugar(opt)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-bold border transition-all text-left ${
                          selectedSugar === opt
                            ? 'bg-[#EAE0D5] border-[#8C6D53] text-[#6F4E37]'
                            : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-[#E5D9CE]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Options: Spicy Level */}
              {activeItem.options?.spicyLevel && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center space-x-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-600" />
                    <span>Spicy Level</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {activeItem.options.spicyLevel.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedSpicy(opt)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-bold border transition-all text-left ${
                          selectedSpicy === opt
                            ? 'bg-amber-100 border-amber-400 text-amber-800'
                            : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-amber-200'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Note */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Special Instructions (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g., No onion, separate sauce..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#8C6D53]"
                />
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">Quantity</span>
                <div className="flex items-center space-x-3 bg-stone-50 border border-stone-200 px-3 py-1.5 rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 rounded-lg bg-white text-stone-700 font-bold hover:bg-stone-100 flex items-center justify-center shadow-sm"
                  >
                    -
                  </button>
                  <span className="text-stone-800 font-bold text-sm w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 rounded-lg bg-white text-stone-700 font-bold hover:bg-stone-100 flex items-center justify-center shadow-sm"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-[#FAF6F0] border-t border-[#E5D9CE] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-stone-500 font-bold block">Total Price</span>
                <span className="text-[#8C6D53] font-extrabold text-xl">
                  Rp {(activeItem.price * quantity).toLocaleString('id-ID')}
                </span>
              </div>

              <button
                onClick={handleConfirmAddToCart}
                disabled={addedSuccess}
                className={`px-6 py-3.5 rounded-2xl font-bold text-sm shadow-lg flex items-center space-x-2 transition-all ${
                  addedSuccess
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gradient-to-r from-[#8C6D53] to-[#A47E5B] text-white hover:scale-105 shadow-[#8C6D53]/30'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Added to Cart Successfully!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
