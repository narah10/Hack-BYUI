import React from 'react';
import agendaright from './agendaright.module.css';

function Agendaright({purpose, body , imageurl}) {
  return (
    <div className={agendaright.container}>
        <div className={agendaright.left}>
            <img src={imageurl} alt=""/>
        </div>
        <div className={agendaright.right}>
            <h2>{purpose}</h2>
            <p>{body}</p>
        </div> 

      
    </div>
  )
}

export default Agendaright
