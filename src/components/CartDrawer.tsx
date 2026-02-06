import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const formatPrice = (p: number) => "₹" + p.toLocaleString("en-IN");

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50 animate-fade-in" onClick={() => setIsCartOpen(false)} />
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background border-l border-border z-50 flex flex-col" style={{ animation: "slideInRight 0.3s ease-out" }}>
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-primary" />
            <h2 className="font-display text-lg">Shopping Bag ({totalItems})</h2>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-muted-foreground/30 mb-4" />
              <p className="font-display text-lg text-muted-foreground">Your bag is empty</p>
              <p className="text-sm text-muted-foreground/60 font-sans mt-1">Browse our collection to find something you love</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4 p-3 bg-card rounded-sm border border-border animate-fade-in-up">
                <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded-sm" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-sm text-foreground truncate">{item.product.name}</h4>
                  <p className="text-xs text-muted-foreground font-sans">{item.product.subcategory}</p>
                  <p className="text-sm text-primary font-display font-semibold mt-1">{formatPrice(item.product.price)}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-6 h-6 border border-border flex items-center justify-center text-foreground hover:border-primary transition-colors">
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-sans w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-6 h-6 border border-border flex items-center justify-center text-foreground hover:border-primary transition-colors">
                      <Plus size={12} />
                    </button>
                    <button onClick={() => removeFromCart(item.product.id)} className="ml-auto text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-border space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-sm text-muted-foreground uppercase tracking-wider">Subtotal</span>
              <span className="font-display text-xl text-primary font-bold">{formatPrice(totalPrice)}</span>
            </div>
            <Link
              to="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-3.5 gradient-gold text-primary-foreground text-center font-sans text-sm tracking-[0.2em] uppercase hover:shadow-lg transition-shadow"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-3 border border-border text-muted-foreground text-center font-sans text-xs tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
