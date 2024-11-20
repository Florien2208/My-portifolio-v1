import React, { useContext } from "react";
import { ThemeContext } from "../components/constants/ThemeContext";
import { ExternalLink, Github} from "lucide-react";
// import ProjectDetailPageWrapper from "./parts/ProjectDetailPage";

interface Technology {
  name: string;
  style: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
}

const ProjectCard: React.FC<{ project: Project; isDarkMode: boolean }> = ({
  project,
  isDarkMode,
}) => {
  return (
    <div
      className={`group ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] transform`}
    >
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className={`absolute top-4 right-4 flex gap-2`}>
          <button
            className={`p-2 rounded-full ${
              isDarkMode ? "bg-gray-900/80" : "bg-white/80"
            } backdrop-blur-sm hover:scale-110 transition-transform`}
          >
            <Github
              size={20}
              className={isDarkMode ? "text-white" : "text-gray-900"}
            />
          </button>
          <button
            className={`p-2 rounded-full ${
              isDarkMode ? "bg-gray-900/80" : "bg-white/80"
            } backdrop-blur-sm hover:scale-110 transition-transform`}
          >
            <ExternalLink
              size={20}
              className={isDarkMode ? "text-white" : "text-gray-900"}
            />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3
          className={`text-2xl font-bold mb-3 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {project.title}
        </h3>
        <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              } transition-colors duration-200`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const projects: Project[] = [
    {
      id: 1,
      title: "ChatGPT 4.0 ChatBot",
      description:
        "Flamingo ChatBot is ChatGPT 4.0 bot. Users can sign in with Github. I am currently updating this project, so please feel free to give me advice and add issues on my Github repository.",
      image:
        "https://gungho0619.vercel.app/_next/image?url=%2Fimages%2Fchatgpt.png&w=3840&q=80",
      technologies: [
        { name: "TypeScript", style: "" },
        { name: "React", style: "" },
        { name: "Next.js", style: "" },
        { name: "Tailwind CSS", style: "" },
        { name: "shadcn/UI", style: "" },
        { name: "Node.js", style: "" },
        { name: "GitHub API", style: "" },
      ],
    },
    {
      id: 2,
      title: "Inogare Health Service",
      description:
        "Inogare is a premier healthcare service offering seamless access to world-class medical care, ensuring you receive top-quality treatment promptly and efficiently.",
      image:
        "https://gungho0619.vercel.app/_next/image?url=%2Fimages%2Fchatgpt.png&w=3840&q=80",
      technologies: [
        { name: "JavaScript", style: "" },
        { name: "React", style: "" },
        { name: "Next.js", style: "" },
        { name: "Bootstrap", style: "" },
        { name: "Google API", style: "" },
        { name: "Facebook API", style: "" },
      ],
    },
    {
      id: 3,
      title: "SWOM Swap Your Home",
      description:
        "Swom is a members-only global travel community where you can exchange homes for free. Travel, work, or have fun without rent, hidden fees, or hassle. Make memories worldwide!",
      image:
        "https://gungho0619.vercel.app/_next/image?url=%2Fimages%2Fchatgpt.png&w=3840&q=80",
      technologies: [
        { name: "React", style: "" },
        { name: "Next.js", style: "" },
        { name: "Redux", style: "" },
        { name: "TypeScript", style: "" },
        { name: "Tailwind CSS", style: "" },
        { name: "Google API", style: "" },
        { name: "Stripe", style: "" },
      ],
    },
    {
      id: 4,
      title: "Game Hub",
      description:
        "Game Hub is an application that provides a platform to explore various video games. Users can browse games, view detailed information about each game, and access additional resources.",
      image:
        "https://gungho0619.vercel.app/_next/image?url=%2Fimages%2Fgame-hub.png&w=1200&q=80",
      technologies: [
        { name: "TypeScript", style: "" },
        { name: "React", style: "" },
        { name: "Chakra UI", style: "" },
        { name: "Vite", style: "" },
      ],
    },
    // ... other projects remain the same
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1
              className={`text-4xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Projects
            </h1>
            <p
              className={`text-lg ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Explore my latest work and side projects
            </p>
          </div>
         
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
      {/* <ProjectDetailPageWrapper project={Projects} /> */}
    </div>
  );
};

export default ProjectsPage;
