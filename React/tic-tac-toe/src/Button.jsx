import React from "react";
import { useState } from "react";

const Button = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const divStyle = {
    height: "30px",
    width: "150px",
    border: "1px solid var(--text-color)",
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    cursor: "pointer",
  };
  function handleMode() {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.style.setProperty("--bg-color", "black");
      document.documentElement.style.setProperty("--text-color", "white");
    } else {
      document.documentElement.style.setProperty("--bg-color", "white");
      document.documentElement.style.setProperty("--text-color", "black");
    }
  }
  return (
    <div>
      <div style={divStyle} onClick={handleMode}>
        Change Theme
      </div>
    </div>
  );
};

export default Button;
