import './styles/NextSection.css'

// using direct src paths for images (no imports)

export default function NextSection() {
  return (
    <section className="next-section">
      <div className="">
        
            <img src="../Assets/thirdcomp/Background.png" alt="App mock" className="card-img" />
      </div>

      <div className="management-section flex">
        <img src="../Assets/thirdcomp/SVG.png" alt="decor" className="" />

        <div className="management-inner">
          <div className="eyebrow">Management</div>
          <h2 className="manage-title">Simplified Management</h2>
          <p className="manage-desc">Seemi efficiently manages the profiles and data of students, tutors, and staff in one centralised platform. It allows administrators to create, update, and track individual profiles, ensuring that all relevant information—such as schedules, performance records, and contact details—is easily accessible.</p>
          <button className="btn-secondary">Book A Demo</button>
        </div>
        <img src="../Assets/thirdcomp/Container.png" alt="decor" className="" />

      </div>
    </section>
  )
}
