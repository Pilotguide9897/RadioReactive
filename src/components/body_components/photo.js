import React, { useState } from "react";
import image1 from "../../../public/images/photo_avatar/photo/selfie.jpeg";
import image2 from "../../../public/images/photo_avatar/avatar/stern.gif";
import "../../styles/Photo.css"

export function Photo() {
     const [isHovered, setIsHovered] = useState(false);

    return (
      <img
        src={isHovered ? image1 : image2}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        alt="Self-portrait"
      />
    );
};