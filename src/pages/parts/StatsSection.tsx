import React, { useContext } from "react";

import { Medal, Briefcase, Headphones } from "lucide-react";
import { ThemeContext } from "../../components/constants/ThemeContext";

interface StatProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const StatCard: React.FC<StatProps> = ({ icon, title, value }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-xl p-6 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } transition-colors duration-200 shadow-lg`}
    >
      <div className="flex flex-col items-start gap-2">
        <div className="text-purple-400">{icon}</div>
        <div
          className={`${
            isDarkMode ? "text-white" : "text-gray-900"
          } text-xl font-semibold`}
        >
          {title}
        </div>
        <div
          className={`${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          } text-sm`}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Medal size={24} />,
      title: "Experience",
      value: "4 Years Working",
    },
    {
      icon: <Briefcase size={24} />,
      title: "Completed",
      value: "20+ Projects",
    },
    {
      icon: <Headphones size={24} />,
      title: "Support",
      value: "Online 24/7",
    },
  ];

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${
        isDarkMode ? "" : ""
      }  transition-colors duration-200`}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
