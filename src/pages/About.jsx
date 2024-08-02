/* DEPENDENCIES */
import "../styles/about.css";
import profilePicture from "../assets/profile-picture.jpeg";

/* EXPORT */
/* Renders about page */
export default function About() {
  return (
    <div id="about-page">
      <div className="top-page">
        <div className="page-inner" id="about-page-top">
          <img
            src={profilePicture}
            alt="Gabrielle Belanger"
            id="prof-pic"
          ></img>
          <div id="intro-text">
            <h1 className="cormorant" id="main-title">
              Hi! I'm Gabby
            </h1>
            <p className="mulish">I'm a software engineer</p>
          </div>
        </div>
      </div>
      <div id="about-page-bottom">
        <p>I've always liked computers</p>
      </div>
    </div>
  );
}
