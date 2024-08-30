/* DEPENDENCIES */
import React, { useState, useEffect } from "react";
import { motion, useScroll, useAnimation, useSpring } from "framer-motion";
import "../styles/nav.css";

/* NAV BAR */
export default function Nav() {
  const controls = useAnimation();

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

  // Handle animation
  useEffect(() => {
    controls.start({
      opacity: [1, 1],
      y: [0, 0],
      transition: { duration: 1, ease: "easeOut" },
    });
  }, [controls]);

  // Handle scrolling to correct page
  const [page, setActivePage] = useState("about-page");
  const handlePageScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      let offset = 0;
      if (id === "about-page") {
        offset = 60 + window.innerWidth * 0.1;
      }

      if (id === "project-page") {
        offset = 80 + window.innerWidth * 0.02;
      }

      const position = sectionTop - offset;
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });

      setActivePage(id);
    }
  };

  // Show scroll bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.nav
      className={`${isBlurred ? "nav-blur" : ""}`}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <div id="nav-content">
        <div id="left-nav-content">
          <h1 to="/" className="cormorant subtitle" id="home">
            GB
          </h1>
        </div>
        <div className="mulish" id="right-nav-content">
          <div>
            <a to="/" onClick={() => handlePageScroll("about-page")}>
              About
            </a>
          </div>
          <div>
            <a onClick={() => handlePageScroll("project-page")}> Projects</a>
          </div>
          <div>
            <a onClick={() => handlePageScroll("contact-page")}> Contact</a>
          </div>
        </div>
      </div>
      <motion.div
        className="progress-bar page-inner-large"
        style={{ scaleX }}
      />
    </motion.nav>
  );
}
