export default function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-700">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{project.name}</h3>
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-0">{project.company}</p>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {project.technologies?.map((tech, idx) => (
          <span key={idx} className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
