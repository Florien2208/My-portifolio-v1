import React, { useContext } from "react";
import { Linkedin, Twitter, Github, AtSign } from "lucide-react";
import { ThemeContext } from "./constants/ThemeContext";



const Footer: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer
      className={`p-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          Florien<span className="text-orange-500">.</span>
        </div>
        <div className="text-sm">
          Made with <span className="text-red-500">♥</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-orange-500">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-orange-500">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-orange-500">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-orange-500">
            <AtSign size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
