import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/crown.svg.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link to="/">
      <Logo className="logo"> </Logo>
    </Link>
    <div className="options">
      <Link to="/shop"> SHOP </Link>
      <Link to="/shop"> CONTACT</Link>
    </div>
  </div>
);

export default Header;
