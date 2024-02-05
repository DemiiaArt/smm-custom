import React, {useState} from 'react'
import Test from "./ChoiseTest/Test.jsx"

const Choise = () => {
    const [currentCard, setCurrentCard] = useState(0);
    
    const questions = [
        {
            question: 'Вопрос 1',
            options: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
        },
        {
            question: 'Вопрос 2',
            options: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
        },
        {
            question: 'Вопрос 3',
            options: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
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
  
    return (
      <div>
        {currentCard < questions.length ? (
          <Test
            question={questions[currentCard].question}
            options={questions[currentCard].options}
            onNext={handleNext}
            onAnswer={handleAnswer}
          />
        ) : (
          <div>
            <p>Тест завершен</p>
            <p>Результаты: {answers.join(', ')}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default Choise;
