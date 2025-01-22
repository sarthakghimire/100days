import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click Me
      </button>
      {count}
    </>
  );
};

export default App;
