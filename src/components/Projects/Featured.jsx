/* DEPENDENCIES */
import { useRef, useEffect, useState } from "react";

/* FEATURED PROJECTS */
export default function FeaturedProjects() {
  const [projIndex, setProjIndex] = useState(0);

  return (
    <div id="projects">
      <div className="project">
        <h4></h4>
        <p className="large-text">Electronic Health Record</p>
        <p className="tech-used">Fullstack</p>
      </div>
      <div className="separator"></div>
      <div className="project">
        <h4 className="large-text">Greentrail</h4>
        <p className="tech-used">Fullstack</p>
      </div>
      <div className="separator"></div>
      <div className="project">
        <h4 className="large-text">Director's Cut</h4>
        <p className="tech-used">ML, NLP, Fullstack</p>
      </div>
      <div className="separator"></div>
      <div className="project">
        <h4></h4>
        <p className="large-text">Automated Moderator</p>
        <p className="tech-used">ML, AI</p>
      </div>
    </div>
  );
}
