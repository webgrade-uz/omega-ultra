import { useLanguage } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { TrendingUp, TrendingDown, Check, Zap, BarChart2, CalendarDays } from 'lucide-react'

export default function Economic() {
  const { t } = useLanguage()
  const [ref, isVisible] = useScrollReveal()
  const eco = t.product.economic

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
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">{t.product.economic_badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            {t.product.economic_heading}
          </h2>
          <p className="text-gray-400 text-sm">{eco.note}</p>
        </div>

        {/* Cost cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Distillator card */}
          <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-bold text-red-700 text-lg">{eco.distillator_label}</h3>
            </div>

            <ul className="space-y-3">
              <li className="flex justify-between items-center py-2 border-b border-red-200/60">
                <span className="text-gray-600 text-sm flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-red-400" /> {eco.power_label}
                </span>
                <span className="font-bold text-red-600">{eco.distillator.power}</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-red-200/60">
                <span className="text-gray-600 text-sm flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5 text-red-400" /> {eco.distillator.monthly_kwh}
                </span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-red-200/60">
                <span className="text-gray-600 text-sm flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5 text-red-400" /> {eco.monthly_label}
                </span>
                <span className="font-bold text-red-700 text-sm sm:text-base">{eco.distillator.monthly}</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span className="text-gray-600 text-sm font-semibold flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5 text-red-500" /> {eco.annual_label}
                </span>
                <span className="font-black text-red-700 text-sm sm:text-lg">{eco.distillator.annual}</span>
              </li>
            </ul>
          </div>

          {/* Omega Ultra card */}
          <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-bold text-green-700 text-lg">{eco.omega_label}</h3>
            </div>

            <ul className="space-y-3">
              <li className="flex justify-between items-center py-2 border-b border-green-200/60">
                <span className="text-gray-600 text-sm flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-green-500" /> {eco.power_label}
                </span>
                <span className="font-bold text-green-600">{eco.omega.power}</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-green-200/60">
                <span className="text-gray-600 text-sm flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5 text-green-500" /> {eco.omega.monthly_kwh}
                </span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-green-200/60">
                <span className="text-gray-600 text-sm flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5 text-green-500" /> {eco.monthly_label}
                </span>
                <span className="font-bold text-green-700 text-sm sm:text-base">{eco.omega.monthly}</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span className="text-gray-600 text-sm font-semibold flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5 text-green-600" /> {eco.annual_label}
                </span>
                <span className="font-black text-green-700 text-sm sm:text-lg">{eco.omega.annual}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Savings banner */}
        <div className="bg-linear-to-r from-primary to-primary-light rounded-2xl p-8 sm:p-10 text-white text-center shadow-2xl">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-0 sm:divide-x sm:divide-white/20">
            <div className="flex flex-col items-center">
              <p className="text-blue-100 text-sm font-medium uppercase tracking-wider mb-2">
                {eco.savings_label}
              </p>
              <p className="text-4xl sm:text-5xl font-black leading-tight">
                {eco.savings_short}
              </p>
              <p className="text-blue-200 text-xs mt-1">{eco.savings}</p>
            </div>
            <div className="flex flex-col items-center sm:pl-6">
              <p className="text-blue-100 text-sm font-medium uppercase tracking-wider mb-2">
                {eco.roi_label}
              </p>
              <p className="text-4xl sm:text-5xl font-black leading-tight">
                {eco.roi}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 bg-white/20 rounded-full px-4 py-1">
                <Check className="w-4 h-4 text-green-300" strokeWidth={2.5} />
                <span className="text-white text-xs font-semibold">Fast ROI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual comparison bar */}
        <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <p className="text-sm font-semibold text-gray-600 mb-4 text-center">{t.product.annual_comparison}</p>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-red-600 font-medium">{eco.distillator_label}</span>
                <span className="text-red-600 font-bold">{eco.distillator.annual}</span>
              </div>
              <div className="h-6 bg-red-100 rounded-full overflow-hidden">
                <div className="h-full w-full bg-linear-to-r from-red-400 to-red-500 rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-green-600 font-medium">{eco.omega_label}</span>
                <span className="text-green-600 font-bold">{eco.omega.annual}</span>
              </div>
              <div className="h-6 bg-green-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-green-400 to-green-500 rounded-full"
                  style={{ width: '0.13%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
