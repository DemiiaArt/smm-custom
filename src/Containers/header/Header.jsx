import React from "react";
import "./Header.scss";
import Logo from '../../Components/logo/Logo.jsx'

export default function Header() {
  return (
    <header>
      <div className="container">
        <Logo />
      </div>
    </header>
  );
}
