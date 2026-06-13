import { Star } from "lucide-react";

/**
 * Testimonials Section - Minimalist Black & White Design
 * Features: Client testimonials, star ratings, clean cards
 */

interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marie & Jean",
    date: "Juin 2024",
    rating: 5,
    text: "Une équipe exceptionnelle qui a capturé chaque moment avec une sensibilité remarquable. Les photos sont absolument magnifiques et les vidéos nous ont fait revivre notre jour avec émotion.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663753630920/ZWEek5K6Q5JNPiCmoSL2tz/gallery-wedding-moment-H6C9zTGFQm6qx6Ri6CtsBh.webp",
  },
  {
    id: "2",
    name: "Sophie & Luc",
    date: "Mai 2024",
    rating: 5,
    text: "Professionnalisme impeccable, créativité débordante et une vraie connexion avec notre histoire. Nous recommandons vivement AKRACK WEDDING à tous les futurs mariés.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663753630920/ZWEek5K6Q5JNPiCmoSL2tz/detail-rings-flowers-VKqALkuHNHBNEMdRvPu3Xb.webp",
  },
  {
    id: "3",
    name: "Émilie & Thomas",
    date: "Avril 2024",
    rating: 5,
    text: "Bien au-delà de nos attentes. Chaque photo est une œuvre d'art. L'équipe a su se faire oublier pour capturer les vrais moments, les vrais émotions.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663753630920/ZWEek5K6Q5JNPiCmoSL2tz/gallery-wedding-moment-H6C9zTGFQm6qx6Ri6CtsBh.webp",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold text-black mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Leurs Histoires
          </h2>
          <p className="text-lg text-black/60">
            Ce que nos clients disent de leur expérience avec AKRACK WEDDING.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 bg-white border border-black/10 hover:border-black/30 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-black text-black" />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-black/70 mb-6 italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-black/60">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-black/60 mb-6">
            Rejoignez les couples qui ont choisi AKRACK WEDDING pour immortaliser leur amour.
          </p>
          <button className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-black/80 transition-colors">
            Réserver une consultation
          </button>
        </div>
      </div>
    </section>
  );
}
