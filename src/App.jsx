import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./pages/Header";
import Skill from "./pages/Skill.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
        </Routes>
      </Router>
      <Skill />
      <Portfolio />
    </div>
  );
}

export default App;
