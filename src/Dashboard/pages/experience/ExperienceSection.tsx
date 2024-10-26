import { useContext } from "react";

import { format } from "date-fns";
import { ThemeContext } from "../../../components/constants/ThemeContext";

interface IExperience {
  company: string;
  title: string;
  description: string;
  startingDate: Date;
  endingDate: Date;
}

export default function ExperienceSection() {
  const { isDarkMode } = useContext(ThemeContext);

  // Example data - replace this with your actual data fetching logic
  const experiences: IExperience[] = [
    {
      company: "Example Corp",
      title: "Senior Frontend Developer",
      description:
        "Led frontend development team, implemented new features, and improved performance metrics.",
      startingDate: new Date("2022-01-01"),
      endingDate: new Date("2023-12-31"),
    },
    {
      company: "Example Corp",
      title: "Senior Frontend Developer",
      description:
        "Led frontend development team, implemented new features, and improved performance metrics.",
      startingDate: new Date("2022-01-01"),
      endingDate: new Date("2023-12-31"),
    },
    {
      company: "Example Corp",
      title: "Senior Frontend Developer",
      description:
        "Led frontend development team, implemented new features, and improved performance metrics.",
      startingDate: new Date("2022-01-01"),
      endingDate: new Date("2023-12-31"),
    },
    // Add more experiences as needed
  ];

  function formatDate(date: Date): string {
    return format(new Date(date), "MMM yyyy");
  }

  return (
    <div
      className={`w-full py-16 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <p
            className={`text-lg mb-2 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Career Journey
          </p>
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            My Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`relative rounded-lg p-6 border transition-all duration-300 hover:shadow-lg ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-300"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3
                    className={`text-xl font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {experience.company}
                  </h3>
                  <p
                    className={`text-lg ${
                      isDarkMode ? "text-purple-400" : "text-purple-600"
                    }`}
                  >
                    {experience.title}
                  </p>
                </div>
                <div
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {formatDate(experience.startingDate)} -{" "}
                  {formatDate(experience.endingDate)}
                </div>
              </div>

              <p
                className={`text-base leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {experience.description}
              </p>

              {/* Visual connector between cards */}
              {index !== experiences.length - 1 && (
                <div
                  className={`absolute left-6 bottom-0 w-0.5 h-8 ${
                    isDarkMode ? "bg-gray-700" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
