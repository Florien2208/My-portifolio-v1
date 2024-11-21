import React, { useContext, useState,  useEffect } from "react";
import {
  Award,
  Trophy,
  Sun,
  ChevronDown,
  
  Check,
  
} from "lucide-react";
import { ThemeContext } from "../components/constants/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

interface Certification {
  title: string;
  year: string;
  type: "certification" | "award" | "course";
  highlight?: boolean;
  description?: string;
  skills?: string[];
  issuer?: string;
}

const AwardsAndCertifications: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const items: Certification[] = [
    {
      title: "AWS Certified Cloud Practitioner",
      year: "2023",
      type: "certification",
      highlight: true,
      issuer: "Amazon Web Services",
      description:
        "Validated foundational understanding of AWS Cloud services and core architectural principles.",
      skills: ["Cloud Computing", "AWS Services", "Cloud Security"],
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      year: "2023",
      type: "certification",
      highlight: true,
      issuer: "Microsoft",
      description:
        "Demonstrated expertise in designing, building, testing, and maintaining cloud solutions on Microsoft Azure.",
      skills: ["Azure Development", "Cloud Architecture", "DevOps"],
    },
    {
      title: "Capstone Project First Place",
      year: "2023",
      type: "award",
      highlight: true,
      issuer: "University at Buffalo",
      description:
        "Won first place among 30+ teams for the development of the NYCANX project, demonstrating exceptional innovation and technical skill.",
      skills: ["Project Management", "Innovation", "Team Leadership"],
    },
    // ... (other items remain similar)
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getIcon = (type: string, highlight: boolean = false) => {
    const baseColor = isDarkMode ? "text-gray-500" : "text-gray-400";
    const highlightColor = {
      certification: "text-orange-500",
      award: "text-yellow-500",
      course: "text-blue-500",
    }[type];

    const iconProps = {
      className: `w-8 h-8 ${
        highlight ? highlightColor : baseColor
      } transition-all duration-300 group-hover:scale-110`,
    };

    return {
      certification: <Sun {...iconProps} />,
      award: <Trophy {...iconProps} />,
      course: <Award {...iconProps} />,
    }[type];
  };

  const toggleItemExpansion = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div
      className={`
        min-h-screen relative overflow-hidden
        ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
            : "bg-gradient-to-br from-gray-100 via-gray-200 to-white text-black"
        }
        transition-all duration-500 ease-in-out
        ${isScrolled ? "pt-24" : "pt-16"}
      `}
    >
      {/* Decorative Background Elements */}
      <div
        className={`
          absolute top-0 left-0 right-0 h-16 
          ${
            isDarkMode
              ? "bg-gradient-to-r from-orange-900/20 to-pink-900/20"
              : "bg-gradient-to-r from-orange-100/20 to-pink-100/20"
          }
          backdrop-blur-sm
          transition-all duration-500
          ${isScrolled ? "opacity-100" : "opacity-0"}
        `}
      />

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`
            text-5xl font-bold mb-16 text-center tracking-tight 
            bg-clip-text text-transparent 
            bg-gradient-to-r 
            ${
              isDarkMode
                ? "from-orange-400 to-pink-600"
                : "from-orange-600 to-pink-800"
            }
          `}
        >
          ACHIEVEMENTS
        </motion.h1>

        <div className="space-y-6">
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
                className={`
                  group relative
                  ${
                    isDarkMode
                      ? "bg-gray-800/50 hover:bg-gray-800/70"
                      : "bg-white/70 hover:bg-white"
                  }
                  backdrop-blur-lg 
                  border 
                  ${
                    isDarkMode
                      ? "border-gray-700 hover:border-orange-700"
                      : "border-gray-200 hover:border-orange-500"
                  }
                  rounded-2xl 
                  shadow-lg 
                  overflow-hidden
                  transition-all 
                  duration-300
                  hover:scale-[1.02]
                `}
              >
                <div
                  className={`
                    flex items-center p-5 cursor-pointer
                    ${
                      expandedItem === index
                        ? isDarkMode
                          ? "bg-gray-800/80"
                          : "bg-gray-100/80"
                        : ""
                    }
                  `}
                  onClick={() => toggleItemExpansion(index)}
                >
                  <div className="mr-6">
                    {getIcon(item.type, item.highlight)}
                  </div>

                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <h3
                        className={`
                          text-xl font-semibold 
                          ${
                            item.highlight
                              ? "text-orange-600 group-hover:text-orange-700"
                              : isDarkMode
                              ? "text-gray-200 group-hover:text-white"
                              : "text-gray-800 group-hover:text-gray-900"
                          }
                          transition-colors
                        `}
                      >
                        {item.title}
                      </h3>
                      {item.issuer && (
                        <p
                          className={`
                            text-sm 
                            ${isDarkMode ? "text-gray-400" : "text-gray-600"}
                          `}
                        >
                          {item.issuer}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center space-x-3">
                      <span
                        className={`
                          text-sm font-medium
                          ${isDarkMode ? "text-gray-500" : "text-gray-600"}
                        `}
                      >
                        {item.year}
                      </span>
                      {item.description && (
                        <div
                          className={`
                            text-gray-500 
                            transition-transform 
                            ${expandedItem === index ? "rotate-180" : ""}
                          `}
                        >
                          <ChevronDown />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {expandedItem === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`
                      px-5 pb-5
                      ${isDarkMode ? "bg-gray-700/30" : "bg-gray-50/50"}
                    `}
                  >
                    <p
                      className={`
                        text-base mb-3
                        ${isDarkMode ? "text-gray-300" : "text-gray-700"}
                      `}
                    >
                      {item.description}
                    </p>

                    {item.skills && (
                      <div className="mt-3">
                        <h4
                          className={`
                            text-sm font-semibold mb-2
                            ${isDarkMode ? "text-gray-400" : "text-gray-600"}
                          `}
                        >
                          Key Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className={`
                                flex items-center gap-1 px-2 py-1 rounded-full text-xs
                                ${
                                  isDarkMode
                                    ? "bg-gray-700 text-gray-300"
                                    : "bg-gray-200 text-gray-700"
                                }
                                transition-all duration-300
                                hover:scale-105
                              `}
                            >
                              <Check className="w-3 h-3" />
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div
        className={`
          absolute bottom-0 left-0 right-0 h-64 
          ${
            isDarkMode
              ? "bg-gradient-to-t from-black/50 to-transparent"
              : "bg-gradient-to-t from-white/50 to-transparent"
          }
          pointer-events-none
        `}
      />
    </div>
  );
};

const AwardsAndCertificationsWrapper: React.FC = () => {
  return <AwardsAndCertifications />;
};

export default AwardsAndCertificationsWrapper;
