import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Google from "./components/Google";
import Facebook from "./components/Facebook";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs";
import Carousel from "./components/Carousel";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">


            <Navbar /> 

            <div class="row no-gutters" id="carouselSection">
            <div className="col-1"></div>
            <div className="col-10"> <Carousel /></div>
            <div className="col-1"></div>
           
            </div>

        {/* <section id="tabSection">
          <Tabs />
        </section> */}
        <div className="row no-gutters" id="ttabs">
        <div className="col-2"></div>
            <div className="col-8">
            <Tabs />
            </div>
            <div className="col-2"></div>
          </div>

        
        <AboutUs />
        <Form />

          <div className="row no-gutters" id="googlemaps">
          <div className="col-1"></div>
            <div className="col-10">
              <Google />
              </div>
              <div className="col-1"></div>
            </div>
          
          <div className="row no-gutters" id="socialfeeds">
          <div className="col-xs-1 col-md-2"></div>
            <div className="col-xs-10 col-md-4" id="fbfeed">
              <div className="test">
                <Facebook />
              </div>
            </div>
            <div className="col-xs-10 col-md-4" id="instafeed">
              <Instagram />
              </div>
              <div className="col-xs-1 col-md-2"></div>
            </div>
      
        <Footer />
      </div>
    );
  }
}

export default App;
