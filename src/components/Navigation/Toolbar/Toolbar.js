import React from "react";

import cssClass from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
  <header className={cssClass.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
