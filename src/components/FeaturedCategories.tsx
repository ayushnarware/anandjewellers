import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const featured = [
  { name: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=500&fit=crop", count: "24 Designs" },
  { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop", count: "16 Designs" },
  { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop", count: "24 Designs" },
  { name: "Bangles", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=500&fit=crop", count: "14 Designs" },
  { name: "Sets", image: "https://images.unsplash.com/photo-1515562141589-67f0d5e24940?w=400&h=500&fit=crop", count: "8 Designs" },
];

const FeaturedCategories = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-primary">Curated For You</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">Shop by Category</h2>
        <div className="w-16 h-px gradient-gold mx-auto mt-4" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {featured.map((cat, i) => (
          <Link
            key={cat.name}
            to={`/category/${cat.name}`}
            className="group relative aspect-[4/5] overflow-hidden opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground">{cat.name}</h3>
              <p className="text-xs font-sans text-muted-foreground tracking-wider mt-0.5">{cat.count}</p>
              <div className="flex items-center gap-1 mt-2 text-primary text-xs font-sans tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                Explore <ArrowRight size={12} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedCategories;
