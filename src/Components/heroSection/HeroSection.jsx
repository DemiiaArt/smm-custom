import React from "react";
import "./HeroSection.scss";
import Bubble from "./Bubble/Bubble";
import heroImg from "./1280.png";
import heroImg375_1x from "./375_1x.png";
import heroImg375_2x from "./375_2x.png";
import heroImg768_1x from "./768_2x.png";
import heroImg768_2x from "./768_2x.png";
import heroImg1280_1x from "./1280_2x.png";
import heroImg1280_2x from "./1280_2x.png";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="heroImg">
          <picture>
            <source
              type="image/png"
              media="(max-width: 767px)"
              srcset={`${heroImg375_1x} 1x, ${heroImg375_2x} 2x`}
            />
            <source
              media="(min-width: 768px) and (max-width: 991px)"
              srcset={`${heroImg768_1x} 1x, ${heroImg768_2x} 2x`}
            />
            <source
              media="(min-width: 992px)"
              srcset={`${heroImg1280_1x} 1x, ${heroImg1280_2x} 2x`}
            />
            <img src={heroImg} alt="phone"></img>
          </picture>
        </div>
        <div className="heroLayout">
          <h1>Сучасна професія</h1>
          <p className="accent coursive">
            Знахідка для тих, хто хоче заробляти в телефоні
          </p>
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
