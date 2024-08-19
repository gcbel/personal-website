/* DEPENDENCIES */
import "../styles/pages.css";
// import profilePicture from "../assets/profile-picture.jpeg";
import { motion } from "framer-motion";

/* EXPORT */
/* About page */
export default function About() {
  return (
    <div id="about-page">
      <div>
        <div className="page-inner" id="about-page-top">
          <div id="intro-text">
            <h1 className="cormorant" id="main-title">
              Hi! I'm Gabby
            </h1>
            <p className="mulish">I'm a software engineer</p>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="page"
      >
        <div className="page-inner" id="about-page-bottom">
          <h2 className="title cormorant">About me</h2>
          <p>
            <i className="fa-solid fa-location-dot"></i>San Francisco
          </p>
          <p>
            I'm a software engineer with a background in biology, chemistry, and
            healthcare.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
