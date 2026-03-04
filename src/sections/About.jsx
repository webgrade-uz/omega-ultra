import { useLanguage } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import aboutImg from '../assets/photo_2026-03-04_01-08-23.jpg'
import {
  BarChart3, FlaskConical, ShieldCheck, Zap,
  Microscope, Pill, Dna, Cpu, Hospital, Telescope,
} from 'lucide-react'

const whyIcons = [
  <BarChart3 className="w-6 h-6" />,
  <FlaskConical className="w-6 h-6" />,
  <ShieldCheck className="w-6 h-6" />,
  <Zap className="w-6 h-6" />,
]

const industryIcons = [
  <Microscope className="w-4 h-4" />,
  <Pill className="w-4 h-4" />,
  <Dna className="w-4 h-4" />,
  <Cpu className="w-4 h-4" />,
  <Hospital className="w-4 h-4" />,
  <Telescope className="w-4 h-4" />,
]

export default function About() {
  const { t } = useLanguage()
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="about" className="py-20 sm:py-28 px-4 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto ${isVisible ? 'section-visible' : 'section-hidden'}`}
      >
        {/* Section Header — split layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-wider">About</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              {t.about.heading}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t.about.description}
            </p>
          </div>
          {/* Right: product image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-blue-100 to-blue-50 -z-10" />
            <img
              src={aboutImg}
              alt="Omega Ultra Pure Water — ikki model"
              className="w-full rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>

        {/* Why section */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-10">
            {t.about.why_heading}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.why_items.map((item, i) => (
              <div
                key={i}
                className="bg-linear-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {whyIcons[i]}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="bg-linear-to-br from-primary to-primary-light rounded-3xl p-8 sm:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-8">
            {t.about.industries_heading}
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {t.about.industries.map((industry, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 hover:bg-white/30 transition-colors duration-200"
              >
                <span className="text-white">{industryIcons[i]}</span>
                <span className="text-white font-medium text-sm">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
