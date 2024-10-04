import React, { useContext } from "react";
import profile from "../assets/r.jpg"
import prof from "../assets/devices.svg"
import dj from "../assets/dj.jpg"
import { ThemeContext } from "../components/constants/ThemeContext";
import { FaGithub, FaTwitter, FaLinkedin, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const HomePage: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);
// const textColor = isDarkMode ? "text-gray-200" : "text-gray-800";
// const headingColor = isDarkMode ? "text-white" : "text-black";
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
      <div className=" p-8 flex items-center justify-center">
        <div className="relative flex items-end space-x-4">
          <img
            src={prof}
            alt="Web development tools"
            className="max-w-3xl w-full"
          />
        </div>
      </div>
      <main className="flex-grow flex items-center justify-center p-4">
        <div
          className={`max-w-4xl w-full ${
            isDarkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <div className="flex justify-center mb-8">
            <div
              className={`rounded-lg px-6 py-2 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <span className="text-purple-600 font-semibold text-xl">
                About me
              </span>
            </div>
          </div>

          <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
            Here you'll discover additional insights about me, my expertise, and
            a comprehensive overview of my current programming and technological
            skills.
          </p>

          {/* You can add more content here as needed */}
        </div>
      </main>
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div
            className={`rounded-lg p-6 mb-8 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <div className="flex items-center mb-4">
              <img
                src={dj}
                alt="Mohd Arshad"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h1
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Mohd Arshad
                </h1>
                <p
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Sr. Full stack developer at Cloud Analogy
                </p>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <FaGithub
                className={`${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } cursor-pointer`}
              />
              <FaTwitter
                className={`${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } cursor-pointer`}
              />
              <FaLinkedin
                className={`${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } cursor-pointer`}
              />
            </div>
          </div>

          <p
            className={`text-lg mb-8 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I am a seasoned Full Stack Developer with a proven track record of
            over 4+ years, focusing on delivering high-quality solutions. My
            expertise lies in a comprehensive range of technologies including
            Python, Django, Flask, FastAPI, JavaScript, TypeScript, React,
            Next.js, Node.js, Express, GraphQL, AWS, GCP and many more. With a
            deep understanding of these tools and frameworks, I excel in
            crafting dynamic and scalable full-stack applications that meet the
            evolving needs of modern businesses. Let me bring my wealth of
            experience and technical prowess to your next project.
          </p>
        </div>
      </main>
      <div className="mt-12">
        <h2
          className={`text-2xl font-bold mb-6 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Work Experience
        </h2>

        <div className="mb-8">
          <div className="flex items-center mb-2">
            <FaBriefcase className="text-purple-500 mr-2" size={30} />
            <h3
              className={`text-xl font-semibold ${
                isDarkMode ? "text-purple-400" : "text-purple-700"
              }`}
            >
              Cloud Analogy
            </h3>
          </div>
          <p
            className={`text-lg font-medium ${
              isDarkMode ? "text-purple-300" : "text-purple-600"
            }`}
          >
            Sr. Full Stack developer
          </p>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } mb-2`}
          >
            Sep, 2023 - Present
          </p>
          <ul
            className={`list-disc list-inside ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <li>
              Design and establish user-friendly websites, including optimised
              check-out page, resulting in a 25% increase in user clicks and
              subsequently 31% in customer purchases.
            </li>
            <li>
              Provide adequate training to 45+ junior frontend and Backend
              developers in internal functions, including steps on how to make
              minor updates/changes independently.
            </li>
          </ul>
        </div>

        <div>
          <h3
            className={`text-xl font-semibold ${
              isDarkMode ? "text-purple-300" : "text-purple-700"
            } mb-2`}
          >
            Full Stack Developer
          </h3>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } mb-2`}
          >
            Sep, 2020 - Sep, 2023
          </p>
          <ul
            className={`list-disc list-inside ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <li>
              Administer the full lifecycle of software development for 9
              critical projects of the company with 100% on-time delivery while
              staying 7% under budget.
            </li>
            <li>
              Built and maintained 100% of backend REST services using Python or
              Node.js.
            </li>
            <li>
              Proactively liaised with the design team and project manager to
              ensure efficient and timely delivery.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <h2
          className={`text-2xl font-bold mb-6 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Education
        </h2>

        <div className="mb-8">
          <div className="flex items-center mb-2">
            <FaGraduationCap className="text-purple-500 mr-2" size={30} />
            <h3
              className={`text-xl font-semibold ${
                isDarkMode ? "text-purple-400" : "text-purple-700"
              }`}
            >
              Bachelor of Technology (CSE)
            </h3>
          </div>
          <p
            className={`text-lg font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Integral University
          </p>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } mb-2`}
          >
            July, 2016 - June, 2020
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center mb-2">
            <FaGraduationCap className="text-purple-500 mr-2" size={30} />
            <h3
              className={`text-xl font-semibold ${
                isDarkMode ? "text-purple-400" : "text-purple-700"
              }`}
            >
              Intermediate
            </h3>
          </div>
          <p
            className={`text-lg font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            St Mary's
          </p>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } mb-2`}
          >
            July, 2015 - June, 2016
          </p>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <FaGraduationCap className="text-purple-500 mr-2" size={30} />
            <h3
              className={`text-xl font-semibold ${
                isDarkMode ? "text-purple-400" : "text-purple-700"
              }`}
            >
              Secondary School
            </h3>
          </div>
          <p
            className={`text-lg font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            St Mary's
          </p>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } mb-2`}
          >
            July, 2013 - June, 2014
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
