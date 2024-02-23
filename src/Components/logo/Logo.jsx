import React from "react";
import logoWhite from "./Demiia.Design.svg";
import logoBlack from "./DarkLogo.svg";
import "./Logo.scss";

import { Link } from "react-router-dom";

export default function Logo({ color }) {
  return (
    <Link to="/">
      <div className="logoBox">
        <img src={color === "white" ? logoWhite : logoBlack} alt="logo" />
      </div>
    </Link>
  );
}
