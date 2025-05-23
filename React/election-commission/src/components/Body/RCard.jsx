import React from "react";
import "./RCard.css";
import seatsData, { totalSeats } from "./seats";

const RCard = ({ party, seats, color, image }) => {
  const percentage = Math.round((seats / totalSeats) * 100);
  return (
    <div>
      <div className="parent">
        <div className="image" style={{ width: "20%" }}>
          <img src={image} />
        </div>
        <div className="right-side">
          <div className="texts" style={{ width: "80%" }}>
            <h4>{party}</h4>
            <h5>{seats}</h5>
          </div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                height: "20px",
                width: `${percentage}%`,
                backgroundColor: color,
              }}
            >
              {percentage}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RCard;
