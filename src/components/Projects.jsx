import ProjectCard from './ProjectCard';
import portfolioData from '../portfolio_data.json';

export default function Projects() {
  const projects = portfolioData.projects;

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work across banking, insurance, and e-commerce industries
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} style={{ animation: `fadeInUp 0.8s ease-out ${0.1 * (idx + 1)}s both` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
