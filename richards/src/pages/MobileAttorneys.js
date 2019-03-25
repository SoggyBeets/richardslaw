import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import MobileNav from "../components/MobileNav";
import React, { Component } from "react";



class MobileAttorneys extends Component {
render() {
return(
<div>
    <MobileNav />
    <AboutUs />
    <Footer />
</div>
);
}
}

export default MobileAttorneys;
