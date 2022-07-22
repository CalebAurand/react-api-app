import React from 'react'

const BoozeCard = (props) => (
  <li style={{listStyle: "none" }}>
    <figure className="img-container">
      <img src={props.image} alt="booze pics"/>
    </figure>
    <div>
      <h3>{props.boozeName}<span>{props.firstBrewed}</span></h3>
      <h4>{props.tagline}</h4>
      <p><span>{props.abv}</span>{props.desc}</p>
    </div>
  </li>
)

export default BoozeCard;