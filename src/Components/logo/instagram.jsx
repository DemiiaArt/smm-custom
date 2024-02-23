import React from 'react'
import instLogo from './instLogo.svg'
import "./instagram.scss"

import {Link} from 'react-router-dom'


export default function Inst () {
  return (
    <Link to='/'  className='instLogo'>
        <img src={instLogo} alt="Logo instagram"/>
    </Link>
  )
}

