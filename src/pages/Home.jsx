import { useState, useEffect } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../pages/Header";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLogoGmail, BiLogoFacebook } from "react-icons/bi";
import { AiFillFacebook } from "react-icons/ai";
import profilemg from "../assets/profilemg.png";

function Home() {
  return (
    <>
      <Header />
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hi!</h3>
          <h1>I'm Penjinun</h1>
          <h3>
            I'm <span>a Fullstack Web Developer</span>
          </h3>
          <p>I'm coding with clean and beautiful problem solving in mind</p>

          <div className="socail-media">
            <a href="#">
              <AiFillFacebook color="red" id="icon" />
            </a>
            <a href="#">
              <BsGithub id="icon" />
            </a>
            <a href="#">
              <BsLinkedin id="icon" />
            </a>
            <a href="#">
              <BiLogoGmail id="icon" />
            </a>
          </div>
          <a href="#" className="contact">
            Contact Me
          </a>
        </div>
        <div className="home-img">
          <img src={profilemg} className="profile-img" alt="profile-img" />
        </div>
      </section>
    </>
  );
}

export default Home;
