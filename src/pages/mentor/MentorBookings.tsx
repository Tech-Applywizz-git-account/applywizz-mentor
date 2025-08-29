import SidebarLayout from '@/components/layout/SidebarLayout'
import { Card, CardContent } from '@/components/ui/card'

const MentorBookings = () => {
  const bookings = [
    {
      id: 1,
      clientName: 'John Doe',
      date: '2024-01-15',
      time: '2:00 PM',
      type: 'Video Call',
      status: 'upcoming',
      duration: '60 min',
      rate: '$50/hr'
    },
    {
      id: 2,
      clientName: 'Jane Smith',
      date: '2024-01-10',
      time: '10:00 AM',
      type: 'Text Session',
      status: 'completed',
      duration: '45 min',
      rate: '$30/session'
    }
  ]

  return (
    <SidebarLayout userType="mentor" username="Sarah">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
          <p className="text-gray-600 mt-2">Manage your mentoring sessions</p>
        </div>

        <div className="space-y-4">
          {bookings.map((booking) => (
            <Card key={booking.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">
                        {booking.clientName.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{booking.clientName}</h3>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                        <span>📅 {booking.date}</span>
                        <span>🕐 {booking.time}</span>
                        <span>⏱️ {booking.duration}</span>
                        <span>💰 {booking.rate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      booking.status === 'upcoming' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SidebarLayout>
  )
}

export default MentorBookings