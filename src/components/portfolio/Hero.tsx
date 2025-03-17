
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">Rutik</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
              Frontend Developer & UI Engineer
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              I build exceptional digital experiences with React, TypeScript and modern web technologies. 
              Specialized in creating responsive, performant applications with clean code and great user experience.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
              <Button variant="ghost" className="text-white hover:bg-gray-800">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                {/* Replace with actual image */}
                <div className="text-center text-xl font-bold">
                  Rutik's Photo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
