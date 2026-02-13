import './styles/SeamlessIntegrations.css'

export default function SeamlessIntegrations() {
  return (
    <section className="seamless-integrations">
      <div className="integrations-header">
        <span className="integrations-badge">PERFORMANCE INSIGHTS</span>
        <h2 className="integrations-title">Seamless Business Integrations</h2>
        <p className="integrations-description">
          Seemi seamlessly integrates with popular payment gateways like Stripe, allowing businesses to process transactions securely and efficiently.
        </p>
      </div>

      <div className="features-grid">

        {/* CARD 1 */}
        <div className="feature-card">
          <div className="feature-number">01</div>
          <h3 className="feature-title">Lesson Scheduling & Calendar</h3>
          <p className="feature-description">
            Effortlessly organize and manage lessons with an intuitive drag-and-drop calendar designed for ultimate convenience.
          </p>

          <div className="feature-content">
            <div className="feature-items">

              <div className="feature-item-first checked">
                <div className="item-checkbox">
                  <i className="fas fa-check-square"></i>
                </div>
                <div className="item-text">
                  <span className="item-title">
                    Intuitive drag-and-drop calendar.
                  </span>
                </div>
              </div>
<div>
              <div className="feature-item-second unchecked">
                <div className="item-checkbox">
                  <input type="checkbox" />
                </div>
                <div className="item-text">
                  <span className="item-title">
                    Manage Tutor Availability
                  </span>
                </div>
                
              </div>
              <i
                  className="fas fa-times green-cross"
                  style={{ color: '#9ADA4C', fontSize: '1.8rem' }}
                ></i>
              </div>

              <div className="feature-item-third unchecked">
                <div className="item-checkbox">
                  <input type="checkbox" />
                </div>
                <div className="item-text">
                  <span className="item-title">
                    Effortless Scheduling
                  </span>
                  <p className="item-subtext">
                    Easily schedule lessons with an intuitive drag-and-drop calendar.
                  </p>
                </div>
              </div>

              <div className="progress-bar"></div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="feature-card">
          <div className="feature-number">02</div>
          <h3 className="feature-title">Billing & Payments</h3>
          <p className="feature-description">
            Generate and send invoices instantly, accept secure online payments through multiple gateways, and track outstanding balances with real-time financial insights.
          </p>
          <div className="feature-content">
            <div className="card2-content">
              <div className="team-tracking">
                <h4>Team Members Tracking</h4>
                <p>Collaborative Space</p>
                <div className="search-box">
                  <i className="fas fa-search"></i>
                  <input type="text" placeholder="Search" />
                </div>
                <div className="team-members">
                  <div className="member-avatar" style={{backgroundColor: '#9ADA4C'}}>2</div>
                  <img src="/src/Assets/1st-comp/Group.png" alt="member" className="member-img" />
                </div>
              </div>
              <div className="card2-decorative">
                <img src="/src/Assets/1st-comp/Mask Group.png" alt="deco1" className="deco-img" />
                <img src="/src/Assets/1st-comp/Vector.png" alt="deco2" className="deco-img" />
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="feature-card">
          <div className="feature-number">03</div>
          <h3 className="feature-title">Student & Lesson Tracking</h3>
          <p className="feature-description">
            Maintain detailed lesson logs and progress reports, track attendance and performance metrics, and provide valuable feedback to students and parents.
          </p>
          <div className="feature-content">
            <div className="card3-content">
              <div className="feedback-section">
                <h4>Tutor Feedback & Review</h4>
                <p>Offer feedback to students and parents in a structured manner.</p>
                <a href="#" className="view-details">View Details →</a>
              </div>
              <div className="logo-section">
                <img src="/src/Assets/1st-comp/Seemi-Logo-05-1024x224.png 1.png" alt="seemli" className="seemli-logo" />
              </div>
              <div className="add-tutor-btn">
                <button>+ Add New Tutor</button>
              </div>
              <div className="dashboard-info">
                <div className="dashboard-item">
                  <i className="fas fa-th"></i>
                  <span>Tutor Dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="feature-card">
          <div className="feature-number">04</div>
          <h3 className="feature-title">Parents & Students Portal</h3>
          <p className="feature-description">
            Provide secure portal access for students to view schedules, progress reports, and payments, while enabling direct messaging for seamless communication.
          </p>
          <div className="feature-content">
            <div className="card4-content">
              <div className="checked-item">
                <i className="fas fa-check-square"></i>
                <span>Intuitive drag-and-drop calendar.</span>
              </div>
              <div className="team-tracking">
                <h4>Team Members Tracking</h4>
                <p>Collaborative Space</p>
                <div className="search-box">
                  <i className="fas fa-search"></i>
                  <input type="text" placeholder="Search" />
                </div>
              </div>
              <div className="decorative-icons">
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 5 */}
        <div className="feature-card">
          <div className="feature-number">05</div>
          <h3 className="feature-title">Automated Communication</h3>
          <p className="feature-description">
            Send automated email and SMS reminders for lessons and payments, ensuring timely notifications, while keeping parents informed with regular progress updates for better engagement.
          </p>
          <div className="feature-content">
            <div className="card5-content">
              <div className="tutor-card">
                <div className="tutor-badge">Thus 08</div>
                <div className="tutor-info">
                  <div className="tutor-avatar">NK</div>
                  <div className="tutor-details">
                    <span className="tutor-name">Nouman Khan</span>
                    <span className="tutor-email">mohammadhuman524@gmail.com</span>
                  </div>
                  <i className="fas fa-envelope"></i>
                </div>
              </div>
              <div className="team-tracking">
                <h4>Team Members Tracking</h4>
                <p>Collaborative Space</p>
                <div className="search-box">
                  <i className="fas fa-search"></i>
                  <input type="text" placeholder="Search" />
                </div>
              </div>
              <div className="team-members">
                <div className="member-avatar" style={{backgroundColor: '#9ADA4C'}}>2</div>
                <img src="/src/Assets/1st-comp/Group.png" alt="member" className="member-img" />
              </div>
            </div>
          </div>
        </div>

        {/* CARD 6 */}
        <div className="feature-card">
          <div className="feature-number">06</div>
          <h3 className="feature-title">Business Reports & Insights</h3>
          <p className="feature-description">
            Gain valuable insights into your business operations with our in-depth reporting tools. Track performance, monitor growth, and make data-driven decisions with ease.
          </p>
          <div className="feature-content">
            <div className="card6-content">
              <div className="feedback-section">
                <h4>Tutor Feedback & Review</h4>
                <p>Offer feedback to students and parents in a structured manner.</p>
              </div>
              <div className="effortless-section">
                <div className="checked-item">
                  <input type="checkbox" />
                  <span>Effortless Scheduling</span>
                </div>
                <p>Easily schedule lessons with an intuitive drag-and-drop calendar.</p>
              </div>
              <div className="progress-section">
                <div className="progress-bar-v2"></div>
              </div>
              <div className="dashboard-footer">
                <div className="dashboard-item">
                  <i className="fas fa-th"></i>
                  <span>Tutor Dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
