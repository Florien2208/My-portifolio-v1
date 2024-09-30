import React, { useContext } from "react";
import profile from "../assets/r.jpg"
import { ThemeContext } from "../components/constants/ThemeContext";

const HomePage: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      

      <main className="flex-grow flex items-center justify-center p-4">
        <div
          className={`rounded-lg shadow-lg p-6 max-w-md w-full ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="flex flex-col items-center mb-6">
            <div
              className={`rounded-full py-2 px-4 mb-4 ${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              <span
                className={`${
                  isDarkMode ? "text-purple-400" : "text-purple-600"
                }`}
              >
                👋 Hey, I'm Mohd Arshad
              </span>
            </div>
            <div className="w-24 h-24 bg-purple-600 rounded-full overflow-hidden mb-4">
              <img
                src={profile}
                alt="Mohd Arshad"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p
            className={`text-center mb-6 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Having Experience as a HeavyBE allows me to navigate various aspects
            of software development. "I bring a comprehensive approach to
            building scalable and efficient systems" refers to the diverse skill
            set implied by the listed designations.
          </p>

          <div className="flex justify-center space-x-4">
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
              Schedule Call
            </button>
            <button
              className={`bg-transparent font-bold py-2 px-4 rounded border ${
                isDarkMode
                  ? "hover:bg-gray-700 text-white border-gray-600"
                  : "hover:bg-gray-200 text-gray-800 border-gray-300"
              }`}
            >
              Download CV
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
