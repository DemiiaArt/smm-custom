import React, {useState} from 'react';
import "./Question.scss";

export default function Question({quest}) {
  const [showText, setShowText] = useState(false)

  const showTextHandle = () => {
    showText ? setShowText(false) : setShowText(true)
  }

  return (
    <li key={quest.id} onClick={showTextHandle} className='question'>
      <h4  className={showText ? "checked" : ""}>{quest.title}</h4>
      {showText && (<p>{quest.text}</p>)}
    </li>
  )
}
