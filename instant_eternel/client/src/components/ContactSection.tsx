import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

/**
 * Contact Section - Minimalist Black & White Design
 * Features: Contact form, contact info, clean layout
 */

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", date: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold text-black mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Commençons Votre Histoire
          </h2>
          <p className="text-lg text-black/60">
            Contactez-nous pour discuter de votre projet. Nous serions ravi de vous rencontrer et de créer quelque chose de magnifique ensemble.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-black/5 text-black">
                  <Mail size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">Email</h3>
                <p className="text-black/60">contact@akrackwedding.fr</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-black/5 text-black">
                  <Phone size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">Téléphone</h3>
                <p className="text-black/60">+33 (0)6 XX XX XX XX</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-black/5 text-black">
                  <MapPin size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">Localisation</h3>
                <p className="text-black/60">Île-de-France, France</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-black/10">
              <h3 className="font-semibold text-black mb-4">Suivez-nous</h3>
              <div className="flex gap-4">
                {["Instagram", "Facebook", "Pinterest"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-4 py-2 border border-black/20 hover:border-black text-black rounded-lg transition-colors text-sm font-medium"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Nom complet
              </label>
              <input
                type="text"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:border-black/30"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:border-black/30"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  placeholder="+33 (0)6 XX XX XX XX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:border-black/30"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Date du mariage
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:border-black/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Message
              </label>
              <textarea
                placeholder="Parlez-nous de votre projet..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:border-black/30 min-h-32"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-black/80 transition-colors"
            >
              Envoyer ma demande
            </button>

            <p className="text-xs text-black/60 text-center">
              Nous répondons généralement dans les 24 heures.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
