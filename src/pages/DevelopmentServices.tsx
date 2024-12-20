import React from "react";
import cloud from "../assets/cloud.svg";
import backend from "../assets/backend.svg";
import frontend from "../assets/frontend.svg";
import fullstack from "../assets/fullstack.svg";
import mobile from "../assets/mobile4.webp";

interface ServiceCardProps {
  imgSrc: string;
  title: string;
  description: string;
  bgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imgSrc,
  title,
  description,
  bgColor,
}) => (
  <div
    className={`${bgColor} rounded-xl p-6 flex flex-col items-center text-center h-full transition-transform hover:scale-105`}
  >
    <div className="mb-4">
      <img src={imgSrc} alt={title} className="w-16 h-16 object-contain" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-700">{description}</p>
  </div>
);

const DevelopmentServices = () => {
  const services = [
    {
      imgSrc: frontend,
      title: "Frontend Development",
      description: "Beautiful and responsive user interfaces",
      bgColor: "bg-sky-200",
    },
    {
      imgSrc: mobile,
      title: "App Development",
      description: "Beautiful and responsive user interfaces",
      bgColor: "bg-green-200",
    },
    {
      imgSrc: fullstack,
      title: "Full Stack Development",
      description: "Frontend + Backend",
      bgColor: "bg-orange-200",
    },
    {
      imgSrc: backend,
      title: "Backend Development",
      description: "Scalable and complex backend systems",
      bgColor: "bg-blue-200",
    },
    {
      imgSrc: fullstack,
      title: "Graphic Design",
      description:
        "UI/UX design using different platform like figma ,adobe illustrator",
      bgColor: "bg-cyan-200",
    },
    {
      imgSrc: cloud,
      title: "Cloud Services",
      description: "Scalable and Cutting-Edge Cloud Solutions",
      bgColor: "bg-cyan-200",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            imgSrc={service.imgSrc}
            title={service.title}
            description={service.description}
            bgColor={service.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default DevelopmentServices;
