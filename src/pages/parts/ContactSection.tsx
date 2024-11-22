import React from "react";
import { useContext, useState } from "react";
import { Mail,  Github, X, Linkedin } from "lucide-react";
import { ThemeContext } from "../../components/constants/ThemeContext";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface Notification {
  type: "success" | "error";
  message: string;
}

const ContactSection: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Enhanced name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name)) {
      newErrors.name =
        "Name can only contain letters, spaces, hyphens and apostrophes";
    }

    // Enhanced email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Enhanced subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long";
    } else if (formData.subject.length > 100) {
      newErrors.subject = "Subject cannot exceed 100 characters";
    }

    // Enhanced message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message cannot exceed 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      showNotification(
        "error",
        "Please check the form for errors and try again."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      showNotification(
        "success",
        "Your message has been sent successfully. We'll get back to you soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      showNotification(
        "error",
        error instanceof Error ? error.message : "Failed to send message"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className={`w-full ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      {/* Notification */}
      {notification && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-md flex items-center justify-between ${
            notification.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          } transition-opacity duration-300`}
        >
          <p>{notification.message}</p>
          <button
            onClick={() => setNotification(null)}
            className="ml-4 hover:opacity-80 transition-opacity"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form Section */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-8">
              <Mail
                className={`w-8 h-8 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              />
              <h1
                className={`text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Get in touch
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 rounded-md border ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  } focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200
                    ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 rounded-md border ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  } focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200
                    ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full p-2 rounded-md border ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  } focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200
                    ${errors.subject ? "border-red-500" : ""}`}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full p-3 rounded-md border ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  } focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200
                    ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
                  ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="flex-1 md:ml-8">
            <p
              className={`text-lg mb-8 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Here is a good spot for a message to your readers to let them know
              how best to reach out to you.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:mahorompakanyiflorien@gmail.com"
                className={`flex items-center gap-3 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } hover:text-orange-500 transition duration-200`}
              >
                <Mail className="w-5 h-5" />
                <span>mahorompakanyiflorien@gmail.com</span>
              </a>

              <a
                href="https://github.com/Florien2208"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } hover:text-orange-500 transition duration-200`}
              >
                <Github className="w-5 h-5" />
                <span>florien2208</span>
              </a>
              <a
                href="https://www.linkedin.com/in/florien-mahoro-mpakanyi-398515258/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } hover:text-orange-500 transition duration-200`}
              >
                <Linkedin className="w-5 h-5" />
                <span>mahoro-florien</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
