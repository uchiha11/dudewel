import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Collections", href: "#collections" },
    { label: "Craftsmanship", href: "#craftsmanship" },
    { label: "Bespoke", href: "#bespoke" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Link
              href="/"
              className="font-display text-2xl lg:text-3xl tracking-[0.3em] text-foreground hover:text-gold transition-colors duration-300"
              data-testid="link-home"
            >
              Dudduel Co.
            </Link>

            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 text-foreground"
              data-testid="button-menu-open"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl tracking-[0.3em]">
                  Dudduel Co.
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-foreground"
                  data-testid="button-menu-close"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-display text-4xl tracking-[0.2em] text-foreground hover:text-gold transition-colors duration-300"
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
