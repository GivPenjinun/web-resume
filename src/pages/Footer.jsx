import "./Footer.css";
import { BiCopyright } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import vector from "../assets/vector.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-text">
          Copyright <BiCopyright /> 2023
        </div>
        <div className="icon-btn">
          <a href="#">
            <AiOutlineArrowUp />
          </a>
        </div>
        <img src={vector} className="footer-bg" />
      </section>
    </>
  );
}

export default Footer;
