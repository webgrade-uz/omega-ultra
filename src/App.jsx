import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import ProductGallery from './sections/ProductGallery'
import WorkingPrinciple from './sections/WorkingPrinciple'
import TechSpecs from './sections/TechSpecs'
import Comparison from './sections/Comparison'
import Economic from './sections/Economic'
import Contact from './sections/Contact'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <main>
          <Hero />
          <About />
          <ProductGallery />
          <WorkingPrinciple />
          <TechSpecs />
          <Comparison />
          <Economic />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
