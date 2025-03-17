
import { Code2, Globe, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-600/20 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate developer with expertise in modern web technologies. 
              I specialize in building responsive, performant applications using 
              <span className="text-purple-400"> React</span>, <span className="text-cyan-400">TypeScript</span>, 
              <span className="text-purple-400"> Tailwind CSS</span>, and <span className="text-cyan-400">Ant Design</span>.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Throughout my career, I've worked on various projects ranging from chat interfaces to 
              AI-generated job descriptions and job management platforms. I'm particularly interested in 
              creating seamless user experiences and optimizing application performance.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
              projects, and sharing my knowledge with the developer community.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors">
              <Code2 className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend Expertise</h3>
              <p className="text-gray-400">
                Proficient in React, TypeScript, and modern CSS frameworks for building responsive and accessible UIs.
              </p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-colors">
              <Globe className="h-10 w-10 text-cyan-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend Integration</h3>
              <p className="text-gray-400">
                Experience with Django, REST APIs, and database integration for full-stack applications.
              </p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-colors">
              <Lightbulb className="h-10 w-10 text-cyan-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
              <p className="text-gray-400">
                Analytical thinker with a passion for solving complex technical challenges.
              </p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors">
              <Code2 className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
              <p className="text-gray-400">
                Experience implementing AI solutions for job descriptions and content generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
