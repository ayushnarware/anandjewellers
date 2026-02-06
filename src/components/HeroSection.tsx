import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-jewelry.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Anand Jewels luxury collection" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Sparkles size={16} className="text-primary" />
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary">New Collection 2026</span>
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-foreground">Timeless</span>
            <br />
            <span className="gradient-gold-text">Elegance</span>
            <br />
            <span className="text-foreground">Redefined</span>
          </h2>

          <p
            className="text-lg md:text-xl font-body text-muted-foreground max-w-md mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Discover handcrafted masterpieces that celebrate the art of Indian jewelry making,
            passed down through three generations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Link
              to="/collections"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 gradient-gold text-primary-foreground font-sans text-sm tracking-[0.2em] uppercase transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Shop Collection
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/category/Sets"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary/30 text-primary font-sans text-sm tracking-[0.2em] uppercase hover:bg-primary/10 transition-all"
            >
              Bridal Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <span className="text-[10px] font-sans tracking-[0.3em] text-muted-foreground uppercase">Scroll to explore</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
