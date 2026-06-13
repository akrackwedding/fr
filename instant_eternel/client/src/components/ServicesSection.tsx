import { Camera, Video, Heart } from "lucide-react";

/**
 * Services Section - Minimalist Black & White Design
 * Features: Service cards, pricing info, clean layout
 */

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
}

const services: Service[] = [
  {
    id: "1",
    icon: <Camera className="w-8 h-8" />,
    title: "Photographie",
    description: "Capture artistique de vos moments précieux",
    features: [
      "Séance de préparation",
      "Cérémonie complète",
      "Soirée réception",
      "Album premium",
      "Galerie en ligne",
    ],
    price: "À partir de 1500€",
  },
  {
    id: "2",
    icon: <Video className="w-8 h-8" />,
    title: "Vidéographie",
    description: "Film cinématique de votre jour spécial",
    features: [
      "Équipe 2 caméras",
      "Couverture complète",
      "Drone aérien",
      "Montage professionnel",
      "Film 4K",
    ],
    price: "À partir de 2500€",
  },
  {
    id: "3",
    icon: <Heart className="w-8 h-8" />,
    title: "Forfait Complet",
    description: "Photo + Vidéo pour une couverture totale",
    features: [
      "Équipe dédiée",
      "Couverture 12h",
      "Album + Film",
      "Galerie en ligne",
      "Retouches premium",
    ],
    price: "À partir de 3500€",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold text-black mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nos Services
          </h2>
          <p className="text-lg text-black/60">
            Des forfaits pensés pour immortaliser chaque moment de votre mariage avec élégance et professionnalisme.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 border border-black/10 hover:border-black/30 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-6 inline-block p-4 bg-black/5 rounded-lg text-black">
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-bold text-black mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-black/60 mb-6">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                    <span className="text-black/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-black/10">
                <p className="text-black font-semibold text-lg">{service.price}</p>
              </div>

              {/* CTA Button */}
              <button className="w-full px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/80 transition-colors">
                Demander un devis
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-black/5 rounded-lg border border-black/10">
          <h3
            className="text-2xl font-bold text-black mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Forfaits Personnalisés
          </h3>
          <p className="text-black/60 mb-4">
            Chaque mariage est unique. Nous proposons des forfaits sur mesure adaptés à vos besoins spécifiques et votre budget.
          </p>
          <button className="px-6 py-3 border border-black text-black rounded-lg font-medium hover:bg-black/5 transition-colors">
            Discuter de votre projet
          </button>
        </div>
      </div>
    </section>
  );
}
