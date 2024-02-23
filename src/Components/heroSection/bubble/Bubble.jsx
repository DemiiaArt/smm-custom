import React from 'react'
import './Bubble.scss'

export default function Bubble({text, addId}) {
  return (
    <div className='circle__outside' id={addId}>
      <div className='circle__inside'>
        <p>{text}</p>
      </div>
    </div>
  )
}
