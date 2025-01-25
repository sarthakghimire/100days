import React from "react";
import "./Services.css";
import Featurecard from "./Featurecard";

const Services = () => {
  return (
    <div className="services">
      <h2 id="services">Services</h2>
      <div className="features">
        <div className="poll-result">
          <Featurecard />
        </div>
        <div className="poll-quiz">
          <Featurecard />
        </div>
        <div className="register">
          <Featurecard />
        </div>
        <div className="check-status">
          <Featurecard />
        </div>
      </div>
    </div>
  );
};

export default Services;
