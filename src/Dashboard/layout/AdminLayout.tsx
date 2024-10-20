import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../../components/constants/ThemeContext";


const AdminLayout: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex min-h-screen ${
        isDarkMode ? "bg-[#0b1437]" : "bg-gray-50"
      }`}
    >
      <Sidebar />
      <div className="ml-[240px] flex-1 p-6">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
