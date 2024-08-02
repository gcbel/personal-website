/* DEPENDENCIES */
import projectVideo from "../assets/portfolio.mp4";

// style={{
//   cursor: "auto",
//   width: "100%",
//   height: "100%",
//   borderRadius: "0px",
//   display: "block",
//   objectFit: "cover",
//   backgroundColor: "rgba(0, 0, 0, 0)",
//   objectPosition: "50% 50%",
// }}

/* EXPORT */
export default function Projects() {
  return (
    <div className="top-page">
      <div className="page-inner">
        <video
          src={projectVideo}
          loop
          preload="metadata"
          playsInline
          muted // Add this attribute if you want the video to start muted
          autoPlay // Add this attribute if you want the video to start automatically
        ></video>
      </div>
    </div>
  );
}
