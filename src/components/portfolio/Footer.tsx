
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Rutik
            </div>
          </div>
          
          <div className="text-gray-400 flex flex-wrap py-4 items-center">
            <span>© {currentYear} Rutik. All rights reserved.</span>
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
