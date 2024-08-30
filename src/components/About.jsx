/* DEPENDENCIES */
import { useEffect, useState, useRef } from "react";
import {
  useAnimation,
  useInView,
  motion,
  AnimatePresence,
} from "framer-motion";
import "../styles/about.css";

/* VARIANTS */
const parentVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const rightVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 30 },
};

const leftVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -30 },
};

const bottomVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

/* VARIABLES */
const photos = [
  "profile-picture.jpeg",
  "me-and-poppy.jpeg",
  "poppy-at-work.JPG",
  "outdoors.JPG",
];

const captions = [
  "Me",
  "Me and my beloved Poppy",
  "Poppy hard at work",
  "My ideal ski slope",
];

const alt = [
  "Headshot of Gabby",
  "Gabby and a bunny",
  "Bunny on a computer",
  "The Grand Tetons",
];

/* ABOUT PAGE */
export default function About() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  // Handle photo in profile section
  const [photoIndex, setPhotoIndex] = useState(0);

  const switchPhoto = (change) => {
    setPhotoIndex((photoIndex + change + photos.length) % photos.length);
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
      className="page page-inner-large"
      id="about-page"
    >
      <motion.h2 variants={leftVariants} className="title cormorant">
        A little about me
      </motion.h2>
      <div className="mulish" id="blurb-and-photo">
        <motion.div variants={leftVariants} id="blurb">
          <p className="large-text" id="location">
            <i className="fa fa-map-marker"></i>San Francisco
          </p>
          <p className="large-text">
            I'm a software engineer with a background in biology, chemistry, and
            healthcare. I have always felt a pull to the medical field, and hope
            to make a difference in the health technology space.
          </p>
          <p className="large-text">
            I'm currently getting my Master's Degree in Computer Science from
            Stanford on the Systems track and completed my Bachelors in Biology
            in June 2024.
          </p>
          <p ref={ref} className="large-text">
            I love bunnies, snowboarding, and I've always loved computers.
          </p>
        </motion.div>
        <motion.div variants={rightVariants} id="pictures-and-captions">
          <div id="pictures-and-buttons">
            <button
              onClick={() => switchPhoto(-1)}
              className="mulish image-button"
            >
              &lt;
            </button>
            <div id="profile-pic-div">
              <AnimatePresence>
                <motion.img
                  key={photos[photoIndex]}
                  src={`../../${photos[photoIndex]}`}
                  alt={alt[photoIndex]}
                  id="profile-picture"
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 0, y: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
            <button
              onClick={() => switchPhoto(1)}
              className="mulish image-button"
            >
              &gt;
            </button>
          </div>
          <p
            className={photoIndex == 0 ? "hidden-with-space" : ""}
          >{`${captions[photoIndex]}`}</p>
        </motion.div>
      </div>
      <motion.div variants={bottomVariants} id="about-me-bottom">
        <p>arrow</p>
        <img
          src="../../baby-gabby.jpeg"
          alt="Young Gabby playing a video game on an old computer"
          id="baby-picture"
        ></img>
      </motion.div>
    </motion.div>
  );
}
