/* DEPENDENCIES */
import { useState } from "react";
import "../styles/projects.css";

/* PROJECT PAGE */
export default function Projects() {
  // All project information
  const projects = [
    {
      id: 0,
      title: "Electronic Health Record",
      image: "vector-space.png",
      description:
        "Website designed for doctors and patients to interface about patient health and store health data of patients.",
      type: "Fullstack",
      tech: "React",
      github: "https://github.com/gcbel/ehr",
    },
    {
      id: 1,
      title: "Aptitude",
      image: "vector-space.png",
      description:
        "Skill acquisition and learning platform built for users to track and quantify their goals for learning.",
      type: "Fullstack",
      tech: "React",
      github: "https://github.com/gcbel/aptitude",
    },
    {
      id: 2,
      title: "Greentrail",
      image: "greentrail.png",
      description:
        "Ethical travel website built to uplift small communities and facilitate mindful travel practices.",
      type: "Fullstack",
      tech: "React",
      github: "https://github.com/gcbel/greentrail",
    },
    {
      id: 3,
      title: "Director's Cut",
      image: "directors-cut.png",
      description:
        "Site built to provide movie recommendations based on a user's preferences.",
      type: "MP, NLP, Fullstack",
      tech: "ML, NLP",
      github: "https://github.com/gcbel/movie-recommender",
    },
    {
      id: 4,
      title: "Discord Bot",
      image: "vector-space.png",
      description:
        "Automated moderator bot built to detect and target romance scams, uses Discord as a proxy.",
      type: "ML, AI",
      tech: "Python, ML, AI",
      github: "https://github.com/gcbel/discord-moderator-bot",
    },
  ];

  // Handle displaying a project
  const [showcase, setShowcase] = useState(projects[0]);
  const handleProjectShowcase = (id) => {
    const selectedProject = projects.find((project) => project.id === id);
    setShowcase(selectedProject);
  };

  // Handle displaying a section
  const [selected, setSelected] = useState([0, 1, 2, 3, 4]);
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
            onClick={() => handleSetSelected([0, 1, 2, 3, 4])}
          >
            Featured
          </button>
          <button
            className="borders mulish"
            onClick={() => handleSetSelected([0, 1, 2])}
          >
            Full Stack
          </button>
          <button
            className="borders mulish"
            onClick={() => handleSetSelected([3, 4])}
          >
            ML and more
          </button>
          <button className="borders mulish">See more</button>
        </div>
        <div id="projects-outer">
          <div id="projects">
            {selected.map((id, index) => (
              <div
                key={id}
                className="project"
                onClick={() => handleProjectShowcase(id)}
              >
                <h4 className="large-text">{projects[id].title}</h4>
                <p className="tech-used">{projects[id].type}</p>
                {index < selected.length - 1 ? (
                  <div className="separator"></div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
          <div id="project-showcase">
            <img
              src={`../../${showcase.image}`}
              alt={showcase.title}
              id="showcase-img"
            ></img>
            <h3 className="cormorant large-text" id="showcase-title">
              {showcase.title}
            </h3>
            <p id="showcase-desc">{showcase.description}</p>
            <p className="tech-used" id="showcase-tech">
              {showcase.tech}
            </p>
            <div className="project-links">
              <button
                className="mulish borders"
                onClick={() => window.open(showcase.github, "_blank")}
              >
                Github
              </button>
              <button className="mulish borders">Site</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
