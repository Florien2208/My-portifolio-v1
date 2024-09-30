import { ThemeProvider } from "./components/constants/ThemeContext";
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
        // {
        //   path: "insurance",
        //   element: <Insurance />,
        // },
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
