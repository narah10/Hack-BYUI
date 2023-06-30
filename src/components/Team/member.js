import React from 'react';
import Member from './member.module.css';
import Github from '../assets/github.png';
import Linkedin from '../assets/linkedin.png';

function member({image , name, role , linked}) {
  return (
    <div className={Member.container}>
      <img src={image} alt=''/> 
      <h1>{name}</h1>
      <p>{role}</p>
      <div className={Member.icon}>
        <div className={Member.linkbox}>
          <a href={linked}>
            <img src={Linkedin} alt=''/>
          </a>
      </div>
      <div className={Member.linkbox} >
          <a href="https://github.com/">
            <img src={Github} alt=''/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default member