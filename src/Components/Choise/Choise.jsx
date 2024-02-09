import ChoiseCard from "./ChoiseTest/ChoiseCard.jsx";
import "./Choise.scss";

export default function Choise({currentChoise, changeSelectedOption}) {

  return (
    <div className="darkBg">
      <div className="container">
        <ChoiseCard onChoise={changeSelectedOption} />
      </div>
      <div className="choisesHeader">
        <span onClick={()=> changeSelectedOption('Tasks')} className={currentChoise === 'Tasks' ? " choose" : ""}>
          <h3 className={currentChoise === 'Tasks' ? "accent" : ""}>Завдання</h3>
        </span>
        <span onClick={()=> changeSelectedOption('Kurator')} className={currentChoise === 'Kurator' ? " choose " : ""}>
          <h3 className={currentChoise === 'Kurator' ? "accent" : ""}>Кураторство/Інста-магазин</h3> 
        </span>
      </div>
    </div>
  );
}
