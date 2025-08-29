import SidebarLayout from '@/components/layout/SidebarLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const AdminMonitor = () => {
  const clients = [
    { id: 1, name: 'John Doe', email: 'john@example.com', bookings: 5, rating: 4.8 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', bookings: 3, rating: 4.9 },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', bookings: 8, rating: 4.7 }
  ]

  const mentors = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@google.com', sessions: 25, rating: 4.9, earnings: '$1200' },
    { id: 2, name: 'Michael Chen', email: 'michael@microsoft.com', sessions: 18, rating: 4.8, earnings: '$900' },
    { id: 3, name: 'Emily Davis', email: 'emily@apple.com', sessions: 22, rating: 4.9, earnings: '$1100' }
  ]

  return (
    <SidebarLayout userType="admin" username="Admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Monitor</h1>
          <p className="text-gray-600 mt-2">Monitor user activities and platform health</p>
        </div>

        {/* Clients Section */}
        <Card>
          <CardHeader>
            <CardTitle>Client Profiles</CardTitle>
            <CardDescription>Monitor client activity and engagement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clients.map((client) => (
                <div key={client.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {client.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{client.name}</h4>
                      <p className="text-sm text-gray-600">{client.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="text-center">
                      <div className="font-semibold">{client.bookings}</div>
                      <div className="text-gray-500">Bookings</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">⭐ {client.rating}</div>
                      <div className="text-gray-500">Rating</div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mentors Section */}
        <Card>
          <CardHeader>
            <CardTitle>Mentor Profiles</CardTitle>
            <CardDescription>Monitor mentor performance and earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{mentor.name}</h4>
                      <p className="text-sm text-gray-600">{mentor.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="text-center">
                      <div className="font-semibold">{mentor.sessions}</div>
                      <div className="text-gray-500">Sessions</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">⭐ {mentor.rating}</div>
                      <div className="text-gray-500">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-green-600">{mentor.earnings}</div>
                      <div className="text-gray-500">Earnings</div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
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

export default AdminMonitor