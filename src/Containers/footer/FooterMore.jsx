import React from "react";
import './FooterMore.scss'

import diamonds from "./3diamonds.png";
import oneDianomd from "./1diamond.png";

export default function FooterMore() {
  return (
    <div className=" more">
        <div className="container">
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
      </div>
    </div>
  );
}
