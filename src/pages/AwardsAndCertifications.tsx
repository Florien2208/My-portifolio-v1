import React from "react";
import { Award, Trophy, Sun } from "lucide-react";

interface Certification {
  title: string;
  year: string;
  type: "certification" | "award" | "course";
  highlight?: boolean;
}

const AwardsAndCertifications: React.FC = () => {
  const items: Certification[] = [
    {
      title: "AWS Certified Cloud Practitioner Certification",
      year: "2023",
      type: "certification",
      highlight: true,
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      year: "2023",
      type: "certification",
      highlight: true,
    },
    {
      title: "Google Cloud Certified Professional Cloud Developer",
      year: "2023",
      type: "certification",
      highlight: true,
    },
    {
      title:
        "Won first place in the Capstone project among 30+ teams at the University at Buffalo, for the development of the NYCANX",
      year: "2023",
      type: "award",
      highlight: true,
    },
    {
      title:
        '"Take Ownership to Deliver Fast" award twice at Philips for consistently exceeding expectations and delivering highquality deliverables',
      year: "2021",
      type: "award",
    },
    {
      title:
        '"Eager to Improve & Inspire" award at Philips hackathon for presenting and implementing AI Chatbot',
      year: "2020",
      type: "award",
    },
    {
      title: "Certified SAFe® 5 Practitioner",
      year: "2023",
      type: "certification",
      highlight: true,
    },
    {
      title: "Advanced Design Patterns: Design Principles, LinkedIn",
      year: "2020",
      type: "course",
    },
    {
      title: "C# Framework Design, LinkedIn",
      year: "2020",
      type: "course",
    },
    {
      title: "C# Delegates, Events and Lambdas, LinkedIn",
      year: "2020",
      type: "course",
    },
  ];

  const getIcon = (type: string, highlight: boolean = false) => {
    switch (type) {
      case "certification":
        return (
          <Sun
            className={`w-6 h-6 ${
              highlight ? "text-orange-500" : "text-gray-400"
            }`}
          />
        );
      case "award":
        return (
          <Trophy
            className={`w-6 h-6 ${
              highlight ? "text-yellow-500" : "text-gray-400"
            }`}
          />
        );
      default:
        return (
          <Award
            className={`w-6 h-6 ${
              highlight ? "text-blue-500" : "text-gray-400"
            }`}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 animate-fade-in">
          AWARDS & CERTIFICATIONS
        </h1>

        <div className="space-y-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 animate-fade-in hover:transform hover:translate-x-2 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mt-1">{getIcon(item.type, item.highlight)}</div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className={`text-lg ${
                      item.highlight
                        ? "text-orange-500 font-semibold"
                        : "text-gray-300"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <span className="text-gray-500 whitespace-nowrap">
                    {item.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
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

const AwardsAndCertificationsWrapper: React.FC = () => {
  return (
    <>
      <CustomStyles />
      <AwardsAndCertifications />
    </>
  );
};

export default AwardsAndCertificationsWrapper;
