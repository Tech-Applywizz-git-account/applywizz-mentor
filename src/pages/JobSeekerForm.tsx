import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobSeekerForm.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  skills: string;
  careerGoals: string;
  preferredMentorType: string;
}

const JobSeekerForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
    careerGoals: '',
    preferredMentorType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Registration successful! We will connect you with suitable mentors soon.');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="job-seeker-form">
      <div className="form-container">
        <div className="form-header">
          <div className="logo-placeholder">
            <div className="logo-icon">🎯</div>
            <span className="logo-text">ApplyWizz Mentor</span>
          </div>
          <button className="back-button" onClick={handleBackToHome}>
            ← Back to Home
          </button>
        </div>

        <div className="form-content">
          <div className="form-intro">
            <h1>Join as a Job Seeker</h1>
            <p>Connect with experienced mentors who can guide your career journey</p>
          </div>

          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your first name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="experience">Experience Level *</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
              >
                <option value="">Select your experience level</option>
                <option value="entry">Entry Level (0-2 years)</option>
                <option value="mid">Mid Level (3-5 years)</option>
                <option value="senior">Senior Level (6+ years)</option>
                <option value="executive">Executive Level</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="skills">Skills & Technologies</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                placeholder="e.g., JavaScript, React, Python, Project Management"
              />
            </div>

            <div className="form-group">
              <label htmlFor="careerGoals">Career Goals *</label>
              <textarea
                id="careerGoals"
                name="careerGoals"
                value={formData.careerGoals}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Tell us about your career aspirations and what you hope to achieve through mentorship"
              />
            </div>

            <div className="form-group">
              <label htmlFor="preferredMentorType">Preferred Mentor Type</label>
              <select
                id="preferredMentorType"
                name="preferredMentorType"
                value={formData.preferredMentorType}
                onChange={handleInputChange}
              >
                <option value="">Select mentor type preference</option>
                <option value="technical">Technical Mentor</option>
                <option value="career">Career Coach</option>
                <option value="industry">Industry Expert</option>
                <option value="leadership">Leadership Mentor</option>
                <option value="entrepreneurship">Entrepreneurship Mentor</option>
              </select>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-button">
                Register as Job Seeker
              </button>
              <p className="form-note">
                By registering, you agree to our terms and conditions and privacy policy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerForm;