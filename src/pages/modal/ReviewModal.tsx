import React, { useState } from "react";
import { Star, X, Send, User, Mail, MessageSquare } from "lucide-react";

interface ReviewModalProps {
  projectTitle: string;
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
  onSubmit: (review: {
    name: string;
    email: string;
    rating: number;
    comment: string;
  }) => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  projectTitle,
  isOpen,
  isDarkMode,
  onClose,
  onSubmit,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hoverRating, setHoverRating] = useState(0);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    rating?: string;
  }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (rating === 0) {
      newErrors.rating = "Please select a rating";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit({
        name,
        email,
        rating,
        comment,
      });
      // Reset form
      setName("");
      setEmail("");
      setRating(0);
      setComment("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[80000] flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className={`
          relative w-full max-w-md mx-4 rounded-2xl shadow-2xl
          ${isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"}
          transform transition-all duration-300 ease-in-out
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`
            absolute top-4 right-4 p-2 rounded-full
            ${
              isDarkMode
                ? "hover:bg-gray-700 text-gray-400 hover:text-gray-200"
                : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            }
            transition-colors
          `}
        >
          <X size={24} />
        </button>

        {/* Modal Header */}
        <div
          className={`
            px-6 pt-6 pb-4 border-b
            ${isDarkMode ? "border-gray-700" : "border-gray-200"}
          `}
        >
          <h2 className="text-2xl font-bold mb-2">
            Review: <span className="text-yellow-500">{projectTitle}</span>
          </h2>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Share your experience and help others
          </p>
        </div>

        {/* Rating Section */}
        <div className="px-6 py-4">
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={32}
                className={`
                  cursor-pointer mx-1
                  ${
                    star <= (hoverRating || rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }
                  transition-colors duration-200
                  hover:scale-110
                `}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
          {errors.rating && (
            <p className="text-center text-sm text-red-500 mb-2">
              {errors.rating}
            </p>
          )}
        </div>

        {/* Input Fields */}
        <div className="px-6 space-y-4">
          {/* Name Input */}
          <div>
            <div
              className={`
                flex items-center border rounded-lg
                ${
                  isDarkMode
                    ? "border-gray-700 bg-gray-900"
                    : "border-gray-300 bg-gray-50"
                }
                ${errors.name ? "border-red-500" : ""}
              `}
            >
              <div
                className={`
                  p-3 border-r
                  ${
                    isDarkMode
                      ? "border-gray-700 text-gray-400"
                      : "border-gray-300 text-gray-500"
                  }
                `}
              >
                <User size={20} />
              </div>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`
                  w-full p-3 rounded-r-lg
                  ${
                    isDarkMode
                      ? "bg-gray-900 text-gray-200 placeholder-gray-600"
                      : "bg-gray-50 text-gray-800 placeholder-gray-500"
                  }
                  focus:outline-none focus:ring-2
                  ${
                    errors.name
                      ? "focus:ring-red-500"
                      : isDarkMode
                      ? "focus:ring-blue-600"
                      : "focus:ring-blue-300"
                  }
                `}
              />
            </div>
            {errors.name && (
              <p className="text-sm text-red-500 mt-1 ml-2">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <div
              className={`
                flex items-center border rounded-lg
                ${
                  isDarkMode
                    ? "border-gray-700 bg-gray-900"
                    : "border-gray-300 bg-gray-50"
                }
                ${errors.email ? "border-red-500" : ""}
              `}
            >
              <div
                className={`
                  p-3 border-r
                  ${
                    isDarkMode
                      ? "border-gray-700 text-gray-400"
                      : "border-gray-300 text-gray-500"
                  }
                `}
              >
                <Mail size={20} />
              </div>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`
                  w-full p-3 rounded-r-lg
                  ${
                    isDarkMode
                      ? "bg-gray-900 text-gray-200 placeholder-gray-600"
                      : "bg-gray-50 text-gray-800 placeholder-gray-500"
                  }
                  focus:outline-none focus:ring-2
                  ${
                    errors.email
                      ? "focus:ring-red-500"
                      : isDarkMode
                      ? "focus:ring-blue-600"
                      : "focus:ring-blue-300"
                  }
                `}
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500 mt-1 ml-2">{errors.email}</p>
            )}
          </div>

          {/* Comment Textarea */}
          <div>
            <div
              className={`
                flex items-start border rounded-lg
                ${
                  isDarkMode
                    ? "border-gray-700 bg-gray-900"
                    : "border-gray-300 bg-gray-50"
                }
              `}
            >
              <div
                className={`
                  p-3 border-r
                  ${
                    isDarkMode
                      ? "border-gray-700 text-gray-400"
                      : "border-gray-300 text-gray-500"
                  }
                `}
              >
                <MessageSquare size={20} />
              </div>
              <textarea
                placeholder="Your Review (Optional)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className={`
                  w-full p-3 rounded-r-lg resize-none
                  ${
                    isDarkMode
                      ? "bg-gray-900 text-gray-200 placeholder-gray-600"
                      : "bg-gray-50 text-gray-800 placeholder-gray-500"
                  }
                  focus:outline-none focus:ring-2
                  ${isDarkMode ? "focus:ring-blue-600" : "focus:ring-blue-300"}
                `}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="px-6 py-5">
          <button
            onClick={handleSubmit}
            className={`
              w-full py-3 rounded-lg flex items-center justify-center
              ${
                rating === 0
                  ? "cursor-not-allowed opacity-50"
                  : "hover:opacity-90"
              }
              ${
                isDarkMode
                  ? "bg-blue-700 text-blue-100"
                  : "bg-blue-500 text-white"
              }
              transition-all duration-300
            `}
            disabled={rating === 0}
          >
            <Send size={20} className="mr-2" />
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
