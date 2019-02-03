import React from "react";
// import { Link } from "react-router-dom";
import "./Icon.css";
import Icon from '../Icon.svg';

console.log(Icon)
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Logo = () => (
<div>
<img src={Icon} alt="Logo" />;
</div> 
);

export default Logo;