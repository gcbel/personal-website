/* DEPENDENCIES */
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import "../styles/footer.css";

/* EXPORT */
/* Renders footer */
export default function Footer() {
  const controls = useAnimation();

  // Handle animation
  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [200, 0],
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <motion.footer
      className="mulish"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <a href="mailto:gcrbelanger@gmail.com" id="email-icon">
        <i className="fa fa-envelope"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/gcbelanger/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/gcbel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-github"></i>
      </a>
      <a
        href="https://medium.com/@gabriellecbelanger"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          id="medium-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 500"
        >
          <path
            d="M180.5 74.3C80.8 74.3 0 155.6 0 256S80.8 437.7 180.5 437.7 361 356.4 361 256 280.2 74.3 180.5 74.3zm288.3 10.6c-49.8 0-90.2 76.6-90.2 171.1s40.4 171.1 90.3 171.1 90.3-76.6 90.3-171.1H559C559 161.5 518.6 84.9 468.8 84.9zm139.5 17.8c-17.5 0-31.7 68.6-31.7 153.3s14.2 153.3 31.7 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z"
            fill="white"
          />
        </svg>
      </a>
    </motion.footer>
  );
}
