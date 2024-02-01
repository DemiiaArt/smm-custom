import React from 'react'
import './Bubble.scss'

export default function Bubble(props) {
  return (
    <div className='circle__outside' style={{width: props.size, height:props.size}}>
      <div className='circle__inside'>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
