import React, { useContext} from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "./constants/ThemeContext";

const Header: React.FC = () => {
 const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);



  return (
    <header
      className={`flex justify-between items-center p-4 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="text-2xl font-bold">
        Florien<span className="text-orange-500">.</span>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Solutions
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </header>
  );
};

export default Header;
