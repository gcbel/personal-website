/* DEPENDENCIES */
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

/* FUNCTION */
function App() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

/* EXPORT */
export default App;
