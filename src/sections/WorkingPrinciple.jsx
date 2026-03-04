import { useLanguage } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Filter, RefreshCw, FlaskConical, Sun, ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react'

const stepIcons = [
  <Filter className="w-7 h-7" />,
  <RefreshCw className="w-7 h-7" />,
  <FlaskConical className="w-7 h-7" />,
  <Sun className="w-7 h-7" />,
]

export default function WorkingPrinciple() {
  const { t } = useLanguage()
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="py-20 sm:py-28 px-4 bg-slate-50" id="principle">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto ${isVisible ? 'section-visible' : 'section-hidden'}`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">
              {t.product.principle_heading}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            {t.product.principle_heading}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-linear-to-r from-primary to-primary-light z-0 mx-8" />

          {t.product.steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-6 shadow-sm border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 z-10"
            >
              {/* Step number */}
              <div className="absolute top-4 right-4 text-5xl font-black text-primary/8 leading-none select-none">
                {step.number}
              </div>

              {/* Icon circle */}
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary to-primary-light flex items-center justify-center text-white mb-5 shadow-md">
                {stepIcons[i]}
              </div>

              {/* Content */}
              <div className="text-xs font-bold text-primary-light uppercase tracking-wider mb-1">
                {t.product.step_label} {step.number}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>

              {/* Arrow between steps (mobile) */}
              {i < t.product.steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-4 text-primary-light">
                  <ChevronDown className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Result banner */}
        <div className="mt-12 bg-linear-to-r from-primary to-primary-light rounded-2xl p-6 sm:p-8 text-center text-white">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            <div>
              <div className="text-3xl sm:text-4xl font-black">18.2</div>
              <div className="text-blue-100 text-sm">MΩ·cm</div>
            </div>
            <ArrowRight className="text-blue-200 hidden sm:block w-8 h-8" />
            <div className="text-center">
              <div className="text-lg font-bold">Ultra Pure Water</div>
              <div className="text-blue-100 text-sm">Laboratory Grade</div>
            </div>
            <CheckCircle2 className="text-green-300 hidden sm:block w-8 h-8" />
            <div>
              <div className="text-lg font-bold">ASTM Type 1</div>
              <div className="text-blue-100 text-sm">Standard</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
