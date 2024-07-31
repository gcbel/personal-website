/* DEPENDENCIES */
import { Link } from "react-router-dom";

/* EXPORT */
/* Renders nav bar */
export default function Nav() {
  return (
    <nav>
      <Link to="/">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
