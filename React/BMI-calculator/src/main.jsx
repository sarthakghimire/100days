import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div
      className="asdfg"
      style={{
        display: "flex",
        margin: "10px",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
    </div>
  </StrictMode>
);
