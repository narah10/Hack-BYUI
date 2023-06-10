import React from 'react';
import purposes from './purpose.module.css';

function purpose({heading, goal, purpose }) {
  return (
    <div className={purposes.container}>
      <h1>{heading}</h1>
      <p><b>Goal - </b>{goal}</p>
      <p><b>Purpose - </b>{purpose}</p>
    </div>
  )
}

export default purpose
