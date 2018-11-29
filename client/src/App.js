import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";

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
