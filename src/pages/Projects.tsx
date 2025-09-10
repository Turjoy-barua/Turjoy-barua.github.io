import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website showcasing my journey, projects, and achievements. Built with HTML5, CSS3, and JavaScript, featuring modern design principles and smooth animations.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      featured: true,
      liveDemo: "/",
      github: "https://github.com/Turjoy-barua/Turjoy-barua.github.io"
    },
    {
      title: "Python Calculator",
      description: "A command-line calculator built with Python featuring basic arithmetic operations, scientific functions, and a clean user interface.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      technologies: ["Python", "Math Library"]
    },
    {
      title: "Collatz Conjecture Visualizer",
      description: "A Python program that visualizes the famous Collatz conjecture, showing the sequence and flight time for any given number.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      technologies: ["Python", "Matplotlib"]
    },
    {
      title: "Cinematic Travel Vlogs",
      description: "A YouTube channel featuring cinematic travel vlogs that capture the beauty of natural landscapes and urban architecture through storytelling.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      technologies: ["Video Editing", "Cinematography"],
      liveDemo: "https://www.youtube.com/@baruaturjoy"
    },
    {
      title: "Web Development Journey",
      description: "Various web development projects including responsive websites, interactive elements, and modern UI/UX designs using HTML, CSS, and JavaScript.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      technologies: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Original Music Compositions",
      description: "Self-taught guitar compositions and musical pieces that blend traditional techniques with modern creativity, expressing personal experiences through music.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      technologies: ["Guitar", "Composition"]
    },
    {
      title: "Digital Literacy Initiative",
      description: "A community impact project at Emmaüs-Connect, helping elderly and disadvantaged individuals learn computer basics and digital skills.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      technologies: ["Teaching", "Community"],
      liveDemo: "https://emmaus-connect.org/"
    }
  ];

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            My Projects
          </h1>

          {/* Featured Project */}
          {featuredProject && (
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-8 mb-16 text-white transform transition-all duration-500 hover:scale-[1.01] animate-float">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title} 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="inline-block px-4 py-1 bg-white/20 rounded-full mb-4">
                    Featured Project
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {featuredProject.title}
                  </h2>
                  <p className="mb-6">{featuredProject.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={featuredProject.liveDemo}
                      className="px-6 py-2 bg-white text-emerald-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={featuredProject.github}
                      className="px-6 py-2 border-2 border-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    {project.liveDemo ? (
                      <a 
                        href={project.liveDemo}
                        className="text-primary-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Demo
                      </a>
                    ) : (
                      <span className="text-gray-400">Coming Soon</span>
                    )}
                    {project.github ? (
                      <a 
                        href={project.github}
                        className="text-gray-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    ) : (
                      <span className="text-gray-400">Private</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
