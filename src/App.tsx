import LandingHero from './components/LandingHero'
import FeatureShowcase from './components/FeatureShowcase'
import SeamlessIntegrations from './components/SeamlessIntegrations'
import NextSection from './components/NextSection'
import './App.css'
import ThirdComponent from './components/ThirdComponent'
// import SeemiHero from './components/SeemiHero'

function App() {
  return (
    <div className="app">
      {/* <SeemiHero /> */}
      <LandingHero />
      <FeatureShowcase />
      <SeamlessIntegrations />
      <NextSection />
      <ThirdComponent />
    </div>
  )
}

export default App
