import { useContext } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { ThemeContext } from "../../components/constants/ThemeContext";

const EducationSection = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const educationData = [
    {
      degree: "Bachelor of Technology (CSE)",
      institution: "Integral University",
      period: "July, 2016 - June, 2020",
    },
    {
      degree: "Intermediate",
      institution: "St Mary's",
      period: "July, 2015 - June, 2016",
    },
    {
      degree: "Secondary School",
      institution: "St Mary's",
      period: "July, 2013 - June, 2014",
    },
  ];

  return (
    <section
      className={`flex-grow flex items-start sm:items-center justify-center
        min-h-[100dvh] sm:min-h-0
        px-5 sm:px-6 md:px-12 lg:px-32 
        py-16 sm:py-12 lg:py-16
        ${isDarkMode ? "text-white" : "text-black"}`}
    >
      <div className="w-full max-w-2xl">
        <h1
          className={`text-3xl sm:text-4xl font-bold 
            mb-12 sm:mb-16 lg:mb-20
            pl-2 sm:pl-0
            ${isDarkMode ? "text-white" : "text-black"}`}
        >
          Education
        </h1>

        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="group flex gap-4 sm:gap-8 relative
                p-3 sm:p-0 rounded-lg
                hover:bg-gray-100/50 dark:hover:bg-gray-800/30
                transition-colors duration-200"
            >
              <div className="mt-1 sm:mt-0">
                <FaGraduationCap
                  className={`flex-shrink-0 
                    transition-transform duration-200
                    group-hover:scale-110
                    ${isDarkMode ? "text-purple-600" : "text-purple-700"}`}
                  size={28}
                />
              </div>

              <div className="flex-1 relative">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-2">
                  <h3
                    className={`text-lg sm:text-2xl font-semibold
                      ${isDarkMode ? "text-purple-500" : "text-purple-700"}`}
                  >
                    {item.degree}
                  </h3>

                  <p
                    className={`text-sm sm:text-base
                      order-3 sm:order-none
                      ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {item.period}
                  </p>
                </div>

                <p
                  className={`text-base sm:text-lg
                    ${isDarkMode ? "text-gray-500" : "text-gray-700"}`}
                >
                  {item.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
