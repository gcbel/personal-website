/* DEPENDENCIES */
import React, { useState, useEffect } from "react";
import Message from "../components/Message";
import "../styles/contact.css";

/* CONTACT PAGE */
export default function Contact() {
  const [sendMessage, toggleSendMessage] = useState(false);
  const handleClickSendMessage = () => {
    toggleSendMessage(!sendMessage);
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
            <ul className="borders">Optimizing healthcare</ul>
            <ul className="borders">Biotech</ul>
            <ul className="borders">Medical research</ul>
            <ul className="borders">Improving global health</ul>
            <ul className="borders">Electronic health records</ul>
            <ul className="borders">Stanford</ul>
            <ul className="borders">The future of medicine</ul>
            <ul className="borders">Startups</ul>
          </div>
          <h3 className="large-text" id="my-skills">
            My skills
          </h3>
          <div id="skills">
            <ul className="borders">Python</ul>
            <ul className="borders">C/C++</ul>
            <ul className="borders">Javascript</ul>
            <ul className="borders">R</ul>
            <ul className="borders">Frontend</ul>
            <ul className="borders">Backend</ul>
            <ul className="borders">Fullstack</ul>
            <ul className="borders">Vanilla CSS</ul>
            <ul className="borders">SQL</ul>
            <ul className="borders">Building dynamic websites</ul>
            <ul className="borders">React</ul>
            <ul className="borders">Integrating AI</ul>
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
            <a>Linkedin</a>
            <a>Github</a>
            <a>Handshake</a>
            <a>Medium</a>
          </div>
        </div>
      </div>
      <div className={sendMessage ? "" : "hidden"}>
        <Message />
      </div>
    </div>
  );
}
