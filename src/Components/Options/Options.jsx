import React, { useState } from "react";
import "../Choise/Choise.scss";
import "./Options.scss";
import { Link } from "react-router-dom";

export default function Options() {
    let currendAddress = window.location.pathname.replace('/More/', '');
  const [choose, setChoose] = useState(currendAddress);
  return (
    <div className="darkBg">
      <div className="container">
        <div className="choisesHeader fourChoises">
          <Link
            to="/More/Visual"
            onClick={() => setChoose("Visual")}
            className={choose === "Visual" ? " choose" : ""}
          >
            {choose === "Visual" ? (
              <h3 className="accent">Візуал</h3>
            ) : (
              <h3 className="unChoosing">
                В<span className="fullName">ізуал</span>
              </h3>
            )}
          </Link>

          <Link
            to="/More/Consultation"
            onClick={() => setChoose("Consultation")}
            className={choose === "Consultation" ? " choose" : ""}
          >
            {choose === "Consultation" ? (
              <h3 className="accent">Консультація</h3>
            ) : (
              <h3 className="unChoosing">
                К<span className="fullName">онсультаціяг</span>
              </h3>
            )}
          </Link>
          <Link
            to="/More/Target"
            onClick={() => setChoose("Target")}
            className={choose === "Target" ? " choose" : ""}
          >
            {choose === "Target" ? (
              <h3 className="accent">Таргетинг</h3>
            ) : (
              <h3 className="unChoosing">
                Т<span className="fullName">аргетинг</span>
              </h3>
            )}
          </Link>
          <Link
            to="/More/WebDevelop"
            onClick={() => setChoose("WebDevelop")}
            className={choose === "WebDevelop" ? " choose" : ""}
          >
            {choose === "WebDevelop" ? (
              <h3 className="accent">Сайт/лендінг</h3>
            ) : (
              <h3 className="unChoosing">
                С<span className="fullName">айт/лендінг</span>
              </h3>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
