import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/Footer.css";

export function Footer() {
  return (
    <footer className="footerContainer">
      <p className="footerText">© 2023 - Jared Green <br/><br/> Follow me on these social media platforms!</p>
      <div className="socialMediaContainer">
        <a href="https://github.com/Pilotguide9897" className="socialMediaIcon">
          <FaGithub />
        </a>
        <a
          href="http://www.linkedin.com/in/jared-green-3462aa267"
          className="socialMediaIcon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/jared.green.549"
          className="socialMediaIcon"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/jared.green.549/"
          className="socialMediaIcon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UCQoYxs-xNqY8S7QsprsfmBA"
          className="socialMediaIcon"
        >
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};
