
import { Briefcase, Calendar, School } from "lucide-react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  type: "work" | "education";
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "Jan 2021 - Present",
      description: [
        "Developed and maintained a distributed chat application with WebSockets",
        "Implemented role-based access control for enterprise clients",
        "Optimized application performance resulting in 40% faster load times",
        "Led a team of 4 developers for new feature implementations"
      ],
      type: "work"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "WebSolutions Ltd.",
      period: "Mar 2019 - Dec 2020",
      description: [
        "Built responsive UIs using React and Typescript",
        "Created a job listing platform with filtering and search capabilities",
        "Collaborated with UX designers to implement pixel-perfect designs",
        "Developed a candidate review system with complex state management"
      ],
      type: "work"
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "StartupHub",
      period: "Jun 2017 - Feb 2019",
      description: [
        "Assisted in developing various client websites with React",
        "Implemented UI components using Ant Design and custom styling",
        "Contributed to an internal tool for content management",
        "Participated in code reviews and testing processes"
      ],
      type: "work"
    },
    {
      id: 4,
      title: "Master's in Computer Science",
      company: "Tech University",
      period: "2015 - 2017",
      description: [
        "Specialized in Web Technologies and Software Engineering",
        "Thesis: \"Modern Frontend Frameworks and Performance Optimization\"",
        "GPA: 3.8/4.0"
      ],
      type: "education"
    },
    {
      id: 5,
      title: "Bachelor's in Information Technology",
      company: "State University",
      period: "2011 - 2015",
      description: [
        "Coursework in Programming, Data Structures, and Web Development",
        "Developed a student portal as part of final year project",
        "GPA: 3.7/4.0"
      ],
      type: "education"
    }
  ];

  const workExperience = experiences.filter(exp => exp.type === "work");
  const education = experiences.filter(exp => exp.type === "education");

  return (
    <section id="experience" className="py-20 bg-gray-950 relative">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Work Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-purple-500 h-6 w-6" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            
            <div className="relative border-l-2 border-gray-800 pl-8 space-y-10 ml-3">
              {workExperience.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-10 top-0 w-5 h-5 rounded-full bg-gray-900 border-2 border-purple-500" />
                  
                  <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                      <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                      <div className="px-3 py-1 bg-purple-900/30 text-purple-400 text-sm rounded-full flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1.5" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="text-lg font-medium text-cyan-400 mb-4">{exp.company}</div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((point, index) => (
                        <li key={index} className="text-gray-400 flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <School className="text-cyan-500 h-6 w-6" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="relative border-l-2 border-gray-800 pl-8 space-y-10 ml-3">
              {education.map((edu) => (
                <div key={edu.id} className="relative">
                  <div className="absolute -left-10 top-0 w-5 h-5 rounded-full bg-gray-900 border-2 border-cyan-500" />
                  
                  <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                      <h4 className="text-xl font-semibold text-white">{edu.title}</h4>
                      <div className="px-3 py-1 bg-cyan-900/30 text-cyan-400 text-sm rounded-full flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1.5" />
                        {edu.period}
                      </div>
                    </div>
                    
                    <div className="text-lg font-medium text-purple-400 mb-4">{edu.company}</div>
                    
                    <ul className="space-y-2">
                      {edu.description.map((point, index) => (
                        <li key={index} className="text-gray-400 flex items-start">
                          <span className="text-cyan-500 mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
