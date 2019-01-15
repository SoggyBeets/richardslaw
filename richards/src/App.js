import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Google from "./components/Google";
import Facebook from "./components/Facebook";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
// import Tabs from "./components/Tabs";
import Carousel from "./components/Carousel";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
    
         
            <Navbar />
         
            <Carousel />
          

        {/* <section id="tabSection">
          <Tabs />
        </section> */}

        
        <div className="row no-gutters" id="ttabs">
            <div className="col-12">
            
            </div>
          </div>


       

        <AboutUs />
        <Form />
        
          <div className="row no-gutters" id="googlemaps">
            <div className="col-12">
              <Google />
            </div>
          </div>
      

    
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
      


        <Footer />
      </div>
    );
  }
}

export default App;
