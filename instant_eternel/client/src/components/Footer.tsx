/**
 * Footer Component - Romantic Contemporary Design
 * Features: Links, copyright, elegant layout
 * Design: Warm background, soft text, organized sections
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              L'Instant Éternel
            </h3>
            <p className="text-white/70 text-sm">
              Nous capturons l'essence de vos émotions à travers la photographie et la vidéographie artistique.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Photographie
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Vidéographie
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Forfaits Complets
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Retouches Premium
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mentions Légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Politique de Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Conditions d'Utilisation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <p>&copy; {currentYear} L'Instant Éternel. Tous droits réservés.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Pinterest
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
