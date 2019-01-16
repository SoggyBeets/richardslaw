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

        <div className="container" id="carouselcont">
          <div className="row no-gutters" id="carouselrow">
            <div className="col-12">
              <Carousel />
            </div>
          </div>
        </div>

        {/* <section id="tabSection">
          <Tabs />
        </section> */}


        <div className="container">
          <div className="row no-gutters" id="ttabs">
            <div className="col" />
          </div>
        </div>

        <div className="container">
          <div className="row no-gutters">
            <div className="col">
              <AboutUs />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row no-gutters">
            <div className="col">
              <Form />
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row no-gutters">
            <div className="col-12">
              <Google />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row no-gutters" id="socialfeeds">
            <div className="col-xs-12 col-md-6" id="fbfeed">
              <div className="test">
                <Facebook />
              </div>
            </div>
            <div className="col-xs-12 col-md-6" id="instafeed">
              <Instagram />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
