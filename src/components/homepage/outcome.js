import React from "react";
import outcome from "./outcome.module.css"

function Outcome({ imageurl, title, body }) {
  return (
    <div className={outcome.container}>
      <img src={imageurl} alt="" class={outcome.cardStyle} />
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Outcome;
