import { Link } from "react-router-dom";
import { ShoppingBag, Heart, Star } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const formatPrice = (p: number) => "₹" + p.toLocaleString("en-IN");

const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => {
  const { addToCart } = useCart();

  return (
    <div
      className="group luxury-card overflow-hidden opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${0.05 * (index % 12)}s` }}
    >
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-sans tracking-widest uppercase">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="px-2 py-0.5 bg-accent text-accent-foreground text-[10px] font-sans tracking-widest uppercase">
              Bestseller
            </span>
          )}
          {!product.inStock && (
            <span className="px-2 py-0.5 bg-destructive text-destructive-foreground text-[10px] font-sans tracking-widest uppercase">
              Sold Out
            </span>
          )}
        </div>

        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <button className="w-8 h-8 bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors">
            <Heart size={14} />
          </button>
        </div>

        {/* Add to cart */}
        {product.inStock && (
          <button
            onClick={(e) => { e.preventDefault(); addToCart(product); }}
            className="absolute bottom-3 left-3 right-3 py-2.5 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-sans tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-primary flex items-center justify-center gap-2"
          >
            <ShoppingBag size={14} /> Add to Cart
          </button>
        )}
      </Link>

      {/* Info */}
      <div className="p-4">
        <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted-foreground mb-1">
          {product.subcategory}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-sm md:text-base font-medium text-foreground hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mt-1.5 mb-2">
          <Star size={12} className="fill-primary text-primary" />
          <span className="text-xs font-sans text-muted-foreground">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-lg text-primary font-semibold">{formatPrice(product.price)}</span>
          <span className="text-xs text-muted-foreground line-through font-sans">{formatPrice(product.originalPrice)}</span>
          <span className="text-[10px] font-sans text-green-500 tracking-wider">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
