/* DEPENDENCIES */
import React, { useState, useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import Message from "../components/Message";
import "../styles/contact.css";

/* VARIANTS */
const parentVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const downVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -5 },
};

const rightVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 20 },
};

const leftVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -10 },
};

const appearingVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 10 },
};

/* CONTACT PAGE */
export default function Contact() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  // Handle showing/hiding message section
  const [messageSection, showMessageSection] = useState(false);
  const handleShowMessageSection = () => {
    showMessageSection(!messageSection);
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
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate={controls}
      className="bottom-page"
      id="contact-page"
    >
      <div className="page-inner-large" id="contact-page-inner">
        <motion.div
          variants={leftVariants}
          className="cormorant medium-title"
          id="contact-title"
        >
          <h2 id="contact-title-top">Let's</h2>
          <h2 id="contact-title-bottom">Connect</h2>
        </motion.div>
        <div className="mulish" id="contact-content">
          <motion.h3 variants={downVariants} ref={ref} className="large-text">
            Let's talk about
          </motion.h3>
          <div id="interests">
            <motion.button variants={rightVariants} className="borders mulish">
              Optimizing healthcare
            </motion.button>
            <motion.button variants={rightVariants} className="borders mulish">
              Biotech
            </motion.button>
            <motion.button variants={rightVariants} className="borders mulish">
              Medical research
            </motion.button>
            <motion.button variants={rightVariants} className="borders mulish">
              Global health
            </motion.button>
            <motion.button variants={rightVariants} className="borders mulish">
              Electronic health records
            </motion.button>
            <motion.button variants={rightVariants} className="borders mulish">
              Stanford
            </motion.button>
            <motion.button variants={rightVariants} className="borders mulish">
              The future of medicine
            </motion.button>
          </div>
          <motion.h3
            variants={downVariants}
            className="large-text"
            id="my-skills"
          >
            My skills
          </motion.h3>
          <div id="skills">
            <motion.button variants={rightVariants} className="borders mulish">
              Python
            </motion.button>
            <motion.button variants={rightVariants} className="borders mulish">
              C/C++
            </motion.button>
            <motion.button variants={rightVariants} className="borders mulish">
              Javascript
            </motion.button>
            <motion.button variants={rightVariants} className="borders mulish">
              R
            </motion.button>
            <motion.button variants={rightVariants} className="borders mulish">
              Frontend
            </motion.button>
            <motion.button variants={rightVariants} className="borders mulish">
              Backend
            </motion.button>
            <motion.button variants={rightVariants} className="borders mulish">
              Fullstack
            </motion.button>
            <motion.button variants={rightVariants} className="borders mulish">
              Vanilla CSS
            </motion.button>
            <motion.button variants={rightVariants} className="borders mulish">
              SQL
            </motion.button>
            <motion.button variants={rightVariants} className="borders mulish">
              React
            </motion.button>
            <motion.button variants={rightVariants} className="borders mulish">
              Integrating AI
            </motion.button>
          </div>
          <motion.div variants={appearingVariants} id="send-message-div">
            <button
              className="borders mulish large-text"
              id="send-message-button"
              onClick={() => handleShowMessageSection()}
            >
              Send me a message
            </button>
          </motion.div>
          <motion.div className="mulish" id="contact">
            <a href="mailto:gcrbelanger@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/gcbelanger/" target="_blank">
              Linkedin
            </a>
            <a href="https://github.com/gcbel" target="_blank">
              Github
            </a>
            <a href="https://medium.com/@gabriellecbelanger" target="_blank">
              Medium
            </a>
          </motion.div>
        </div>
      </div>
      <div className={messageSection ? "" : "hidden"}>
        <Message onDismiss={handleShowMessageSection} />
      </div>
    </motion.div>
  );
}
