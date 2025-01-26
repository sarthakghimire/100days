import React from "react";
import seatsData from "./seats";
import RCard from "./RCard";

const Results = () => {
  return (
    <div>
      <h2>Total Seats by Party</h2>

      {seatsData.map((seat, index) => (
        <RCard
          key={index}
          party={seat.party}
          seats={seat.seats}
          color={seat.color}
          image={seat.image}
        />
      ))}
    </div>
  );
};

export default Results;
