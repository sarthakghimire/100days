import React from "react";

const Seatbox = ({ backgroundColor }) => {
  return (
    <>
      <div
        style={{
          height: "20px",
          width: "20px",
          borderRadius: "5px",
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: backgroundColor,
          margin: "5px",
        }}
      ></div>
    </>
  );
};

export default Seatbox;
