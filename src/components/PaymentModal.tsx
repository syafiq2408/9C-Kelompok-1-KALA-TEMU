import { useState } from 'react';
import { X, QrCode, CreditCard, Wallet, Banknote, CheckCircle2, ArrowRight, Loader2, Sparkles, Printer, Download, Copy, Check } from 'lucide-react';
import { CartItem } from './CartModal';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  discountRate: number;
  onPaymentSuccess: () => void;
}

export function PaymentModal({
  isOpen,
  onClose,
  cartItems,
  discountRate,
  onPaymentSuccess,
}: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'qris' | 'gopay' | 'ovo' | 'dana' | 'cash' | 'card'>('qris');
  const [diningType, setDiningType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [tableNumber, setTableNumber] = useState('07');
  const [customerName, setCustomerName] = useState('');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [copiedReceipt, setCopiedReceipt] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const discountAmount = subtotal * discountRate;
  const tax = (subtotal - discountAmount) * 0.10;
  const total = subtotal - discountAmount + tax;

  const handleSimulatePayment = () => {
    setProcessing(true);
    const generatedId = 'KT-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);

    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      onPaymentSuccess();
    }, 2500);
  };

  const getReceiptText = () => {
    let text = `=================================\n`;
    text += `       KALA TEMU SMART CAFE      \n`;
    text += `  Jl. Inovasi Teknologi No. 88   \n`;
    text += `=================================\n`;
    text += `Order ID : ${orderId}\n`;
    text += `Name     : ${customerName || 'Kala Temu Guest'}\n`;
    text += `Type     : ${diningType.toUpperCase()} ${diningType === 'dine-in' ? `(Table #${tableNumber})` : ''}\n`;
    text += `Time     : ${new Date().toLocaleString()}\n`;
    text += `---------------------------------\n`;
    cartItems.forEach((ci) => {
      text += `${ci.quantity}x ${ci.item.name} - Rp ${(ci.item.price * ci.quantity).toLocaleString('id-ID')}\n`;
      if (ci.customizations.ice) text += `   - ${ci.customizations.ice}\n`;
      if (ci.customizations.sugar) text += `   - ${ci.customizations.sugar}\n`;
      if (ci.customizations.spicy) text += `   - ${ci.customizations.spicy}\n`;
      if (ci.customizations.note) text += `   - Note: ${ci.customizations.note}\n`;
    });
    text += `---------------------------------\n`;
    text += `Subtotal : Rp ${subtotal.toLocaleString('id-ID')}\n`;
    if (discountRate > 0) {
      text += `Discount : - Rp ${discountAmount.toLocaleString('id-ID')}\n`;
    }
    text += `Tax (10%): Rp ${tax.toLocaleString('id-ID')}\n`;
    text += `TOTAL    : Rp ${total.toLocaleString('id-ID')}\n`;
    text += `Paid via : ${paymentMethod.toUpperCase()}\n`;
    text += `=================================\n`;
    text += `     Thank You for Visiting!     \n`;
    text += `  Where Time Meets Taste & Tech  \n`;
    text += `=================================\n`;
    return text;
  };

  const handleDownloadReceipt = () => {
    const text = getReceiptText();
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Receipt-KalaTemu-${orderId}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopyReceipt = () => {
    const text = getReceiptText();
    navigator.clipboard.writeText(text);
    setCopiedReceipt(true);
    setTimeout(() => setCopiedReceipt(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/45 backdrop-blur-md animate-fadeIn">
      <div className="bg-white border border-[#E5D9CE] rounded-[2.5rem] max-w-xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-100 text-stone-600 hover:text-stone-900 shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {!success ? (
          <div className="p-8 space-y-6 overflow-y-auto">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#EAE0D5] border border-[#D7C4B7] text-[#6F4E37] text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Secure Payment Simulation</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 font-serif-heading">KALA TEMU Checkout & Payment</h3>
              <p className="text-stone-500 text-xs">Choose a digital or cash payment method to complete your order.</p>
            </div>

            {/* Customer Name & Dining Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Customer Name</label>
                <input
                  type="text"
                  placeholder="e.g., John Doe"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#8C6D53]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Order Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setDiningType('dine-in')}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      diningType === 'dine-in'
                        ? 'bg-[#EAE0D5] border-[#8C6D53] text-[#6F4E37]'
                        : 'bg-stone-50 border-stone-200 text-stone-600'
                    }`}
                  >
                    Dine-In
                  </button>
                  <button
                    onClick={() => setDiningType('takeaway')}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      diningType === 'takeaway'
                        ? 'bg-[#EAE0D5] border-[#8C6D53] text-[#6F4E37]'
                        : 'bg-stone-50 border-stone-200 text-stone-600'
                    }`}
                  >
                    Takeaway
                  </button>
                </div>
              </div>
            </div>

            {diningType === 'dine-in' && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">IoT Table Number</label>
                <input
                  type="text"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-800 focus:outline-none focus:border-[#8C6D53]"
                />
              </div>
            )}

            {/* Payment Method Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Select Payment Method</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'qris', label: 'QRIS', icon: QrCode },
                  { id: 'gopay', label: 'GoPay', icon: Wallet },
                  { id: 'ovo', label: 'OVO', icon: Wallet },
                  { id: 'dana', label: 'DANA', icon: Wallet },
                  { id: 'card', label: 'Credit Card', icon: CreditCard },
                  { id: 'cash', label: 'Cash / Cashier', icon: Banknote },
                ].map((method) => {
                  const Icon = method.icon;
                  const isSelected = paymentMethod === method.id;
                  return (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id as any)}
                      className={`p-3 rounded-2xl border flex flex-col items-center justify-center space-y-1.5 transition-all ${
                        isSelected
                          ? 'bg-[#EAE0D5] border-[#8C6D53] text-[#6F4E37] shadow-sm'
                          : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-[#E5D9CE]'
                      }`}
                    >
                      <Icon className="w-5 h-5 text-[#8C6D53]" />
                      <span className="text-xs font-bold">{method.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Total Summary */}
            <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E5D9CE] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-stone-500 font-bold block">Total Bill</span>
                <span className="text-[#8C6D53] font-extrabold text-xl">
                  Rp {total.toLocaleString('id-ID')}
                </span>
              </div>
              <span className="text-xs text-[#8C6D53] bg-white px-3 py-1 rounded-full border border-[#E5D9CE] font-bold shadow-sm">
                {paymentMethod.toUpperCase()} Simulation
              </span>
            </div>

            {/* Pay Button */}
            <button
              onClick={handleSimulatePayment}
              disabled={processing}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#8C6D53] to-[#A47E5B] text-white font-bold text-sm shadow-lg shadow-[#8C6D53]/30 hover:scale-[1.02] transition-all flex items-center justify-center space-x-2"
            >
              {processing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing {paymentMethod.toUpperCase()} Payment...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-white" />
                  <span>Pay Now (Rp {total.toLocaleString('id-ID')})</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

          </div>
        ) : (
          /* Success & Digital Receipt Screen */
          <div className="p-8 space-y-6 overflow-y-auto">
            
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-600 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Payment Successful! 🎉</span>
              <h3 className="text-2xl font-bold text-stone-800 font-serif-heading">KALA TEMU Digital Receipt</h3>
              <p className="text-stone-500 text-xs">Save or print your digital receipt as proof of transaction.</p>
            </div>

            {/* Digital Receipt Card (Itemized) */}
            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E5D9CE] text-left space-y-3 font-mono text-xs shadow-sm">
              <div className="text-center pb-3 border-b border-[#E5D9CE]">
                <h4 className="font-extrabold text-stone-800 text-sm tracking-wide">KALA TEMU SMART CAFE</h4>
                <p className="text-[10px] text-stone-500">Jl. Inovasi Teknologi No. 88, S. Jakarta</p>
              </div>

              <div className="flex justify-between">
                <span className="text-stone-500">Order ID:</span>
                <span className="text-[#8C6D53] font-bold">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Name:</span>
                <span className="text-stone-800">{customerName || 'Kala Temu Guest'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Type / Table:</span>
                <span className="text-stone-800">{diningType.toUpperCase()} {diningType === 'dine-in' ? `(#${tableNumber})` : ''}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Time:</span>
                <span className="text-stone-800">{new Date().toLocaleTimeString()}</span>
              </div>

              <div className="border-t border-b border-[#E5D9CE] py-3 space-y-2">
                <span className="text-[10px] uppercase text-stone-400 font-bold block">Order Details:</span>
                {cartItems.map((ci, idx) => (
                  <div key={idx} className="flex justify-between items-start text-stone-800">
                    <div>
                      <span className="font-bold">{ci.quantity}x {ci.item.name}</span>
                      {(ci.customizations.ice || ci.customizations.sugar || ci.customizations.spicy || ci.customizations.note) && (
                        <p className="text-[10px] text-stone-500 pl-3">
                          {[ci.customizations.ice, ci.customizations.sugar, ci.customizations.spicy, ci.customizations.note].filter(Boolean).join(' • ')}
                        </p>
                      )}
                    </div>
                    <span className="font-bold shrink-0 ml-2">Rp {(ci.item.price * ci.quantity).toLocaleString('id-ID')}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-1 text-stone-600 pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                {discountRate > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>Discount</span>
                    <span>- Rp {discountAmount.toLocaleString('id-ID')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Tax (10%)</span>
                  <span>Rp {tax.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between border-t border-[#E5D9CE] pt-2 font-bold text-stone-900 text-sm">
                  <span>TOTAL ({paymentMethod.toUpperCase()})</span>
                  <span className="text-[#8C6D53]">Rp {total.toLocaleString('id-ID')}</span>
                </div>
              </div>

              <div className="text-center pt-3 border-t border-[#E5D9CE] text-[10px] text-stone-500">
                Thank you for visiting KALA TEMU!<br />
                Where Time Meets Taste & Tech 🤎
              </div>
            </div>

            {/* Receipt Action Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
              <button
                onClick={() => window.print()}
                className="py-3 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs flex items-center justify-center space-x-1.5 border border-stone-200 transition-colors shadow-sm"
              >
                <Printer className="w-4 h-4 text-[#8C6D53]" />
                <span>Print Physical</span>
              </button>

              <button
                onClick={handleDownloadReceipt}
                className="py-3 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs flex items-center justify-center space-x-1.5 border border-stone-200 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4 text-[#8C6D53]" />
                <span>Download .TXT</span>
              </button>

              <button
                onClick={handleCopyReceipt}
                className="py-3 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs flex items-center justify-center space-x-1.5 border border-stone-200 transition-colors shadow-sm"
              >
                {copiedReceipt ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#8C6D53]" />
                    <span>Copy Receipt</span>
                  </>
                )}
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#8C6D53] to-[#A47E5B] text-white font-bold text-sm shadow-md shadow-[#8C6D53]/30 hover:scale-[1.01] transition-all"
            >
              Done & Close
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
