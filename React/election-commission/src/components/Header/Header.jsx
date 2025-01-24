import React from "react";
import CoatOfArms from "../Header/CoatOfArms.png";
import ECN from "../Header/ECN.png";
import "../Header/Header.css";
// import { Link } from "react-router-dom";

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
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#team">Team</a>
          <a href="#news">News & Notices</a>
          <a href="#services">Services</a>
        </div>
      </div>
    </>
  );
};

export default Header;
