/* DEPENDENCIES */
import "../styles/footer.css";

/* EXPORT */
/* Renders footer */
export default function Footer() {
  return (
    <footer className="mulish">
      <a href="mailto:gcrbelanger@gmail.com" id="email-icon">
        <i className="fa fa-envelope"></i>
      </a>
      <a href="https://www.linkedin.com/in/gcbelanger/" target="_blank">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="https://github.com/gcbel" target="_blank">
        <i className="fa fa-github"></i>
      </a>
    </footer>
  );
}
