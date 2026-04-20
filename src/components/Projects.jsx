import ProjectCard from './ProjectCard';
import portfolioData from '../portfolio_data.json';

export default function Projects() {
  const projects = portfolioData.projects;

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">A selection of my recent work across banking, insurance, and e-commerce industries.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
