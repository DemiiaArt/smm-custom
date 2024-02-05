// import logo from './logo.svg';
import './App.css';
import Choise from './Components/Choise/Choise.jsx';
import HeroSection from './Components/HeroSection/HeroSection.jsx';
import Header from './Containers/Header/Header.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Choise />
    </div>
  );
}

export default App;
