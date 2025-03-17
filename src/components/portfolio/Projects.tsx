
import { useState } from "react";
import { ExternalLink, Github, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  category: string;
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentProject, setCurrentProject] = useState<number>(0);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Job Description Management System",
      description: "A comprehensive platform for managing and creating job descriptions with role-based access control and version history.",
      image: "/placeholder.svg",
      tags: ["React", "TypeScript", "Redux", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      category: "web"
    },
    {
      id: 2,
      title: "AI-Powered Job Post Generator",
      description: "An AI-driven tool that generates professional job postings based on minimal input, saving time and ensuring consistency.",
      image: "/placeholder.svg",
      tags: ["React", "TypeScript", "OpenAI API", "Django"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      category: "ai"
    },
    {
      id: 3,
      title: "WhatsApp-Style Chat Interface",
      description: "A modern chat application with real-time messaging, status indicators, and media sharing capabilities.",
      image: "/placeholder.svg",
      tags: ["React", "WebSockets", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      category: "web"
    },
    {
      id: 4,
      title: "Career Page Customization Tool",
      description: "A dynamic tool allowing companies to customize their career pages with brand colors, messaging, and job listings.",
      image: "/placeholder.svg",
      tags: ["React", "Redux", "Ant Design"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      category: "web"
    },
  ];
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const handlePrevious = () => {
    setCurrentProject((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentProject((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different skills and technologies.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["all", "web", "ai", "mobile"].map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentProject(0);
              }}
              className={`px-4 py-2 rounded-full capitalize transition-colors ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {filteredProjects.length > 0 ? (
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
              <div className="lg:flex">
                <div className="lg:w-1/2 h-60 lg:h-auto bg-gray-800">
                  <img 
                    src={filteredProjects[currentProject].image} 
                    alt={filteredProjects[currentProject].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="lg:w-1/2 p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-3">{filteredProjects[currentProject].title}</h3>
                  
                  <p className="text-gray-400 mb-6">{filteredProjects[currentProject].description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredProjects[currentProject].tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-sm bg-gray-800 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {filteredProjects[currentProject].liveLink && (
                      <a
                        href={filteredProjects[currentProject].liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300"
                      >
                        Live Demo <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    
                    {filteredProjects[currentProject].githubLink && (
                      <a
                        href={filteredProjects[currentProject].githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-purple-400 hover:text-purple-300"
                      >
                        View Code <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <button 
                onClick={handlePrevious}
                className="flex items-center gap-1 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Previous
              </button>
              
              <div className="flex gap-1.5">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full",
                      currentProject === index
                        ? "bg-gradient-to-r from-purple-500 to-cyan-500"
                        : "bg-gray-700"
                    )}
                    aria-label={`Project ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className="flex items-center gap-1 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Next <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-400">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
