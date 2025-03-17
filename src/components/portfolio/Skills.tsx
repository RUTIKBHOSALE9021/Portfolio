
import { useState } from "react";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const skills: Skill[] = [
    { name: "React", level: 90, category: "frontend", color: "bg-blue-500" },
    { name: "TypeScript", level: 85, category: "frontend", color: "bg-blue-600" },
    { name: "Tailwind CSS", level: 92, category: "frontend", color: "bg-cyan-500" },
    { name: "Redux", level: 80, category: "frontend", color: "bg-purple-600" },
    { name: "Ant Design", level: 88, category: "frontend", color: "bg-blue-500" },
    { name: "Django", level: 75, category: "backend", color: "bg-green-600" },
    { name: "Python", level: 78, category: "backend", color: "bg-yellow-500" },
    { name: "REST API", level: 82, category: "backend", color: "bg-green-500" },
    { name: "Java", level: 70, category: "backend", color: "bg-orange-500" },
    { name: "Git/GitHub", level: 85, category: "tools", color: "bg-orange-600" },
    { name: "Figma", level: 72, category: "tools", color: "bg-purple-500" },
    { name: "UI/UX Design", level: 78, category: "design", color: "bg-pink-500" },
  ];
  
  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-950 relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I've developed expertise in various technologies throughout my career.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["all", "frontend", "backend", "tools", "design"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="group bg-gray-900/60 backdrop-blur-sm p-5 rounded-lg hover:bg-gray-800/70 transition-all">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              
              <Progress
                value={skill.level}
                className="h-2 bg-gray-800"
                indicatorClassName={skill.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
