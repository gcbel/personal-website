/* DEPENDENCIES */
import { useState } from "react";

/* MESSAGE PAGE */
export default function Message({ onDismiss }) {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = formData;
    if (name == "" || email == "" || message == "") {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      const link = `mailto:hello@gabriellecbelanger.com?subject=Message from ${name}&body=${message} (From: ${email})`;
      window.location.href = link;
    }
  };

  return (
    <div className="mulish" id="message-modal-background">
      <form
        className="borders page-inner"
        id="message-modal"
        onSubmit={handleSubmit}
      >
        <div id="message-modal-header">
          <h2 className="subtitle cormorant" id="message-title">
            Send me a message!
          </h2>
          <p
            onClick={onDismiss}
            style={{ cursor: "pointer" }}
            id="dismiss-modal"
          >
            X
          </p>
        </div>
        <div id="message-prompts">
          <div id="top-message-prompts">
            <div id="name-message-prompt">
              <p htmlFor="name">Your Name</p>
              <input
                type="text"
                className="mulish"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              ></input>
            </div>
            <div id="email-message-prompt">
              <p htmlFor="email">Email Address</p>
              <input
                type="email"
                className="mulish"
                placeholder="Enter your email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div id="bottom-message-prompt">
            <p htmlFor="message">Your Message</p>
            <textarea
              className="mulish"
              placeholder="Hi Gabby, I have a project idea..."
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div id="send-completed-message-div">
          {showAlert && <p id="alert">Please fill out all fields!</p>}
          <button
            className="borders mulish"
            id="send-completed-message"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
