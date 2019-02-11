import React from "react";

import "./Button.css";

const Button = props => <button className={props.styleClass} onClick={props.onClick}>{props.label}</button>

export default Button