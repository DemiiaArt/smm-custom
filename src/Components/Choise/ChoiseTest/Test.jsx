import React, { useState } from "react";

const TestCard = ({ question, options, onNext, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNext = () => {
    onAnswer(selectedOption);
    onNext();
  };

  return (
    <div>
      <h2>Щоб підібрати для Вас найоптимальніший варіант, пройдіть невеличкий тест:</h2>
      <div className="questionBox">
        <h4>{question}</h4>
        <form>
          {options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`option-${index}`}
                name="options"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
        </form>
        <button onClick={handleNext} disabled={!selectedOption}>
          <img src="./button.png" alt="button" />
        </button>
      </div>
    </div>
  );
};

export default TestCard;
