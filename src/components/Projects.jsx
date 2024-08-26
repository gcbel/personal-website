/* DEPENDENCIES */
import { useRef, useEffect, useState } from "react";
import FeaturedProjects from "./Projects/Featured";
import FullstackProjects from "./Projects/Fullstack";
import MLProjects from "./Projects/ML";
import "../styles/projects.css";

/* PROJECT PAGE */
export default function Projects() {
  // All project information
  const projIndex = 0;
  const images = ["ehr.png"];
  const titles = [
    "Electronic Health Record",
    "Greentrail",
    "Director's Cut",
    "Discord Bot",
  ];
  const descriptions = [
    "Website designed for doctors and patients to interface about patient health and store health data of patients.",
    "Ethical travel website built to uplift small communities and facilitate mindful travel practices.",
    "Site built to provide movie recommendations based on a user's preferences.",
    "Automated moderator bot built to detect and target romance scams, uses Discord as a proxy.",
  ];
  const tech = ["React", "React"];

  // Handle section selection
  const [selected, setSelected] = useState("featured");
  const handleSetSelected = (selection) => {
    setSelected(selection);
  };

  return (
    <div className="page-inner-large" id="project-page">
      <h2 className="title cormorant">Projects</h2>
      <div className="mulish">
        <div id="project-buttons">
          <button
            className="borders mulish "
            onClick={() => handleSetSelected("featured")}
          >
            Featured
          </button>
          <button
            className="borders mulish"
            onClick={() => handleSetSelected("fullstack")}
          >
            Full Stack
          </button>
          <button
            className="borders mulish"
            onClick={() => handleSetSelected("ml")}
          >
            ML and more
          </button>
        </div>
        <div id="projects-outer">
          {selected === "featured" ? <FeaturedProjects /> : ""}
          {selected === "fullstack" ? <FullstackProjects /> : ""}
          {selected === "ml" ? <MLProjects /> : ""}
          <div id="project-showcase">
            <img
              src={`../../../${images[projIndex]}`}
              alt={titles[projIndex]}
              id="showcase-img"
            ></img>
            <h3 className="cormorant large-text" id="showcase-title">
              {titles[projIndex]}
            </h3>
            <p id="showcase-desc">{descriptions[projIndex]}</p>
            <p className="tech-used" id="showcase-tech">
              {tech[projIndex]}
            </p>
            <div className="project-links">
              <button className="mulish borders">Github</button>
              <button className="mulish borders">Site</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
