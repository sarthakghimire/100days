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
      <div id="mid">
        <h4>Quick Links</h4>
        <a href="#">Ministry of Home Affairs</a>
        <a href="#">Office of Council of Ministers </a>
        <a href="#">Ministry of Finance</a>
      </div>
      <div id="right">
        <h4>Social Media Links</h4>
        <div className="socials">
          <a href="#">
            <img
              src="https://img.icons8.com/?size=100&id=118468&format=png&color=000000"
              alt=""
            />
          </a>
          <a href="#">
            <img
              src="https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=000000"
              alt=""
            />
          </a>
          <a href="#">
            <img
              src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
