/* DEPENDENCIES */
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

/* FUNCTION */
function App() {
  return (
    <div style={{ minWidth: "300px" }}>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

/* EXPORT */
export default App;
