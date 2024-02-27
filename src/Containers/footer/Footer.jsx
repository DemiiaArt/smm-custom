import React from "react";
import "./Footer.scss";
import Logo from "../../Components/logo/Logo.jsx";
import Inst from "../../Components/logo/instagram.jsx";
import arrow from "./arrow.png";


export default function Footer() {
  return (
    // <footer className="container">
      <div className="footer-nav">
        <Logo color="white" />
        <div className="rowText">
          <p className="coursive accent">Почни свій шлях вже сьогодні</p>
          <img src={arrow} alt="arrow" />
          <Inst />
        </div>
      </div>
    // </footer>
  );
}
