import React, { useState } from "react";
import image1 from "../../images/photo_avatar/photo/selfie.jpeg";
import image2 from "../../images/photo_avatar/avatar/stern.gif";

export function Photo() {
     const [isHovered, setIsHovered] = useState(false);

    return (
      <img
        src={isHovered ? image2 : image1}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        alt="Self-portrait"
      />
    );
};