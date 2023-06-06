import React from "react";
import "../../styles/Logo.css";
import logo from "../../images/logo/logo.png"

export function Logo() {
    return (
    <div className="logoDiv">
        <a href="#aboutMe">
            <img className="logo" src={logo} alt="Portfolio Logo"></img>
        </a>
    </div>
      
    );
};
