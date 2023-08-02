import { useState, useEffect } from "react";
import "./Skill.css";
import { Link, useNavigate } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
import { PiFileCodeBold } from "react-icons/pi";
import { AiOutlineBarChart } from "react-icons/ai";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

function Skill() {
  return (
    <>
      <section className="skill" id="skill">
        <h2 className="heading">
          My<span> Skills</span>
        </h2>
        <div className="skill-container">
          <div className="skill-box">
            <FaLaptopCode id="icon" />
            <img src={img1} alt="Front End Development" />
            <h3>Front-End Development</h3>

            <p>(Taiind, Bootstrap)</p>
          </div>

          <div className="skill-box">
            <PiFileCodeBold id="icon" />
            <img src={img2} alt="Back-End Development" />
            <h3>Back-End Development</h3>

            <p>(NodeJS)</p>
          </div>

          <div className="skill-box">
            <AiOutlineBarChart id="icon" />
            <img src={img3} alt="Digital Marketing" />
            <h3>Digital Marketing</h3>

            <p>(Facebook Ads, Google Adword)</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skill;
