import React, { useState } from "react";
import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { Resume } from "./Resume";
import { Projects } from "./Projects";
import { Navigation } from "../header_components/Navigation";
import "../../styles/Body.css";

export function Body() {
  const [body, setBody] = useState("AboutMe");

  const renderStateOfBody = () => {
    if (body === "AboutMe") {
      return <AboutMe />;
    } else if (body === "Contact") {
      return <Contact />;
    } else if (body === "Resume") {
      return <Resume />;
    } else {
      return <Projects />;
    }
  };

  const handlePageChange = (page) => setBody(page);

  return (
    <div>
      <Navigation currentPage={body} handlePageChange={handlePageChange} />
      {renderStateOfBody()}
    </div>
  );
}
