/**
 * Gallery Section - Modern Luxury Lifestyle Design
 * Features: 2x2 grid layout with lifestyle images and typography
 */

const galleryItems = [
  {
    id: 1,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663753630920/ZWEek5K6Q5JNPiCmoSL2tz/lifestyle-couple-car-JomLB3BJiTZK42US5UnUfZ.webp",
    alt: "Couple by car"
  },
  {
    id: 2,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663753630920/ZWEek5K6Q5JNPiCmoSL2tz/lifestyle-bride-detail-CkjtS5qB29Ee4gGWKGJDmQ.webp",
    alt: "Bride detail"
  },
  {
    id: 3,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663753630920/ZWEek5K6Q5JNPiCmoSL2tz/lifestyle-couple-street-4hUCvfrigGMQxduzJF88ZPf.webp",
    alt: "Couple street"
  },
  {
    id: 4,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663753630920/ZWEek5K6Q5JNPiCmoSL2tz/lifestyle-groom-portrait-6ba4C5Hp7QQxduzJF88ZPf.webp",
    alt: "Groom portrait"
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container">
        {/* Header with Typography */}
        <div className="text-center mb-16 relative">
          {/* Large Background Typography */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              className="text-8xl md:text-9xl font-bold text-black/5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              OUR
            </span>
          </div>

          {/* Main Title */}
          <h2
            className="text-5xl md:text-6xl font-bold text-black mb-4 relative z-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Notre Galerie
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto relative z-10">
            Découvrez nos plus beaux moments capturés avec passion et professionnalisme.
          </p>
        </div>

        {/* 2x2 Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/80 transition-colors">
            Voir plus
          </button>
        </div>
      </div>
    </section>
  );
}
