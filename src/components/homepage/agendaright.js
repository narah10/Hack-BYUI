import React from "react";
import agendaright from "./agendaright.module.css";

function Agendaright({ purpose, body, imageurl }) {
  return (
    <div className={agendaright.container}>
      <div className={agendaright.left}>
        <img src={imageurl} class={agendaright.images} alt="" />
      </div>
      <div className={agendaright.right}>
        <h3>{purpose}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Agendaright;
