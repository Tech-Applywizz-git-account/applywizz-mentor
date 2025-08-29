import SidebarLayout from '@/components/layout/SidebarLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const ClientDashboard = () => {
  const navigate = useNavigate()

  // Mock data - in real app, this would come from API
  const bookings = [
    {
      id: 1,
      mentorName: 'Sarah Johnson',
      date: '2024-01-15',
      time: '2:00 PM',
      type: 'Video Call',
      status: 'upcoming'
    },
    {
      id: 2,
      mentorName: 'Michael Chen',
      date: '2024-01-10',
      time: '10:00 AM',
      type: 'Text Session',
      status: 'completed'
    }
  ]

  const recommendedMentors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Google',
      role: 'Senior Software Engineer',
      match: 95,
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Microsoft',
      role: 'Product Manager',
      match: 88,
      avatar: 'MC'
    },
    {
      id: 3,
      name: 'Emily Davis',
      company: 'Apple',
      role: 'UX Designer',
      match: 82,
      avatar: 'ED'
    }
  ]

  return (
    <SidebarLayout userType="client" username="John">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your mentoring journey.</p>
        </div>

        {/* Your Bookings */}
        <Card>
          <CardHeader>
            <CardTitle>Your Bookings</CardTitle>
            <CardDescription>Recent and upcoming mentoring sessions</CardDescription>
          </CardHeader>
          <CardContent>
            {bookings.length > 0 ? (
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold">
                          {booking.mentorName.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{booking.mentorName}</h4>
                        <p className="text-sm text-gray-600">
                          {booking.date} at {booking.time} • {booking.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'upcoming' 
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
                <Button
                  onClick={() => navigate('/client/bookings')}
                  variant="outline"
                  className="w-full"
                >
                  View All Bookings
                </Button>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">No bookings yet</p>
                <Button onClick={() => navigate('/client/mentors')}>
                  Find a Mentor
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recommended Mentors */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Mentors That Match Your Profile</CardTitle>
              <CardDescription>Top mentor recommendations based on your goals</CardDescription>
            </div>
            <Button
              onClick={() => navigate('/client/mentors')}
              variant="outline"
            >
              View More
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recommendedMentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate('/client/mentors')}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">{mentor.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{mentor.name}</h4>
                      <p className="text-sm text-gray-600">{mentor.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-200 rounded-sm">
                        <img
                          src={`https://logo.clearbit.com/${mentor.company.toLowerCase()}.com`}
                          alt={mentor.company}
                          className="w-full h-full object-cover rounded-sm"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{mentor.company}</span>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-semibold ${
                        mentor.match >= 90 ? 'text-green-600' :
                        mentor.match >= 80 ? 'text-yellow-600' : 'text-gray-600'
                      }`}>
                        {mentor.match}% match
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  )
}

export default ClientDashboard