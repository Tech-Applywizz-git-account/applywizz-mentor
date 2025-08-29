import SidebarLayout from '@/components/layout/SidebarLayout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const ClientBookings = () => {
  // Mock booking data
  const bookings = [
    {
      id: 1,
      mentorName: 'Sarah Johnson',
      date: '2024-01-15',
      time: '2:00 PM',
      type: 'Video Call',
      status: 'upcoming',
      duration: '60 min',
      topic: 'Career Planning'
    },
    {
      id: 2,
      mentorName: 'Michael Chen',
      date: '2024-01-10',
      time: '10:00 AM',
      type: 'Text Session',
      status: 'completed',
      duration: '45 min',
      topic: 'Product Strategy'
    },
    {
      id: 3,
      mentorName: 'Emily Davis',
      date: '2024-01-08',
      time: '4:00 PM',
      type: 'Voice Call',
      status: 'completed',
      duration: '30 min',
      topic: 'Design Review'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-green-100 text-green-700'
      case 'completed':
        return 'bg-gray-100 text-gray-700'
      case 'cancelled':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <SidebarLayout userType="client" username="John">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
            <p className="text-gray-600 mt-2">Manage your mentoring sessions</p>
          </div>
          <Button>
            Book New Session
          </Button>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {bookings.map((booking) => (
            <Card key={booking.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">
                        {booking.mentorName.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{booking.mentorName}</h3>
                      <p className="text-gray-600">{booking.topic}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span>📅 {booking.date}</span>
                        <span>🕐 {booking.time}</span>
                        <span>⏱️ {booking.duration}</span>
                        <span>💬 {booking.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                    {booking.status === 'upcoming' && (
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button variant="destructive" size="sm">
                          Cancel
                        </Button>
                      </div>
                    )}
                    {booking.status === 'completed' && (
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {bookings.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No bookings yet</h3>
              <p className="text-gray-500 mb-6">Start your mentoring journey by booking your first session</p>
              <Button>
                Find a Mentor
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </SidebarLayout>
  )
}

export default ClientBookings