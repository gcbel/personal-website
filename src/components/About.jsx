export default function About() {
  return (
    <div className="page-inner" id="about-page">
      <h2 className="title cormorant">A little about me</h2>
      <div className="mulish" id="about-page-content">
        <p id="location">
          <i class="fa fa-map-marker"></i>San Francisco
        </p>
        <p id="blurb">
          I'm a software engineer with a background in biology, chemistry, and
          healthcare. I'm currently getting my Master's Degree in computer
          science from Stanford University on the Systems track and recently
          completed my Bachelors in Biology in June 2024.
        </p>
        <div id="education-and-experience">
          <div id="education">
            <h3 className="subtitle">Education</h3>
            <div className="education-outer-div">
              <div className="education-top-div">
                <p>M.S in Computer Science</p>
                <p>Stanford</p>
              </div>
              <div className="education-bottom-div">
                <p>Systems</p>
                <p>June 2025</p>
              </div>
            </div>
            <div className="education-outer-div">
              <div className="education-top-div">
                <p>B.S in Biology</p>
                <p>Stanford</p>
              </div>
              <div className="education-bottom-div">
                <p>Biochemistry/Biophysics</p>
                <p>June 2024</p>
              </div>
            </div>
            <div className="education-outer-div">
              <div className="education-top-div">
                <p>Certificate</p>
                <p>Columbia</p>
              </div>
              <div className="education-bottom-div">
                <p>Full-Stack Development</p>
                <p>August 2024</p>
              </div>
            </div>
          </div>
          <div id="experience">
            <h3 className="subtitle">Experience</h3>
            <div className="education-outer-div">
              <div className="education-top-div">
                <p>Python and C++ Instructor</p>
                <p>Juni Learning</p>
              </div>
            </div>
            <div className="education-outer-div">
              <div className="education-top-div">
                <p>Research Assistant</p>
                <p>Stanford LPCH</p>
              </div>
            </div>
            <div className="education-outer-div">
              <div className="education-top-div">
                <p>Intern</p>
                <p>Community Health Initiative Haiti</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
