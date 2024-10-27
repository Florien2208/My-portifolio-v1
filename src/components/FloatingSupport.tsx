import { useState } from "react";
import {
  X,
  MessageCircle,
  MessageSquare,
  Phone,
  ExternalLink,
  Mail,
  Slack,
} from "lucide-react";

const FloatingSupport = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsExpanded(false);
  };

  const handlePlatformConnect = (platform:string) => {
    switch (platform) {
      case "whatsapp":
        // Replace with your WhatsApp number
        window.open("https://wa.me/250787537524", "_blank");
        break;
      case "gmail":
        // Replace with your email
        window.location.href = "mailto:support@example.com";
        break;
      case "slack":
        // Replace with your Slack workspace invite link
        window.open(
          "https://app.slack.com/client/T040UHAL7EX/C040E3MPSGP",
          "_blank"
        );
        break;
      case "phone":
        // Replace with your phone number
        window.location.href = "tel:+250787537524";
        break;
      case "live-chat":
        // Implement your live chat initialization here
        console.log("Starting live chat...");
        break;
      default:
        break;
    }
  };

  const contactOptions = [
    {
      platform: "whatsapp",
      icon: MessageCircle,
      label: "WHATSAPP CONTACT",
      description: "Connect via WhatsApp",
      color: "text-green-600",
      bgColor: "bg-green-50 group-hover:bg-green-100",
    },
    {
      platform: "gmail",
      icon: Mail,
      label: "G-MAIL",
      description: "Send us an email",
      color: "text-red-600",
      bgColor: "bg-red-50 group-hover:bg-red-100",
    },
    {
      platform: "slack",
      icon: Slack,
      label: "SLACK",
      description: "Chat on Slack",
      color: "text-purple-600",
      bgColor: "bg-purple-50 group-hover:bg-purple-100",
    },
    {
      platform: "phone",
      icon: Phone,
      label: "PHONE CONTACT",
      description: "Call us directly",
      color: "text-blue-600",
      bgColor: "bg-blue-50 group-hover:bg-blue-100",
    },
    {
      platform: "live-chat",
      icon: MessageSquare,
      label: "LIVE CHAT",
      description: "Start a live chat",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50 group-hover:bg-emerald-100",
    },
  ];

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
            <span className="text-white text-2xl">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </span>
          </button>

          {/* Expanded button */}
          <div
            className={`absolute right-12 top-0 transition-all duration-300 ${
              isExpanded ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <button
              onClick={toggleModal}
              className="h-12 bg-green-700 rounded-full flex items-center pr-4 pl-6 -mr-12 shadow-lg hover:bg-green-800 transition-colors"
            >
              <span className="text-white font-medium whitespace-nowrap">
                HIRE ME&nbsp;&nbsp;
              </span>
              <ExternalLink
                size={20}
                className="relative text-white top-[1px]"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center bottom-5 justify-end bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-8">
            {/* Header */}
            <div className="bg-green-700 text-white p-6 items-center">
              <h2 className="text-2xl font-normal">How can we help?</h2>
              <p className="text-sm mt-1">
                Choose how you'd prefer to receive support.
              </p>
            </div>

            {/* Contact options */}
            <div className="p-2">
              {contactOptions.map((option) => (
                <button
                  key={option.platform}
                  onClick={() => handlePlatformConnect(option.platform)}
                  className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 group"
                >
                  <div
                    className={`p-2.5 rounded-lg ${option.bgColor} transition-colors duration-200`}
                  >
                    <option.icon className={`w-5 h-5 ${option.color}`} />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-medium text-gray-700 group-hover:text-gray-900">
                      {option.label}
                    </span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-600">
                      {option.description}
                    </span>
                  </div>
                  <div className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                    <div className={`p-1.5 rounded-full ${option.bgColor}`}>
                      <MessageCircle className={`w-4 h-4 ${option.color}`} />
                    </div>
                  </div>
                </button>
              ))}
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
