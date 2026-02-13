import './styles/FeatureShowcase.css'

export default function FeatureShowcase() {
  const handleBookDemo = () => {
    console.log('Book a demo clicked')
  }

  return (
    <section className="feature-showcase">
        
        {/* Top decorative line and text */}
      <div className="top-section">
        <div className="decorative-line"></div>
        <p className="intro-text">
          Gain valuable insights into your business operations with our in-depth reporting tools. 
          Track performance, monitor growth, and make data-driven decisions with ease.
        </p>
        <div className="decorative-line"></div>
      </div>
      <div className="deco-top">
        <div className="deco-circle-large"></div>
      </div>
      <div className="showcase-container">
        <div className="showcase-left">
          <div className="illustration-wrapper">
            {/* Main illustration box */}
            <div className="illustration-box">
              <div className="dotted-circle-orange"></div>
              <img src="../Assets/scndcomp/comp2.png" alt="Lesson Scheduling Illustration" className="illustration-image" />
            </div>
          </div>
        </div>

        <div className="showcase-right">
          <div className="showcase-header">
            <span className="badge">HASSLE FREE MANAGEMENT</span>
            <h2 className="showcase-title">Lesson Scheduling & Calendar</h2>
          </div>

          <div className="showcase-content">
            <p className="main-description">
              Effortlessly organize and manage lessons with an intuitive drag-and-drop calendar 
              designed for ultimate convenience. Set up recurring sessions, adjust tutor 
              availability with ease, and minimize missed appointments using automated 
              reminders.
            </p>
            <p className="secondary-description">
              This streamlined scheduling system ensures a smooth experience for both 
              students and tutors, reducing administrative burdens and maximizing efficiency.
            </p>
          </div>

          <button className="demo-button" onClick={handleBookDemo}>
            BOOK A DEMO
          </button>
        </div>
      </div>

      
    </section>
  )
}
