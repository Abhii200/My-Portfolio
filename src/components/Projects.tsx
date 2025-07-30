
import React from 'react';
import { ExternalLink, Github, Database, Mouse } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DocuMind - AI Document Chat & Summarizer",
      description: `Developed a full-stack web application using FastAPI (Python) and React.js that intelligently extracts text from PDFs and images through AI-powered OCR, automatically generates document summaries using Google Gemma 3n model and enables interactive Q&A conversations about content.\nImplemented advanced features including drag-and-drop file uploads, real-time chat interface, multi-model AI fallback systems.\nSuccessfully deployed on cloud platforms (Render/Vercel) with responsive UI design, RESTful API architecture, and integrated OpenRouter's dual AI model system (Llama Vision + Gemma) for enhanced document understanding and analysis.`,
      technologies: ["FastAPI", "React.js", "OCR", "AI/ML", "Google Gemma", "OpenRouter", "Cloud Deployment"],
      links: {
        demo: "https://document-chat-summarizer.vercel.app/",
        github: "#"
      },
      icon: <ExternalLink className="w-6 h-6" />,
      gradient: "from-blue-400 to-purple-500",
      image:"/lovable-uploads/image.png"
    },
    {
      title: "MAGICAL DB",
      description: "Developed a dynamic website for Hyderabad Central University to explore gene interactions. Used the MAGICAL DB platform to enhance data access and analysis, reducing research time by 50%. Optimized performance and implemented interactive visualizations using Cytoscape, aiding in valuable insights and informed decision-making.",
      technologies: ["JavaScript", "HTML", "CSS", "Cytoscape", "Data Visualization", "Database"],
      links: {
        demo: "http://www.manjarilab.com/databases/magicaldb/index.php",
        github: "#"
      },
      icon: <Database className="w-6 h-6" />,
      image: "/lovable-uploads/ae77dbee-e841-46d7-817d-ee4b598ca277.png"
    },
    {
      title: "BhimavaramOpen Tennis Tournament",
      description: "Architected and managed database schema for player, match, tournament schedule, and result information storage. Implemented a comprehensive player profile management system, facilitating personal detail modification, photo uploads, and match result tracking. Conducted rigorous unit tests and comprehensive testing to debug backend code and ensure seamless cross-browser and cross-device functionality.",
      technologies: ["Database Design", "Backend Development", "Testing", "Tournament Management"],
      links: {
        demo: "https://www.bhimavaramtennis.com/",
        github: "#"
      },
      icon: <Database className="w-6 h-6" />,
      image: "/lovable-uploads/a5177baf-05a2-4f4f-9058-e284af9a4bc2.png"
    },
    {
      title: "VirtualMouse",
      description: "Computer Vision-based Desktop Application built with Python, OpenCV, MediaPipe, and PyAutoGUI. Developed a real-time virtual mouse using webcam input and hand gesture recognition for hands-free computer control. Implemented smooth cursor tracking with coordinate mapping and gesture-based click detection via thumb-index finger proximity. Integrated PyAutoGUI for cross-platform automation with boundary constraints and fail-safe mechanisms. Added a desktop shortcut for easy and quick access to the application.",
      technologies: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "Computer Vision", "Gesture Recognition"],
      links: {
        demo: "#",
        github: "https://github.com/Abhi200/Virtual-Mouse"
      },
      icon: <Mouse className="w-6 h-6" />,
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical expertise and problem-solving abilities through diverse projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 hover:-translate-y-2"
            >
              {/* Project Header */}
              <div className={`h-48 ${project.image ? '' : `bg-gradient-to-r ${project.gradient}`} p-6 flex items-center justify-center relative overflow-hidden`}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ maxHeight: '160px', maxWidth: '100%' }}
                  />
                ) : (
                  <div className="text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {project.icon}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.links.demo !== "#" && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                  {project.links.github !== "#" && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-300 text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Link */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Want to see more of my work?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ExternalLink size={16} />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
