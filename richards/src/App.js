import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MissionStatement from './components/MissionStatement';
import AboutUs from './components/AboutUs';
import Google from './components/Google';
import Contact from './components/Contact';
import Facebook from './components/Facebook';
import Instagram from './components/Instagram';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar></Navbar>
      <MissionStatement></MissionStatement>
      <AboutUs></AboutUs>
      <div className="row">
      <div className="col-md-6">
      <Google></Google>
      </div>
      <div className="col-md-6">
      <Contact></Contact>
      </div>
      </div>
      <div className="row">
      <div className="col-md-6">
      <Facebook></Facebook>
      </div>
      <div className="col-md-6">
      <Instagram></Instagram>
      </div>
      </div>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;
