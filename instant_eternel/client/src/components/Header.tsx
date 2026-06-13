import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Header - Minimalist Black & White Design
 * Features: Logo, navigation, elegant and simple
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Galerie", href: "#gallery" },
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white border-b border-black/10 z-50">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663753630920/ZWEek5K6Q5JNPiCmoSL2tz/akrack_wedding8KFINAL-Lcnq8zGxyrmtMyhDssNi8p.webp"
            alt="AKRACK WEDDING"
            className="h-12"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-black hover:text-black/60 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block px-6 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-black/80 transition-colors"
        >
          Réserver
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <nav className="container py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-black hover:text-black/60 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-6 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-black/80 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Réserver
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
