import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'

const MentorOnboarding = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    companyEmail: '',
    linkedinUrl: '',
    portfolioSite: '',
    resume: null as File | null
  })
  const navigate = useNavigate()

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      setStep(3)
      // Simulate processing time
      setTimeout(() => {
        navigate('/mentor/dashboard')
      }, 4000)
    }
  }

  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
            <span className="text-white text-2xl font-bold">ApplyWizz</span>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border border-white/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-white">Welcome to ApplyWizz!</CardTitle>
              <CardDescription className="text-gray-300">
                Let's get you verified as a mentor
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="text-white">
                <p className="mb-4">We're excited to have you join our community of mentors!</p>
                <p className="text-gray-300">Click the button below to start the verification process.</p>
              </div>
              <Button
                onClick={() => setStep(2)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold"
              >
                Get Verified
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
        <div className="w-full max-w-lg">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
            <span className="text-white text-2xl font-bold">ApplyWizz</span>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border border-white/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-white">Verification Details</CardTitle>
              <CardDescription className="text-gray-300">
                Please provide the following information to verify your expertise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="companyEmail" className="text-sm font-medium text-white">
                    Company Email *
                  </label>
                  <Input
                    id="companyEmail"
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.companyEmail}
                    onChange={(e) => handleInputChange('companyEmail', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="linkedinUrl" className="text-sm font-medium text-white">
                    LinkedIn URL *
                  </label>
                  <Input
                    id="linkedinUrl"
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={formData.linkedinUrl}
                    onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="portfolioSite" className="text-sm font-medium text-white">
                    Portfolio/Website
                  </label>
                  <Input
                    id="portfolioSite"
                    type="url"
                    placeholder="https://yourportfolio.com"
                    value={formData.portfolioSite}
                    onChange={(e) => handleInputChange('portfolioSite', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="resume" className="text-sm font-medium text-white">
                    Resume/CV *
                  </label>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="bg-white/10 border-white/20 text-white file:bg-purple-500 file:text-white file:border-none file:rounded file:px-3 file:py-1 file:mr-3"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold"
                >
                  Submit for Verification
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Step 3 - Thank you page
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
          <span className="text-white text-2xl font-bold">ApplyWizz</span>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border border-white/20">
          <CardContent className="text-center py-12 space-y-6">
            <div className="text-6xl">🎉</div>
            <div className="text-white space-y-4">
              <h2 className="text-2xl font-bold">Thank you for joining us!</h2>
              <p className="text-gray-300">
                We're glad to have you onboard. You'll receive an email once you get verified.
              </p>
              <p className="text-sm text-gray-400">
                Redirecting to dashboard in a few seconds...
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default MentorOnboarding