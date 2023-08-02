import { useState, useEffect } from "react";
import "./Portfolio.css";
import { Link, useNavigate } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";
import portfolios from "./Portfolio.js";
import portfolio1 from "/src/assets/portfolio1.jpg";
import portfolio2 from "/src/assets/portfolio1.jpg";
import portfolio3 from "/src/assets/portfolio1.jpg";

function Portfolio() {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest<span> Portfolio</span>
        </h2>
        <div className="portfolio-container">
          {portfolios.map((item, index) => {
            return (
              <>
                <div className="portfolio-box">
                  <img src={item.image} alt="portfolio" />
                  <div className="portfolio-layer">
                    <h4>{item.name}</h4>
                    <p>{item.detail}</p>
                    <a href="#">
                      <LuExternalLink id="icon" />
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Portfolio;
