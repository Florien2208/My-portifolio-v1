import { useState, useEffect } from "react";
import {
  X,
  MessageCircle,
  MessageSquare,
  Phone,
  ExternalLink,
  Mail,
  Slack,
  Send,
  Paperclip,
  LucideIcon
} from "lucide-react";

interface NotificationState {
  show: boolean;
  message: string;
}

interface ChatMessage {
  text: string;
  sender: string;
  time: string;
}

interface ChatData {
  name: string;
  email: string;
  language: string;
  messages: ChatMessage[];
}

interface ContactOption {
  platform: 'whatsapp' | 'gmail' | 'slack' | 'phone' | 'live-chat';
  icon: LucideIcon;
  label: string;
  description: string;
  color: string;
  bgColor: string;
}

type ChatState = 'closed' | 'form' | 'chat';

const FloatingSupport = (): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [notification, setNotification] = useState<NotificationState>({
    show: false,
    message: "",
  });
  const [chatState, setChatState] = useState<ChatState>("closed");
  const [chatData, setChatData] = useState<ChatData>({
    name: "",
    email: "",
    language: "English",
    messages: [],
  });

  const toggleModal = (): void => {
    setIsModalOpen(!isModalOpen);
    setIsExpanded(false);
  };

 useEffect(() => {
   let timeoutId: number | undefined; // Changed from NodeJS.Timeout
   if (notification.show) {
     timeoutId = window.setTimeout(() => {
       // Using window.setTimeout to be explicit
       setNotification({ show: false, message: "" });
     }, 3000);
   }
   return () => {
     if (timeoutId) window.clearTimeout(timeoutId);
   };
 }, [notification.show]);

  const handlePlatformConnect = (platform: ContactOption['platform']): void => {
    switch (platform) {
      case "whatsapp":
        window.open("https://wa.me/+250787537524", "_blank");
        break;
      case "gmail":
        window.location.href = "mailto:support@example.com";
        break;
      case "slack":
        window.open(
          "https://projectdiscus-prb5069.slack.com/archives/C07TB52HULF",
          "_blank"
        );
        break;
      case "phone":
        setNotification({
          show: true,
          message: "+250 787 537 524",
        });
        break;
      case "live-chat":
        setChatState("form");
        break;
      default:
        break;
    }
  };

  const handleStartChat = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setChatState("chat");
    setChatData((prev) => ({
      ...prev,
      messages: [
        { text: `Hello ${prev.name}`, sender: "Annamaria", time: "11:29" },
        { text: "How can I help you?", sender: "Annamaria", time: "11:29" },
      ],
    }));
  };

  const renderChatForm = (): JSX.Element => (
    <div className="bg-white p-6 rounded-lg w-full max-w-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Live Chat</h2>
        <button
          onClick={() => setChatState("closed")}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleStartChat} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-gray-50"
            placeholder="Input Name"
            value={chatData.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setChatData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="w-full p-3 rounded-lg bg-gray-50"
            placeholder="email@example.com"
            value={chatData.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setChatData((prev) => ({ ...prev, email: e.target.value }))
            }
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Language
          </label>
          <div className="flex items-center p-3 rounded-lg bg-gray-50">
            <img
              src="/api/placeholder/24/24"
              alt="English flag"
              className="mr-2"
            />
            <span>English</span>
            <div className="ml-auto flex items-center">
              <span className="text-green-600 text-sm mr-2">Online</span>
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          START CHAT
        </button>

        <p className="text-xs text-gray-500 mt-4">
          By using our LiveChat, you agree that any personal data provided via
          LiveChat will be processed by us, as per our Privacy Policy and as per
          the app's Privacy Policy, for the purpose of receiving assistance from
          our Customer Experience team.
        </p>
      </form>
    </div>
  );

  const renderChat = (): JSX.Element => (
    <div className="bg-white rounded-lg w-full max-w-md flex flex-col h-[500px]">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">A</span>
          </div>
          <div>
            <h3 className="font-medium">Name: {chatData.name}</h3>
            <p className="text-sm text-gray-500">Email: {chatData.email}</p>
          </div>
          <button
            onClick={() => setChatState("closed")}
            className="ml-auto text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {chatData.messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.sender === "Annamaria" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`max-w-[70%] ${
                msg.sender === "Annamaria"
                  ? "bg-gray-100"
                  : "bg-green-600 text-white"
              } rounded-lg p-3`}
            >
              {msg.sender === "Annamaria" && (
                <p className="text-green-600 text-sm font-medium mb-1">
                  Annamaria
                </p>
              )}
              <p>{msg.text}</p>
              <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Write a message..."
            className="flex-1 p-2 rounded-lg bg-gray-50"
          />
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Paperclip className="w-5 h-5" />
          </button>
          <button className="p-2 text-green-600 hover:text-green-700">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  const contactOptions: ContactOption[] = [
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
      description: "View phone number",
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
      {notification.show && (
        <div className="fixed top-4 right-4 z-[60] animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="bg-blue-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <span className="font-medium">{notification.message}</span>
            <button
              onClick={() => setNotification({ show: false, message: "" })}
              className="ml-4 hover:text-blue-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <div className="fixed bottom-8 right-8 z-50">
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
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </span>
          </button>

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

    
      {(isModalOpen || chatState !== "closed") && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50">
          <div className="relative mx-8 mb-8">
            {chatState === "form" && renderChatForm()}
            {chatState === "chat" && renderChat()}
            {chatState === "closed" && (
              <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div className="bg-green-700 text-white p-6 items-center">
                  <h2 className="text-2xl font-normal">How can we help?</h2>
                  <p className="text-sm mt-1">
                    Choose how you'd prefer to receive support.
                  </p>
                </div>

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
                          <MessageCircle
                            className={`w-4 h-4 ${option.color}`}
                          />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={toggleModal}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingSupport;