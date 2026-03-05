import { useLanguage } from '../context/LanguageContext'
import logoImg from '../assets/photo_2026-03-04_01-08-20.jpg'
import { Phone, Send } from 'lucide-react'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-3 inline-block bg-white rounded-xl px-3 py-2">
              <img
                src={logoImg}
                alt="Omega Ultra Pure Water"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-100 hover:text-white text-sm no-underline transition-colors">
                  {t.footer.nav_home}
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white text-sm no-underline transition-colors">
                  {t.footer.nav_about}
                </a>
              </li>
              <li>
                <a href="#product" className="text-blue-100 hover:text-white text-sm no-underline transition-colors">
                  {t.footer.nav_product}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white text-sm no-underline transition-colors">
                  {t.footer.nav_contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{t.footer.nav_contact}</h4>
            <ul className="space-y-2">
              <li className="text-blue-100 text-sm flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="whitespace-pre-line">{t.contact.phone}</span>
              </li>
              <li className="text-blue-100 text-sm flex items-center gap-2">
                <Send className="w-4 h-4 shrink-0" />
                <a href={t.contact.telegram} target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white no-underline">
                  {t.contact.telegram}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-blue-200 text-xs">
            © {year} {t.footer.company}. {t.footer.rights}
          </p>
          <p className="text-blue-300 text-xs">
            18.2 MΩ·cm Ultra Pure Water System
          </p>
        </div>
      </div>
    </footer>
  )
}
