import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import MissionStatement from './components/MissionStatement';
import AboutUs from "./components/AboutUs";
import Google from "./components/Google";
// import Contact from './components/Contact';
import Facebook from './components/Facebook';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import Tabs from './components/Tabs';
import Carousel from './components/Carousel'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="carouselContainer">
        <div className="overlay"><h1>UTAH'S AGGRESSIVE LAW FIRM</h1><h2>OGDEN BASED PERSONAL INJURY, BANKRUPTCY, FAMILY AND CRIMINAL LAWYERS</h2></div>
        <Carousel></Carousel>
        </div>  
        <section id="tabSection">
        {/* <MissionStatement></MissionStatement> */}


        <Tabs></Tabs>
        </section>

        <AboutUs></AboutUs>

        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-4">
            {/* <Google></Google> */}
            <div className="elfsight-app-14fd1b7f-cef3-4c59-add5-8558eec9bf75" />
          </div>
          <div className="col-md-4">{/* <Contact></Contact> */}</div>
          <div className="col-md-2" />
        </div>
        <div className="row">
          <div className="col-md-4">
            <Google />
          </div>
          <div className="col-md-4">
            <Facebook />
          </div>
          <div className="col-md-4">
            <Instagram />
          </div>
          {/* <div className="col-md-2"></div> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
