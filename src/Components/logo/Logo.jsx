import React from 'react'
import logo from './Demiia.Design.svg';
import "./Logo.scss"

export default function Logo() {
  return (
    <a href="/" className='logoBox'>
      <img src={logo} alt="logo"/>
    </a>
  )
}
