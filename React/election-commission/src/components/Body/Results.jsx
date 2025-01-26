import React from "react";
import seatsData from "./seats";
import RCard from "./RCard";

const Results = () => {
  return (
    <div>
      {seatsData.map((seat, index) => (
        <RCard
          key={index}
          party={seat.party}
          seats={seat.seats}
          color={seat.color}
          image="https://assets-localelection2079.ekantipur.com/parties/12546c14ae29ecbfaba3b1a43eae348b.png"
        />
      ))}
    </div>
  );
};

export default Results;
