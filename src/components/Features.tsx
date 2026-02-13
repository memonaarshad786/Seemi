import './styles/Features.css'

export default function Features() {
  const features = [
    {
      id: 1,
      title: 'Fast Performance',
      description: 'Built with Vite for lightning-fast load times'
    },
    {
      id: 2,
      title: 'Responsive Design',
      description: 'Works seamlessly on all devices and screen sizes'
    },
    {
      id: 3,
      title: 'Easy to Customize',
      description: 'Simple component structure for quick modifications'
    }
  ]

  return (
    <section id="features" className="features">
      <h2>Key Features</h2>
      <div className="features-grid">
        {features.map(feature => (
          <div key={feature.id} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
