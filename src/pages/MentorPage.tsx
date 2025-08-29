import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PlaceholderPage.css';

const MentorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="placeholder-page">
      <div className="placeholder-container">
        <div className="placeholder-header">
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </div>
        <div className="placeholder-content">
          <div className="placeholder-icon">🎓</div>
          <h1>Mentor Portal</h1>
          <p>Coming Soon!</p>
          <div className="placeholder-description">
            <p>The mentor portal will allow experienced professionals to:</p>
            <ul>
              <li>Create and manage mentor profiles</li>
              <li>Set hourly rates for calls and text consultations</li>
              <li>Schedule mentoring sessions</li>
              <li>Track earnings and client interactions</li>
              <li>Manage availability and preferences</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorPage;