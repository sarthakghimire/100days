import React from "react";
import "./../src/App.css";
import { calculate } from "./assets/calc";
const App = () => {
  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <label htmlFor="mass">Enter the mass(kg):</label>
      <input type="number" name="mass" id="mass" />

      <label htmlFor="height">Enter the height(cm):</label>
      <input type="number" name="height" id="height" />
      <button onClick={calculate}>Submit</button>
      <p id="BMIValue"></p>
      <p id="message"></p>
    </div>
  );
};

export default App;
