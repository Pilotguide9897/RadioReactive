import React, { useState } from "react";
import { AboutMe } from "./body components/aboutMe";
import { Contact } from "./body components/Contact";
import { Resume } from "./body components/resume";
import { Projects } from "./body components/Project";
import { Navigation } from "../navigation";

export function BodyContainer() {
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
