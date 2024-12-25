import React, { useState, useContext } from "react";
import { ThemeContext } from "../components/constants/ThemeContext";
import {
  Star,
  ExternalLink,
  Github,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import ReviewModal from "./modal/ReviewModal";

interface Technology {
  name: string;
  icon?: React.ReactNode;
  style?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  githubLink?: string;
  liveLink?: string;
  category?: string;
  averageRating?: number;
  totalReviews?: number;
}

const SolutionPage: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenReviewModal = (project: Project) => {
    setSelectedProject(project);
    setIsReviewModalOpen(true);
  };

  const handleSubmitReview = () => {
    // handle review submission
  };

  const renderStars = (rating: number) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={16}
        className={`
          ${star <= Math.round(rating) ? "text-yellow-500" : "text-gray-300"}
          transition-colors duration-200
        `}
      />
    ));
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "ChatGPT 4.0 ChatBot",
      description:
        "Flamingo ChatBot is ChatGPT 4.0 bot. Users can sign in with Github. I am currently updating this project, so please feel free to give me advice and add issues on my Github repository.",
      image:
        "https://gungho0619.vercel.app/_next/image?url=%2Fimages%2Fchatgpt.png&w=3840&q=80",
      technologies: [
        { name: "TypeScript" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "shadcn/UI" },
        { name: "Node.js" },
        { name: "GitHub API" },
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
        { name: "JavaScript" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Bootstrap" },
        { name: "Google API" },
        { name: "Facebook API" },
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
        { name: "React" },
        { name: "Next.js" },
        { name: "Redux" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Google API" },
        { name: "Stripe" },
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
        { name: "TypeScript" },
        { name: "React" },
        { name: "Chakra UI" },
        { name: "Vite" },
      ],
    },
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
            <div
              key={project.id}
              className={`
                relative overflow-hidden rounded-2xl shadow-lg 
                ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-200"
                    : "bg-white text-gray-800"
                } 
                transition-all duration-300 
                hover:shadow-xl transform hover:-translate-y-2
              `}
            >
              {/* Project Category Badge */}
              {project.category && (
                <div
                  className={`
                    absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-medium
                    ${
                      isDarkMode
                        ? "bg-blue-900/70 text-blue-200"
                        : "bg-blue-100 text-blue-700"
                    }
                  `}
                >
                  {project.category}
                </div>
              )}

              {/* Project Links */}
              <div className="absolute top-4 right-4 z-10 flex space-x-2">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-2 rounded-full backdrop-blur-sm
                      ${
                        isDarkMode
                          ? "bg-gray-900/50 hover:bg-gray-900/70"
                          : "bg-white/50 hover:bg-white/70"
                      }
                      transition-all duration-300 hover:scale-110
                    `}
                  >
                    <Github
                      size={20}
                      className={isDarkMode ? "text-white" : "text-gray-800"}
                    />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-2 rounded-full backdrop-blur-sm
                      ${
                        isDarkMode
                          ? "bg-gray-900/50 hover:bg-gray-900/70"
                          : "bg-white/50 hover:bg-white/70"
                      }
                      transition-all duration-300 hover:scale-110
                    `}
                  >
                    <ExternalLink
                      size={20}
                      className={isDarkMode ? "text-white" : "text-gray-800"}
                    />
                  </a>
                )}
              </div>

              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Project Content */}
              <div className="p-5 space-y-4">
                {/* Project Title and Rating */}
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold truncate pr-4">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {renderStars(project.averageRating ?? 0)}
                    </div>
                    <span className="text-sm">
                      ({project.totalReviews ?? 0})
                    </span>
                  </div>
                </div>

                {/* Project Description */}
                <p
                  className={`
                    text-sm line-clamp-2 
                    ${isDarkMode ? "text-gray-400" : "text-gray-600"}
                  `}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 2).map((tech, index) => (
                    <span
                      key={index}
                      className={`
                        px-3 py-1 rounded-full text-xs font-medium flex items-center
                        ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }
                        transition-colors duration-200
                      `}
                    >
                      {tech.icon && <span className="mr-2">{tech.icon}</span>}
                      {tech.name}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span
                      className={`
                        px-3 py-1 rounded-full text-xs font-medium
                        ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-200"
                            : "bg-gray-100 text-gray-800"
                        }
                      `}
                    >
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-4">
                  <button
                    className={`
                      flex items-center text-sm font-medium
                      ${
                        isDarkMode
                          ? "text-blue-300 hover:text-blue-200"
                          : "text-blue-600 hover:text-blue-700"
                      }
                      transition-colors
                    `}
                  >
                    More Details
                    <ChevronRight size={16} className="ml-1" />
                  </button>

                  <button
                    className={`
                      flex items-center space-x-2 px-3 py-2 rounded-full text-sm
                      ${
                        isDarkMode
                          ? "bg-blue-800 text-blue-100 hover:bg-blue-700"
                          : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                      }
                      transition-colors
                    `}
                    onClick={() => handleOpenReviewModal(project)}
                  >
                    <MessageCircle size={16} />
                    <span>Review</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ReviewModal
          projectTitle={selectedProject.title}
          isOpen={isReviewModalOpen}
          isDarkMode={isDarkMode}
          onClose={() => setIsReviewModalOpen(false)}
          onSubmit={handleSubmitReview}
        />
      )}
    </div>
  );
};

export default SolutionPage;
