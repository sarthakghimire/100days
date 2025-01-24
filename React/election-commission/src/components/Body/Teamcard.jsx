import React from "react";

const Teamcard = ({ image, name, position }) => {
  return (
    <div
      className="teamcard"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <img src={image} />
      <h3>{name}</h3>
      <h4>{position}</h4>
    </div>
  );
};

export default Teamcard;
