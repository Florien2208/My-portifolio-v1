import React, { useContext } from "react";
import profile from "../assets/dj.jpg";
import prof from "../assets/devices.svg";
import skills from "../assets/skills.svg";
import integrations from "../assets/integrations.svg";
import dj from "../assets/dj.jpg";
import { ThemeContext } from "../components/constants/ThemeContext";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { categories } from "../constants/TechStackTypes";
import DevelopmentServicesCard from "./DevelopmentServices";
import WallOfTestimonial from "./WallOfTestimonial";
import { Briefcase } from "lucide-react";
import EducationSection from "./parts/EducationSection";
import TypewriterJobTitle from "./parts/TypewriterJobTitle";
import ScheduleCall from "./parts/ScheduleCall";
import ContactSection from "./parts/ContactSection";
import Stats from "./parts/StatsSection";

const HomePage: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const bgColor = isDarkMode ? "bg-purple-900" : "bg-purple-100";
  const textColor = isDarkMode ? "text-white" : "text-purple-900";
  const cardBgColor = isDarkMode ? "bg-purple-800" : "bg-purple-200";
  const headerBgColor = isDarkMode ? "bg-purple-700" : "bg-purple-300";
  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <section
        className={`flex-grow flex items-center justify-center p-4 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <div className="max-w-2xl w-full">
          {/* Greeting pill */}
          <div
            className={`inline-block rounded-full px-4 py-2 mb-8 ${
              isDarkMode ? "bg-gray-700/50" : "bg-gray-200"
            }`}
          >
            <span
              className={`${
                isDarkMode ? "text-purple-400" : "text-purple-600"
              }`}
            >
              👋 Hey, I'm MAHORO MPAKANYI Florien
            </span>
          </div>

          {/* Profile image for small screens */}
          <div className="md:hidden mb-8 flex justify-center">
            <div className="w-48 h-48 flex-shrink-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0_mobile">
                  <path
                    fill="white"
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
              165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 
              21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 
              10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 
              10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0_mobile)">
                  <path
                    fill="#8B5CF6"
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
              165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 
              21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 
              10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 
              10.857 190.312 36.4879Z"
                  />
                  <image
                    className="home__blob-img"
                    xlinkHref={profile}
                    x="0"
                    y="0"
                    width="200"
                    height="200"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>
              </svg>
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            {/* Text content */}
            <div className="flex-1 text-center md:text-left">
              <TypewriterJobTitle />
              <p
                className={`text-base md:text-lg mb-8 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                allows me to navigate various aspects of software development.
                "I bring a comprehensive approach to building scalable and
                efficient systems" refers to the diverse skill set implied by
                the listed designations.
              </p>

              {/* Buttons */}
              <div className="flex flex-row sm:flex-row gap-4 justify-center md:justify-start">
                <ScheduleCall isDarkMode={isDarkMode} />
                <button
                  className={`font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors w-full sm:w-auto ${
                    isDarkMode
                      ? "border border-gray-600 text-white hover:bg-gray-800"
                      : "border border-gray-300 text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  Download CV
                </button>
              </div>
            </div>

            {/* Profile image for medium screens and up */}
            <div className="hidden md:block w-60 h-60 flex-shrink-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0_desktop">
                  <path
                    fill="white"
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
              165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 
              21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 
              10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 
              10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0_desktop)">
                  <path
                    fill="#8B5CF6"
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
              165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 
              21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 
              10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 
              10.857 190.312 36.4879Z"
                  />
                  <image
                    className=""
                    xlinkHref={profile}
                    x="0"
                    y="0"
                    width="200"
                    height="200"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className=" p-8 flex items-center justify-center">
        <div className="relative flex items-end  space-x-4">
          <img
            src={prof}
            alt="Web development tools"
            className="max-w-2xl w-full "
          />
        </div>
      </section>
      <br />
      <br />
      <section className="flex-grow flex items-center justify-center p-4">
        <div
          className={`max-w-2xl w-full ${
            isDarkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <div className="flex justify-center mb-8">
            <div
              className={`rounded-lg px-6 py-2 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <span className="text-purple-600 font-bold text-2xl">
                About me
              </span>
            </div>
          </div>
          <br />
          <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
            Here you'll discover additional insights about me, my expertise, and
            a comprehensive overview of my current programming and technological
            skills.
          </p>

          {/* You can add more content here as needed */}
        </div>
      </section>
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div
            className={`rounded-lg p-6   mb-8 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <div className="flex items-center ml-8 mb-4">
              <img
                src={dj}
                alt="Mohd Arshad"
                className="w-16 h-16 rounded-full mr-6"
              />
              <div>
                <h1
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Mahoro Mpakanyi Florien
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

            <div className="flex space-x-4 ml-8 mt-6">
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
          <Stats />
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
      <section
        className={`p-8 max-w-3xl mx-auto ${
          isDarkMode ? " text-white" : " text-black"
        }`}
      >
        <div
          className={`rounded-lg px-6 justify-self-center py-2 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <span className="text-purple-600 font-bold text-2xl">
            Work Experience
          </span>
        </div>
        <br />
        <br />
        <div className="mb-8">
          <div className="flex items-start mb-2">
            <Briefcase
              className={`mr-3 ${
                isDarkMode ? "text-purple-500" : "text-purple-700"
              }`}
              size={24}
            />
            <div className="flex-grow">
              <div className="">
                <h3
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-purple-400" : "text-purple-700"
                  }`}
                >
                  Cloud Analogy
                </h3>
              </div>
              <div className="flex justify-between items-baseline">
                <p
                  className={`text-lg font-medium ${
                    isDarkMode ? "text-purple-300" : "text-purple-600"
                  }`}
                >
                  Sr. Full Stack developer
                </p>
                <span
                  className={`text-sm font-semibold ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Sep, 2023 - Present
                </span>
              </div>
            </div>
          </div>
          <br />
          <ul
            className={`list-disc list-outside ml-9 space-y-1 text-sm ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <li>
              Design and establish user-friendly websites, including optimised
              check-out page, resulting in a 25% increase in user clicks and
              subsequently 31% in customer purchases.
            </li>
            <li>
              Provide adequate training to 45+ junior frontend and backend
              developers in internal functions, including steps on how to make
              minor updates/changes independently.
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-start mb-2">
            <Briefcase
              className={`mr-3 ${
                isDarkMode ? "text-purple-500" : "text-purple-700"
              }`}
              size={24}
            />
            <div className="flex-grow">
              <div className="">
                <h3
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-purple-400" : "text-purple-700"
                  }`}
                >
                  Cloud Analogy
                </h3>
              </div>
              <div className="flex justify-between items-baseline">
                <p
                  className={`text-lg font-medium ${
                    isDarkMode ? "text-purple-300" : "text-purple-600"
                  }`}
                >
                  Sr. Full Stack engineer
                </p>
                <span
                  className={`text-sm font-semibold ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Sep, 2020 - Sep, 2023
                </span>
              </div>
            </div>
          </div>
          <br />
          <ul
            className={`list-disc list-outside ml-9 space-y-1 text-sm ${
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
      </section>
      <section>
        <EducationSection />
      </section>
      <section className="flex-grow flex items-center justify-center p-2 sm:p-4">
        <div
          className={`p-4 sm:p-6 md:p-8 w-full max-w-2xl font-sans ${bgColor} ${textColor}`}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold">
              Tech Stack Overview
            </h1>
          </div>

          {/* Category Headers */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
            {categories.slice(0, 4).map((cat, index) => (
              <div
                key={index}
                className={`${headerBgColor} rounded-lg p-2 sm:p-3 text-center`}
              >
                <h2 className="text-lg sm:text-xl font-bold truncate">
                  {cat.title}
                </h2>
              </div>
            ))}
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`${cardBgColor} rounded-lg p-3 sm:p-4`}
              >
                <h3 className="text-base sm:text-lg font-semibold mb-2 truncate">
                  {category.subTitle}
                </h3>
                <ul className="list-disc list-inside">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-xs sm:text-sm break-words"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex-grow  flex items-center justify-center p-4">
        <div
          className={`flex flex-col max-w-2xl w-full items-center justify-center min-h-80 ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
          }`}
        >
          <div className="text-center">
            <h2
              className={`text-4xl font-bold mb-8 ${
                isDarkMode ? "text-purple-400" : "text-purple-600"
              }`}
            >
              What I love doing?
            </h2>
            <p
              className={`max-w-2xl mx-auto text-lg ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Crafting sophisticated small to medium-scale web applications,
              dynamic features, captivating animations, and designing
              interactive layouts through advanced coding techniques.
            </p>
            <div className="mt-8">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-blue-500 hover:underline ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                Visit my Linkedin for more details.
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className=" flex items-center justify-center p-4">
        <div className=" p-8 flex flex-grow max-w-2xl w-full items-center justify-center">
          <div className="relative flex items-end space-x-4">
            <img
              src={skills}
              alt="Web development tools"
              className="max-w-3xl w-full"
            />
          </div>
        </div>
      </section>
      <div
        className={`flex flex-col items-center justify-center min-h-60 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="text-center">
          <h2
            className={`text-4xl font-bold mb-8 ${
              isDarkMode ? "text-purple-400" : "text-purple-600"
            }`}
          >
            Integrations
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Integrations which makes hassle-free Experience
          </p>
        </div>
      </div>
      <div className=" p-8 flex  items-center justify-center">
        <div className="relative max-w-2xl w-full flex items-end space-x-4">
          <img
            src={integrations}
            alt="Web development tools"
            className="max-w-3xl w-full"
          />
        </div>
      </div>
      <section
        className={`flex flex-col items-center justify-center min-h-screen ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="text-center max-w-2xl w-full">
          <h2
            className={`text-4xl font-bold mb-8 ${
              isDarkMode ? "text-purple-400" : "text-purple-600"
            }`}
          >
            Solutions
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Unlock a world of exceptional services tailored to your needs,
            ranging from full-stack wizardry to mesmerizing frontend design and
            powerhouse backend development.
          </p>
          <DevelopmentServicesCard />
        </div>
      </section>
      <section className=" flex items-center justify-center ">
        <div className="max-w-2xl w-full">
          <WallOfTestimonial />
        </div>
      </section>
      <section className=" flex items-center justify-center ">
        <div className="max-w-2xl w-full">
          <ContactSection />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
