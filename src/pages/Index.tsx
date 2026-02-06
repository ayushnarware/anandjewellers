import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Truck, RefreshCw, Award } from "lucide-react";

const features = [
  { icon: Shield, title: "BIS Certified", desc: "100% Hallmarked jewelry" },
  { icon: Truck, title: "Free Shipping", desc: "On orders above ₹50,000" },
  { icon: RefreshCw, title: "Lifetime Exchange", desc: "Full value exchange policy" },
  { icon: Award, title: "Best Price", desc: "Transparent gold pricing" },
];

const bestsellers = products.filter((p) => p.isBestseller).slice(0, 8);
const newArrivals = products.filter((p) => p.isNew).slice(0, 8);

const Index = () => (
  <main>
    <HeroSection />

    {/* Trust bar */}
    <section className="py-8 md:py-12 border-y border-border bg-card/30">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-3 justify-center opacity-0 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <f.icon size={20} className="text-primary shrink-0" />
            <div>
              <p className="text-sm font-display font-semibold text-foreground">{f.title}</p>
              <p className="text-xs font-sans text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <FeaturedCategories />

    {/* Bestsellers */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-primary">Most Loved</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 text-foreground">Bestsellers</h2>
          </div>
          <Link to="/collections" className="hidden md:flex items-center gap-1 text-sm font-sans tracking-wider uppercase text-primary hover:text-primary/80 transition-colors">
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {bestsellers.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 gradient-gold opacity-10" />
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-3xl md:text-5xl font-display font-bold gradient-gold-text mb-4">The Bridal Collection</h2>
        <p className="text-lg font-body text-muted-foreground max-w-md mx-auto mb-8">
          Handcrafted bridal sets that make your special day truly unforgettable
        </p>
        <Link
          to="/category/Sets"
          className="inline-flex items-center gap-2 px-10 py-4 gradient-gold text-primary-foreground font-sans text-sm tracking-[0.2em] uppercase hover:shadow-lg hover:shadow-primary/20 transition-shadow"
        >
          Explore Bridal <ArrowRight size={14} />
        </Link>
      </div>
    </section>

    {/* New Arrivals */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-primary">Just Arrived</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 text-foreground">New Arrivals</h2>
          </div>
          <Link to="/collections" className="hidden md:flex items-center gap-1 text-sm font-sans tracking-wider uppercase text-primary hover:text-primary/80 transition-colors">
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {newArrivals.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </div>
    </section>

    <Testimonials />
  </main>
);

export default Index;
