import React from "react";
import left from "./leftSide.module.css";
import { Link } from "react-router-dom";

function ImageLeft({ purpose, body, imageurl }) {
  return (
    <div className={left.container}>
      <div className={left.left}>
        <img src={imageurl} class={left.images} alt="" />
      </div>
      <div className={left.right}>
        <h3>{purpose}</h3>
        <p>{body}</p>
        <button><Link to="https://www.eventbrite.com/e/hack-byu-i-tickets-601636108797">Pre-Register</Link></button>

      </div>
    </div>
  );
}

export default ImageLeft;
