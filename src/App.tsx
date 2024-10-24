import { ThemeProvider } from "./components/constants/ThemeContext";
import AdminLayout from "./Dashboard/layout/AdminLayout";
import Dashboard from "./Dashboard/pages/Dashboard";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      ],
    },
    {
      path: "Dashboard",
      element: <AdminLayout/>,
      children: [
        {
          path: "",
          element:<Dashboard />,
        },
      ],
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
