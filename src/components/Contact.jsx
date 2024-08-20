export default function Contact() {
  return (
    <div className="page-inner-large" id="contact-page">
      <div className="cormorant" id="contact-title">
        <h2 id="contact-title-top">Let's</h2>
        <h2 id="contact-title-bottom">Connect</h2>
      </div>
      <div className="mulish" id="contact-content">
        <h3>Let's talk about</h3>
        <div id="interests">
          <ul className="borders">Optimizing healthcare</ul>
          <ul className="borders">Electronic health records</ul>
          <ul className="borders">Stanford</ul>
          <ul className="borders">Vanilla CSS</ul>
          <ul className="borders">Frontend</ul>
        </div>
        <div className="mulish" id="contact">
          <a>Email</a>
          <a>Handshake</a>
          <a>Linkedin</a>
          <a>Github</a>
          <a>Medium</a>
        </div>
      </div>
    </div>
  );
}
