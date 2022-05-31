import "./header.css";
import Diputacio from "../../assets/diputacio.png";

import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <img src={Diputacio} className="logo-diputacio" alt="logo diputacio" />
      <h1> Welcome to Diputació Barcelona Football</h1>
    </div>
  );
};

export default Header;
