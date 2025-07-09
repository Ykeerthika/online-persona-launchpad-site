
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and secure payments.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: "📝",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "🌤️",
      technologies: ["React", "TypeScript", "Weather API"],
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-orange-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
            >
              <div className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                <span className="text-6xl">{project.image}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    variant="outline" 
                    size="sm"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white flex items-center gap-2"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} />
                    Code
                  </Button>
                  
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex items-center gap-2"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
