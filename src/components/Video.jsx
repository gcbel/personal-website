import React, { useEffect, useRef, useState } from "react";
import projectVideo from "../assets/portfolio.mp4";

const Video = () => {
  const videoRef = useRef(null);
  const playbackConst = 500;
  const videoLength = 3;
  const videoHeight = `${videoLength * playbackConst}px`;

  useEffect(() => {
    const vid = videoRef.current;

    const scrollPlay = () => {
      const frameNumber = window.scrollY / playbackConst;
      vid.currentTime = frameNumber;

      window.requestAnimationFrame(scrollPlay);
    };

    window.requestAnimationFrame(scrollPlay);
  }, []);

  return (
    <>
      <div id="set-height" style={{ height: videoHeight }}>
        <video
          id="v0"
          tabIndex={0}
          // autoBuffer="autobuffer"
          preload="preload"
          ref={videoRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
          }}
        >
          <source
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            src={projectVideo}
          ></source>
        </video>
      </div>
    </>
  );
};

export default Video;
