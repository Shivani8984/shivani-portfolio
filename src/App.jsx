import Projects from './components/Projects'
import EducationExperience from './components/EducationExperience'
import portfolioData from './portfolio_data.json'

function App() {
  const { profile } = portfolioData

  return (
    <div className="min-h-screen bg-slate-950 dark:bg-slate-950 text-white overflow-hidden">
      {/* Background gradient effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div style={{ animation: 'slideInDown 0.8s ease-out' }}>
            <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4 leading-tight">
              {profile.name}
            </h1>
          </div>
          
          <div style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-semibold mb-6">
              {profile.title}
            </p>
          </div>
          
          <div style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              {profile.bio}
            </p>
          </div>
          
          <div style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }} className="flex flex-wrap justify-center gap-4">
            <a 
              href={`mailto:${profile.links.email}`} 
              className="group relative px-8 py-3 font-semibold text-white overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10">Email</span>
            </a>
            <a 
              href={`tel:${profile.links.phone}`} 
              className="group relative px-8 py-3 font-semibold text-white overflow-hidden rounded-lg border-2 border-purple-400 hover:border-pink-400 hover:bg-purple-600/10 transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Phone</span>
            </a>
            <a 
              href={profile.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative px-8 py-3 font-semibold text-white overflow-hidden rounded-lg border-2 border-blue-400 hover:border-blue-300 hover:bg-blue-600/10 transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Education & Experience Section */}
      <EducationExperience data={portfolioData} />

      {/* Footer */}
      <footer className="relative border-t border-purple-900/30 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2026 {profile.name}. Crafted with 💜 using React, Vite & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
