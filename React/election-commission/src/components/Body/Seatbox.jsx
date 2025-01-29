import React from "react";

const Seatbox = ({ backgroundColor }) => {
  return (
    <>
      <div
        style={{
          height: "20px",
          width: "20px",
          borderRadius: "50%",
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: backgroundColor,
          margin: "3px",
        }}
      ></div>
    </>
  );
};

export default Seatbox;
