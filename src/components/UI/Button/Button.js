import React from "react";

import cssClass from "./Button.css";

const button = (props) => (
  <button
    className={[cssClass.Button, cssClass[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
