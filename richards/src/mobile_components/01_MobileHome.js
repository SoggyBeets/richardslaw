import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom";

import PracticeAreas from "./02_PracticeAreas/PracticeAreas";
import Attorneys from "./03_Attorneys/Attorneys";
import About from "./04_About/About";
import Contact from "./05_Contact/Contact";

const Home = () => {
    return(
        <div>
            <h1>HOME</h1>
        </div>
    )
};

class MobileApp extends Component{
    render(){
  return (
   <BrowserRouter>
        <div>
            <Route path="/" component={Home} exact />
            <Route path="/practiceAreas" component={PracticeAreas} />
            <Route path="/attorneys" component={Attorneys} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </div>
   </BrowserRouter>
);
}
}

export default MobileApp;
