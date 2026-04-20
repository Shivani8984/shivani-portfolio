import Projects from './components/Projects'
import portfolioData from './portfolio_data.json'

function App() {
  const { profile } = portfolioData

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">{profile.name}</h1>
          <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-4">{profile.title}</p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">{profile.bio}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`mailto:${profile.links.email}`} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
              Email
            </a>
            <a href={`tel:${profile.links.phone}`} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
              Phone
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2026 {profile.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
