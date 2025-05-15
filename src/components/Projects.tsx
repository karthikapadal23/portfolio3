import React, { useState } from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
}

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Online Stock Management System",
      description: `Developed a comprehensive Online Stock Management System designed to streamline inventory tracking and control for businesses. The system provides real-time visibility into stock levels, automates order management, and generates detailed reports to support informed decision-making.
      Key features include product categorization, stock level alerts, purchase and sales tracking, and user role management to ensure secure access. Built with a focus on scalability and user-friendly interfaces, the solution enhances operational efficiency and reduces manual errors in inventory processes.`,
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Node.js", "MongoDB", "SpringBoot"],
      category: "fullstack",
      githubUrl: "https://github.com",
      
    },
    {
      id: 2,
      title: " PPTController using Python",
      description: `Developed a Python-based automation tool, PPTController, to programmatically create, modify, and manage PowerPoint presentations. This tool simplifies the process of generating dynamic slides by enabling automated insertion of text, images, charts, and custom formatting through Python scripts.
     Designed to enhance productivity for users who frequently prepare presentations, PPTController supports batch processing and template-based slide generation, reducing manual effort and ensuring consistency across decks. The project leverages libraries such as python-pptx for slide manipulation and integrates seamlessly with data sources for real-time content updates.
     This solution is ideal for educators, business professionals, and developers looking to automate repetitive presentation tasks with flexible customization options.`,
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      category: "Application",
      githubUrl: "https://github.com",
      
    },
    {
      id: 3,
      title: "Smart City",
      description: `Developed a Smart City application using Java full-stack technologies to enhance urban living through real-time monitoring and management of city services. The platform integrates data from various sensors and user inputs to provide features like traffic management, waste collection scheduling, and public safety alerts.

      Built with Spring Boot for the backend and React for the frontend, the system ensures scalable performance and a user-friendly interface, empowering city officials and residents with actionable insights and seamless service access.`,
      image: "https://images.pexels.com/photos/7817852/pexels-photo-7817852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "Java", "HTML", "CSS", "Git"],
      category: "backend",
      githubUrl: "https://github.com"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mobile', name: 'Mobile' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here's a selection of my recent work. I strive to build applications that combine 
            technical excellence with outstanding user experiences.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 hover:text-blue-600 transition"
                    >
                      <GitHub className="h-5 w-5 mr-1" />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 hover:text-blue-600 transition"
                    >
                      <ExternalLink className="h-5 w-5 mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;