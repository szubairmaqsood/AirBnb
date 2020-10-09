import React from 'react'
import './Card.css'

function Card({src,title,discription,price}) {
    return (
        <div className="card">
           <img src={src} alt="Card Image"/>
           <div className="card_Info">
               <h2>{title}</h2>
               <h4>{discription}</h4>
               <h3>{price}</h3>

           </div>
        </div>
    )
}

export default Card
