import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import {
  LayoutDashboard,
  Table2,
  CreditCard,
  Languages,
  User,
  SignalHigh,
} from "lucide-react";
import { ThemeContext } from "../../components/constants/ThemeContext";
import { MdContactEmergency } from "react-icons/md";

const Sidebar: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const location = useLocation();

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <div
      className={`fixed top-0 left-0 w-[240px] h-full z-40 ${
        isDarkMode ? "bg-[#111c44]/50 backdrop-blur-xl" : "bg-white shadow-lg"
      }`}
    >
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
            <span className="text-white font-bold">F</span>
          </div>
          <span
            className={`font-semibold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            BILL KENNEDY
          </span>
        </div>

        {/* Main Navigation */}
        <div className="space-y-1">
          {[
            {
              path: "/",
              icon: <LayoutDashboard size={18} />,
              label: "Dashboard",
            },
            {
              path: "Experiences",
              icon: <Table2 size={18} />,
              label: "My Experience",
            },
            {
              path: "/billing",
              icon: <CreditCard size={18} />,
              label: "My Project",
            },
            {
              path: "/rtl",
              icon: <FaGraduationCap size={18} />,
              label: "My Education",
            },
            {
              path: "/rtl",
              icon: <Languages size={18} />,
              label: "My References",
            },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                isActiveRoute(item.path)
                  ? "bg-gradient-to-r from-[#0075ff] to-[#00c6ff] text-white"
                  : isDarkMode
                  ? "text-[#707eae] hover:text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Account Pages */}
        <div className="mt-8">
          <div
            className={`text-xs font-semibold mb-4 ${
              isDarkMode ? "text-[#707eae]" : "text-gray-500"
            }`}
          >
            ACCOUNT
          </div>

          {[
            { path: "/profile", icon: <User size={18} />, label: "Profile" },
            {
              path: "/signin",
              icon: <SignalHigh size={18} />,
              label: "My Wallet",
            },
            {
              path: "/signin",
              icon: <MdContactEmergency size={18} />,
              label: "Contact us",
            },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                isActiveRoute(item.path)
                  ? "bg-gradient-to-r from-[#0075ff] to-[#00c6ff] text-white rounded-xl"
                  : isDarkMode
                  ? "text-[#707eae] hover:text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
