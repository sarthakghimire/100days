import React from "react";
import "./Services.css";
import Featurecard from "./Featurecard";

const Services = () => {
  return (
    <div className="services">
      <h2 id="services">Services</h2>
      <div className="features">
        <div className="poll-result">
          <Featurecard
            link="/poll-results"
            image="poll-results.jpg"
            feature="Poll Results"
          />
        </div>
        <div className="poll-quiz">
          <Featurecard
            link="/election-quiz"
            image="election-quiz.jpg"
            feature="Election Quiz"
          />
        </div>
        <div className="register">
          <Featurecard
            link="/e-registration"
            image="e-registration.jpg"
            feature="E-Registration"
          />
        </div>
        <div className="check-status">
          <Featurecard
            link="/check-status"
            image="check-status.jpg"
            feature="Check Status"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
