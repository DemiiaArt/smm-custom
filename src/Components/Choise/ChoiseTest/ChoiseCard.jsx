import React, { useState, useEffect } from "react";
import Test from "./Test.jsx";
import "./ChoiseCard.scss";
import rightArrow from "./ArrowRight.png";
import leftArrow from "./ArrowLeft.png";

const ChoiseCard = ({onChoise}) => {
  const [currentCard, setCurrentCard] = useState(0);

  const questions = [
    {
      question: "1. Скільки часу плануєте приділяти роботі?",
      options: [
        { text: "до 2х годин на день", count: -1 },
        { text: "2-4 години на день", count: 1 },
        { text: "я не маю обмежень по часу", count: 0 },
      ],
    },
    {
      question: "2. Маєте досвід активного ведення соц. мереж?",
      options: [
        { text: "так", count: 0 },
        { text: "ні", count: 0 },
      ],
    },
    {
      question: "3. Чи подобається Вам спілкуватись з людьми?",
      options: [
        { text: "так", count: 1 },
        { text: "ні", count: -1 },
        { text: "залежить від обставин", count: 0 },
      ],
    },
  ];
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleNext = () => {
    setCurrentCard((prevCard) => prevCard + 1);
  };

  const handleAnswer = (selectedOption) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentCard] = selectedOption;
      return newAnswers;
    });
  };

  
  const resultTest = answers.reduce((summ, item) => (summ += item), 0);

  useEffect(() => {
    if (currentCard >= questions.length) {
      const resultTest = answers.reduce((summ, item) => (summ += item), 0);
      onChoise(resultTest > 0 ? "Kurator" : "Tasks");
    }
  }, [currentCard, answers, onChoise, questions.length]);

  return (
    <div className="testCard">
      {currentCard < questions.length ? (
        <div>
          <h5>
            Щоб підібрати для Вас найоптимальніший варіант, пройдіть невеличкий
            тест:
          </h5>
          <Test
            question={questions[currentCard].question}
            options={questions[currentCard].options}
            onNext={handleNext}
            onAnswer={handleAnswer}
            currentCard={currentCard}
          />
        </div>
      ) : (
        <div>
          <h5>
            За результатами опитування для Вас підійде напрямок{" "}
            <span className="boldText">
              {" "}
              {resultTest > 0
                ? `Кураторство обо Інста-магазин!`
                : `Заробітку на завданнях!`}{" "}
            </span>
          </h5>
          <br />
          <p className="h5">Ознайомитись із ним детальніше можна </p>
          <div className="arrows">
            {resultTest > 0 ? (
              <img src={rightArrow} alt="Кураторство або Інста-магазин" />
            ) : (
              <img src={leftArrow} alt="Заробіток на завданнях" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChoiseCard;
