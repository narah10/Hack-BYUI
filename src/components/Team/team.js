import React from 'react';
import Navbar from '../navbar';
import Header from '../header';
import Footer from '../footer';
import Team from './member.module.css';
import Member from './member';
import one from '../assets/1.png';
import two from '../assets/2.png';

function team() {
  return (
    <div>
        <Navbar />
        <Header />
        <div className={Team.box}>  
            <h1> Our team</h1>
            <p>Meet our amazing teams that organized this Hackathon. Get an opportunity to learn about and connect with them!</p>
        </div>
        <div className={Team.facuty}>
            <h1> Facuty </h1>
            <div className={Member.people}>
                <Member image={one} name="Kimberly" role="test" linked="https://www.linkedin.com/in/tyler-english-62b758230"/>
                <Member image={two} name="second " role ="test2" />
            
            </div>
        </div>
        <div className={Team.organizers}>
            <h1>Organizers</h1>
            
        </div>
        <div className={Team.developers}>
            <h1>Web Developers</h1>
           
        </div>
        <Footer /> 

    </div> 
  )
}

export default team