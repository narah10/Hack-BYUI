import React from 'react';
import Member from './member.module.css';
import mem from '../assets/member.svg';
import Github from '../assets/github.png';
import Linkedin from '../assets/linkedin.png';

function member() {
  return (
    <div className={Member.container}>
      <img src={mem} alt=''/> 
      <h1>Name</h1>
      <p>role</p>
      <div className={Member.icon}>
        <div className={Member.linkbox}>
          <a href="https://www.linkedin.com/">
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