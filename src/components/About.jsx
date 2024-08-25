/* DEPENDENCIES */
import { useRef, useEffect, useState } from "react";

/* ABOUT PAGE */
export default function About() {
  const photos = [
    "profile-picture.jpeg",
    "me-and-poppy.jpeg",
    "poppy-at-work.JPG",
    "outdoors.JPG",
    "baking.JPG",
  ];

  const captions = [
    "Me",
    "Me and my beloved Poppy",
    "Poppy hard at work",
    "My ideal ski slope",
    "let curActivity = baking;",
  ];

  /* Handle photo in profile section */
  const [photoIndex, setPhotoIndex] = useState(0);
  const switchPhoto = (change) => {
    setPhotoIndex((photoIndex + change + photos.length) % photos.length);
  };

  return (
    <div className="page page-inner-large" id="about-page">
      <h2 className="title cormorant">A little about me</h2>
      <div className="mulish" id="blurb-and-photo">
        <div id="blurb">
          <p id="location">
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
          <p className="large-text">
            I love programming (for fun and for innovation), bunnies,
            snowboarding, and baking.
          </p>
        </div>
        <div id="pictures-and-captions">
          <div id="pictures-and-buttons">
            <button
              onClick={() => switchPhoto(-1)}
              className="mulish image-button"
            >
              &lt;
            </button>
            <img
              src={`../../${photos[photoIndex]}`}
              alt="Headshot of Gabby"
              id="profile-picture"
            ></img>
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
        </div>
      </div>
    </div>
  );
}
