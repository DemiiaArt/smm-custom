import React, {useState, useEffect} from 'react'
import './App.css';
import Choise from './Components/Choise/Choise.jsx';
import HeroSection from './Components/HeroSection/HeroSection.jsx';
import Header from './Containers/Header/Header.jsx'
import Tasks from './Components/Choise/Tasks/Tasks.jsx'
import Kurator from './Components/Choise/Kurator/Kurator.jsx';
import Footer from './Containers/footer/Footer.jsx'


function App() {
  const  [selectOption, setSelectOption] = useState('Tasks')

  const changeSelectedOption = (opt) => {
    setSelectOption(opt)
  }

  

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Choise currentChoise={selectOption} changeSelectedOption={changeSelectedOption}/>
      {selectOption==="Tasks" ? <Tasks /> : <Kurator />}
      <Footer />
    </div>
  );
}

export default App;
