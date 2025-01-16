import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./assets/About";
import Home from "./Home";
import ReadMore from "./ReadMore";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/read-more/:id" element={<ReadMore />} />
    </Routes>
  );
};

export default App;
