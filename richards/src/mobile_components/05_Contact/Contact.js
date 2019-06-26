import React from "react";
import "../05_Contact/Contact.scss";
import MobileNav from "../06_MobileNav/MobileNav";
import MobileIcon from "../07_MobileIcon/MobileIcon";
import MobileTitle from "../07_MobileTitle/MobileTitle";
import WhereToFind from "../../components/05_WhereToFind/WhereToFind";
import Social from "../../components/06_Social/Social";
import GoogleMap from "../../components/06_Social/Google/Google";
import FacebookFeed from "../../components/06_Social/Facebook/Facebook";

const Contact = () => {
  return (
    <div>
      <MobileIcon />
      <div className="mobileContainer">
        <MobileTitle title={"Contact"} />
        <div>
          <h2 className="mobileContact">Phone</h2>
          <a href="tel:+1-801-621-7443" className="mobileContactText">
            (801) 621-7443
          </a>
        </div>
        <div>
          <h2 className="mobileContact">Email Us</h2>
          <a
            className="mobileContactText"
            href="mailto: office@utahlegalcounsel.com"
          >
            office@utahlegalcounsel.com
          </a>
        </div>
        <div>
          <h2 className="mobileContact">Address</h2>
          <a
            href="https://www.google.com/maps/dir/41.2179494,-111.9417437/rbr+law/@41.2203729,-111.9752583,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x87530f2088890a47:0xde0ebd0671a6d4e4!2m2!1d-111.9737615!2d41.2224332"
            className="mobileContactText"
          >
            289 24th St, Ogden, UT 84401
          </a>
        </div>
        <h1 className="mobileHeading">Where to find Us</h1>
        <GoogleMap />
        <FacebookFeed />
      </div>
      <MobileNav />
    </div>
  );
};

export default Contact;
