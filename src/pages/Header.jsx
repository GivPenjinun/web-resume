import { useState, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";

function Header() {
  const [isToggle, setIsToggle] = useState("navBar active");

  const toggleMenu = () => {
    if (isToggle === "navBar active") {
      setIsToggle("navBar");
    } else {
      setIsToggle("navBar active");
    }
  };
  return (
    <>
      <header className="header">
        <div className="menu-bar">
          <TfiMenu onClick={toggleMenu} />
        </div>
        <a href="#" className="logo">
          Portfolio
        </a>

        <nav className={isToggle}>
          <a href="#home">Home</a>
          <a href="#skill">Skill</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
