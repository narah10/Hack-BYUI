import React from 'react';
import Navbar from '../navbar';
import Header from '../header';
import Footer from '../footer';
import Team from './member.module.css';
import Member from './member';

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
                <Member/>
                <Member/>
                <Member/>
            
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