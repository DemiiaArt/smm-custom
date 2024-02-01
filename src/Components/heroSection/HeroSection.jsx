import React from "react";
import "./HeroSection.scss";
import Bubble from "./Bubble/Bubble";

export default function HeroSection() {
  return (
    <section>
      <div className="container">
        <div className="heroImg">
          <img src="" alt="" />
        </div>
        <div className="heroLayout">
          <h1>Сучасна професія</h1>
          <p>Знахідка для тих, хто хоче заробляти в телефоні</p>
          <div className="bubbles">
            <Bubble text="Підійде для новачків" size="130px" />
            <Bubble text="Вільний графік " size="105px" />
            <Bubble text="Різні напрямки" size="120px" />
          </div>
        </div>
      </div>
    </section>
  );
}
