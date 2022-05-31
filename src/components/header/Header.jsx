import "./header.css";
import Diputacio from "../../assets/diputacio.png";

import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <img src={Diputacio} className="logo-diputacio" alt="logo diputacio" />
      <h1 className="h1--custom"> Welcome to DB Transfer Market!</h1>
    </div>
  );
};

export default Header;
