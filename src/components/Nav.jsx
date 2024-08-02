/* DEPENDENCIES */
import { Link } from "react-router-dom";
import "../styles/nav.css";

/* EXPORT */
/* Renders nav bar */
export default function Nav() {
  return (
    <nav>
      <h2 className="cormorant" id="home">
        <Link to="/">GB</Link>
      </h2>
      <div className="mulish" id="nav-links">
        <div>
          <i id="about-arrow">&#x2192; </i>
          <Link to="/"> About</Link>
        </div>
        <div>
          <i className="hidden-with-space" id="projects-arrow">
            &#x2192;{" "}
          </i>
          <Link to="/projects"> Projects</Link>
        </div>
        <div>
          <i className="hidden-with-space" id="resume-arrow">
            &#x2192;{" "}
          </i>
          <Link to="/resume"> Resume</Link>
        </div>
        <div>
          <i className="hidden-with-space" id="contact-arrow">
            &#x2192;{" "}
          </i>
          <Link to="/contact"> Contact</Link>
        </div>
      </div>
    </nav>
  );
}
