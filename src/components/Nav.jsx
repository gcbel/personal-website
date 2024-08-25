/* DEPENDENCIES */
import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "../styles/nav.css";

/* NAV BAR */
export default function Nav() {
  // Handle blurring
  const [isBlurred, setIsBlurred] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const height = window.innerHeight * 0.001;

      if (window.scrollY > height) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle arrow on correct page
  const [page, setActivePage] = useState("about");
  const handlePageScroll = () => {};

  // Show scroll bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <nav className={`${isBlurred ? "nav-blur" : ""}`}>
      <div id="nav-content">
        <div id="left-nav-content">
          <h1 to="/" className="cormorant subtitle" id="home">
            GB
          </h1>
        </div>
        <div className="mulish" id="right-nav-content">
          <div>
            <a to="/" onClick={() => handlePageScroll("about")}>
              About
            </a>
          </div>
          <div>
            <a onClick={() => handlePageScroll("projects")}> Projects</a>
          </div>
          <div>
            <a onClick={() => handlePageScroll("contact")}> Contact</a>
          </div>
        </div>
      </div>
      <motion.div className="progress-bar" style={{ scaleX }} />
    </nav>
  );
}
