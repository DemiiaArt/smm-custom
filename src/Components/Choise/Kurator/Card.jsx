import React from "react";
import "./Card.scss";
import cardList from "./cardsList.js"

export default function Card({ tarif }) {
  let activePositions, dohid, suprovid;
  switch (tarif) {
    case "silver":
      activePositions = 5;
      dohid = 10;
      suprovid = "2 місяці";
      break;
    case "gold":
      activePositions = 7;
      dohid = 20;
      suprovid = "3 місяці";
      break;
    case "platinum":
      activePositions = 9;
      dohid = 35;
      suprovid = "5 місяців";
      break;
    default:
      activePositions = 12;
      dohid = 50;
      suprovid = "6 місяців";
      break;

  }
  return (
    <div className="tarifCard">
      <h6>{tarif}</h6>
      <p className="coursive accent">Дохід від {dohid} тис. в міс </p>
      <ul id="tarifCard__list">
        {cardList.map(((item, index) => {
          return <li key={index} className={index < activePositions ? 'active' : ''}>{item}</li>
        }))}
      </ul>
      <p className="bottom-cursive coursive">{suprovid} супроводу</p>
    </div>
  );
}
