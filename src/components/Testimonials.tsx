import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", text: "The bridal set I purchased was absolutely stunning. The craftsmanship is unmatched and the service was exceptional.", location: "Mumbai", rating: 5 },
  { name: "Anita Patel", text: "I've been a loyal customer for over 10 years. Every piece from Anand Jewels becomes a family heirloom.", location: "Delhi", rating: 5 },
  { name: "Meera Krishnan", text: "The diamond ring exceeded all my expectations. The purity and brilliance is remarkable. Highly recommended!", location: "Chennai", rating: 5 },
];

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-card/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-primary">Testimonials</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">What Our Clients Say</h2>
        <div className="w-16 h-px gradient-gold mx-auto mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="p-8 gold-border-glow opacity-0 animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
            <Quote size={24} className="text-primary/30 mb-4" />
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="font-body text-foreground/80 text-lg leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs font-sans text-muted-foreground">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
