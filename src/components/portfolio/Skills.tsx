
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
    { name: "React", level: 90, category: "frontend", color: "from-blue-500 to-cyan-400" },
    { name: "TypeScript", level: 85, category: "frontend", color: "from-blue-600 to-blue-400" },
    { name: "Tailwind CSS", level: 92, category: "frontend", color: "from-cyan-500 to-blue-400" },
    { name: "Redux", level: 80, category: "frontend", color: "from-purple-600 to-indigo-400" },
    { name: "Ant Design", level: 88, category: "frontend", color: "from-blue-500 to-cyan-400" },
    { name: "Django", level: 75, category: "backend", color: "from-green-600 to-green-400" },
    { name: "Python", level: 78, category: "backend", color: "from-yellow-500 to-blue-500" },
    { name: "REST API", level: 82, category: "backend", color: "from-green-500 to-blue-400" },
    { name: "Java", level: 70, category: "backend", color: "from-orange-500 to-red-400" },
    { name: "Git/GitHub", level: 85, category: "tools", color: "from-orange-600 to-orange-400" },
    { name: "Figma", level: 72, category: "tools", color: "from-purple-500 to-pink-400" },
    { name: "UI/UX Design", level: 78, category: "design", color: "from-pink-500 to-purple-400" },
  ];
  
  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-950 relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I've developed expertise in various technologies throughout my career.
            Here's an overview of my technical skills and proficiency levels.
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              
              <Progress
                value={skill.level}
                className="h-2 bg-gray-800"
                indicatorClassName={`bg-gradient-to-r ${skill.color}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
