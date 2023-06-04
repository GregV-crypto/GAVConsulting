/**
 * Working on Form Validation
 * Finish functionality here
 * message based on input validity
 * un-usable btn if not valid, etc
 */

import * as React from "react";
import { useState } from "react";
import validator from "validator";
import "./ContactForm.css";
function ContactForm() {
  //state and fns for mouse animation
  const [hovering, setHovering] = useState(false);
  const mouseEnter = () => {
    setHovering(true);
  };

  const mouseExit = () => {
    setHovering(false);
  };

  //needed for input validation & mutator fns - inputs must adhere to certain rules
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Msg: "",
  });

  const setName = (newNameVal: string) => {
    setFormData({
      name: newNameVal,
      email: formData.email,
      Msg: formData.Msg,
    });
  };
  const setEmail = (newEmailVal: string) => {
    setFormData({
      name: newEmailVal,
      email: formData.email,
      Msg: formData.Msg,
    });
  };
  const setMsg = (newMsgVal: string) => {
    setFormData({
      name: formData.name,
      email: formData.email,
      Msg: newMsgVal,
    });
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      Msg: "",
    });
  };

  //error msg renders based on touched and validation
  const [touchedFields, setTouchedFields] = useState<{
    [key: string]: boolean;
  }>({
    nameTouched: false,
    emailTouched: false,
    msgTouched: false,
  });

  //error msg is rendered based on these values
  const touchedState =
    touchedFields.nameTouched &&
    touchedFields.emailTouched &&
    touchedFields.msgTouched;

  return (
    <div className="CF-Container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setName(e.target.value)}
            // onBlur={}
          />
          {}
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <textarea
            id="message"
            placeholder="Send us a message here..."
            value={formData.Msg}
            onChange={(e) => setMsg(e.target.value)}
            // onBlur={()}
          />
        </div>
        <div className={touchedState ? "" : "not-usable"}>
          <button
            type="submit"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseExit}
            className={hovering ? "btn-hovering" : "btn-not-hovering"}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
