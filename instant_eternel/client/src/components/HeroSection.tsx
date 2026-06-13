/**
 * Hero Section - Modern Luxury Lifestyle Design
 * Features: Large typography, lifestyle images, elegant layout
 */

export default function HeroSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Typography */}
          <div className="space-y-6">
            {/* Main Title with Script */}
            <div className="space-y-2">
              <p
                className="text-lg text-black/60 font-light"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Bright Future
              </p>
              <h1
                className="text-6xl md:text-7xl font-bold text-black leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                FUTURE
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-lg text-black/70 leading-relaxed max-w-md">
              Nous capturons l'essence de votre amour à travers la photographie et la vidéographie d'exception. Chaque moment devient une histoire intemporelle.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/80 transition-colors">
                Découvrir
              </button>
              <button className="px-8 py-3 border border-black text-black rounded-lg font-medium hover:bg-black/5 transition-colors">
                Réserver
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663753630920/ZWEek5K6Q5JNPiCmoSL2tz/lifestyle-couple-car-JomLB3BJiTZK42US5UnUfZ.webp"
              alt="Modern couple"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
