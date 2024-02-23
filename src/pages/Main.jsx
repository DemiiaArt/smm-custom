import React, {useState} from 'react'

import Choise from '../Components/Choise/Choise.jsx';
import HeroSection from '../Components/HeroSection/HeroSection.jsx';
import Header from '../Containers/Header/Header.jsx'
import Tasks from '../Components/Choise/Tasks/Tasks.jsx'
import Kurator from '../Components/Choise/Kurator/Kurator.jsx';
import Footer from '../Containers/footer/Footer.jsx'
import FooterMore from '../Containers/footer/FooterMore.jsx';

export default function Main() {
    const  [selectOption, setSelectOption] = useState('Tasks')

  const changeSelectedOption = (opt) => {
    setSelectOption(opt)
  }
  return (
    <>
      <Header />
      <HeroSection />
      <Choise
        currentChoise={selectOption}
        changeSelectedOption={changeSelectedOption}
      />
      {selectOption === "Tasks" ? <Tasks /> : <Kurator />}
      <FooterMore />
      <Footer />
    </>
  );
}
