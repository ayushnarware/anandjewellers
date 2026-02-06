import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-display font-bold gradient-gold-text mb-4">Anand Jewels</h3>
          <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">
            Crafting timeless masterpieces since 1952. Three generations of excellence in Indian jewelry making.
          </p>
          <div className="flex gap-4">
            {[
              { Icon: Instagram, url: "https://www.instagram.com/anandjewels/?hl=en" },
              { Icon: Facebook, url: "https://www.facebook.com/anandjewelsindore/" },
              { Icon: Linkedin, url: "https://www.linkedin.com/company/anand-jewels/" }
            ].map(({ Icon, url }, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-5">Quick Links</h4>
          {["Collections", "New Arrivals", "Bestsellers", "Bridal", "Gift Cards", "About Us"].map((l) => (
            <Link key={l} to="/collections" className="block text-sm font-body text-muted-foreground hover:text-primary transition-colors mb-2.5">{l}</Link>
          ))}
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-5">Customer Care</h4>
          {["Shipping & Returns", "Size Guide", "Jewelry Care", "FAQs", "Terms & Conditions", "Privacy Policy"].map((l) => (
            <Link key={l} to="/" className="block text-sm font-body text-muted-foreground hover:text-primary transition-colors mb-2.5">{l}</Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-5">Visit Us</h4>
          <div className="space-y-3 text-sm font-body text-muted-foreground">
            <p className="flex items-start gap-2"><MapPin size={16} className="text-primary shrink-0 mt-0.5" /> 575, 12, Mahatma Gandhi Rd, opp. TI Mall, Manorama Ganj, Indore, Madhya Pradesh 452003</p>
            <p className="flex items-center gap-2"><Phone size={16} className="text-primary shrink-0" /> +91 7947112343</p>
            <p className="flex items-center gap-2"><Mail size={16} className="text-primary shrink-0" /> hello@anandjewels.com</p>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-border py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-sans text-muted-foreground tracking-wider">
        <p>© 2026 Anand Jewels. All rights reserved.</p>
        <p>BIS Hallmark Certified &nbsp;·&nbsp; ISO 9001:2015</p>
      </div>
    </div>
  </footer>
);

export default Footer;
