/* DEPENDENCIES */

/* MESSAGE PAGE */
export default function Message({ onDismiss }) {
  return (
    <div className="mulish" id="message-modal-background">
      <div className="borders page-inner" id="message-modal">
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
            <div>
              <p>Your Name</p>
              <input className="mulish" placeholder="Enter your name"></input>
            </div>
            <div>
              <p>Email Address</p>
              <input
                className="mulish"
                placeholder="Enter your email address"
              ></input>
            </div>
          </div>
          <div id="bottom-message-prompt">
            <p>Your Message</p>
            <textarea
              className="mulish"
              placeholder="Enter your email address"
            ></textarea>
          </div>
        </div>
        <button className="borders">Send</button>
      </div>
    </div>
  );
}
