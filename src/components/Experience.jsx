/* DEPENDENCIES */
import React, { useState, useEffect } from "react";
import DNA from "../components/DNA";
import "../styles/experience.css";

/* EXPERIENCE PAGE */
export default function Experience() {
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
    <div className="page-inner" id="experience-page">
      <DNA />
      <div className="mulish" id="education-and-experience">
        <div id="education">
          <div id="education-header">
            <h3 className="subtitle">Education</h3>
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
          <div className={collapseContent && !showEducation ? "hidden" : ""}>
            <div className="education-outer-div">
              <div className="education-top-div">
                <p className="education-left">M.S in Computer Science</p>
                <p className="education-right">Stanford</p>
              </div>
              <div className="education-bottom-div">
                <p className="education-left">Systems</p>
                <p className="education-right">June 2025</p>
              </div>
            </div>
            <div className="education-outer-div">
              <div className="education-top-div">
                <p className="education-left">Certificate</p>
                <p className="education-right">Columbia</p>
              </div>
              <div className="education-bottom-div">
                <p className="education-left">Full-Stack Development</p>
                <p className="education-right">August 2024</p>
              </div>
            </div>
            <div className="education-outer-div">
              <div className="education-top-div">
                <p className="education-left">B.S in Biology</p>
                <p className="education-right">Stanford</p>
              </div>
              <div className="education-bottom-div">
                <p className="education-left">Biochemistry & Biophysics</p>
                <p className="education-right">June 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div id="experience">
          <div id="experience-header">
            <h3 className="subtitle">Experience</h3>
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
          <div className={collapseContent && !showExperience ? "hidden" : ""}>
            <div className="education-outer-div">
              <div className="education-top-div">
                <p className="education-left">Python and C++ Instructor</p>
                <p className="education-right">Juni Learning</p>
              </div>
              <div className="education-bottom-div">
                <p></p>
                <p className="education-right">June 2024 - Present</p>
              </div>
            </div>
            <div className="education-outer-div">
              <div className="education-top-div">
                <p className="education-left">Research Assistant</p>
                <p className="education-right">Stanford LPCH Hospital</p>
              </div>
              <div className="education-bottom-div">
                <p></p>
                <p className="education-right">May 2022 - September 2023</p>
              </div>
            </div>
            <div className="education-outer-div">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
