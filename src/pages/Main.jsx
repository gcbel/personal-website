/* DEPENDENCIES */
import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import "../styles/miscPages.css";

/* FULL PAGE */
export default function Main() {
  // Handle background opacity
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const fadeTop = window.innerHeight * 0.4;
      const fadeBottom =
        document.documentElement.scrollHeight - window.innerHeight * 2;

      if (scrollTop > fadeBottom) {
        console.log(fadeBottom);
        console.log(scrollTop);
        const opacity = 0 + (scrollTop - fadeBottom) * 0.001;
        setOpacity(Math.min(opacity, 0.4));
      } else if (scrollTop < fadeTop) {
        setOpacity(0.9);
      } else {
        const opacity = 0.9 + (fadeTop - scrollTop) * 0.002;
        setOpacity(Math.max(opacity, 0));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <img
        id="background-image"
        src="../background-img.jpeg"
        alt="The Bathing Pool by Robert Hubert"
        style={{ opacity: opacity }}
      ></img>
      <Title />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
