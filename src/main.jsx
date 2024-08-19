/* DEPENDENCIES */
import ReactDOM from "react-dom/client";
import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/reset.css";

import App from "./App";
import Main from "./pages/Main";
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
        element: <Main />,
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
