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
// import MissionStatement from "./components/MissionStatement";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carousel />

        <section id="tabSection">
          {/* <MissionStatement></MissionStatement> */}

          <Tabs />
        </section>

        <AboutUs />

        <div class="container">
          <div class="row">
            <div class="col">
              <Google />
            </div>
            <div class="col">
              <Form />
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col">
              <Facebook />
            </div>
            <div class="col">
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