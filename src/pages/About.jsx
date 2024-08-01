/* DEPENDENCIES */
import "../styles/about.css";
import profilePicture from "../assets/profile-picture.jpeg";

/* EXPORT */
/* Renders about page */
export default function About() {
  return (
    <div className="page" id="about-page">
      <div id="about-page-top">
        <img src={profilePicture} alt="Gabrielle Belanger" id="prof-pic"></img>
        <h1 className="cormorant" id="title">
          Hi! I'm Gabby
        </h1>
      </div>
    </div>
  );
}
