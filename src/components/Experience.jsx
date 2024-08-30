/* DEPENDENCIES */
import React, { useState, useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import DNA from "../components/DNA";
import "../styles/experience.css";

/* VARIANTS */
const parentVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

/* EXPERIENCE PAGE */
export default function Experience() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  // Handle showing/collapsing content when page is smaller than 750 px
  const [collapseContent, setCollapseContent] = useState(
    window.innerWidth <= 750
  );
  const [showEducation, setShowEducation] = useState(true);
  const [showExperience, setShowExperience] = useState(true);

  useEffect(() => {
    const handleResize = () => setCollapseContent(window.innerWidth <= 750);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (section) => {
    if (section === "education") {
      setShowEducation(!showEducation);
    } else {
      setShowExperience(!showExperience);
    }
  };

  // Handle animation
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div className="page-inner" id="experience-page">
      <DNA />
      <motion.div
        className="mulish"
        id="education-and-experience"
        variants={parentVariants}
        initial="hidden"
        animate={controls}
      >
        <div id="education">
          <motion.div variants={childVariants} id="education-header">
            <h3 className="subtitle">Education</h3>
            <div
              className={collapseContent ? "" : "hidden"}
              onClick={() => handleToggle("education")}
            >
              {showEducation ? (
                <p id="ed-hide">&and;</p>
              ) : (
                <p id="ed-show">&or;</p>
              )}
            </div>
          </motion.div>
          <motion.div
            className="separator"
            variants={childVariants}
            ref={ref}
          ></motion.div>
          <motion.div
            className={collapseContent && !showEducation ? "hidden" : ""}
          >
            <motion.div
              className="education-outer-div"
              variants={childVariants}
            >
              <div className="education-top-div">
                <p className="education-left">M.S in Computer Science</p>
                <p className="education-right">Stanford</p>
              </div>
              <div className="education-bottom-div">
                <p className="education-left">Systems</p>
                <p className="education-right">June 2025</p>
              </div>
            </motion.div>
            <motion.div
              className="education-outer-div"
              variants={childVariants}
            >
              <div className="education-top-div">
                <p className="education-left">Certificate</p>
                <p className="education-right">Columbia</p>
              </div>
              <div className="education-bottom-div">
                <p className="education-left">Full-Stack Development</p>
                <p className="education-right">August 2024</p>
              </div>
            </motion.div>
            <motion.div
              className="education-outer-div"
              variants={childVariants}
            >
              <div className="education-top-div">
                <p className="education-left">B.S in Biology</p>
                <p className="education-right">Stanford</p>
              </div>
              <div className="education-bottom-div">
                <p className="education-left">Biochemistry & Biophysics</p>
                <p className="education-right">June 2024</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div id="experience">
          <motion.div variants={childVariants} id="experience-header">
            <h3 className="subtitle">Experience</h3>
            <div
              className={collapseContent ? "" : "hidden"}
              onClick={() => handleToggle("experience")}
            >
              {showExperience ? (
                <p id="ex-hide">&and;</p>
              ) : (
                <p id="ex-show">&or;</p>
              )}
            </div>
          </motion.div>
          <motion.div
            className="separator"
            variants={childVariants}
          ></motion.div>
          <motion.div
            className={collapseContent && !showExperience ? "hidden" : ""}
          >
            <motion.div
              className="education-outer-div"
              variants={childVariants}
            >
              <div className="education-top-div">
                <p className="education-left">Python and C++ Instructor</p>
                <p className="education-right">Juni Learning</p>
              </div>
              <div className="education-bottom-div">
                <p></p>
                <p className="education-right">June 2024 - Present</p>
              </div>
            </motion.div>
            <motion.div
              className="education-outer-div"
              variants={childVariants}
            >
              <div className="education-top-div">
                <p className="education-left">Research Assistant</p>
                <p className="education-right">Stanford LPCH Hospital</p>
              </div>
              <div className="education-bottom-div">
                <p></p>
                <p className="education-right">May 2022 - September 2023</p>
              </div>
            </motion.div>
            <motion.div
              className="education-outer-div"
              variants={childVariants}
            >
              <div className="education-top-div">
                <p className="education-left">Intern</p>
                <p className="education-right">
                  Community Health Initiative Haiti
                </p>
              </div>
              <div className="education-bottom-div">
                <p></p>
                <p className="education-right">May 2021 - December 2021</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
