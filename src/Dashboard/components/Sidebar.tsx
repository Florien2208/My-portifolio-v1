import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  Table2,
  CreditCard,
  Languages,
  User,
  LogIn,
  UserPlus
} from "lucide-react";
import { ThemeContext } from "../../components/constants/ThemeContext";

const Sidebar: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const location = useLocation();

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <div
      className={`fixed w-[240px] h-full ${
        isDarkMode ? "bg-[#111c44]/50 backdrop-blur-xl" : "bg-white shadow-lg"
      }`}
    >
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
            <span className="text-white font-bold">V</span>
          </div>
          <span
            className={`font-semibold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            VISION UI FREE
          </span>
        </div>

        {/* Main Navigation */}
        <div className="space-y-1">
          <div
            className={`text-xs font-semibold mb-4 ${
              isDarkMode ? "text-[#707eae]" : "text-gray-500"
            }`}
          >
            PAGES
          </div>

          {[
            {
              path: "/",
              icon: <LayoutDashboard size={18} />,
              label: "Dashboard",
            },
            { path: "/tables", icon: <Table2 size={18} />, label: "Tables" },
            {
              path: "/billing",
              icon: <CreditCard size={18} />,
              label: "Billing",
            },
            { path: "/rtl", icon: <Languages size={18} />, label: "RTL" },
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
            ACCOUNT PAGES
          </div>

          {[
            { path: "/profile", icon: <User size={18} />, label: "Profile" },
            { path: "/signin", icon: <LogIn size={18} />, label: "Sign In" },
            { path: "/signup", icon: <UserPlus size={18} />, label: "Sign Up" },
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

      {/* Help Box */}
      {/* <div className="absolute bottom-8 left-6 right-6">
        <div
          className={`rounded-2xl p-4 ${
            isDarkMode
              ? "bg-gradient-to-br from-[#0075ff] to-[#00c6ff]"
              : "bg-blue-500"
          }`}
        >
          <div className="bg-white/10 rounded-xl p-2 w-10 h-10 flex items-center justify-center mb-3">
            <HelpCircle className="text-white" size={20} />
          </div>
          <h5 className="text-white font-semibold mb-1">Need help?</h5>
          <p className="text-white/60 text-sm">Please check our docs</p>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
