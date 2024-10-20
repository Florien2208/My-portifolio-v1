import React, { useContext } from "react";
import { User, Moon, Sun, Search, Bell, Settings } from "lucide-react";
import { ThemeContext } from "../../components/constants/ThemeContext";


const Navbar: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex justify-between items-center mb-8 ${
        isDarkMode ? "" : "bg-white"
      }`}
    >
      <div>
        
        <h1
          className={`${
            isDarkMode ? "text-white" : "text-gray-900"
          } text-lg font-semibold`}
        >
          Dashboard
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Type here..."
            className={`${
              isDarkMode
                ? "bg-[#111c44] text-white focus:ring-blue-500"
                : "bg-gray-100 text-gray-900 focus:ring-blue-400"
            } rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-1`}
          />
          <Search
            className={`absolute left-3 top-2.5 ${
              isDarkMode ? "text-[#707eae]" : "text-gray-500"
            }`}
            size={16}
          />
        </div>

        <button
          className={`${
            isDarkMode ? "text-[#707eae]" : "text-gray-600"
          } hover:text-blue-500 transition-colors`}
        >
          <User size={20} />
        </button>

        <button
          className={`${
            isDarkMode ? "text-[#707eae]" : "text-gray-600"
          } hover:text-blue-500 transition-colors`}
        >
          <Bell size={20} />
        </button>

        <button
          className={`${
            isDarkMode ? "text-[#707eae]" : "text-gray-600"
          } hover:text-blue-500 transition-colors`}
        >
          <Settings size={20} />
        </button>

        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-colors ${
            isDarkMode
              ? "text-[#707eae] hover:bg-[#1a2555]"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
