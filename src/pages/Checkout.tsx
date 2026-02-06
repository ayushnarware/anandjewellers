import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { CheckCircle, Printer } from "lucide-react";

const formatPrice = (p: number) => "₹" + p.toLocaleString("en-IN");

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", city: "", pincode: "" });

  const tax = Math.round(totalPrice * 0.03);
  const shipping = totalPrice >= 50000 ? 0 : 500;
  const grandTotal = totalPrice + tax + shipping;
  const invoiceNo = `AJ-${Date.now().toString().slice(-8)}`;

  if (items.length === 0 && !placed) {
    return (
      <main className="pt-36 pb-20 text-center">
        <p className="font-display text-2xl text-muted-foreground">Your cart is empty</p>
        <Link to="/collections" className="text-primary font-sans text-sm mt-4 inline-block underline">Browse collections</Link>
      </main>
    );
  }

  if (placed) {
    return (
      <main className="pt-28 md:pt-36 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10 animate-scale-in">
            <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
            <h1 className="text-3xl font-display font-bold text-foreground">Order Placed!</h1>
            <p className="text-muted-foreground font-body mt-2">Thank you for shopping with Anand Jewels</p>
          </div>

          {/* Invoice */}
          <div id="invoice" className="bg-card border border-border p-6 md:p-10 animate-fade-in-up">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-2xl font-display font-bold gradient-gold-text">Anand Jewels</h2>
                <p className="text-xs font-sans text-muted-foreground mt-1"> 575, 12, Mahatma Gandhi Rd, opp. TI Mall, Manorama Ganj, Indore, Madhya Pradesh 452003</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-sans text-muted-foreground uppercase tracking-wider">Invoice</p>
                <p className="font-display text-sm text-foreground">{invoiceNo}</p>
                <p className="text-xs text-muted-foreground font-sans">{new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>
              </div>
            </div>

            <div className="mb-6 p-4 border border-border">
              <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted-foreground mb-1">Bill To</p>
              <p className="font-display text-sm text-foreground">{form.name}</p>
              <p className="text-xs text-muted-foreground font-sans">{form.address}, {form.city} - {form.pincode}</p>
              <p className="text-xs text-muted-foreground font-sans">{form.email} · {form.phone}</p>
            </div>

            <table className="w-full mb-6 text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Item</th>
                  <th className="text-center py-2 font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Qty</th>
                  <th className="text-right py-2 font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.product.id} className="border-b border-border/50">
                    <td className="py-3 font-body text-foreground">{item.product.name}</td>
                    <td className="py-3 font-sans text-center text-muted-foreground">{item.quantity}</td>
                    <td className="py-3 font-display text-right text-foreground">{formatPrice(item.product.price * item.quantity)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="space-y-2 ml-auto max-w-xs">
              <div className="flex justify-between text-sm font-sans text-muted-foreground"><span>Subtotal</span><span>{formatPrice(totalPrice)}</span></div>
              <div className="flex justify-between text-sm font-sans text-muted-foreground"><span>GST (3%)</span><span>{formatPrice(tax)}</span></div>
              <div className="flex justify-between text-sm font-sans text-muted-foreground"><span>Shipping</span><span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
              <div className="flex justify-between text-lg font-display font-bold text-primary border-t border-border pt-2 mt-2">
                <span>Total</span><span>{formatPrice(grandTotal)}</span>
              </div>
            </div>

            <p className="text-center text-xs font-sans text-muted-foreground mt-8">Thank you for choosing Anand Jewels · BIS Hallmark Certified</p>
          </div>

          <div className="flex gap-4 mt-6 justify-center">
            <button onClick={() => window.print()} className="px-6 py-3 border border-border text-muted-foreground font-sans text-xs tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
              <Printer size={14} /> Print Invoice
            </button>
            <Link to="/" className="px-6 py-3 gradient-gold text-primary-foreground font-sans text-xs tracking-[0.2em] uppercase hover:shadow-lg transition-shadow">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-28 md:pt-36 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Form */}
          <div className="lg:col-span-3 space-y-5 animate-fade-in-up">
            <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">Shipping Details</h2>
            {[
              { key: "name", label: "Full Name", type: "text" },
              { key: "email", label: "Email", type: "email" },
              { key: "phone", label: "Phone", type: "tel" },
              { key: "address", label: "Address", type: "text" },
              { key: "city", label: "City", type: "text" },
              { key: "pincode", label: "PIN Code", type: "text" },
            ].map((f) => (
              <div key={f.key}>
                <label className="text-xs font-sans text-muted-foreground tracking-wider uppercase">{f.label}</label>
                <input
                  type={f.type}
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full mt-1 px-4 py-3 bg-card border border-border font-body text-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-2 animate-slide-in-right">
            <div className="p-6 gold-border-glow sticky top-36">
              <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-5">Order Summary</h2>
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="font-body text-foreground truncate mr-2">{item.product.name} × {item.quantity}</span>
                    <span className="font-display text-foreground shrink-0">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm font-sans text-muted-foreground"><span>Subtotal</span><span>{formatPrice(totalPrice)}</span></div>
                <div className="flex justify-between text-sm font-sans text-muted-foreground"><span>GST (3%)</span><span>{formatPrice(tax)}</span></div>
                <div className="flex justify-between text-sm font-sans text-muted-foreground"><span>Shipping</span><span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
                <div className="flex justify-between text-xl font-display font-bold text-primary border-t border-border pt-3 mt-3">
                  <span>Total</span><span>{formatPrice(grandTotal)}</span>
                </div>
              </div>
              <button
                onClick={() => { if (form.name && form.email && form.phone && form.address) setPlaced(true); }}
                className="w-full mt-6 py-4 gradient-gold text-primary-foreground font-sans text-sm tracking-[0.2em] uppercase hover:shadow-lg hover:shadow-primary/20 transition-shadow"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
