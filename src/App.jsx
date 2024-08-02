/* DEPENDENCIES */
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

/* FUNCTION */
function App() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

/* EXPORT */
export default App;
