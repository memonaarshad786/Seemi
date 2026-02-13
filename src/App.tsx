import LandingHero from './components/LandingHero'
import FeatureShowcase from './components/FeatureShowcase'
import SeamlessIntegrations from './components/SeamlessIntegrations'
import NextSection from './components/NextSection'
import './App.css'
import ThirdComponent from './components/ThirdComponent'

function App() {
  return (
    <div className="app">
      <LandingHero />
      <FeatureShowcase />
      <SeamlessIntegrations />
      <NextSection />
      <ThirdComponent />
    </div>
  )
}

export default App
