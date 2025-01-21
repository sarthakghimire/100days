import React, { useState } from "react";
import "./Quiz.css";
import "./data";
const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);

  return (
    <>
      <div className="container">
        <h1>Quiz App</h1>
        <hr />
        <div className="card">
          <h2>1. Who was the first PM of Nepal?</h2>
          <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
          </ul>
          <button>Next</button>
          <div className="index">1/5</div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
