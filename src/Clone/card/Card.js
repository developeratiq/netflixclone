import React from 'react'
import './card.css'

function Card(props) {
    const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;
  return (
    <div>
       <img className='card_poster' src={imageUrl}alt="poster" />
    

    </div>
  )
}

export default Card