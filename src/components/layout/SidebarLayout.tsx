import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { useNavigate, useLocation } from 'react-router-dom'

interface SidebarLayoutProps {
  children: ReactNode
  userType: 'client' | 'mentor' | 'admin'
  username?: string
}

const SidebarLayout = ({ children, userType, username = 'User' }: SidebarLayoutProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  }

  const getNavItems = () => {
    switch (userType) {
      case 'client':
        return [
          { label: 'Dashboard', path: '/client/dashboard', icon: '🏠' },
          { label: 'Mentors', path: '/client/mentors', icon: '👨‍🏫' },
          { label: 'Bookings', path: '/client/bookings', icon: '📅' },
          { label: 'Settings', path: '/client/settings', icon: '⚙️' },
        ]
      case 'mentor':
        return [
          { label: 'Dashboard', path: '/mentor/dashboard', icon: '🏠' },
          { label: 'Bookings', path: '/mentor/bookings', icon: '📅' },
          { label: 'Profile', path: '/mentor/profile', icon: '👤' },
          { label: 'Settings', path: '/mentor/settings', icon: '⚙️' },
        ]
      case 'admin':
        return [
          { label: 'Home', path: '/admin/dashboard', icon: '🏠' },
          { label: 'Monitor', path: '/admin/monitor', icon: '👁️' },
          { label: 'Purchases', path: '/admin/purchases', icon: '💰' },
          { label: 'Settings', path: '/admin/settings', icon: '⚙️' },
        ]
      default:
        return []
    }
  }

  const navItems = getNavItems()

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        {/* Logo */}
        <div className="p-6 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
            <span className="text-xl font-bold">ApplyWizz</span>
          </div>
        </div>

        {/* User Greeting */}
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            {getGreeting()}, {username}!
          </h2>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    location.pathname === item.path
                      ? 'bg-purple-100 text-purple-700 border border-purple-200'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 left-4 right-4">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="w-full"
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default SidebarLayout