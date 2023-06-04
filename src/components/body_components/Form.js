import React, { useState } from "react";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hoverMessage, setHoverMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "message") setMessage(value);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    const isFormValid = handleValidation();

    if (isFormValid) {
      alert(
        `Hello ${name}, I have received your message and will reach out as soon as possible!`
      );
    } else {
      alert("There is an error with one of your submission fields.");
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  const handleMouseExit = () => {
    if (name === "") {
      setHoverMessage(
        "Do not forget to leave your name! This field is required."
      );
    } else if (email === "") {
      setHoverMessage(
        "Please leave an email address for me to reach you at! This field is required."
      );
    } else if (message === "") {
      setHoverMessage(
        "Remember to leave a message so that I know why you would like to get in touch. This field is required."
      );
    } else {
      setHoverMessage("");
    }
  };

  const handleValidation = () => {
    if (!name) {
      return false;
    } else if (!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)) {
      return false;
    } else if (!message) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <form className="contactForm">
        <input
          name="name"
          type="text"
          onChange={handleInputChange}
          onMouseLeave={handleMouseExit}
          placeholder="Enter your name"
        ></input>
        <input
          name="email"
          type="text"
          onChange={handleInputChange}
          onMouseLeave={handleMouseExit}
          placeholder="Enter your email"
        ></input>
        <input
          name="message"
          type="text"
          onChange={handleInputChange}
          onMouseLeave={handleMouseExit}
          placeholder="Leave a message"
        ></input>
        <button
          type="button"
          onClick={handleFormSubmission}
          className="contactFormSubmitBtn"
        >
          Submit
        </button>
      </form>
      {hoverMessage && <p>{hoverMessage}</p>}
    </div>
  );
}
