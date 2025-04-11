import { useContext } from "react";
import { Briefcase } from "lucide-react";
import { ThemeContext } from "../../components/constants/ThemeContext";

const WorkExperience = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const workExperienceData = [
    {
      title: "Sr. Full Stack Developer",
      company: "Cloud Analogy",
      period: "Sep, 2023 - Present",
      responsibilities: [
        "Designed and established user-friendly websites, including optimized check-out pages, resulting in a 25% increase in user clicks and subsequently 31% in customer purchases.",
        "Provided adequate training to 45+ junior frontend and backend developers in internal functions, including steps on how to make minor updates/changes independently.",
      ],
    },
    {
      title: "Sr. Full Stack Engineer",
      company: "Cloud Analogy",
      period: "Sep, 2020 - Sep, 2023",
      responsibilities: [
        "Administered the full lifecycle of software development for 9 critical projects of the company with 100% on-time delivery while staying 7% under budget.",
        "Built and maintained 100% of backend REST services using Python or Node.js.",
        "Proactively liaised with the design team and project manager to ensure efficient and timely delivery.",
      ],
    },
  ];

  return (
    <section
      className={`flex-grow flex items-start ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      } sm:items-center justify-center
        min-h-[100dvh] sm:min-h-0
        px-5 sm:px-6 md:px-12 lg:px-32 
        py-16 sm:py-12 lg:py-16
        ${isDarkMode ? "text-white" : "text-black"}`}
    >
      <div className="w-full max-w-3xl">
        <h1
          className={`text-3xl sm:text-4xl font-bold 
            mb-12 sm:mb-16 lg:mb-20
            pl-2 sm:pl-0
            ${isDarkMode ? "text-white" : "text-black"}`}
        >
          My Work Experiences
        </h1>

        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          {workExperienceData.map((item, index) => (
            <div
              key={index}
              className="group flex gap-4 sm:gap-8 relative
                p-3 sm:p-0 rounded-lg
                hover:bg-gray-100/50 dark:hover:bg-gray-800/30
                transition-colors duration-200"
            >
              <div className="mt-1 sm:mt-0">
                <Briefcase
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
                    {item.title}
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
                  {item.company}
                </p>

                <ul
                  className={`list-disc list-outside ml-9 space-y-1 text-sm sm:text-base
                    ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
                >
                  {item.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
