import { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import { ThemeContext } from "../../../components/constants/ThemeContext";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";

interface IExperience {
  _id?: string;
  company: string;
  title: string;
  description: string;
  startingDate: Date;
  endingDate: Date;
}

export default function ExperienceSection() {
  const { isDarkMode } = useContext(ThemeContext);
  const [experiences, setExperiences] = useState<IExperience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentExperience, setCurrentExperience] =
    useState<IExperience | null>(null);

  const initialFormState = {
    company: "",
    title: "",
    description: "",
    startingDate: new Date(),
    endingDate: new Date(),
  };

  const [formData, setFormData] = useState<IExperience>(initialFormState);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await fetch("/api/experiences");
      const data = await response.json();
      setExperiences(data.data);
      setError(null);
    } catch (error) {
      setError("Error fetching experiences");
      console.error("Error fetching experiences:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/experiences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    
      if (!response.ok) throw new Error("Failed to add experience");

      await fetchExperiences();
      setFormData(initialFormState);
      setIsAddModalOpen(false);
    } catch (error) {
      setError("Error adding experience");
      console.error("Error adding experience:", error);
    }
  };

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentExperience?._id) return;

    try {
      const response = await fetch(`/api/experiences/${currentExperience._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("body", formData);
      console.log("body", currentExperience._id);
      if (!response.ok) throw new Error("Failed to update experience");

      await fetchExperiences();
      setIsEditModalOpen(false);
      setCurrentExperience(null);
    } catch (error) {
      setError("Error updating experience");
      console.error("Error updating experience:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this experience?"))
      return;

    try {
      const response = await fetch(`/api/experiences/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete experience");
console.log("response",response)
      await fetchExperiences();
    } catch (error) {
      setError("Error deleting experience");
      console.error("Error deleting experience:", error);
    }
  };

  const openEditModal = (experience: IExperience) => {
    setCurrentExperience(experience);
    setFormData(experience);
    setIsEditModalOpen(true);
  };

  function formatDate(date: Date): string {
    return format(new Date(date), "MMM yyyy");
  }

  const ExperienceForm = ({
    onSubmit,
    buttonText,
  }: {
    onSubmit: (e: React.FormEvent) => Promise<void>;
    buttonText: string;
  }) => (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleInputChange}
          required
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleInputChange}
          required
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleInputChange}
          required
          className="w-full p-2 border rounded-md h-32 resize-none"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="date"
          name="startingDate"
          value={formData.startingDate.toString().split("T")[0]}
          onChange={handleInputChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          type="date"
          name="endingDate"
          value={formData.endingDate.toString().split("T")[0]}
          onChange={handleInputChange}
          required
          className="w-full p-2 border rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition-colors"
      >
        {buttonText}
      </button>
    </form>
  );

  return (
    <div
      className={`w-full py-16 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-semibold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              My Experience
            </h2>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              Add Experience
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : experiences.length === 0 ? (
          <p className="text-center text-gray-500">No experiences to show.</p>
        ) : (
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative rounded-lg p-6 border transition-all duration-300 hover:shadow-lg ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-300"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3
                      className={`text-xl font-semibold ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {experience.company}
                    </h3>
                    <p
                      className={`text-lg ${
                        isDarkMode ? "text-purple-400" : "text-purple-600"
                      }`}
                    >
                      {experience.title}
                    </p>
                    <div
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {formatDate(new Date(experience.startingDate))} -{" "}
                      {formatDate(new Date(experience.endingDate))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEditModal(experience)}
                      className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        experience._id && handleDelete(experience._id)
                      }
                      className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <p
                  className={`text-base leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {experience.description}
                </p>

                {index !== experiences.length - 1 && (
                  <div
                    className={`absolute left-6 bottom-0 w-0.5 h-8 ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Add Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div
              className={`relative bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md`}
            >
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
              <h3 className="text-lg font-semibold mb-4">Add New Experience</h3>
              <ExperienceForm
                onSubmit={handleSubmit}
                buttonText="Add Experience"
              />
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {isEditModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div
              className={`relative bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md`}
            >
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
              <h3 className="text-lg font-semibold mb-4">Edit Experience</h3>
              <ExperienceForm
                onSubmit={handleEdit}
                buttonText="Update Experience"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
