import * as React from "react";
import { useState } from "react";
import "./ContactForm.css";
function ContactForm() {
  //form validation and reset on submission
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //state for small hovering animation
  const[hovering, setHovering] = useState(false);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  const mouseEnter = () => {
    setHovering(true);
  };

  const mouseExit = () => {
    setHovering(false);
  };

  return (
    <div className="CF-Container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <textarea
            id="message"
            placeholder="Send us a message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseExit}
        className = {hovering ? "hovering" : "not-hovering" }
        >Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
