import React from "react";
import "../../styles/AboutMe.css"
import { Photo } from "./Photo";

export function AboutMe() {

  const sourcePath = `${process.env.PUBLIC_URL}/images/hero/nightsky.jpg`;

    return (
      <div className="aboutMeContainer" style={{backgroundImage: `url(${sourcePath})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        <h1 className="sectionTitle">About Me</h1>
        <div className="aboutMeContent">
          <Photo />
          <p className="aboutMeText">
            Hello! I am Jared, a New Brunsiwick based Full-Stack web developer
            who specializes in creating stylish and resource-efficient applications. 
            Drawing upon experience from my
            background in the study of psychology to provide a
            solutions-focused approach to teamwork and cooperative
            software design, I earned a certificate in Full Stack Web
            Development from the University of New Brunswick. I am a
            detail-oriented, lateral thinker with a commitment to
            workplace excellence and customer satisfaction, and I am
            passionate about writing clean code that translates into
            intuitive and easy to use applications that benefit end-users.
            As a quick and eager learner with a strength in applying new
            knowledge to novel situations and circumstances, researching
            new and upcoming technologies, and skillfully adapting to
            rapidly evolving workplace requirements, I am confident that I
            can make a meaningful contribution to the completion of your
            team's next project!
          </p>
        </div>
      </div>
    );
};
