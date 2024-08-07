/* DEPENDENCIES */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

/* EXPORT */
/* Renders nav bar */
export default function Nav() {
  // Handle showing/hiding arrows on click, initialize page to about
  const [page, setActivePage] = useState("about");
  const handlePageClick = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <nav>
      <h2 className="cormorant" id="home">
        <Link to="/" onClick={() => handlePageClick("home")}>
          GB
        </Link>
      </h2>
      <div className="mulish" id="nav-links">
        <div>
          <i
            className={page === "about" ? "" : "hidden-with-space"}
            id="about-arrow"
          >
            &#x2192;{" "}
          </i>
          <Link to="/" onClick={() => handlePageClick("about")}>
            About
          </Link>
        </div>
        <div>
          <i
            className={page === "projects" ? "" : "hidden-with-space"}
            id="projects-arrow"
          >
            &#x2192;{" "}
          </i>
          <Link to="/projects" onClick={() => handlePageClick("projects")}>
            {" "}
            Projects
          </Link>
        </div>
        <div>
          <i
            className={page === "resume" ? "" : "hidden-with-space"}
            id="resume-arrow"
          >
            &#x2192;{" "}
          </i>
          <Link to="/resume" onClick={() => handlePageClick("resume")}>
            {" "}
            Resume
          </Link>
        </div>
        <div>
          <i
            className={page === "contact" ? "" : "hidden-with-space"}
            id="contact-arrow"
          >
            &#x2192;{" "}
          </i>
          <Link to="/contact" onClick={() => handlePageClick("contact")}>
            {" "}
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
