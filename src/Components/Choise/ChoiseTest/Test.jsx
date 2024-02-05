import React, { useState, useEffect } from "react";
import buttonImg from "./button.png"

const TestCard = ({ question, options, onNext, onAnswer, currentCard }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  useEffect(() => {
    setSelectedOptionIndex(null);
  }, [currentCard]);

  const handleOptionChange = (index) => {
    setSelectedOptionIndex(index);
    // console.dir(e.target);
    // console.log(+e.target.value);
  };

  const handleNext = () => {
    const selectedOption = selectedOptionIndex !== null ? options[selectedOptionIndex].count : null; 
    onAnswer(selectedOption);
    onNext();
  };

  return (
    <div className="questionBox">
      <h4>{question}</h4>
      <form>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option-${currentCard}-${index}`}
              name={`options-${currentCard}`}
              value={option.count}
              checked={selectedOptionIndex  === index}
              onChange={() => handleOptionChange(index)}
            />
            <label htmlFor={`option-${currentCard}-${index}`}>{option.text}</label>
          </div>
        ))}
      </form>
      <button className="NextButton" onClick={handleNext} disabled={selectedOptionIndex ===null}>
        <img src={buttonImg} alt="button"/>
      </button>
    </div>
  );
};

export default TestCard;
