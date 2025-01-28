import React from "react";
import "./Seats.css";
import seatsData from "./seats";
import Seatbox from "./Seatbox";

const Seats = () => {
  return (
    <div style={{ border: "1px solid black", marginBottom: "2px" }}>
      <h2>Parliament Structure</h2>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "50%",
            justifyContent: "center",
          }}
        >
          {seatsData.map((party) =>
            Array.from({ length: party.seats }).map(() => (
              <Seatbox
                // key={`${party.party}-${index}`}
                backgroundColor={party.color}
              />
            ))
          )}
        </div>
        <div
          style={{ border: "1px solid black", width: "250px", padding: "10px" }}
        >
          <h3>Legend</h3>
          {seatsData.map((party, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <Seatbox backgroundColor={party.color} />
              <span style={{ marginLeft: "10px" }}>{party.party}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seats;
