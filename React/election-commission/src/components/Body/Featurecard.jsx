import React from "react";
import { NavLink } from "react-router-dom";
import "./Featurecard.css";

const Featurecard = ({ image, feature, link }) => {
  return (
    <NavLink to={link} className="feature-card">
      <div
        className="card-content"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="photo-container">
          <img src={image} alt="feature" className="photo" />
        </div>
        <div className="feature-container">
          <p className="feature-text">{feature}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Featurecard;
