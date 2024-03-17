import React from "react";
import "./App.css";
import Main from "./pages/Main.jsx";
import More from "./pages/More.jsx";


import Visual from './Components/Options/Visual.jsx'
import Consult from './Components/Options/Consult.jsx'
import Target from './Components/Options/Target.jsx'
import Verstka from './Components/Options/Verstka.jsx'

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/More/*" element={<More />}>
          <Route index path="Visual" element={<Visual />} />
          <Route path="Consultation" element={<Consult />} />
          <Route path="Target" element={<Target />} />
          <Route path="WebDevelop" element={<Verstka />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
