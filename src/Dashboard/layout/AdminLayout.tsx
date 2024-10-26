import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../../components/constants/ThemeContext";

const AdminLayout: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-[#0b1437]" : "bg-gray-50"}`}
    >
      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMobileMenu}
        className={`lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg ${
          isDarkMode ? "bg-[#111c44] text-white" : "bg-white text-gray-900"
        }`}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full
        transform transition-transform duration-300 ease-in-out
        lg:transform-none lg:relative lg:block
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="lg:ml-[240px] relative">
        <Navbar />
        <div className="p-4 lg:p-6 mt-16">
          <Outlet />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;
