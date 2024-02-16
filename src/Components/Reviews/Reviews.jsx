import React from 'react';
import "./Reviews.scss"

export default function Reviews({rev}) {
  return (
    <li key={rev.id} className='revCard'>
      <p className='revName'>{rev.name}</p>
      <q className='revText'>{rev.text}</q>
      {rev.photo && (<div className="revImgBox">
        <img src={`${process.env.PUBLIC_URL}/media/${rev.photo}`} alt="фото відгуку" />
      </div>)}
    </li>
  )
}
