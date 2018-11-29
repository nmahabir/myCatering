import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Firebase from "./components/Firebase";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Nav/>
        <Jumbotron/>
        </div>
      </Router>
    );
  }
}

export default App;
