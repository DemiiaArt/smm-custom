import React from "react";
import "./Tasks.scss";
import Benefits from "../../Benefits/Benefits.jsx";
import Reviews from "../../Reviews/Reviews.jsx";
import Question from "../../Questions/Question.jsx";
import MessageKurator from "../../MessageKurator/MessageKurator.jsx";
import phones from "./two_phones.png";
import games from "./games.png";
import reviews from "./reviews.js";
import questions from "./questions.js";

export default function Tasks() {
  return (
    <div className="container">
      <section className="flex-center">
        <h3>
          Ми з командою зібрали в одному каналі перевірені фріланс-сайти, котрі
          дійсно платять за виконання завдань.
        </h3>
        <div className="benefits--row">
          <Benefits />
          <Benefits />
          <Benefits />
          <Benefits />
          <Benefits />
        </div>
      </section>
      <section className="flex-center">
        <h2>Приклади завдань</h2>
        <div className="phoneExaples">
          <img src={phones} alt="two phones" />
          <img src={games} alt="games" />
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
