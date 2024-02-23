import React, { useState } from "react";
import "./NavBar.scss";
import Logo from "../../../Components/logo/Logo";
import Inst from "../../../Components/logo/instagram";

import { Link } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [collapseIconClose, setCollapseIconClose] = useState(false);

  return (
    <nav className="nav">
      <Logo color="white" />
      <div
        className={collapseIconClose ? "collapseIcon tapClose" : "collapseIcon"}
        onClick={() => {
          setMenuOpen(!menuOpen);
          setCollapseIconClose(!collapseIconClose);
        }}
      >
        <span></span>
      </div>
      <ul className={menuOpen ? "isOpen" : ""}>
        <li>
          <Link to="/">Напрямки</Link>
        </li>
        <li>
          <Link to="/More/Visual">Додаткові послуги</Link>
        </li>
        <li>
          <Inst />
        </li>
      </ul>
    </nav>
  );
}
