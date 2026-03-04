import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

import img1 from '../assets/photo_2026-03-04_01-08-25.jpg'
import img2 from '../assets/photo_2026-03-04_01-08-21.jpg'
import img3 from '../assets/photo_2026-03-04_01-08-22.jpg'
import img4 from '../assets/photo_2026-03-04_01-08-19.jpg'

const images = [img1, img2, img3, img4]

export default function ProductGallery() {
  const { lang } = useLanguage()
  const [ref, isVisible] = useScrollReveal()
  const [active, setActive] = useState(0)

  const heading = lang === 'uz' ? 'Mahsulot' : 'Продукт'
  const sub     = lang === 'uz' ? "Omega Ultra Pure Water — ikki model, bir sifat standarti" : "Omega Ultra Pure Water — две модели, один стандарт качества"

  return (
    <section id="product" className="py-20 sm:py-28 px-4 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto ${isVisible ? 'section-visible' : 'section-hidden'}`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">{heading}</h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">{sub}</p>
        </div>

        {/* Main image */}
        <div className="relative overflow-hidden rounded-3xl bg-gray-50 border border-blue-100 shadow-xl mb-4">
          <img
            src={images[active]}
            alt={`Omega Ultra Pure Water ${active + 1}`}
            className="w-full max-h-65 sm:max-h-140 object-contain transition-all duration-500"
          />

          {/* Prev / Next buttons */}
          <button
            onClick={() => setActive(prev => (prev - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActive(prev => (prev + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === active ? 'bg-primary w-6' : 'bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`overflow-hidden rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                i === active
                  ? 'border-primary shadow-lg scale-105'
                  : 'border-transparent hover:border-blue-200'
              }`}
            >
              <img
                src={img}
                alt={`thumbnail ${i + 1}`}
                className="w-full h-20 sm:h-28 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
