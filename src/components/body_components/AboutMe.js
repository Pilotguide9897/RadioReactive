import React from "react";
import "../../styles/AboutMe.css"
import { Photo } from "./photo";

export function AboutMe() {
  const videoId = "wNI9UFZ_nhI";

    return (
      <div className="aboutMeContainer">
        <div>
          <div className="videoContainer">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0&loop=1&playlist=${videoId}&vq=highres`}
              title="YouTube video player"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>
          <div className="portraitContainer">
            <Photo />
          </div>
        </div>
        <h1 className="sectionTitle">About Me</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">{}</div>
            <div className="col-md-6">
              {
                <p className="aboutMeText">
                  Hello! I am Jared Green, a New Brunsiwick based web developer
                  who specializes in creating stylish and resource-efficient
                  Full-Stack applications. Drawing upon experience from my
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
              }
            </div>
          </div>
        </div>
      </div>
    );
};
