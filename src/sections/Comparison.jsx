import { useLanguage } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Check, X, CircleCheck } from 'lucide-react'

export default function Comparison() {
  const { t } = useLanguage()
  const [ref, isVisible] = useScrollReveal()
  const { columns, rows } = t.product.comparison

  return (
    <section className="py-20 sm:py-28 px-4 bg-slate-50">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto ${isVisible ? 'section-visible' : 'section-hidden'}`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            {t.product.comparison_heading}
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-blue-100 shadow-lg">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr>
                <th className="px-3 sm:px-6 py-4 sm:py-5 bg-gray-50 text-left text-xs sm:text-sm font-semibold text-gray-600 border-b border-blue-100">
                  {columns[0]}
                </th>
                <th className="px-3 sm:px-6 py-4 sm:py-5 bg-primary text-center text-xs sm:text-sm font-bold text-white border-b border-blue-800">
                  <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                    {columns[1]}
                  </div>
                </th>
                <th className="px-3 sm:px-6 py-4 sm:py-5 bg-gray-200 text-center text-xs sm:text-sm font-semibold text-gray-500 border-b border-gray-300">
                  {columns[2]}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-blue-50 last:border-b-0 hover:bg-blue-50/40 transition-colors ${
                    i % 2 === 0 ? 'bg-white' : 'bg-blue-50/20'
                  }`}
                >
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-700">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-1 h-5 rounded-full bg-primary/20 shrink-0" />
                      {row[0]}
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="inline-flex items-center gap-1 sm:gap-1.5">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 shrink-0" strokeWidth={2.5} />
                      <span className="text-xs sm:text-sm font-semibold text-green-700">{row[1]}</span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="inline-flex items-center gap-1 sm:gap-1.5">
                      <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400 shrink-0" strokeWidth={2.5} />
                      <span className="text-xs sm:text-sm text-gray-400">{row[2]}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Winner note */}
        <div className="mt-6 flex items-center justify-center">
          <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-5 py-2">
            <CircleCheck className="w-4 h-4 text-green-600" />
            <span className="text-green-700 font-semibold text-sm">{columns[1]}</span>
            <span className="text-green-600 text-xs">— Best Choice</span>
          </div>
        </div>
      </div>
    </section>
  )
}
