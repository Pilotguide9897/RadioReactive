import React, { useState, useRef, useEffect } from "react";
import "../../styles/Form.css";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [tooltip, setTooltip] = useState({
    message: "",
    position: { x: 0, y: 0 },
  });
  const tooltipTimeout = useRef(null);

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

  const handleMouseLeave = (e, field) => {
    const message =
      field === "name"
        ? "Do not forget to leave your name! This field is required."
        : field === "email"
        ? "Do not forget to leave your email! This field is required."
        : "Do not forget to leave your message! This field is required.";

    if (!e.target.value) {
      setTooltip({
        message,
        position: {
          x: e.clientX,
          y: e.clientY,
        },
      });

      if (tooltipTimeout.current) {
        clearTimeout(tooltipTimeout.current);
      }

      tooltipTimeout.current = setTimeout(() => {
        setTooltip({ message: "", position: { x: 0, y: 0 } });
      }, 2000);
    }
  };

  const handleMouseMove = (e) => {
    if (tooltip.message) {
      setTooltip((tooltip) => ({
        ...tooltip,
        position: {
          x: e.clientX,
          y: e.clientY,
        },
      }));
    }
  };

  useEffect(() => {
    if (tooltip.message) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [tooltip.message]);

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
    <div className="contactFormDiv">
      <form className="contactForm">
        <input
          name="name"
          id="nameFld"
          type="text"
          value={name}
          onChange={handleInputChange}
          onMouseLeave={(e) => handleMouseLeave(e, "name")}
          placeholder="Enter your name"
          required
        ></input>
        <input
          name="email"
          id="emailFld"
          type="text"
          value={email}
          onChange={handleInputChange}
          onMouseLeave={(e) => handleMouseLeave(e, "email")}
          placeholder="Enter your email"
          required
        ></input>
        <textarea
          name="message"
          id="messageFld"
          type="text"
          rows="4"
          value={message}
          onChange={handleInputChange}
          onMouseLeave={(e) => handleMouseLeave(e, "message")}
          placeholder="Leave a message"
          required
        ></textarea>
        <button
          type="button"
          onClick={handleFormSubmission}
          className="contactFormSubmitBtn"
        >
          Submit
        </button>
      </form>
      {tooltip.message && (
        <div
          className={`tooltip ${tooltip.message ? "visible" : ""}`}
          style={{ top: tooltip.position.y, left: tooltip.position.x }}
        >
          {tooltip.message}
        </div>
      )}
    </div>
  );
};
