import React from "react";
import "./Visual.scss";
import Benefits from "../Benefits/Benefits.jsx";
import visExmpl from "./visualExmpl.png";
import visExmplSmall from "./visualExmplSmall.jpg";
import visExmplLg from "./visualExmplLg.png";

export default function Visual() {
  return (
    <div className="container container-bg">
      <section className="info-visual">
        <div className="wrapText">
          <h2>Оформлення візуалу сторінки</h2>
          <p>
            {" "}
            До Ваших послуг - професіонали, які вміють робити Ваші сторінки в
            соціальних мережах неповторними.{" "}
          </p>
          <p>
            {" "}
            <span>Наша місія</span> - втілити Вашу унікальність у кожному
            пікселі, зробити Ваш бренд впізнаваним та привабливим для аудиторії.
            Незалежно від того, чи Ви початківець або вже відомий бренд, ми
            працюємо над кожним проектом з почуттям та страсти до деталей.{" "}
          </p>
          <p className="lastParagraf">
            {" "}
            Довірте нам свою ідею, а ми зробимо все можливе, щоб Ваша сторінка в
            соціальній мережі зачарувала та залишала незабутнє враження!
          </p>
        </div>
        <picture>
          <source
            type="image/png"
            media="(max-width: 767px)"
            srcSet={`${visExmplSmall} 1x`}
          />
          <source media="(min-width: 768px and max-width: 1099px)" srcSet={`${visExmpl} 1x`} />
          <source media="(min-width: 1100px)" srcSet={`${visExmplLg} 1x`} />
          <img src={visExmpl} alt="Visual"></img>
        </picture>
      </section>
      <section>
        <h3>Як відбувається робота з дизайнером:</h3>
        <ul className="proc">
          <Benefits
            text="1. Попередня консультація щодо стилістики та об’єму робіт, передплата 50%"
            key="200"
          />
          <Benefits
            text="2. Узгодження макету або концепції з замовником"
            key="201"
          />
          <Benefits text="3. Правки (за потреби)" key="202" />
          <Benefits
            text="4. Надання всіх матеріалів замовнику, залишок оплати"
            key="203"
          />
        </ul>
        <p>
          ! Зверніть увагу, що в послугу <b>не входить</b> ведення сторінки,
          написання текстів дописів та знімання контенту
        </p>
      </section>
    </div>
  );
}
