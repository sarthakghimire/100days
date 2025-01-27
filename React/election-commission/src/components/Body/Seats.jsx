import React from "react";
import "./Seats.css";
import seatsData, { totalSeats } from "./seats";

const Seats = () => {
  const createSeats = () => {
    const elements = [];
    for (let i = 0; i < totalSeats; i++) {
      elements.push(
        <div
          key={i}
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: seatsData.color,
            margin: "2px",
          }}
        ></div>
      );
    }
    return elements;
  };

  return <div id="for-seat">{createSeats()}</div>;
};

export default Seats;
