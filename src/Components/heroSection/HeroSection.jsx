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
import addItemsBig from './addItemsBig.png'
import addItemsSmall from './addItemsSmall.png'

export default function HeroSection() {
    return (
    <section className="hero">
      <div className="container">
        <div className="heroImg">
          <picture>
            <source
              type="image/png"
              media="(max-width: 479px)"
              srcSet={`${heroImg375_1x} 1x, ${heroImg375_2x} 2x`}
            />
            <source
              media="(min-width: 480px) and (max-width: 991px)"
              srcSet={`${heroImg768_1x} 1x, ${heroImg768_2x} 2x`}
            />
            <source
              media="(min-width: 992px)"
              srcSet={`${heroImg1280_1x} 1x, ${heroImg1280_2x} 2x`}
            />
            <img src={heroImg} alt="phone"></img>
          </picture>
          <img  src={addItemsBig} alt="big" id="addBig"/>
          <img src={addItemsSmall} alt="small" id="addSmall"/>
        </div>
        <div className="heroLayout">
          <h1>Сучасна професія</h1>
          <p className="accent coursive">
            Знахідка для тих, хто хоче заробляти в телефоні
          </p>
          <div className="bubbles">
            <Bubble text="Підійде для новачків" addId='circle-10'/>
            <Bubble text="Вільний графік " addId='circle-11'/>
            <Bubble text="Різні напрямки" addId='circle-12' />
          </div>
        </div>
      </div>
    </section>
  );
}
