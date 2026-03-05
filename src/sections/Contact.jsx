import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Phone, Send, MapPin, CheckCircle2, CircleDot } from 'lucide-react'

export default function Contact() {
  const { t } = useLanguage()
  const [ref, isVisible] = useScrollReveal()
  const [form, setForm] = useState({ name: '', company: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const BOT_TOKEN = "8739959513:AAEm5zGTuvOCNIBHcDBZVz1jCEFfkE8WN6o";
    const CHAT_ID = "7427886417";
    const text = `📋 Yangi so'rov:\n\n👤 Ism: ${form.name}\n🏢 Kompaniya: ${form.company}\n📞 Telefon: ${form.phone}\n💬 Xabar: ${form.message}`
    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      })
    } catch (_) {}
    setSubmitted(true)
    setForm({ name: '', company: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactItems = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: t.contact.phone_label,
      value: t.contact.phone,
      color: 'text-primary',
      bg: 'bg-blue-50',
    },
    {
      icon: <Send className="w-5 h-5" />,
      label: t.contact.telegram_label,
      value: t.contact.telegram,
      color: 'text-sky-500',
      bg: 'bg-sky-50',
      href: t.contact.telegram,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: t.contact.address_label,
      value: t.contact.address,
      color: 'text-primary',
      bg: 'bg-blue-50',
    },
  ]

  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all duration-200 placeholder-gray-400 bg-white"

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 bg-slate-50">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto ${isVisible ? 'section-visible' : 'section-hidden'}`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">{t.contact.badge_label}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            {t.contact.heading}
          </h2>
          <p className="text-gray-500 text-base italic">{t.contact.tagline}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: contact info */}
          <div className="space-y-4">
            {contactItems.map((item, i) => {
              const Wrapper = item.href ? 'a' : 'div'
              return (
                <Wrapper
                  key={i}
                  {...(item.href ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-blue-50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 no-underline"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color} shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className={`font-semibold text-sm whitespace-pre-line ${item.color}`}>{item.value}</p>
                  </div>
                </Wrapper>
              )
            })}

            {/* CTA tagline card */}
            <div className="bg-linear-to-br from-primary to-primary-light rounded-2xl p-6 text-white mt-6">
              <h3 className="font-bold text-lg mb-2">Omega Ultra Pure Water</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{t.contact.tagline}</p>
              <div className="mt-4 flex items-center gap-2 text-blue-200 text-xs">
                <CircleDot className="w-4 h-4 text-green-400 fill-green-400" />
                <span>{t.contact.available}</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-blue-50 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{t.contact.form.heading}</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-green-700 font-semibold">{t.contact.form.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.contact.form.placeholder_name}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    {t.contact.form.company}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder={t.contact.form.placeholder_company}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder={t.contact.form.placeholder_phone}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.placeholder_message}
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {t.contact.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
