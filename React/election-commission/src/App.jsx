import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./components/Body/Quiz";
import PollResults from "./components/Body/PollResults";
import ERegistration from "./components/Body/ERegistration";
import CheckStatus from "./components/Body/CheckStatus";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/election-quiz" element={<Quiz />} />
        <Route path="/poll-results" element={<PollResults />} />
        <Route path="/check-status" element={<CheckStatus />} />
        <Route path="/e-registration" element={<ERegistration />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
