import { useState, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Portfolio
        </a>

        <nav className="navBar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skill">Skill</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
