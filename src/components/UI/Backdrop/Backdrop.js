import React from "react";

import cssClass from "./Backdrop.css";

const backdrop = (props) =>
  props.show ? (
    <div className={cssClass.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;
