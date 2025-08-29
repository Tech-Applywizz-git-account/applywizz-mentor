import SidebarLayout from '@/components/layout/SidebarLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const AdminPurchases = () => {
  const purchases = [
    {
      id: 1,
      client: 'John Doe',
      mentor: 'Sarah Johnson',
      amount: '$50',
      date: '2024-01-15',
      type: 'Video Call',
      status: 'completed'
    },
    {
      id: 2,
      client: 'Jane Smith',
      mentor: 'Michael Chen',
      amount: '$30',
      date: '2024-01-14',
      type: 'Text Session',
      status: 'completed'
    },
    {
      id: 3,
      client: 'Bob Wilson',
      mentor: 'Emily Davis',
      amount: '$75',
      date: '2024-01-13',
      type: 'Video Call',
      status: 'completed'
    },
    {
      id: 4,
      client: 'Alice Brown',
      mentor: 'David Wilson',
      amount: '$40',
      date: '2024-01-12',
      type: 'Voice Call',
      status: 'refunded'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700'
      case 'pending':
        return 'bg-yellow-100 text-yellow-700'
      case 'refunded':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <SidebarLayout userType="admin" username="Admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Purchases</h1>
          <p className="text-gray-600 mt-2">View and manage all platform transactions</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600">$45,600</div>
              <p className="text-gray-600">Total Revenue</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-blue-600">892</div>
              <p className="text-gray-600">Total Transactions</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-purple-600">$51</div>
              <p className="text-gray-600">Avg Transaction</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-yellow-600">12</div>
              <p className="text-gray-600">Refunds</p>
            </CardContent>
          </Card>
        </div>

        {/* Purchase History */}
        <Card>
          <CardHeader>
            <CardTitle>Purchase History</CardTitle>
            <CardDescription>Complete transaction history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {purchases.map((purchase) => (
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
                        {purchase.type} with {purchase.mentor}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-green-600">{purchase.amount}</div>
                      <div className="text-sm text-gray-500">{purchase.date}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(purchase.status)}`}>
                      {purchase.status}
                    </span>
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

export default AdminPurchases