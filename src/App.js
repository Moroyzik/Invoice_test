import React from "react";
import "./App.sass";
import logo from "./logo.jpg";
import Authentication from "./authentication/index";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <Authentication />
    </div>
  );
}

export default App;
