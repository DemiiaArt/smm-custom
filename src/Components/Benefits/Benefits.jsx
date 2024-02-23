import React from "react";
import "./Benefits.scss";

export default function Benefits({ icon = null, fontSiz=null, text, key }) {
  return (
    <li key={key} className="benefits__card">
      <div className="benefits__card--bg">
        {icon && (<span
          className={icon}
          style={{fontSize: fontSiz}}
        ></span>)}
        
        <p>{text}</p>
      </div>
    </li>
  );
}
