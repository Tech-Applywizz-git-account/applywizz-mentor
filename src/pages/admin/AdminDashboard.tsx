import SidebarLayout from '@/components/layout/SidebarLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const AdminDashboard = () => {
  // Mock data for graphs and stats
  const stats = {
    totalUsers: 1234,
    activeMentors: 156,
    totalBookings: 892,
    revenue: 45600
  }

  const recentPurchases = [
    { id: 1, client: 'John Doe', mentor: 'Sarah Johnson', amount: '$50', date: '2024-01-15' },
    { id: 2, client: 'Jane Smith', mentor: 'Michael Chen', amount: '$30', date: '2024-01-14' },
    { id: 3, client: 'Bob Wilson', mentor: 'Emily Davis', amount: '$75', date: '2024-01-13' },
    { id: 4, client: 'Alice Brown', mentor: 'David Wilson', amount: '$40', date: '2024-01-12' },
    { id: 5, client: 'Tom Jones', mentor: 'Sarah Johnson', amount: '$60', date: '2024-01-11' }
  ]

  return (
    <SidebarLayout userType="admin" username="Admin">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Platform overview and analytics</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-blue-600">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-gray-600">Total Users</p>
              <p className="text-sm text-green-600 mt-1">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-purple-600">{stats.activeMentors}</div>
              <p className="text-gray-600">Active Mentors</p>
              <p className="text-sm text-green-600 mt-1">+8% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600">{stats.totalBookings}</div>
              <p className="text-gray-600">Total Bookings</p>
              <p className="text-sm text-green-600 mt-1">+25% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-yellow-600">${stats.revenue.toLocaleString()}</div>
              <p className="text-gray-600">Revenue</p>
              <p className="text-sm text-green-600 mt-1">+18% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
              <CardDescription>Monthly user registration trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">📊 Chart would go here</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Trends</CardTitle>
              <CardDescription>Monthly revenue breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">💰 Revenue chart would go here</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Purchases */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Purchases</CardTitle>
            <CardDescription>Latest 10 transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPurchases.map((purchase) => (
                <div
                  key={purchase.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {purchase.client.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{purchase.client}</h4>
                      <p className="text-sm text-gray-600">
                        Session with {purchase.mentor}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-600">{purchase.amount}</div>
                    <div className="text-sm text-gray-500">{purchase.date}</div>
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

export default AdminDashboard