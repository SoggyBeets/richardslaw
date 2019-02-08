import React from "react";
import "./Footer.css";
import { library, text } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faGavel, faInstagram, faFacebookSquare, faMapMarkerAlt, faCarrot, faBeer, faUsers, faUserInjured, faBalanceScale } from '@fortawesome/free-solid-svg-icons'
// library.add(faGavel, faInstagram, faFacebookSquare, faMapMarkerAlt, faCarrot, faBeer, faUsers, faUserInjured, faBalanceScale)
import { faCarrot, faBalanceScale, faRocket } from '@fortawesome/free-solid-svg-icons'
import Logo from "../Icon"
library.add(fab, faCarrot, faBalanceScale, faRocket)

// const hOneStyle = {
//   fontFamily: 'Roboto',
//   color: 'white',
//   fontSize: '2em'
// }
// const hTwoStyle = {
//   fontFamily: 'Roboto',
//   color: 'white',
//   fontSize: '1.75em'
// }

const hThreeStyle = {
  fontFamily: 'Roboto',
  color: 'black',
  fontSize: '1rem',
  fontWeight: '200',
  marginLeft: '1rem',
  marginRight: '1rem',
  padding: '0rem'
}

const copyrightStyle = {
  fontFamily: 'Roboto',
  color: 'white',
  fontSize: '.85rem',
  fontWeight: '400',
  marginLeft: '1rem',
  marginRight: '1rem',
  lineHeight: '1.75rem',
  letterSpacing: '0.1rem'
}

// const richardsLogo = {
//   fontSize: '4em',
//   color: 'grey',
//   padding: '8px'
// }

const google = {
  fontSize: '2rem',
  color: 'white',
  padding: '8px',
  paddingBottom: '12px'
  /* padding: 10px; */
}

const ourLogo = {
  fontSize: '3rem',
  color: 'purple',
  padding: '8px'
}

const fb = {
  fontSize: '2.25rem',
  color: 'white',
  padding: '10px',
  marginRight: '2rem',
  marginLeft: '2rem'
}
const insta = {
  fontSize: '2.25rem',
  color: 'white',
  padding: '10px'
}

const iconLinks = {
  marginLeft: '2rem',
  marginRight: '2rem',
  marginBottom: '1rem',
  padding: '0rem',
  textAlign: 'center'
}

const linkAlign = {
  textAlign: 'center'
}
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Footer = () => (
  <footer>
    <div className="row" id="footerRow">
    <div className="col-12">
    <div className="row">
    <div className="col-2"></div>
    <div className="col-2">
    <h2 id="contact">Address</h2>
    <h3 id="contactText">2525 25th st</h3>
    </div>
    <div className="col-1"></div>
    <div className="col-2">
    <h2 id="contact">Contact Us</h2>
    <h3 id="contactText">801 111 1111</h3>
    </div>
    <div className="col-1"></div>
    <div className="col-2">
    <h2 id="contact">Mail Us</h2>
    <h3 id="contactText">example@example.mail</h3>
    </div>
    <div className="col-2"></div>
    </div>



<div className="row">
<div className="col-4"></div>
<div className="col-4">
<div id="footerLogo">
<Logo id="footerImg"/>
</div>
</div>
<div className="col-4"></div>
</div>

<div className="row">
<div className="col-4"></div>
<div className="col-4">
<div style={iconLinks}>
          <FontAwesomeIcon icon={['fab', 'google']} style={google} />
          <FontAwesomeIcon icon={['fab', 'facebook']} style={fb} />
          <FontAwesomeIcon icon={['fab', 'instagram']} style={insta} />
        </div>
        </div>
<div className="col-4"></div>
</div>

<div className="row">
{/* <div className="col-4"></div> */}
<div className="col-12">
<div id="ourLogoSection">
<h3 style={copyrightStyle}>Created By<FontAwesomeIcon icon="carrot" style={ourLogo} />SoggyBeets.</h3>
</div>
</div>
{/* <div className="col-4"></div> */}
</div>
</div>
</div>

</footer>
   
);

export default Footer;
