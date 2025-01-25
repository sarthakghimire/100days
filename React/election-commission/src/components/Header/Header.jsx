import React from "react";
import CoatOfArms from "../Header/CoatOfArms.png";
import ECN from "../Header/ECN.png";
import "../Header/Header.css";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="top">
          <img src={CoatOfArms} />
          <div className="mid">
            <h1>Election Commission of Nepal</h1>
            <p>Kantipath, Kathmandu</p>
          </div>
          <img src={ECN} />
        </div>
        <div className="bottom">
          <HashLink smooth to="/#home">
            Home
          </HashLink>
          <HashLink smooth to="/#gallery">
            Gallery
          </HashLink>
          <HashLink smooth to="/#team">
            Team
          </HashLink>
          <HashLink smooth to="/#news">
            News & Notices
          </HashLink>
          <HashLink smooth to="/#services">
            Services
          </HashLink>
        </div>
      </div>
    </>
  );
};

export default Header;
