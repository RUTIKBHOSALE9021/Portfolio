import { useState } from "react";

interface Skill {
  name: string;
  category: string;
  color: string;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const skills: Skill[] = [
    { name: "React", category: "frontend", color: "bg-blue-500" },
    { name: "TypeScript", category: "frontend", color: "bg-blue-600" },
    { name: "Tailwind CSS", category: "frontend", color: "bg-cyan-500" },
    { name: "Redux", category: "frontend", color: "bg-purple-600" },
    { name: "Ant Design", category: "frontend", color: "bg-blue-500" },
    { name: "React Native", category: "mobile", color: "bg-green-500" },
    { name: "Expo", category: "mobile", color: "bg-orange-500" },
    { name: "Git/GitHub/GitLab", category: "tools", color: "bg-orange-600" },
    { name: "Figma", category: "tools", color: "bg-purple-500" },
    { name: "UI/UX Design", category: "design", color: "bg-pink-500" },
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
          {["all", "frontend", "mobile", "tools", "design"].map((category) => (
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
        
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name} 
              className="group px-4 py-2 rounded-md text-white transition-all hover:scale-105"
              style={{ backgroundColor: `var(--${skill.color.substring(3)})` }}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
