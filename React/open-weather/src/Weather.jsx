import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import searchButton from "./../src/images/search.png";
import clear from "./../src/images/clear.png";
import clouds from "./../src/images/clouds.png";
import drizzle from "./../src/images/drizzle.png";
import rain from "./../src/images/rain.png";
import snow from "./../src/images/snow.png";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": clouds,
    "02n": clouds,
    "03d": clouds,
    "03n": clouds,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
  };

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icons = allIcons[data.weather[0].icon || clear];
      setWeatherData({
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icons,
      });
    } catch (error) {}
  };

  useEffect(() => {
    search("London");
  }, []);
  return (
    <div className="card">
      <div className="search-bar">
        <input
          ref={inputRef}
          type="text"
          name=""
          placeholder="Enter City"
          id=""
        />
        <img
          src={searchButton}
          alt=""
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      <img src={weatherData.icon} style={{ width: "150px" }} />
      <div>
        <p style={{ fontSize: "50px", color: "white" }}>
          {weatherData.temperature}
          <sup>o</sup>C
        </p>
        <p style={{ fontSize: "30px", color: "white" }}>
          {weatherData.location}
        </p>
      </div>
    </div>
  );
};

export default Weather;
