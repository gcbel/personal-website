/* DEPENDENCIES */
import ReactDOM from "react-dom/client";
import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/reset.css";

import App from "./App";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import NonExistent from "./pages/NonExistent";

/* ROUTER */
/* Define routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NonExistent />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
]);

/* Render components */
ReactDOM.createRoot(document.getElementById("root")).render(
  <AnimatePresence mode="wait">
    <RouterProvider router={router} />
  </AnimatePresence>
);
