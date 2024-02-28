import React from "react";
import "./Hero.scss";
import "../HeroSection/HeroSection.scss";
import Bubble from "../HeroSection/Bubble/Bubble";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="heroLayout">
          <h1>Додаткові послуги</h1>
          <p className="accent coursive">
            Не втрачай час та скористайся <br /> допомогою спеціаліста!
          </p>
            
            <Bubble text="Сучасні методи " addId='circle-1'/>
            <Bubble text="Робота на результат" addId='circle-2'/>
            <Bubble text="Індивідуальний підхід" addId='circle-3'/>
            <Bubble text="Досвідчені спеціалісти" addId='circle-4'/>
          
        </div>
      </div>
    </section>
  );
}

