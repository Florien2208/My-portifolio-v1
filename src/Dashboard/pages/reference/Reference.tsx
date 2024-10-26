import React, { useContext, useRef } from "react";
import pho1 from "../../../assets/backend.svg";
import pho2 from "../../../assets/cloud.svg";
import pho3 from "../../../assets/devices.svg";
import pho4 from "../../../assets/dj.jpg";
import { ThemeContext } from "../../../components/constants/ThemeContext";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const TestimonialCard: React.FC<Testimonial> = ({
  name,
  role,
  content,
  avatar,
}) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-2xl p-6 min-w-[300px] max-w-[300px] mx-4 transition-all duration-300 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } hover:shadow-lg`}
    >
      <p
        className={`mb-6 line-clamp-4 ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {content}
      </p>
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4
            className={`font-medium ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {name}
          </h4>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

const Reference = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      name: "Shailley Agarwal",
      role: "SAP - MDM | MDG | VENPRO - ABAP",
      content: `Arshad has excellence in whatever he does on the day. He is prompt, disciplined, and highly efficient. He can juggle multiple tasks at a same time and yes, he is an expert in his domain. I'm really looking for a change, collaborator, manager, or leader like him. I can't think of someone I would rate more highly.`,
      avatar: pho1,
    },
    {
      name: "Shah Nawaz",
      role: "Developer II",
      content: `Arshad is a very talented developer having keen knowledge in Python programming. He has a great experience in playing with Data.`,
      avatar: pho2,
    },
    {
      name: "Md. Umair Abdullah",
      role: "Sr. Full Stack Developer",
      content: `Collaborating with Arshad has been nothing short of transformative. His exceptional problem-solving skills and visionary approach to software development have driven our projects to unprecedented heights. Arshad's mentorship and eagerness to share his vast knowledge have fostered a culture of continuous learning and growth within our team.`,
      avatar: pho3,
    },
    {
      name: "Ayushman Verma",
      role: "Web developer",
      content: `Arshad is an extraordinary developer whose technical prowess and innovative thinking set him apart. His ability to seamlessly integrate cutting-edge technologies and deliver flawless solutions is truly remarkable. Arshad's positive attitude and unwavering dedication to excellence inspire everyone around him, making him an invaluable asset to any team.`,
      avatar: pho4,
    },
    {
      name: "Ayushman Verma",
      role: "Web developer",
      content: `Arshad is an extraordinary developer whose technical prowess and innovative thinking set him apart. His ability to seamlessly integrate cutting-edge technologies and deliver flawless solutions is truly remarkable. Arshad's positive attitude and unwavering dedication to excellence inspire everyone around him, making him an invaluable asset to any team.`,
      avatar: pho4,
    },
    {
      name: "Ayushman Verma",
      role: "Web developer",
      content: `Arshad is an extraordinary developer whose technical prowess and innovative thinking set him apart. His ability to seamlessly integrate cutting-edge technologies and deliver flawless solutions is truly remarkable. Arshad's positive attitude and unwavering dedication to excellence inspire everyone around him, making him an invaluable asset to any team.`,
      avatar: pho4,
    },
    {
      name: "Ayushman Verma",
      role: "Web developer",
      content: `Arshad is an extraordinary developer whose technical prowess and innovative thinking set him apart. His ability to seamlessly integrate cutting-edge technologies and deliver flawless solutions is truly remarkable. Arshad's positive attitude and unwavering dedication to excellence inspire everyone around him, making him an invaluable asset to any team.`,
      avatar: pho4,
    },
  ];

  return (
    <div
      className={`py-16 transition-colors duration-300 overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`inline-block px-6 py-2 text-xl font-semibold rounded-full ${
              isDarkMode
                ? "bg-purple-900/30 text-purple-400"
                : "bg-purple-100 text-purple-800"
            }`}
          >
            Wall of Love
          </h2>
          <p
            className={`mt-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Real people. Real Results.
          </p>
        </div>
        <div
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reference;
