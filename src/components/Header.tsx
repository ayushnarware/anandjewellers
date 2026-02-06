import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X, Search, Heart, User } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Collections", path: "/collections" },
  { label: "Rings", path: "/category/Rings" },
  { label: "Necklaces", path: "/category/Necklaces" },
  { label: "Earrings", path: "/category/Earrings" },
  { label: "Bangles", path: "/category/Bangles" },
  { label: "Bridal", path: "/category/Sets" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-center py-1.5 text-xs font-sans tracking-[0.2em] text-muted-foreground uppercase">
          Free Shipping on Orders Above ₹50,000 &nbsp;|&nbsp; 100% Certified Jewelry &nbsp;|&nbsp; Lifetime Exchange
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between py-3 md:py-4">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link to="/" className="flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl font-display font-bold gradient-gold-text tracking-wider">
              Anand Jewels
            </h1>
            <span className="text-[10px] font-sans tracking-[0.35em] text-muted-foreground uppercase">
              Since 1952
            </span>
          </Link>

          <div className="flex items-center gap-3 md:gap-5">
            <Link to="/collections" className="hidden md:block text-foreground hover:text-primary transition-colors">
              <Search size={20} />
            </Link>
            <button className="hidden md:block text-foreground hover:text-primary transition-colors">
              <Heart size={20} />
            </button>
            <button className="hidden md:block text-foreground hover:text-primary transition-colors">
              <User size={20} />
            </button>
            <button onClick={() => setIsCartOpen(true)} className="relative text-foreground hover:text-primary transition-colors">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-sans font-bold animate-scale-in">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center justify-center gap-8 pb-3">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-sans tracking-[0.15em] uppercase transition-colors hover:text-primary ${
                location.pathname === l.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-background border-t border-border animate-fade-in-up">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3 text-sm font-sans tracking-[0.15em] uppercase text-foreground hover:text-primary hover:bg-secondary transition-colors border-b border-border"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
