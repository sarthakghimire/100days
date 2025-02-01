import React from "react";
import "./Accordion.css";
import { useState } from "react";

const Accordion = () => {
  const data = [
    {
      id: 1,
      question: "What is openWeatherMap?",
      answer:
        "OpenWeatherMap is a website that provides weather data, including current weather, forecasts, and maps.",
    },
    {
      id: 2,
      question: "How do I get the API key?",
      answer:
        "To get an API key in OpenWeatherMap, you need to create an account on their website, log in, and then navigate to the 'API keys' tab where you can find your unique API key to use for accessing weather data; you can sign up using just your email address to access a free tier with limited calls.",
    },
    {
      id: 3,
      question: "Is openWeatherMap free?",
      answer:
        "Yes, OpenWeatherMap offers a free rate that provides access to current weather, forecasts, and weather maps.OpenWeatherMap also offers a paid subscription to One Call API 3.0, which provides access to more data. With One Call API 3.0, you pay for the number of API calls you make, but you receive 1,000 free API calls per day.",
    },
  ];
  const [selected, setSelected] = useState(null);

  function handleVisibility(getID) {
    console.log(getID);
    setSelected(getID === selected ? null : getID);
  }

  return (
    <>
      <div className="acc-card">
        <div className="question-bar">
          {data.map((i) => {
            return (
              <div className="ques">
                <h1 onClick={() => handleVisibility(i.id)}>{i.question}</h1>
                {i.id === selected ? (
                  <div>
                    <h2>{i.answer}</h2>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Accordion;
