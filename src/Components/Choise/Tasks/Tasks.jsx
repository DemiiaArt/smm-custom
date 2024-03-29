import React from "react";
import "./Tasks.scss";
import Benefits from "../../Benefits/Benefits.jsx";
import Reviews from "../../Reviews/Reviews.jsx";
import Question from "../../Questions/Question.jsx";
import MessageKurator from "../../MessageKurator/MessageKurator.jsx";
import phones from "./two_phones.png";
import games from "./games.png";
import bubbles from "./media/bubbles.png";
import reviews from "./reviews.js";
import questions from "./questions.js";
import benefitsTasks from "./benefits.js";

export default function Tasks() {
  return (
    <div className="wrapper">
      <div className="container container--white">
        <section>
          <h3 className="firstHeader"> 
            Ми з командою зібрали в одному каналі перевірені фріланс-сайти,
            котрі дійсно платять за виконання завдань.
          </h3>
          <ul className="benefits--row">
            {benefitsTasks.map((item) => (
              <Benefits
                icon={item.icon}
                fontSiz={item.fontSiz}
                fontSizWindow={item.fontSizWindow}
                text={item.text}
                key={item.id}
              />
            ))}
          </ul>
        </section>
        <section className="flex-center">
          <h2>Приклади завдань</h2>
          <div className="phoneExaples">
            <img src={phones} alt="two phones" />
            <img src={games} alt="games" />
          </div>
          <MessageKurator />
          <img src={bubbles} alt="bubbles" />
        </section>
        <section>
          <h2>Відгуки</h2>
          <ul className="reviewList">
            {reviews.map((item) => (
              <Reviews rev={item} />
            ))}
          </ul>
        </section>
        <section>
          <h2>Поширені питання</h2>
          <ul className="questList">
            {questions.map((item) => (
              <Question quest={item} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
