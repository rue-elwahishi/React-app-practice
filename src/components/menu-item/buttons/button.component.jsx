import React from "react";
import "./button.styles.scss";

const Button = ({ childern, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {childern}
  </button>
);

export default Button;
