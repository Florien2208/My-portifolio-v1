import { useState } from "react";
import { X, MessageCircle, MessageSquare, Phone } from "lucide-react";

const FloatingSupport = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsExpanded(false);
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        {/* Floating button */}
        <div
          className="relative"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <button
            onClick={toggleModal}
            className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center shadow-lg hover:bg-green-800 transition-colors"
          >
            <span className="text-white text-2xl">?</span>
          </button>

          {/* Expanded button */}
          <div
            className={`absolute right-12 top-0 transition-all duration-300 ${
              isExpanded ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <button
              onClick={toggleModal}
              className="h-12 bg-green-700 rounded-full flex items-center pr-4 pl-12 -mr-12 shadow-lg hover:bg-green-800 transition-colors"
            >
              <span className="text-white font-medium whitespace-nowrap">
                SUPPORT ?
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center bottom-5 justify-end bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            {/* Header */}
            <div className="bg-green-700 text-white p-6 items-center">
              <h2 className="text-2xl font-normal">How can we help?</h2>
              <p className="text-sm mt-1">
                Choose how you'd prefer to receive support.
              </p>
            </div>

            {/* Contact options */}
            <div className="divide-y divide-gray-200">
              <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-100 transition-colors">
                <MessageCircle className="w-6 h-6 text-green-700" />
                <span className="font-medium text-gray-700">
                  WHATSAPP CONTACT
                </span>
              </button>
              <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-100 transition-colors">
                <MessageSquare className="w-6 h-6 text-green-700" />
                <span className="font-medium text-gray-700">
                  WHATSAPP CONTACT
                </span>
              </button>
              <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-100 transition-colors">
                <Phone className="w-6 h-6 text-green-700" />
                <span className="font-medium text-gray-700">
                  WHATSAPP CONTACT
                </span>
              </button>
              <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-100 transition-colors">
                <MessageCircle className="w-6 h-6 text-green-700" />
                <span className="font-medium text-gray-700">LIVE CHAT</span>
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingSupport;
