import React, { useState } from "react";
import { useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <Home />
      <About />
      <Contact />
      <Blog />
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click Me To Increase
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Click Me To Decrease
      </button>
      <div>Count: {count}</div>
    </>
  );
};

export default App;
