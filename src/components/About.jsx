/* DEPENDENCIES */
import "../styles/pages.css";
import React, { useState, useEffect } from "react";
// import profilePicture from "../assets/profile-picture.jpeg";
import { motion } from "framer-motion";

/* EXPORT */
/* About page */
export default function About() {
  // Use typewriter style for title
  const [titleText, setTitleText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const title = "Hi! I'm Gabby. ";
  useEffect(() => {
    let i = -1;
    function writeTitle() {
      if (i < title.length) {
        i++;
        setTitleText((prev) => prev + title.charAt(i));
        setTimeout(writeTitle, 140);
      }
    }

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 600);

    writeTitle();
  }, []);

  return (
    <div className="page">
      <div className="page-inner" id="title-page">
        <div id="intro-text">
          <h1 className="cormorant" id="name">
            {titleText}
            <span className={`${showCursor ? "" : "hidden-with-space"}`}>
              |
            </span>
          </h1>
          <p className="mulish" id="intro">
            I'm a computer science Master's student and software engineer.
          </p>
        </div>
      </div>
      <div className="page-inner" id="about-page">
        <h2 className="title cormorant">About me</h2>
        <p>
          <i className="fa-solid fa-location-dot"></i>San Francisco
        </p>
        <p>
          I'm a software engineer with a background in biology, chemistry, and
          healthcare. I love
        </p>
      </div>
    </div>
  );
}
