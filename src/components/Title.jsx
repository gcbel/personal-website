/* DEPENDENCIES */
import React, { useState, useEffect } from "react";

/* TITLE PAGE */
export default function About() {
  // Handle typewriter style for title
  const [titleText, setTitleText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const title = "Hi! I'm Gabby. ";
  useEffect(() => {
    let i = -1;
    function writeTitle() {
      if (i < title.length) {
        i++;
        setTitleText((prev) => prev + title.charAt(i));
        setTimeout(writeTitle, 180);
      }
    }

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 600);

    writeTitle();
  }, []);

  return (
    <div className="top-page" id="home-page">
      <div className="page-inner" id="home-page-content">
        <div id="intro-text">
          <h1 className="cormorant large-title" id="name">
            {titleText}
            <span className={`${showCursor ? "" : "hidden-with-space"}`}>
              |
            </span>
          </h1>
          <p className="mulish large-text" id="intro">
            I'm a computer science Master's student and software engineer.
          </p>
        </div>
      </div>
    </div>
  );
}
