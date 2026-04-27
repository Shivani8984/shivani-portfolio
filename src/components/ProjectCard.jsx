const projectImages = [
  'https://images.unsplash.com/photo-1633356713697-4f72da2b01fe?w=500&h=300&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
  'https://images.unsplash.com/photo-1517694712059-c86c6d99ee1c?w=500&h=300&fit=crop',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
  'https://images.unsplash.com/photo-1633356713697-4f72da2b01fe?w=500&h=300&fit=crop',
];

export default function ProjectCard({ project, index }) {
  const imageUrl = projectImages[index % projectImages.length];

  return (
    <div className="group h-full relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/20 hover:border-pink-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/20">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-slate-700">
        <img 
          src={imageUrl}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:via-pink-600/10 group-hover:to-blue-600/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
            {project.name}
          </h3>
          <p className="text-sm font-semibold text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
            {project.company}
          </p>
        </div>
        
        <p className="text-gray-300 group-hover:text-gray-100 text-sm leading-relaxed mb-6 transition-colors duration-300 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.slice(0, 3).map((tech, idx) => (
            <span 
              key={idx} 
              className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/40 hover:to-pink-500/40 text-purple-300 hover:text-pink-300 text-xs font-semibold px-3 py-1 rounded-full border border-purple-500/30 hover:border-pink-500/50 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies?.length > 3 && (
            <span className="text-xs text-gray-500">+{project.technologies.length - 3}</span>
          )}
        </div>

        <div className="flex gap-3 pt-4 border-t border-purple-500/20">
          <a 
            href="#" 
            className="flex-1 py-2 px-3 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 text-sm font-semibold rounded transition-all duration-300 text-center"
          >
            View Details
          </a>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
}
