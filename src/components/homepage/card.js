import React from "react";
import card from "./card.module.css";

function Card({ imageurl, title, body }) {
  return (
    <div className={card.container}>
      <img src={imageurl} alt="" class={card.cardStyle} />
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Card;
