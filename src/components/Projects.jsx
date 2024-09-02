/* DEPENDENCIES */
import { useState, useEffect, useRef } from "react";
import {
  useAnimation,
  useInView,
  motion,
  AnimatePresence,
} from "framer-motion";
import "../styles/projects.css";

/* VARIABLES */
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

/* PROJECT PAGE */
export default function Projects() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });
  const [changingSelected, setChangingSelected] = useState(false);

  /* VARIANTS */
  const parentVariants = {
    visible: {
      transition: {
        staggerChildren: changingSelected ? 0.05 : 0.2,
        delayChildren: changingSelected ? 0 : 2,
      },
    },
  };

  const rightVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 40 },
  };

  const leftVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -10 },
  };

  const showcaseVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 0 },
  };

  /* HOOKS */
  // Handle displaying a project
  const [showcase, setShowcase] = useState(projects[0]);
  const handleProjectShowcase = (id) => {
    const selectedProject = projects.find((project) => project.id === id);
    setShowcase(selectedProject);
  };

  // Handle displaying a section
  const [selected, setSelected] = useState([0, 1, 2, 3, 4]);
  const handleSetSelected = (selection) => {
    setChangingSelected(true);
    setSelected(selection);
  };

  // Handle animation
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Re-trigger animation when `selected` changes
  useEffect(() => {
    controls.start("visible");
  }, [selected, controls]);

  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate={controls}
      className="page-inner-large"
      id="project-page"
    >
      <motion.h2 variants={leftVariants} className="title cormorant" ref={ref}>
        Projects
      </motion.h2>
      <div className="mulish">
        <div id="project-buttons">
          <motion.button
            variants={rightVariants}
            className="borders mulish"
            onClick={() => handleSetSelected([0, 1, 2, 3, 4])}
          >
            Featured
          </motion.button>
          <motion.button
            variants={rightVariants}
            className="borders mulish"
            onClick={() => handleSetSelected([0, 1, 2])}
          >
            Full Stack
          </motion.button>
          <motion.button
            variants={rightVariants}
            className="borders mulish"
            onClick={() => handleSetSelected([3, 4])}
          >
            ML and more
          </motion.button>
          <motion.button
            variants={rightVariants}
            className="borders mulish"
            onClick={() => window.open("https://github.com/gcbel", "_blank")}
          >
            See more
          </motion.button>
        </div>
        <div id="projects-outer">
          <div id="projects">
            {selected.map((id, index) => (
              <motion.div
                variants={leftVariants}
                key={id}
                className="project"
                onClick={() => handleProjectShowcase(id)}
              >
                <div id="project-title-and-type">
                  <h4 className="large-text" id="project-title">
                    {projects[id].title}
                  </h4>
                  <p className="tech-used">{projects[id].type}</p>
                </div>
                {index < selected.length - 1 && (
                  <div className="separator"></div>
                )}
              </motion.div>
            ))}
          </div>
          <motion.div variants={showcaseVariants} id="project-showcase">
            <div id="showcase-image-div">
              <AnimatePresence>
                <motion.img
                  key={showcase.id}
                  src={`../../${showcase.image}`}
                  alt={showcase.title}
                  id="showcase-img"
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 0, y: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
            <h3 className="large-text" id="showcase-title">
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
              {showcase.site && (
                <button
                  className="mulish borders"
                  onClick={() => window.open(showcase.site, "_blank")}
                >
                  Site
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
