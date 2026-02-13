import React from "react";
import "./styles/ThirdComponent.css";

const ThirdComponent: React.FC = () => {
  return (
    <footer
      className="third-container"
      style={{ backgroundImage: `url(../Assets/thirdcomp/blue-background.png)` }}
    >
      <div className="third-content pt-6">
        
        {/* Left Section */}
        <div className="third-left">
          <h2>Get Ready to started?</h2>
          <p>
            Create your <strong>30-day free trial</strong> and <br />
            get started with TutorBird today!
          </p>
          <button className="start-btn">Get started</button>

          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* Features */}
        <div className="third-column">
          <h4>Features</h4>
          <ul>
            <li>Student Management</li>
            <li>Calendar & Attendance</li>
            <li>Invoices & Payments</li>
            <li>Business Features</li>
            <li>Learning Management</li>
            <li>Multi-Tutor</li>
            <li>Student Portal</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="third-column">
          <h4>Useful Links</h4>
          <ul>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Support</li>
            <li>Getting Started Guide</li>
            <li>Book a Demo</li>
            <li>Product Updates</li>
            <li>Free Worksheets</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="third-column">
          <h4>Contact</h4>
          <ul className="contact-list">
            <li><i className="fas fa-envelope"></i> support@seemi.com</li>
            <li><i className="fas fa-phone"></i> Toll Free (US & Canada): 1 234 567 8901</li>
            <li><i className="fas fa-phone"></i> UK: 0123 456 7890</li>
            <li><i className="fas fa-phone"></i> International: +1 234 567 8901</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default ThirdComponent;
