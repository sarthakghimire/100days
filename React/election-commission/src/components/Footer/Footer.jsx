import React from "react";
import "./Footer.css";
import ECN from "../Footer/ECN.png";

const Footer = () => {
  return (
    <div className="footer">
      <div id="left">
        <img src={ECN} />
        <p>Kantipath,Kathmandu</p>
        <p>Phone:01-5328663</p>
        <p>Email:info@election.gov.np</p>
      </div>
      <div id="mid"></div>
      <div id="right"></div>
    </div>
  );
};

export default Footer;
