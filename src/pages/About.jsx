/* DEPENDENCIES */
import "../styles/about.css";
import profilePicture from "../assets/profile-picture.jpeg";
import { motion } from "framer-motion";

/* EXPORT */
/* Renders about page */
export default function About() {
  return (
    <div id="about-page">
      <div className="top-page">
        <div className="page-inner" id="about-page-top">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
            src={profilePicture}
            alt="Gabrielle Belanger"
            id="prof-pic"
          ></motion.img>
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
        transition={{ duration: 0.5 }}
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
