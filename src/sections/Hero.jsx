import { useLanguage } from '../context/LanguageContext'
import heroProduct from '../assets/photo_2026-03-04_01-08-25.jpg'

export default function Hero() {
  const { t } = useLanguage()

  const handleCTA = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-[#003d99] via-primary to-primary-light"
    >
      {/* Background decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-18px); }
        }
        .float-img { animation: floatUp 5s ease-in-out infinite; }
      `}</style>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span className="text-white/90 text-sm font-medium">{t.hero.badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 animate-fade-in-up">
              {t.hero.title}
            </h1>

            {/* Subtitle strong */}
            <p className="text-lg sm:text-xl font-semibold text-blue-100 mb-4 animate-fade-in-up delay-100">
              {t.hero.subtitle_strong}
            </p>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-blue-200 leading-relaxed mb-8 animate-fade-in-up delay-200 max-w-xl">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in-up delay-300 mb-10">
              <button
                onClick={handleCTA}
                className="bg-white text-primary font-bold px-7 py-3.5 rounded-full hover:bg-blue-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-sm cursor-pointer"
              >
                {t.hero.cta_offer}
              </button>
              <button
                onClick={handleCTA}
                className="border-2 border-white/70 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/15 hover:border-white transition-all duration-300 hover:-translate-y-1 text-sm cursor-pointer"
              >
                {t.hero.cta_demo}
              </button>
              <button
                onClick={handleCTA}
                className="border-2 border-white/70 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/15 hover:border-white transition-all duration-300 hover:-translate-y-1 text-sm cursor-pointer"
              >
                {t.hero.cta_consult}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 animate-fade-in-up delay-400 border-t border-white/20 pt-8 text-center lg:text-left">
              {t.hero.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    {stat.value}
                    <span className="text-sm text-blue-200 font-semibold ml-1">{stat.unit}</span>
                  </div>
                  <div className="text-blue-300 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Product image — hidden on small mobile, shown from sm up */}
          <div className="hidden sm:flex items-center justify-center relative">
            {/* Glow ring */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-primary-light/20 blur-2xl" />

            <div className="relative float-img">
              <img
                src={heroProduct}
                alt="Omega Ultra Pure Water System"
                className="w-72 sm:w-96 lg:w-105 object-contain drop-shadow-2xl rounded-2xl"
              />
              {/* Floating specs badge — hidden on mobile to prevent overflow */}
              <div className="hidden sm:block absolute -left-4 top-16 bg-white rounded-xl px-4 py-3 shadow-xl">
                <div className="text-primary font-black text-lg leading-none">18.2</div>
                <div className="text-gray-500 text-xs">MΩ·cm purity</div>
              </div>
              <div className="hidden sm:block absolute -right-4 bottom-20 bg-white rounded-xl px-4 py-3 shadow-xl">
                <div className="text-green-600 font-black text-lg leading-none">60 L/h</div>
                <div className="text-gray-500 text-xs">productivity</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-blue-200 text-xs">Scroll</span>
        <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
