import React from "react";
import logo from "../../logo.png";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron"
  >
    {children}
    <img src={logo} className="App-logo" alt="logo" />
  </div>
);

export default Jumbotron;
