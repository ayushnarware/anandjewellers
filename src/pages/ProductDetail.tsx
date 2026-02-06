import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import ProductCard from "@/components/ProductCard";
import { ShoppingBag, Heart, Star, Shield, Truck, RefreshCw, ChevronRight } from "lucide-react";

const formatPrice = (p: number) => "₹" + p.toLocaleString("en-IN");

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) return (
    <main className="pt-36 pb-20 text-center">
      <p className="font-display text-2xl text-muted-foreground">Product not found</p>
      <Link to="/collections" className="text-primary font-sans text-sm mt-4 inline-block">Back to collections</Link>
    </main>
  );

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <main className="pt-28 md:pt-36 pb-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-sans text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to={`/category/${product.category}`} className="hover:text-primary transition-colors">{product.category}</Link>
          <ChevronRight size={12} />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image */}
          <div className="aspect-square overflow-hidden gold-border-glow animate-fade-in">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Info */}
          <div className="animate-slide-in-right">
            <p className="text-[11px] font-sans tracking-[0.3em] uppercase text-primary mb-2">{product.subcategory}</p>
            <h1 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-3">{product.name}</h1>

            <div className="flex items-center gap-2 mb-5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"} />
                ))}
              </div>
              <span className="text-sm font-sans text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-display font-bold text-primary">{formatPrice(product.price)}</span>
              <span className="text-lg text-muted-foreground line-through font-sans">{formatPrice(product.originalPrice)}</span>
              <span className="px-2 py-0.5 bg-green-900/30 text-green-400 text-xs font-sans tracking-wider">{discount}% OFF</span>
            </div>

            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">{product.description}</p>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Material", value: product.material },
                { label: "Purity", value: product.purity },
                { label: "Weight", value: product.weight },
                { label: "Status", value: product.inStock ? "In Stock" : "Sold Out" },
              ].map((d) => (
                <div key={d.label} className="p-3 border border-border">
                  <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted-foreground">{d.label}</p>
                  <p className="font-display text-sm text-foreground mt-0.5">{d.value}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => product.inStock && addToCart(product)}
                disabled={!product.inStock}
                className="flex-1 py-4 gradient-gold text-primary-foreground font-sans text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingBag size={16} /> {product.inStock ? "Add to Bag" : "Sold Out"}
              </button>
              <button className="w-14 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Heart size={18} />
              </button>
            </div>

            {/* Trust */}
            <div className="space-y-3">
              {[
                { icon: Shield, text: "BIS Hallmark Certified" },
                { icon: Truck, text: "Free insured shipping" },
                { icon: RefreshCw, text: "Lifetime exchange policy" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm font-sans text-muted-foreground">
                  <Icon size={16} className="text-primary" /> {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
