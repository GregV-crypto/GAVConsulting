/**
 * @author Gregory Vincent
 */

import React from "react";
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

  //error msg renders based on touched and validation
  const [touchedFields, setTouchedFields] = useState<{
    [key: string]: boolean;
  }>({
    nameTouched: false,
    emailTouched: false,
    msgTouched: false,
  });

  //needed for input validation & mutator fns - inputs must adhere to certain rules
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const setName = (newNameVal: string) => {
    setFormData({
      ...formData,
      name: newNameVal,
    });
    setTouchedFields({
      ...touchedFields,
      nameTouched: true,
    });
  };
  const setEmail = (newEmailVal: string) => {
    setFormData({
      ...formData,
      email: newEmailVal,
    });
    setTouchedFields({
      ...touchedFields,
      emailTouched: true,
    });
  };
  const setMsg = (newMsgVal: string) => {
    setFormData({
      ...formData,
      msg: newMsgVal,
    });
    setTouchedFields({
      ...touchedFields,
      msgTouched: true,
    });
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      msg: "",
    });
  };

  const validateName = (name: string) =>
    validator.isAlpha(name) && name.length > 1;
  const validateEmail = (email: string) => validator.isEmail(email);
  const validateMsg = (msg: string) => msg.length > 10;

  const touchedState =
    touchedFields.nameTouched ||
    touchedFields.emailTouched ||
    touchedFields.msgTouched;
  const validForm =
    validateName(formData.name) &&
    validateEmail(formData.email) &&
    validateMsg(formData.msg);
  return (
    <div className="CF-Container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => {
              setName(e.target.value);
              setTouchedFields({
                ...touchedFields,
                nameTouched: true,
              });
            }}
            onBlur={() =>
              setTouchedFields({
                ...touchedFields,
                nameTouched: true,
              })
            }
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() =>
              setTouchedFields({
                ...touchedFields,
                emailTouched: true,
              })
            }
          />
        </div>
        <div>
          <textarea
            id="message"
            placeholder="Send us a message here..."
            value={formData.msg}
            onChange={(e) => setMsg(e.target.value)}
            onBlur={() =>
              setTouchedFields({
                ...touchedFields,
                msgTouched: true,
              })
            }
          />
        </div>
        <div className={validForm ? "usable" : "not-usable"}>
          <button
            type="submit"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseExit}
            className={hovering ? "hovering" : "not-hovering"}
          >
            Submit
          </button>
          <>
            {touchedState && !validForm ? (
              <p>Please check all fields.</p>
            ) : (
              <p></p>
            )}
          </>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
