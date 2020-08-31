import React from "react";

import Aux from "../../hoc/Auxiliary";
import cssClass from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => {
  return (
    <Aux>
      <Toolbar></Toolbar>
      <main className={cssClass.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
