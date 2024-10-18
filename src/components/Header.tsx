import React, { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "./constants/ThemeContext";

const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 ${
        isDarkMode
          ? "bg-gray-800 text-white border-b border-gray-700"
          : "bg-white text-gray-900 border-b border-gray-200"
      } transition-colors duration-200`}
    >
      <div className="text-2xl font-bold">
        Florien<span className="text-orange-500">.</span>
      </div>
      <nav className="hidden md:block">
        {" "}
        {/* Hide on mobile, show on medium screens and up */}
        <ul className="flex space-x-6">
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Solutions
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button
        onClick={toggleDarkMode}
        className={`p-2 rounded-full transition-colors duration-200 ${
          isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
        }`}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </header>
  );
};

export default Header;
