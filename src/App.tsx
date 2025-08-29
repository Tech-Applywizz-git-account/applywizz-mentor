import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ClientAuth from './pages/client/ClientAuth'
import ClientDashboard from './pages/client/ClientDashboard'
import ClientMentors from './pages/client/ClientMentors'
import ClientBookings from './pages/client/ClientBookings'
import ClientSettings from './pages/client/ClientSettings'
import MentorAuth from './pages/mentor/MentorAuth'
import MentorOnboarding from './pages/mentor/MentorOnboarding'
import MentorDashboard from './pages/mentor/MentorDashboard'
import MentorBookings from './pages/mentor/MentorBookings'
import MentorProfile from './pages/mentor/MentorProfile'
import MentorSettings from './pages/mentor/MentorSettings'
import AdminAuth from './pages/admin/AdminAuth'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminMonitor from './pages/admin/AdminMonitor'
import AdminPurchases from './pages/admin/AdminPurchases'
import AdminSettings from './pages/admin/AdminSettings'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Client Routes */}
          <Route path="/client/auth" element={<ClientAuth />} />
          <Route path="/client/dashboard" element={<ClientDashboard />} />
          <Route path="/client/mentors" element={<ClientMentors />} />
          <Route path="/client/bookings" element={<ClientBookings />} />
          <Route path="/client/settings" element={<ClientSettings />} />
          
          {/* Mentor Routes */}
          <Route path="/mentor/auth" element={<MentorAuth />} />
          <Route path="/mentor/onboarding" element={<MentorOnboarding />} />
          <Route path="/mentor/dashboard" element={<MentorDashboard />} />
          <Route path="/mentor/bookings" element={<MentorBookings />} />
          <Route path="/mentor/profile" element={<MentorProfile />} />
          <Route path="/mentor/settings" element={<MentorSettings />} />
          
          {/* Admin Routes */}
          <Route path="/admin/v1" element={<AdminAuth />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/monitor" element={<AdminMonitor />} />
          <Route path="/admin/purchases" element={<AdminPurchases />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
