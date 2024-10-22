import React, { useContext } from "react";
import { Linkedin, Twitter, Github, AtSign } from "lucide-react";
import { ThemeContext } from "./constants/ThemeContext";

const Footer: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer
      className={`relative ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}
    >
      {/* Top border line with gradient effect */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 space-y-4 sm:space-y-0">
          {/* Logo */}
          <div className="flex items-center">
            <span
              className={`text-lg font-semibold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Florien<span className="text-orange-500">.</span>
            </span>
          </div>

          {/* Made with heart */}
          <div className="flex items-center space-x-1 order-3 sm:order-2">
            <span
              className={`text-sm ${
                isDarkMode ? "text-yellow-500" : "text-yellow-600"
              }`}
            >
              Made with
            </span>
            <span className="text-red-500">♥</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-5 order-2 sm:order-3">
            <a
              href="#"
              className={`transition-colors duration-200 hover:text-orange-500 ${
                isDarkMode ? "text-neutral-400" : "text-neutral-600"
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className={`transition-colors duration-200 hover:text-orange-500 ${
                isDarkMode ? "text-neutral-400" : "text-neutral-600"
              }`}
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className={`transition-colors duration-200 hover:text-orange-500 ${
                isDarkMode ? "text-neutral-400" : "text-neutral-600"
              }`}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className={`transition-colors duration-200 hover:text-orange-500 ${
                isDarkMode ? "text-neutral-400" : "text-neutral-600"
              }`}
              aria-label="Email"
            >
              <AtSign size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
