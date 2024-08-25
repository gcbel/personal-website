/* DEPENDENCIES */

/* MESSAGE PAGE */
export default function Message() {
  return (
    <div className="page-inner mulish" id="message-modal-background">
      <div className="borders" id="message-modal">
        <h2 className="large-text cormorant" id="message-title">
          Send me a message!
        </h2>
        <div id="message-prompts">
          <div id="top-message-prompts">
            <div>
              <p>Your Name</p>
              <input placeholder="Enter your name"></input>
            </div>
            <div>
              <p>Email Address</p>
              <input placeholder="Enter your email address"></input>
            </div>
          </div>
          <div id="bottom-message-prompt">
            <p>Your Message</p>
            <input placeholder="Enter your email address"></input>
          </div>
        </div>
        <button className="borders">Send</button>
      </div>
    </div>
  );
}
