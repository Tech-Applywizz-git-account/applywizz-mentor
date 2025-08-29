import SidebarLayout from '@/components/layout/SidebarLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const ClientMentors = () => {
  // Mock mentor data
  const mentors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Google',
      role: 'Senior Software Engineer',
      match: 95,
      avatar: 'SJ',
      experience: '8+ years',
      specialties: ['React', 'Node.js', 'System Design']
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Microsoft',
      role: 'Product Manager',
      match: 88,
      avatar: 'MC',
      experience: '6+ years',
      specialties: ['Product Strategy', 'Data Analysis', 'Leadership']
    },
    {
      id: 3,
      name: 'Emily Davis',
      company: 'Apple',
      role: 'UX Designer',
      match: 82,
      avatar: 'ED',
      experience: '5+ years',
      specialties: ['UI/UX', 'Design Systems', 'User Research']
    },
    {
      id: 4,
      name: 'David Wilson',
      company: 'Meta',
      role: 'Engineering Manager',
      match: 78,
      avatar: 'DW',
      experience: '10+ years',
      specialties: ['Team Leadership', 'Scaling', 'Architecture']
    }
  ]

  return (
    <SidebarLayout userType="client" username="John">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Find Mentors</h1>
          <p className="text-gray-600 mt-2">Connect with industry experts who can guide your career.</p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{mentor.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{mentor.name}</CardTitle>
                    <CardDescription>{mentor.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gray-200 rounded">
                      <img
                        src={`https://logo.clearbit.com/${mentor.company.toLowerCase()}.com`}
                        alt={mentor.company}
                        className="w-full h-full object-cover rounded"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium">{mentor.company}</span>
                  </div>
                  <div className={`text-sm font-bold ${
                    mentor.match >= 90 ? 'text-green-600' :
                    mentor.match >= 80 ? 'text-yellow-600' : 'text-gray-600'
                  }`}>
                    {mentor.match}% match
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Experience: {mentor.experience}</p>
                  <div className="flex flex-wrap gap-1">
                    {mentor.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full">
                  Book Session
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SidebarLayout>
  )
}

export default ClientMentors