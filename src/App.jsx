import Projects from './components/Projects'
import EducationExperience from './components/EducationExperience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import portfolioData from './portfolio_data.json'
import './App.css'

function App() {
  const { profile } = portfolioData

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 text-white overflow-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Portfolio
          </h1>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8" style={{ animation: 'scaleIn 0.8s ease-out' }}>
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1 transform hover:scale-110 transition-transform duration-300">
              <img 
                src="https://api.dicebear.com/9.x/avataaars/svg?seed=Shivani" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <div style={{ animation: 'slideInDown 0.8s ease-out' }}>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                {profile.name}
              </span>
            </h1>
          </div>

          <div style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>
            <p className="text-2xl md:text-3xl text-purple-300 font-semibold mb-6">
              {profile.title}
            </p>
          </div>

          <div style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              {profile.bio}
            </p>
          </div>

          <div style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }} className="flex flex-wrap justify-center gap-4">
            <a 
              href={`mailto:${profile.links.email}`} 
              className="group relative px-8 py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50"
            >
              Get In Touch
            </a>
            <a 
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 font-semibold text-white border-2 border-purple-400 hover:bg-purple-600/10 rounded-lg transform hover:scale-105 transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div style={{ animation: 'fadeInUp 0.8s ease-out' }}>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {profile.bio}
              </p>
              <div>
                <p className="text-sm text-purple-400 font-semibold mb-2">Location: {profile.location}</p>
                <p className="text-sm text-purple-400 font-semibold mb-4">Education: {profile.education.degree} in {profile.education.field}</p>
                <p className="text-sm text-purple-400 font-semibold">{profile.education.institution}, {profile.education.year}</p>
              </div>
            </div>
            <div style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }} className="rounded-lg overflow-hidden border border-purple-500/30 hover:border-pink-500/50 transition">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop" 
                alt="Coding" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Education & Experience Section */}
      <EducationExperience data={portfolioData} />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="relative border-t border-purple-900/30 py-12 px-4 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">Home</a></li>
                <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
                <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Contact Info</h3>
              <p className="text-gray-400 mb-2">{profile.location}</p>
              <p className="text-gray-400">{profile.links.email}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Follow</h3>
              <div className="flex gap-4">
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-purple-600/20 hover:bg-purple-600/40 flex items-center justify-center transition">
                  <span>in</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-900/30 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 {profile.name}. Crafted with 💜 using React, Vite & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
