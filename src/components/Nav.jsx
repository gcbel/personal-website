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

  // Handle scrolling to correct page
  const [page, setActivePage] = useState("about-page");
  const handlePageScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      let offset = 200;
      if (id === "contact-page") {
        offset = 0;
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
    <nav className={`${isBlurred ? "nav-blur" : ""}`}>
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
            <a onClick={() => handlePageScroll("contact")}> Contact</a>
          </div>
        </div>
      </div>
      <motion.div
        className="progress-bar page-inner-large"
        style={{ scaleX }}
      />
    </nav>
  );
}
