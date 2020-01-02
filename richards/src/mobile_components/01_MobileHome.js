import React from "react";
import "../mobile_components/MobileHome.scss";
import MobileNav from "./06_MobileNav/MobileNav";
import MobileIcon from "./07_MobileIcon/MobileIcon";
import MobileTitle from "./07_MobileTitle/MobileTitle";
import HeroImg from "../images/utah-lawyer-homepage-hero-3.jpg";
// import AboutLawFirm from "../components/02_AboutLawfirm/AboutLawFirm";

const Home = () => {
  return (
    <div>
      <MobileIcon />
      <div className="mobileContainer">
        <MobileTitle title={"Home"} />
        <div>
          <h2 className="mobileContact">Phone</h2>
          <a href="tel:+1-801-621-7443" className="mobileContactText">
            (801) 621-7443
          </a>
        </div>
        <div className="mobileHomeHero">
          <img className="mobileHeroImg" src={HeroImg} alt="law firm" />
          <h1 className="mobileHeading">About Us</h1>
          <h3 className="mobileAboutSec">
            The attorneys at Richards & Richards Law Group, P.L.L.C. offer
            top-notch legal advice and representation to clients throughout
            Northern Utah. We are committed to providing the highest quality of
            professional legal services at an affordable price. We believe that
            dedicating our full attention to the needs of each individual client
            is not only a matter of good service, but is critical to achieving
            the best possible results.
          </h3>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Home;
