import React from "react";
import agendaleft from "./agendaleft.module.css";

function Agendaleft({ purpose, body, imageurl }) {
  return (
    <div className={agendaleft.container}>
      <div className={agendaleft.left}>
        <h3>{purpose}</h3>
        <p>{body}</p>
      </div>
      <div className={agendaleft.right}>
        <img src={imageurl} class={agendaleft.images} alt="" />
      </div>
    </div>
  );
}

export default Agendaleft;
