import React from 'react'
import logoWhite from './Demiia.Design.svg';
import logoBlack from './DarkLogo.svg';
import "./Logo.scss"

export default function Logo({color}) {
  return (
    <a href="/" className='logoBox'>
      <img src={color === "white" ? logoWhite : logoBlack} alt="logo"/>
    </a>
  )
}
