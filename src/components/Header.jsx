import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import logoImg from '../assets/photo_2026-03-04_01-08-20.jpg'
import { Menu, X, Globe } from 'lucide-react'

export default function Header() {
  const { t, toggleLang } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.product, href: '#product' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/97 shadow-md backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center no-underline">
          <img
            src={logoImg}
            alt="Omega Ultra Pure Water"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 border-2 border-primary text-primary rounded-full px-4 py-1.5 text-sm font-bold hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            {t.nav.langToggle}
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-gray-700 py-3 px-3 rounded-lg hover:bg-blue-50 hover:text-primary transition-colors no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
