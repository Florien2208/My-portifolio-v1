import { ThemeProvider } from "./components/constants/ThemeContext";
import AdminLayout from "./Dashboard/layout/AdminLayout";
import Dashboard from "./Dashboard/pages/Dashboard";
import ExperienceSection from "./Dashboard/pages/experience/ExperienceSection";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Reference from "./Dashboard/pages/reference/Reference";
import AwardsAndCertificationsWrapper from "./pages/AwardsAndCertifications";
import ContactUs from "./Dashboard/pages/contact/ContactUs";
import NotFound from "./constants/NotFound";
import SolutionPage from "./pages/SolutionsPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "solutions",
          element: <SolutionPage />,
        },
        {
          path: "awards",
          element: <AwardsAndCertificationsWrapper />,
        },
      ],
    },
    {
      path: "Dashboard",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "Experiences",
          element: <ExperienceSection />,
        },
        {
          path: "References",
          element: <Reference />,
        },
        {
          path: "Contact-Us",
          element: <ContactUs />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}
