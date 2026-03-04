import { useLanguage } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
// import { Trophy, Lock, Zap, Globe } from 'lucide-react'

// const badges = [
//   { icon: <Trophy className="w-5 h-5" />, label: 'ASTM Type 1', color: 'text-amber-500', bg: 'bg-amber-50 border-amber-100' },
//   { icon: <Lock className="w-5 h-5" />,   label: 'ISO Compatible', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-100' },
//   { icon: <Zap className="w-5 h-5" />,    label: 'Energy Efficient', color: 'text-green-600', bg: 'bg-green-50 border-green-100' },
//   { icon: <Globe className="w-5 h-5" />,  label: 'Online Monitor', color: 'text-primary', bg: 'bg-blue-50 border-blue-100' },
// ]

export default function TechSpecs() {
  const { t } = useLanguage()
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="py-20 sm:py-28 px-4 bg-white">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto ${isVisible ? 'section-visible' : 'section-hidden'}`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">{t.product.specs_heading}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            {t.product.specs_heading}
          </h2>
        </div>

        {/* Specs table */}
        <div className="overflow-x-auto rounded-2xl border border-blue-100 shadow-lg">
          <table className="w-full min-w-105">
            <tbody>
              {t.product.specs.map((spec, i) => (
                <tr
                  key={i}
                  className={`group border-b border-blue-50 last:border-b-0 hover:bg-blue-50/60 transition-colors ${
                    i % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'
                  }`}
                >
                  <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-600 text-sm w-1/2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {spec.label}
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-primary font-semibold text-sm">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Badges */}
        {/* <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {badges.map((badge, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-2 border rounded-xl p-4 text-center ${badge.bg}`}
            >
              <span className={badge.color}>{badge.icon}</span>
              <span className={`text-xs font-semibold ${badge.color}`}>{badge.label}</span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
