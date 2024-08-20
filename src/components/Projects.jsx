/* DEPENDENCIES */
import { useRef, useEffect, useState } from "react";

/* EXPORT */
export default function Projects() {
  return (
    <div className="page-inner" id="project-page">
      <h2 className="title cormorant">Projects</h2>
      <div className="mulish">
        <div id="project-buttons">
          <ul className="borders">Featured</ul>
          <ul className="borders">Full Stack</ul>
          <ul className="borders">ML and more</ul>
        </div>
        <div>Greentrail</div>
        <div>Vector Space</div>
        <div>Electronic Health Record</div>
      </div>
    </div>
  );
}
