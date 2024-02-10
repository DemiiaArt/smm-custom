import React from "react";
import "./Benefits.scss";

export default function Benefits({ icon, iconWidth, iconHeight, text, key }) {
  return (
    <li key={key} className="benefits__card">
      <div className="benefits__card--bg">
        <img
          src={icon}
          width={iconWidth}
          height={iconHeight}
          alt="benefits icon"
        />
        <p>{text}</p>
      </div>
    </li>
  );
}
