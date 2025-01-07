import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 2);
  };

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment by 2</button>
    </div>
  );
}

export default App;
