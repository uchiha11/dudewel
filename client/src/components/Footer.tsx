import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const footerLinks = {
    collections: [
      { label: "Suits", href: "#" },
      { label: "Indian Wear", href: "#" },
      { label: "Shirts", href: "#" },
      { label: "Accessories", href: "#" },
    ],
    services: [
      { label: "Bespoke Tailoring", href: "#bespoke" },
      { label: "Made to Measure", href: "#bespoke" },
      { label: "Alterations", href: "#" },
      { label: "Corporate Programs", href: "#" },
    ],
    company: [
      { label: "Our Story", href: "#about" },
      { label: "Craftsmanship", href: "#craftsmanship" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  };

  return (
    <footer className="bg-card border-t border-ivory/10" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
          <div>
            <h3 className="font-display text-3xl lg:text-4xl tracking-[0.15em] mb-6">
              Dudduel Co.
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-8">
              Crafting distinction for the modern gentleman. Where timeless 
              elegance meets contemporary power.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex" data-testid="form-newsletter">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-transparent border border-ivory/20 border-r-0 px-4 py-4 text-ivory placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors duration-300"
                data-testid="input-newsletter-email"
              />
              <button
                type="submit"
                className="px-6 bg-ivory text-background hover:bg-gold transition-colors duration-300"
                data-testid="button-newsletter-submit"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Collections
              </h4>
              <ul className="space-y-3">
                {footerLinks.collections.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ivory/70 hover:text-gold transition-colors duration-300"
                      data-testid={`link-footer-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ivory/70 hover:text-gold transition-colors duration-300"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ivory/70 hover:text-gold transition-colors duration-300"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-wide">
            © 2026 Dudduel Co.. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-ivory transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-ivory transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
