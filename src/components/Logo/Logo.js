import React from "react";

import burgerLogo from "../../assets/images/burger-logo.png";
import cssClass from "./Logo.css";

const logo = (props) => (
  <div className={cssClass.Logo}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default logo;
