import "./styles/SeamlessIntegrations.css";

export default function SeamlessIntegrations() {
  return (
    <section className="seamless-integrations">
      <div className="integrations-header">
        <span className="integrations-badge">PERFORMANCE INSIGHTS</span>
        <h2 className="integrations-title">Seamless Business Integrations</h2>
        <p className="integrations-description">
          Seemi seamlessly integrates with popular payment gateways like Stripe,
          allowing businesses to process transactions securely and efficiently.
        </p>
      </div>

      <div className="features-grid">
        {/* CARD 1 */}
        
        <div className="feature-card">
          <div className="feature-number">01</div>
          <h3 className="feature-title">Lesson Scheduling & Calendar</h3>
          <p className="feature-description">
            Effortlessly organize and manage lessons with an intuitive
            drag-and-drop calendar designed for ultimate convenience.
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
                  style={{ color: "#9ADA4C", fontSize: "1.8rem" }}
                ></i>
              </div>

              <div className="feature-item-third unchecked">
                <div className="item-checkbox">
                  <input type="checkbox" />
                </div>
                <div className="item-text">
                  <span className="item-title">Effortless Scheduling</span>
                  <p className="item-subtext">
                    Easily schedule lessons with an intuitive drag-and-drop
                    calendar.
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
            Generate and send invoices instantly, accept secure online payments
            through multiple gateways, and track outstanding balances with
            real-time financial insights.
          </p>
          <div className="feature-content">
            <div className="card2-content">
              <div className="team-tracking ">
                <img
                  src="/Assets/thirdcomp/team-member.png"
                  alt="team member"
                  className="team-member-img"
                />
                <div>
                  <img
                    src="/Assets/thirdcomp/girl-image.png"
                    alt="team member"
                    className="team-member-img"
                  />
                  <br />
                  <img
                    src="/Assets/thirdcomp/Vector.png"
                    alt="team member"
                    className="team-member-img"
                  />
                </div>
              </div>
              <div className="team-tracking">
                <img
                  src="/Assets/thirdcomp/boy-image.png"
                  alt="deco1"
                  className="deco-img"
                />
                <img
                  src="/Assets/thirdcomp/msg-member.png"
                  alt="deco2"
                  className="deco-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="feature-card">
          <div className="feature-number">03</div>
          <h3 className="feature-title">Student & Lesson Tracking</h3>
          <p className="feature-description">
            Maintain detailed lesson logs and progress reports, track attendance
            and performance metrics, and provide valuable feedback to students
            and parents.
          </p>
          <div className="feature-content">
            <div className="card3-content">
  <img src="/Assets/thirdcomp/orange-arrow.png" alt="orange arrow" className="orange-arrow" />
              <div   className="feedback-section">
                <div className="list-card">
                  <h4>Tutor Feedback & Review</h4>
                  <p>
                    Offer feedback to students and parents in a structured
                    manner.
                  </p>
                  <a href="#" className="view-details">
                    View Details →
                  </a>
                </div>
                <img
                  src="/Assets/thirdcomp/Group.png"
                  alt="deco1"
                  className="deco-img"
                />
              </div>
              <div className="logo-section">
                <img
                  src="/Assets/thirdcomp/Seemii-Logo.png"
                  alt="seemli"
                  className="seemli-logo"
                />
                <div className="mini-cards">
                  <div className="mini-card mini-card--pink">
                    <div className="mini-card-top">Thus</div>
                    <div className="mini-card-bottom">08</div>
                  </div>
                  <div className="mini-card mini-card--white">
                    <div className="mini-card-top">Thus</div>
                    <div className="mini-card-bottom">08</div>
                  </div>
                </div>
              </div>
              <div className="add-tutor">
                <img src="/Assets/thirdcomp/add-new-tutor.png" alt="add tutor" />
              </div>
              <div className="dashboard-info">
                <img src="/Assets/thirdcomp/tutor-mmm.png" alt="add tutor" />
              </div>
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="feature-card">
          <div className="feature-number">04</div>
          <h3 className="feature-title">Parents & Students Portal</h3>
          <p className="feature-description">
            Provide secure portal access for students to view schedules,
            progress reports, and payments, while enabling direct messaging for
            seamless communication.
          </p>
          <div className="feature-content">
            <div className="card4-content">
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
              <div className="team-tracking ">
                <img
                  src="/Assets/thirdcomp/team-member2.png"
                  alt="team member"
                  className="team-member-img"
                />
                <div>
                  <i
                  className="fas fa-times green-cross"
                  style={{ color: "#9ADA4C", fontSize: "1.8rem" }}
                ></i>
                  <br />
                  <img
                    src="/Assets/thirdcomp/Vector.png"
                    alt="team member"
                    className="team-member-img"
                  />
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
            Send automated email and SMS reminders for lessons and payments,
            ensuring timely notifications, while keeping parents informed with
            regular progress updates for better engagement.
          </p>
         <div className="feature-content">
            <div className="card2-content">
              
              <div className="team-tracking">
                <div className="mini-card mini-card--purple">
                    <div className="mini-card-top">Thus</div>
                    <div className="mini-card-bottom">08</div>
                  </div>
                <img
                  src="/Assets/thirdcomp/msg-member.png"
                  alt="deco2"
                  className="deco-img"
                />
              </div>
              <div className="team-tracking ">
                <img
                  src="/Assets/thirdcomp/team-member.png"
                  alt="team member"
                  className="team-member-img"
                />
                <div>
                  <img
                    src="/Assets/thirdcomp/girl-image.png"
                    alt="team member"
                    className="team-member-img"
                  />
                  <br />
                  <img
                    src="/Assets/thirdcomp/Vector.png"
                    alt="team member"
                    className="team-member-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 6 */}
        <div className="feature-card">
          <div className="feature-number">06</div>
          <h3 className="feature-title">Business Reports & Insights</h3>
          <i className=""></i>
          <p className="feature-description">
            Gain valuable insights into your business operations with our
            in-depth reporting tools. Track performance, monitor growth, and
            make data-driven decisions with ease.
          </p>
          <div className="feature-content">
            <div className="card6-content">
              <img src="/Assets/thirdcomp/orange-arrow.png" alt="orange arrow" className="orange-arrow" />
              <div   className="feedback-section">
                <div className="list-card">
                  <h4>Tutor Feedback & Review</h4>
                  <p>
                    Offer feedback to students and parents in a structured
                    manner.
                  </p>
                  <a href="#" className="view-details">
                    View Details →
                  </a>
                </div>
                <img
                  src="/Assets/thirdcomp/Group.png"
                  alt="deco1"
                  className="deco-img"
                />
              </div>
              <div className="feature-item-third unchecked">
                <div className="item-checkbox">
                  <input type="checkbox" />
                </div>
                <div className="item-text">
                  <span className="item-title">Effortless Scheduling</span>
                  <p className="item-subtext">
                    Easily schedule lessons with an intuitive drag-and-drop
                    calendar.
                  </p>
                </div>
              </div>
              <div className="progress-section">
                <div className="progress-bar-v2"></div>
              </div>
              <div className="dashboard-info">
                <img src="/Assets/thirdcomp/tutor-mmm.png" alt="add tutor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
