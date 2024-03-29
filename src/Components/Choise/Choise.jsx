import ChoiseCard from "./ChoiseTest/ChoiseCard.jsx";
import "./Choise.scss";

export default function Choise({currentChoise, changeSelectedOption}) {

  return (
    <div className="darkBg">
      <div className="container">
        <ChoiseCard onChoise={changeSelectedOption} />
      <div className="choisesHeader" id="choisesHeader">
        <span onClick={()=> changeSelectedOption('Tasks')} className={currentChoise === 'Tasks' ? "folder choose" : "folder"}>
          <h3 className={currentChoise === 'Tasks' ? "accent" : ""}>Завдання</h3>
        </span>
        <span onClick={()=> changeSelectedOption('Kurator')} className={currentChoise === 'Kurator' ? "folder choose " : "folder"}>
          <h3 className={currentChoise === 'Kurator' ? "accent" : ""}>Кураторство/Інста-магазин</h3> 
        </span>
      </div>
      </div>
    </div>
  );
}
