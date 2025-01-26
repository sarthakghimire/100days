import React from "react";
import "./Pollresults.css";
import Map from "./Map";
import Seats from "./Seats";
import seatsData from "./seats";
import Results from "./Results";

const PollResults = () => {
  return (
    <div className="result-container">
      <Map />
      <Results />
      {/* <Seats /> */}
      {/* Seats.jsx le chai euta seat ko euta div with color dine ho */}
    </div>
  );
};

export default PollResults;
