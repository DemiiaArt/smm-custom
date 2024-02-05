import React, { useState } from "react";
import ChoiseCard from "./ChoiseTest/ChoiseCard.jsx";
import "./Choise.scss";

export default function Choise() {
  const [currentChoise, setcurrentChoise] = useState("Tasks");

  const choiseHandle = (choiseOption) => {
    setcurrentChoise(choiseOption);
  };
  return (
    <div className="darkBg">
      <div className="container">
        <ChoiseCard onChoise={choiseHandle} />
      </div>
      <div className="choisesHeader">
        {currentChoise === "Tasks" ? (<span className="choose"><h3 className="accent">Завдання</h3></span>) : (<span><h3>Завдання</h3></span>)}
        {currentChoise === "Kurator" ? (<span className="choose"><h3 className=" accent">Кураторство/Інста-магазин</h3></span>) : (<span><h3>Кураторство/Інста-магазин</h3></span>)}
      </div>
    </div>
  );
}
