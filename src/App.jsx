import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./pages/Header";
import Skill from "./pages/Skill.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./pages/Footer.jsx";
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
      <Contact />
    </div>
  );
}

export default App;
