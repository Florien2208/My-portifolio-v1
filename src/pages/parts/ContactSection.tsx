import React from "react";
import { useContext } from "react";

import { Mail, Instagram, Github } from "lucide-react";
import { ThemeContext } from "../../components/constants/ThemeContext";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={`w-full ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
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
                Get in touch.
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
                  } focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200`}
                />
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
                  } focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200`}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  className={`w-full p-3 rounded-md border ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  } focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200`}
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Send Message
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
                href="https://instagram.com/iaashirkhan"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } hover:text-orange-500 transition duration-200`}
              >
                <Instagram className="w-5 h-5" />
                <span>@iaashirkhan</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
