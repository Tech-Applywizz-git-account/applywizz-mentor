import SidebarLayout from '@/components/layout/SidebarLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const MentorProfile = () => {
  return (
    <SidebarLayout userType="mentor" username="Sarah">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600 mt-2">Manage your mentor profile</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input defaultValue="Sarah Johnson" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Company</label>
                <Input defaultValue="Google" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Role</label>
                <Input defaultValue="Senior Software Engineer" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rates & Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Hourly Rate</label>
                <Input defaultValue="$50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Text Session Rate</label>
                <Input defaultValue="$30" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Availability</label>
                <Input defaultValue="Mon-Fri, 9 AM - 6 PM PST" />
              </div>
              <Button>Update Rates</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarLayout>
  )
}

export default MentorProfile