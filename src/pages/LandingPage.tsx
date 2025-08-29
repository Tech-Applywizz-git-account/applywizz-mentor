import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
            <span className="text-white text-xl font-bold">ApplyWizz</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-purple-300 transition-colors">About</a>
            <a href="#" className="text-white hover:text-purple-300 transition-colors">Features</a>
            <a href="#" className="text-white hover:text-purple-300 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Connect with
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Expert Mentors
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-delay">
            Book personalized mentoring sessions with industry experts. Get guidance, grow your skills, and accelerate your career.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => navigate('/client/auth')}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              For Job Seekers
            </Button>
            
            <Button 
              onClick={() => navigate('/mentor/auth')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Become a Mentor
            </Button>
          </div>

          {/* Admin Access (Hidden Link) */}
          <div className="mt-16">
            <button 
              onClick={() => navigate('/admin/v1')}
              className="text-gray-500 hover:text-gray-300 text-sm opacity-50 hover:opacity-100 transition-opacity"
            >
              Admin Access
            </button>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white border border-white/20">
            <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Matching</h3>
            <p className="text-gray-300">Get matched with mentors based on your goals and experience level.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white border border-white/20">
            <div className="w-12 h-12 bg-pink-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Communication</h3>
            <p className="text-gray-300">Choose between video calls, voice calls, or text-based mentoring.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white border border-white/20">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Mentors</h3>
            <p className="text-gray-300">Learn from verified industry professionals and thought leaders.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LandingPage