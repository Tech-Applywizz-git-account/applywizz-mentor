import SidebarLayout from '@/components/layout/SidebarLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const MentorDashboard = () => {
  // Mock data
  const bookings = [
    {
      id: 1,
      clientName: 'John Doe',
      date: '2024-01-15',
      time: '2:00 PM',
      type: 'Video Call',
      status: 'upcoming'
    },
    {
      id: 2,
      clientName: 'Jane Smith',
      date: '2024-01-10',
      time: '10:00 AM',
      type: 'Text Session',
      status: 'completed'
    }
  ]

  return (
    <SidebarLayout userType="mentor" username="Sarah">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's your mentoring activity.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <p className="text-gray-600">Total Sessions</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600">8</div>
              <p className="text-gray-600">This Month</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-blue-600">4.9</div>
              <p className="text-gray-600">Rating</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-yellow-600">$1,200</div>
              <p className="text-gray-600">Earnings</p>
            </CardContent>
          </Card>
        </div>

        {/* Booked Meetings */}
        <Card>
          <CardHeader>
            <CardTitle>Booked Meetings</CardTitle>
            <CardDescription>Your upcoming and recent sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">
                        {booking.clientName.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{booking.clientName}</h4>
                      <p className="text-sm text-gray-600">
                        {booking.date} at {booking.time} • {booking.type}
                      </p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    booking.status === 'upcoming' 
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  )
}

export default MentorDashboard