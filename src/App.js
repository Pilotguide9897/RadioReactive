import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Content";
import "./styles/App.css";

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
