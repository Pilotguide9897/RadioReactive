import React from "react";
import "../styles/Header.css";
import { Navigation } from "./header_components/Navigation"; // Why does this insist on recognizing the file name as starting with a lowercase?
import { Logo } from "./header_components/Logo";

export function Header() {
  return (
    <header className="headerContainer">
      <div className="logoContainer"><Logo /></div>
      <div className="navContainer">
        <Navigation />
      </div>
    </header>
  );
}
