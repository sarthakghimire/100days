import React from "react";
import "./Seats.css";
import seatsData from "./seats";
import Seatbox from "./Seatbox";

const Seats = () => {
  return (
    <>
      <h2>Parliament Structure</h2>
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
    </>
  );
};

export default Seats;
