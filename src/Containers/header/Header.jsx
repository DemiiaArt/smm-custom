import React from "react";
import "./Header.scss";
import NavBar from '../navigation/NavBar/NavBar.jsx'

export default function Header() {
  return (
    <header >
      <div className="container">
        <NavBar />
      </div>
    </header>
  );
}
