import Facebook from "../components/Facebook";
import Footer from "../components/Footer";
import Google from "../components/Google";
import MobileNav from "../components/MobileNav";
import React, { Component } from "react";



class MobileContact extends Component {
render() {
return(
<div>
    <MobileNav />
    <Google />
    <Facebook />
    <Footer />
</div>
);
}
}

export default MobileContact;
