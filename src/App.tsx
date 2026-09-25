import { HeroSection } from './components/HeroSection'
import { PortfolioSection } from './components/PortfolioSection'
import { SiteFooter } from './components/SiteFooter'

function App() {
  return (
    <>
      <main className='min-h-screen w-full bg-surface text-body-md text-on-surface'>
        <HeroSection />
        <PortfolioSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
