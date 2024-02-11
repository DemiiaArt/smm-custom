import React from 'react'
import instLogo from './instLogo.svg'
import "./instagram.scss"


export default function Inst () {
  return (
    <a href='/' className='instLogo'>
        <img src={instLogo} alt="Logo instagram"/>
    </a>
  )
}

