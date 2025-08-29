import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PlaceholderPage.css';

const AdminPage: React.FC = () => {
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
          <div className="placeholder-icon">⚙️</div>
          <h1>Admin Panel</h1>
          <p>Coming Soon!</p>
          <div className="placeholder-description">
            <p>The admin panel will provide tools to:</p>
            <ul>
              <li>Manage platform users (mentors and job seekers)</li>
              <li>Monitor platform activities and analytics</li>
              <li>Handle payment processing and disputes</li>
              <li>Moderate content and user interactions</li>
              <li>Configure platform settings and policies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;