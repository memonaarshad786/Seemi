import "./styles/SeemiHero.css";

export default function SeemiHero() {
  return (
    <section className="seemi-hero">

      {/* Logo */}
      <img
        src="/Assets/1st-comp/Seemi-Logo-05-1024x224.png 1.png"
        alt="Seemi Logo"
        className="seemi-logo"
      />

      {/* Graduation Hat Icon */}
      <i className="fa-solid fa-graduation-cap fa-hat"></i>

      {/* Right Side Icon */}
      <i className="fa-solid fa-hand-pointer fa-right-icon"></i>

      {/* Text */}
      <div className="hero-text">
        <h1>
          Everything You Need <br />
          To <span>Manage & Grow</span> <br />
          Your Tutoring Business
        </h1>

        <p>
          Seemi streamlines your tutoring business with real-time tools for
          scheduling, progress tracking, and payments. Focus on teaching
          while we handle the rest.
        </p>
      </div>

      {/* Signup Card */}
      <div className="signup-card">
        <h3>
          Get <span>30 days</span> free!
        </h3>

        <div className="input-wrap">
          <i className="fa-solid fa-user"></i>
          <input type="text" placeholder="First Name" />
        </div>

        <div className="input-wrap">
          <i className="fa-solid fa-user"></i>
          <input type="text" placeholder="Last Name" />
        </div>

        <div className="input-wrap">
          <i className="fa-solid fa-envelope"></i>
          <input type="email" placeholder="Email Address" />
        </div>

        <div className="input-wrap">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" />
          <i className="fa-solid fa-eye eye-icon"></i>
        </div>

        <div className="input-wrap">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Confirm Password" />
        </div>

        <button className="create-btn">
          Create My Tutor Account
        </button>
      </div>

      {/* Cloud */}
      <img
        src="/Assets/1st-comp/Mask Group.png"
        alt="Cloud"
        className="cloud-img"
      />

    </section>
  );
}
