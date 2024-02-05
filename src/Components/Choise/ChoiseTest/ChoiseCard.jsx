import React, { useState } from "react";
import Test from "./Test.jsx";

const ChoiseCard = () => {
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
        { text: "віддаю перевагу роботі без контакту з людьми", count: -1 },
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

  const resultTest = answers.reduce(((summ, item) => summ += item), 0)

  return (
    <div>
      {currentCard < questions.length ? (
        <div>
          <h2>
            Щоб підібрати для Вас найоптимальніший варіант, пройдіть невеличкий
            тест:
          </h2>
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
          <h2>
          За результатами опитування для Вас підійде напрямок <strong> {resultTest > 0 ? `Кураторство обо Інста-магазин!` : `Заробітку на завданнях!`} </strong>
          </h2>
        </div>
      )}
    </div>
  );
};

export default ChoiseCard;
