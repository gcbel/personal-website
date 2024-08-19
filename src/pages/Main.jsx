/* DEPENDENCIES */
import React, { useState, useEffect } from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

/* FUNCTION */
export default function Main() {
  // Handle background opacity
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = window.innerHeight * 0.2; // 2vh in pixels

      if (scrollTop < height) {
        setOpacity(0.9);
      } else {
        const opacity = 0.9 + (height - scrollTop) * 0.005;
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
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
