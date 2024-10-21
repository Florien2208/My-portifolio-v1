import  { useContext, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { ThemeContext } from "./constants/ThemeContext";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } transition-colors duration-200`}
    >
      <div className="max-w-7xl m-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          <button
            onClick={toggleMenu}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation - Original Design for Desktop */}
          <nav className="hidden md:flex items-center m-auto space-x-12">
            <div className="text-2xl font-bold mr-20">
              Florien<span className="text-blue-600">.</span>
            </div>
            <a
              href="#"
              className="text-amber-500 hover:text-amber-600 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="dashboard"
              className="hover:text-amber-500 transition-colors duration-200"
            >
              Solutions
            </a>
            <a
              href="#"
              className="hover:text-amber-500 transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#"
              className="hover:text-amber-500 transition-colors duration-200"
            >
              Contact
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-200 ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </nav>

          {/* Mobile Logo */}
          <div className="md:hidden text-2xl font-bold">
            Florien<span className="text-blue-600">.</span>
          </div>

          {/* Mobile Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`md:hidden p-2 rounded-full transition-colors duration-200 ${
              isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t ">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-amber-500 hover:text-amber-600 transition-colors duration-200 px-2"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-amber-500 transition-colors duration-200 px-2"
              >
                Solutions
              </a>
              <a
                href="#"
                className="hover:text-amber-500 transition-colors duration-200 px-2"
              >
                Projects
              </a>
              <a
                href="#"
                className="hover:text-amber-500 transition-colors duration-200 px-2"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
