import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard with real-time analytics.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern Vue.js architecture.",
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Vuex"],
      category: "Frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative work with smooth animations, optimized performance, and modern design principles. Built with Next.js and Framer Motion.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      category: "Frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard with detailed forecasts, maps integration, and personalized weather alerts for multiple locations. Features data visualization with D3.js.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "D3.js", "Weather API", "Chart.js"],
      category: "Frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Restaurant Management System",
      description: "A comprehensive restaurant management system with order tracking, inventory management, and staff scheduling. Built with Python Django and React.",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Django", "React", "PostgreSQL", "Redis"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Mobile Fitness App",
      description: "A cross-platform mobile fitness application with workout tracking, progress analytics, and social features. Built with React Native and Firebase.",
      image: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      category: "Mobile",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const categories = ['All', 'Frontend', 'Full Stack', 'Mobile'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-warm-brown-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-warm-brown-800 mb-4">
              Featured Projects
            </h1>
            <div className="w-24 h-px bg-warm-brown-400 mx-auto mb-6"></div>
            <p className="text-lg text-warm-brown-600 max-w-2xl mx-auto">
              A selection of projects that showcase my technical skills and creative problem-solving approach
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light text-warm-brown-800 mb-12 text-center">
            Featured Work
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <div 
                key={index}
                className="bg-cream-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-warm-brown-900 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-warm-brown-800 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-warm-brown-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-warm-brown-100 text-warm-brown-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-warm-brown-600 hover:text-warm-brown-800 transition-colors font-medium"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                    
                    <a 
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-warm-brown-600 hover:text-warm-brown-800 transition-colors font-medium"
                    >
                      <Github size={18} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-light text-warm-brown-800 mb-6 md:mb-0">
              All Projects
            </h2>
            
            {/* Filter Buttons */}
            <div className="flex items-center space-x-4">
              <Filter className="text-warm-brown-600" size={20} />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeFilter === category
                        ? 'bg-warm-brown-600 text-cream-50'
                        : 'bg-white text-warm-brown-600 hover:bg-warm-brown-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-warm-brown-900 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-warm-brown-600 text-cream-50 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-warm-brown-800 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-warm-brown-600 mb-4 leading-relaxed text-sm">
                    {project.description.substring(0, 120)}...
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-warm-brown-100 text-warm-brown-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-warm-brown-100 text-warm-brown-700 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center space-x-1 text-warm-brown-600 hover:text-warm-brown-800 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                    
                    <a 
                      href={project.githubUrl}
                      className="flex items-center space-x-1 text-warm-brown-600 hover:text-warm-brown-800 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-warm-brown-600 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;