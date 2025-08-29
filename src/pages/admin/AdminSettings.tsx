import SidebarLayout from '@/components/layout/SidebarLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const AdminSettings = () => {
  return (
    <SidebarLayout userType="admin" username="Admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Settings</h1>
          <p className="text-gray-600 mt-2">Manage platform configuration and settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Platform Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                Manage User Roles
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Payment Configuration
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Email Templates
              </Button>
              <Button variant="outline" className="w-full justify-start">
                System Maintenance
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                Audit Logs
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Access Control
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Backup & Recovery
              </Button>
              <Button variant="destructive" className="w-full justify-start">
                Emergency Shutdown
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarLayout>
  )
}

export default AdminSettings