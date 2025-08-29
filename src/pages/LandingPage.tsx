import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleJobSeekerClick = () => {
    navigate('/job-seeker');
  };

  const handleMentorClick = () => {
    navigate('/mentor');
  };

  const handleAdminClick = () => {
    navigate('/admin');
  };

  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="brand-name">ApplyWizz Mentor</span>
          </h1>
          <p className="hero-subtitle">
            Connect with expert mentors and accelerate your career growth
          </p>
          <div className="floating-elements">
            <div className="floating-circle circle-1"></div>
            <div className="floating-circle circle-2"></div>
            <div className="floating-circle circle-3"></div>
          </div>
        </div>
      </div>

      <div className="user-selection">
        <div className="container">
          <h2 className="section-title">Choose Your Path</h2>
          <div className="user-cards">
            <div className="user-card job-seeker-card" onClick={handleJobSeekerClick}>
              <div className="card-icon">👥</div>
              <h3>For Job Seekers</h3>
              <p>Find experienced mentors to guide your career journey</p>
              <button className="card-button">Get Started</button>
            </div>

            <div className="user-card mentor-card" onClick={handleMentorClick}>
              <div className="card-icon">🎓</div>
              <h3>For Mentors</h3>
              <p>Share your expertise and help others grow professionally</p>
              <button className="card-button">Join as Mentor</button>
            </div>

            <div className="user-card admin-card" onClick={handleAdminClick}>
              <div className="card-icon">⚙️</div>
              <h3>Admin Panel</h3>
              <p>Manage the platform and oversee operations</p>
              <button className="card-button">Access Admin</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;