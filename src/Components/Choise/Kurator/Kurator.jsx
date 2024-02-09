import React from "react";
import "./Kurator.scss";
import Benefits from "../../Benefits/Benefits.jsx";
import MessageKurator from "../../MessageKurator/MessageKurator.jsx";
import Reviews from "../../Reviews/Reviews.jsx";
import Question from "../../Questions/Question.jsx";
import Card from "./Card.jsx";

import reviews from "./reviews.js"
import questions from "./questions.js";

export default function Kurator() {
  return (
    <div className="container">
      <div className="flex-between">
        <div className="programm">
          <p>Програма</p>
          <ul>
            <li>
              Блок 1. Створення сторінки
              <ul>
                <li>Додатки для роботи</li>
                <li>Візуал сторінки</li>
                <li>Дописи та їх тематика</li>
                <li>Оформлення STORIES</li>
                <li>Чек-лист першого блоку</li>
              </ul>
            </li>
            <li>
              Блок 2. Просування
              <ul>
                <li>Перші підписники</li>
                <li>Методи просування</li>
                <li>Таргетована реклама</li>
                <li>Реклама у блогера</li>
              </ul>
            </li>
            <li>
              Блок 3. Комунікація з клієнтом
              <ul>
                <li>Принципи + шаблони</li>
              </ul>
            </li>
            <li>Блок 4. Політика Інстаграм</li>
            <li>Блок 5. Практика</li>
          </ul>
        </div>
        <div className="benefits--column">
          <Benefits />
          <Benefits />
          <Benefits />
          <Benefits />
          <Benefits />
        </div>
      </div>
      <section>
        <h2>Обери свій тариф</h2>
        <div className="tarifsCards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <MessageKurator />
      </section>
      <section>
        <h2>Відгуки</h2>
        <ul>
          {reviews.map((item) => (
            <Reviews rev={item} />
          ))}
        </ul>
      </section>
      <section>
        <h2>Поширені питання</h2>
        <ul>
          {questions.map((item) => (
            <Question quest={item} />
          ))}
        </ul>
      </section>
    </div>
  );
}
