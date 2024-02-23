import React from "react";
import "./Footer.scss";
import Logo from "../../Components/logo/Logo.jsx";
import Inst from "../../Components/logo/instagram.jsx";
// import diamonds from "./3diamonds.png";
// import oneDianomd from "./1diamond.png";
import arrow from "./arrow.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container">
      {/* <div className=" more">
        <img src={diamonds} alt="diamonds bg" />
        <img src={oneDianomd} alt="diamonds bg" />
        <div className="moreBox">
          <h4>Залишились питання? </h4>
          <p>
            Завітай на сторінку твого майбутнього куратора{" "}
            <a href="/">@demiia.design</a> та напиши в повідомленні що саме тебе
            цікавить
          </p>
        </div>
      </div> */}
      <div className="footer-nav">
        <Logo color="white" />
        <div className="rowText">
          <p className="coursive accent">Почни свій шлях вже сьогодні</p>
          <img src={arrow} alt="arrow" />
          <Inst />
        </div>
      </div>
    </footer>
  );
}
