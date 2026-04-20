import portfolioData from '../portfolio_data.json';

const skillIcons = {
  'C#': '💜',
  'TypeScript': '💙',
  'JavaScript': '💛',
  'T-SQL': '🔵',
  '.NET Core 6/8': '⚫',
  'ASP.NET Core': '▪️',
  'Angular 2–18': '❤️',
  'React': '⚛️',
  'Node.js': '🟢',
  'Azure': '🔷',
  'Docker': '📦',
  'SQL Server': '🟠',
  'Git': '🔴',
  'HTML5': '🟠',
  'CSS3': '🔵',
  'Bootstrap': '🟣',
  'Entity Framework Core': '📚',
  'REST APIs': '🌐',
  'Tailwind': '💎',
  'AWS': '🟠',
  'GraphQL': '💗',
  'MongoDB': '🟢',
  'PostgreSQL': '🐘',
};

export default function Skills() {
  const skillCategories = portfolioData.skills;

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-400">Technologies I've worked with</p>
          </div>
        </div>

        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills], catIndex) => (
            <div key={category} style={{ animation: `fadeInUp 0.8s ease-out ${0.1 * (catIndex + 1)}s both` }}>
              <h3 className="text-2xl font-bold text-purple-400 mb-6 capitalize">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Array.isArray(skills) && skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group relative p-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/20 hover:border-pink-500/50 transition-all duration-300 text-center transform hover:scale-110 hover:shadow-lg hover:shadow-purple-600/20 cursor-pointer"
                  >
                    <div className="text-3xl mb-2">
                      {skillIcons[skill] || '⚙️'}
                    </div>
                    <p className="text-xs font-semibold text-gray-300 group-hover:text-purple-300 transition-colors">
                      {skill}
                    </p>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
