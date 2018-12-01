import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import { Firebase, storage, FirebaseContext } from "./components/Firebase";
import Home from "./pages/Home";

class App extends Component {
  render() {
    console.log(storage)
    return (
      // <Router>
      //   <div>
      //   <Nav/>
      //   <Jumbotron/>
        
      //   </div>
      // </Router>
      <Home/>
    );
  }
}

export default App;
