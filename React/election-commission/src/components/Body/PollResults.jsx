import React from "react";
import "./Pollresults.css";
import Map from "./Map";
import Seats from "./Seats.jsx";
import seatsData from "./seats.js";
import Results from "./Results";

const PollResults = () => {
  return (
    <div className="result-container">
      <Map />
      <Results />
      <Seats />
    </div>
  );
};

export default PollResults;
