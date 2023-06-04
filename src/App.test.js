// import react and testing dependencies
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

// import component files
import { Header } from "./components/header";
import { Navbar } from "./Components/navbar";
import { Navigation } from "./components/navigation";
import { Project } from "./components/body_components/Projects";
import App from "./App";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
