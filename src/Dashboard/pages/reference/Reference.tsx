import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../components/constants/ThemeContext";
import { Pencil, Trash2, Plus, X } from "lucide-react";

// Types
interface Testimonial {
  _id: number;
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

interface TestimonialFormData {
  name: string;
  title: string;
  description: string;
  profile: string;
}

// Toast Component
const Toast = ({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-lg text-white
      ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
      <span>{message}</span>
      <button onClick={onClose} className="p-1 hover:opacity-80">
        <X size={16} />
      </button>
    </div>
  );
};

// Modal Component
const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" onClick={onClose}>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div 
          className="relative bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md"
          onClick={e => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

// Card Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  onEdit,
  onDelete,
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      setIsDeleting(true);
      try {
        await onDelete(testimonial._id);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div
      className={`rounded-2xl p-6 min-w-[300px] max-w-[300px] mx-4 relative transition-all duration-300 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } hover:shadow-lg`}
    >
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
          onClick={handleDelete}
          disabled={isDeleting}
          className={`p-2 rounded-full hover:bg-opacity-90 ${
            isDarkMode
              ? "bg-gray-700 text-gray-300"
              : "bg-gray-100 text-gray-600"
          } ${isDeleting ? "opacity-50 cursor-not-allowed" : ""}`}
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

// Edit Modal Component
const EditModal = ({
  isOpen,
  onClose,
  testimonial,
  onSave,
  isLoading,
}: {
  isOpen: boolean;
  onClose: () => void;
  testimonial?: Testimonial;
  onSave: (data: TestimonialFormData) => Promise<void>;
  isLoading: boolean;
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState<TestimonialFormData>({
    name: "",
    title: "",
    description: "",
    profile: "",
  });

  useEffect(() => {
    if (testimonial) {
      setFormData({
        name: testimonial.name,
        title: testimonial.title,
        description: testimonial.description,
        profile: testimonial.profile,
      });
    } else {
      setFormData({
        name: "",
        title: "",
        description: "",
        profile: "",
      });
    }
  }, [testimonial]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {testimonial ? "Edit Testimonial" : "Add Testimonial"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg border ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg border ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
          </div>
          <div>
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className={`w-full px-4 py-2 rounded-lg border ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Profile Image URL"
              value={formData.profile}
              onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg border ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className={`px-4 py-2 rounded-lg border ${
                isDarkMode
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 disabled:opacity-50"
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

// Main Component
const Reference = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editModal, setEditModal] = useState({
    isOpen: false,
    testimonial: undefined as Testimonial | undefined,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const fetchTestimonials = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/references");
      if (!response.ok) throw new Error("Failed to fetch testimonials");
      const data = await response.json();
      setTestimonials(data.data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditModal({ isOpen: true, testimonial });
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/references/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete testimonial");

      await fetchTestimonials();
      showToast("Testimonial deleted successfully", "success");
    } catch (error) {
      showToast("Failed to delete testimonial", "error");
      throw error;
    }
  };

  const handleSave = async (formData: TestimonialFormData) => {
    setIsSaving(true);
    console.log("editModal", editModal);
    try {
      const url = editModal.testimonial
        ? `/api/references/${editModal.testimonial._id}`
        : "/api/references";
      const method = editModal.testimonial ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to save testimonial");

      await fetchTestimonials();
      setEditModal({ isOpen: false, testimonial: undefined });
      showToast(
        `Testimonial ${
          editModal.testimonial ? "updated" : "added"
        } successfully`,
        "success"
      );
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to save testimonial";
      console.error("Error saving testimonial:", err);
      showToast(errorMessage, "error");
    } finally {
      setIsSaving(false);
    }
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
          onClick={() => fetchTestimonials()}
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
            onClick={() =>
              setEditModal({ isOpen: true, testimonial: undefined })
            }
            className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200"
           
          >
            <Plus size={20} />
            Add Reference
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial._id}
              testimonial={testimonial}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      <EditModal
        isOpen={editModal.isOpen}
        onClose={() => setEditModal({ isOpen: false, testimonial: undefined })}
        testimonial={editModal.testimonial}
        onSave={handleSave}
        isLoading={isSaving}
      />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default Reference;