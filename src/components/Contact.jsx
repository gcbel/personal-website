/* DEPENDENCIES */
import React, { useState, useEffect } from "react";
import Message from "../components/Message";
import "../styles/contact.css";

/* CONTACT PAGE */
export default function Contact() {
  const [messageSection, showMessageSection] = useState(false);
  const handleClickSendMessage = () => {
    showMessageSection(!messageSection);
  };

  return (
    <div className="bottom-page" id="contact-page">
      <div className="page-inner-large" id="contact-page-inner">
        <div className="cormorant medium-title" id="contact-title">
          <h2 id="contact-title-top">Let's</h2>
          <h2 id="contact-title-bottom">Connect</h2>
        </div>
        <div className="mulish" id="contact-content">
          <h3 className="large-text">Let's talk about</h3>
          <div id="interests">
            <button className="borders mulish">Optimizing healthcare</button>
            <button className="borders mulish">Biotech</button>
            <button className="borders mulish">Medical research</button>
            <button className="borders mulish">Improving global health</button>
            <button className="borders mulish">
              Electronic health records
            </button>
            <button className="borders mulish">Stanford</button>
            <button className="borders mulish">The future of medicine</button>
            <button className="borders mulish">Startups</button>
          </div>
          <h3 className="large-text" id="my-skills">
            My skills
          </h3>
          <div id="skills">
            <button className="borders mulish">Python</button>
            <button className="borders mulish">C/C++</button>
            <button className="borders mulish">Javascript</button>
            <button className="borders mulish">R</button>
            <button className="borders mulish">Frontend</button>
            <button className="borders mulish">Backend</button>
            <button className="borders mulish">Fullstack</button>
            <button className="borders mulish">Vanilla CSS</button>
            <button className="borders mulish">SQL</button>
            <button className="borders mulish">React</button>
            <button className="borders mulish">Integrating AI</button>
          </div>
          <div id="send-message-div">
            <button
              className="borders mulish large-text"
              id="send-message-button"
              onClick={() => handleClickSendMessage()}
            >
              Send me a message
            </button>
          </div>
          <div className="mulish" id="contact">
            <a>Email</a>
            <a href="https://www.linkedin.com/in/gcbelanger/" target="_blank">
              Linkedin
            </a>
            <a href="https://github.com/gcbel" target="_blank">
              Github
            </a>
            <a>Medium</a>
          </div>
        </div>
      </div>
      <div className={messageSection ? "" : "hidden"}>
        <Message />
      </div>
    </div>
  );
}
