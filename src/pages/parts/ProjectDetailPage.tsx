import React from "react";
import { Github, ArrowLeft } from "lucide-react";

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
  githubUrl?: string;
  demoUrl?: string;
}

interface ProjectDetailPageProps {
  project: Project;
  onBack?: () => void;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onBack,
}) => {
  const handleDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!project.demoUrl) {
      e.preventDefault();
      console.warn("Demo URL not available");
    }
  };

  const handleGithub = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!project.githubUrl) {
      e.preventDefault();
      console.warn("Github URL not available");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors duration-200 bg-transparent border-none cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Click Here to Back</span>
        </button>

        <h1 className="text-4xl font-bold mb-8 animate-fade-in">
          {project.title}
        </h1>

        <div className="rounded-2xl overflow-hidden mb-12 transform hover:scale-[1.01] transition-transform duration-300">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div
          className="mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="text-xl mb-4 font-semibold">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-md text-sm hover:bg-gray-700 transition-colors duration-200"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        <div
          className="mb-8 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-xl mb-4 font-semibold">Description</h2>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </div>

        <div
          className="flex gap-4 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href={project.demoUrl}
            onClick={handleDemo}
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            href={project.githubUrl}
            onClick={handleGithub}
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-all duration-200 hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

// Add custom animation keyframes
const CustomStyles = () => {
  React.useEffect(() => {
    const styles = `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in {
        animation: fadeIn 0.6s ease-out forwards;
        opacity: 0;
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return null;
};

const ProjectDetailPageWrapper: React.FC<ProjectDetailPageProps> = (props) => {
  return (
    <>
      <CustomStyles />
      <ProjectDetailPage {...props} />
    </>
  );
};

export default ProjectDetailPageWrapper;
