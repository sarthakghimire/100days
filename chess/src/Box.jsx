import React from "react";

const Box = ({ isDark, children, onClick }) => {
  const style = {
    width: "60px",
    height: "60px",
    backgroundColor: isDark ? "#769656" : "#eeeed2",
    display: "inline-block",
    position: "relative",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "60px",
    fontSize: "32px",
    cursor: "pointer",
    userSelect: "none",
  };

  return (
    <div style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default Box;
