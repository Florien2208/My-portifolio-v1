import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../components/constants/ThemeContext";
import { Pencil, Trash2, Plus } from "lucide-react";

// Types
interface Testimonial {
  id: number;
  name: string;
  title: string;
  description: string;
  profile: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  onEdit: (testimonial: Testimonial) => void;
  onDelete: (id: number) => void;
}

// Card Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  onEdit,
  onDelete,
}) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-2xl p-6 min-w-[300px] max-w-[300px] mx-4 relative transition-all duration-300 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } hover:shadow-lg`}
    >
      {/* Action Buttons */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => onEdit(testimonial)}
          className={`p-2 rounded-full hover:bg-opacity-90 ${
            isDarkMode
              ? "bg-gray-700 text-gray-300"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <Pencil size={16} />
        </button>
        <button
          onClick={() => onDelete(testimonial.id)}
          className={`p-2 rounded-full hover:bg-opacity-90 ${
            isDarkMode
              ? "bg-gray-700 text-gray-300"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <Trash2 size={16} />
        </button>
      </div>

      <p
        className={`mb-6 line-clamp-4 ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {testimonial.description}
      </p>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.profile}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4
            className={`font-medium ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {testimonial.name}
          </h4>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Component
const Reference = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/references");

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(data.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleEdit = (testimonial: Testimonial) => {
    // Implement edit functionality
    console.log("Edit testimonial:", testimonial);
  };

  const handleDelete = async (id: number) => {
    // Implement delete functionality
    console.log("Delete testimonial:", id);
  };

  const handleAdd = () => {
    // Implement add functionality
    console.log("Add new testimonial");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`text-center p-8 ${
          isDarkMode ? "text-red-400" : "text-red-600"
        }`}
      >
        <p>Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div
      className={`py-16 transition-colors duration-300 overflow-hidden ${
        isDarkMode ? "" : "bg-gray-100"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="text-center">
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
              className={`mt-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Real people. Real Results.
            </p>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200"
          >
            <Plus size={20} />
            Add Reference
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reference;
