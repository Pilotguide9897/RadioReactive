import React from "react";
import { Header } from "./components/header";
import { Navbar } from "./Components/navbar";
import { Navigation } from "./components/navigation";
import { Projects } from "./components/body_components/Projects";
import { Footer } from "./components/Footer";
import { Body } from "./components/Content";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
