import React from "react";
import "./Footer.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faGavel, faInstagram, faFacebookSquare, faMapMarkerAlt, faCarrot, faBeer, faUsers, faUserInjured, faBalanceScale } from '@fortawesome/free-solid-svg-icons'
// library.add(faGavel, faInstagram, faFacebookSquare, faMapMarkerAlt, faCarrot, faBeer, faUsers, faUserInjured, faBalanceScale)
import { faCarrot, faBalanceScale, faRocket } from '@fortawesome/free-solid-svg-icons'

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
  color: 'grey',
  fontSize: '.75rem',
  fontWeight: '200',
  marginLeft: '1rem',
  marginRight: '1rem'
 
}

// const richardsLogo = {
//   fontSize: '4em',
//   color: 'grey',
//   padding: '8px'
// }

const google = {
  fontSize: '2.65rem',
  color: 'black',
  padding: '10px'
}

const ourLogo = {
  fontSize: '3rem',
  color: 'purple',
  padding: '8px'
}

const fb = {
  fontSize: '3rem',
  color: 'black',
  padding: '10px'
}
const insta = {
  fontSize: '3rem',
  color: 'black',
  padding: '10px'
}

const iconLinks = {
  marginLeft: '1rem',
  marginRight: '1rem',
  padding: '0rem'
}
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Footer = () => (
  <footer>
    <div className="row" id="footerRow">

      <div className="col-md-2">
      <div style={iconLinks}>
          <FontAwesomeIcon icon={['fab', 'google']} style={google} />
          <FontAwesomeIcon icon={['fab', 'facebook']} style={fb} />
          <FontAwesomeIcon icon={['fab', 'instagram']} style={insta} />
        </div>
      </div>

      <div className="col-md-4">
        <div style={iconLinks}>
          <h3 style={hThreeStyle}>RBR Law Group - Bankruptcy, Car Accident and Criminal Attorneys
        289 24th St Suite 101 Ogden, UT 84401 Main Phone: (801) 621-7443 </h3>
        </div>
        </div>

        <div className="col-md-3"></div>
        <div className="col-md-3">
        <div style={iconLinks}>
          {/* <FontAwesomeIcon icon="rocket" style={richardsLogo} /> */}
          <h3 style={copyrightStyle}>Created By<FontAwesomeIcon icon="carrot" style={ourLogo} />SoggyBeets.</h3>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
