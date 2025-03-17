
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
      title: "Software Developer",
      company: "Tacitbase",
      period: "April 2024 - Present",
      description: [
        "Enhanced application performance from 50% to 80% efficiency",
        "Developed and optimized job posting and candidate tracking modules",
        "Integrated AI-powered job description generation for improved UX",
        "Developing plugins to extend ATS functionality and improve automation"
      ],
      type: "work"
    },   
    {
      id: 2,
      title: "Software Developer Intern",
      company: "Tacitbase",
      period: "Jan 2024 - April 2024",
      description: [
        "Learned and implemented core Web Technology software functionalities",
        "Worked on role-based access control and user authentication",
        "Gained hands-on experience with React, TypeScript, and Redux",
        "Contributed to UI enhancements and debugging existing features"
      ],
      type: "work"
    },     
    {
      id: 4,
      title: "Bachelor of Engineering in Information Technology",
      company: "Sinhgad Institute, SPPU",
      period: "2020 - 2024",
      description: [
        "CGPA: 9.0",
        "Coursework in Programming, Data Structures, and Web Development",
      ],
      type: "education"
    },
    {
      id: 5,
      title: "Higher Secondary Certificate (HSC) in Science",
      company: "BGP Sahyadri Jr. College, Sangamner",
      period: "2018 - 2020",
      description: [
        "Percentage: 67%",
        "Subjects: Physics, Chemistry, Mathematics, and Biology (PCMB)",
        "Excelled in mathematics and problem-solving"
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
