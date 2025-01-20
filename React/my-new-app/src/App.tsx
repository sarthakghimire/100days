import React from "react";
import Header from "./index";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./assets/home/home";
import Projects from "./assets/projects/projects";
import Blog from "./assets/blog/blog";
import Service from "./assets/service/service";
import About from "./assets/about/about";
import Contact from "./assets/contact/contact";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
