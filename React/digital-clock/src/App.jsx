import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="container">
      <p>
        {time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()}
      </p>
    </div>
  );
};

export default App;
