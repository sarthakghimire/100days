import React from "react";

const Box = ({ isDark }) => {
  const style = {
    width: "60px",
    height: "60px",
    backgroundColor: isDark ? "#769656" : "#eeeed2",
    display: "inline-block",
  };

  return <div style={style}></div>;
};

export default Box;
