import { HeroSection } from './components/HeroSection'
import { PortfolioSection } from './components/PortfolioSection'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'

function App() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen w-full bg-surface pt-20 text-body-md text-on-surface">
        <HeroSection />
        <PortfolioSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
