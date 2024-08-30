/* DEPENDENCIES */
import React, { useState, useEffect, useRef } from "react";
import { useAnimate, useInView, motion } from "framer-motion";
import DNA from "../components/DNA";
import "../styles/experience.css";

/* VARIANTS */
const parentVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const childVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

export default function Experience() {
  // Handle animations
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(ref.current, { opacity: 1, y: 0 }, { duration: 0.8 });
    } else {
      animate(ref.current, { opacity: 0, y: 20 }, { duration: 0.8 });
    }
  }, [isInView, animate]);

  // Handle showing/collapsing content when page is smaller than 750 px
  const [collapseContent, setCollapseContent] = useState(true);
  const [showEducation, toggleShowEducation] = useState(true);
  const [showExperience, toggleShowExperience] = useState(true);

  const handleShowDiv = (divName) => {
    if (divName === "education") {
      toggleShowEducation(!showEducation);
    } else {
      toggleShowExperience(!showExperience);
    }
  };

  const handleCollapseContent = () => {
    if (window.innerWidth > 750) {
      setCollapseContent(false);
    } else {
      setCollapseContent(true);
    }
  };

  useEffect(() => {
    handleCollapseContent();

    window.addEventListener("resize", handleCollapseContent);
    return () => {
      window.removeEventListener("resize", handleCollapseContent);
    };
  }, []);

  return (
    <div className="page-inner" id="experience-page" ref={ref}>
      <DNA />
      <motion.div
        className="mulish"
        id="education-and-experience"
        variants={parentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div id="education">
          <div id="education-header">
            <motion.h3 variants={childVariants} className="subtitle">
              Education
            </motion.h3>
            <div
              className={collapseContent ? "" : "hidden"}
              onClick={() => handleShowDiv("education")}
            >
              {showEducation ? (
                <p id="ed-hide">&and;</p>
              ) : (
                <p id="ed-show">&or;</p>
              )}
            </div>
          </div>
          <motion.div
            className="separator"
            variants={childVariants}
          ></motion.div>
          <div className={collapseContent && !showEducation ? "hidden" : ""}>
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
          </div>
        </div>
        <div id="experience">
          <div id="experience-header">
            <motion.h3 className="subtitle" variants={childVariants}>
              Experience
            </motion.h3>
            <div
              className={collapseContent ? "" : "hidden"}
              onClick={() => handleShowDiv("experience")}
            >
              {showExperience ? (
                <p id="ex-hide">&and;</p>
              ) : (
                <p id="ex-show">&or;</p>
              )}
            </div>
          </div>
          <motion.div
            className="separator"
            variants={childVariants}
          ></motion.div>
          <div className={collapseContent && !showExperience ? "hidden" : ""}>
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
          </div>
        </div>
      </motion.div>
    </div>
  );
}
