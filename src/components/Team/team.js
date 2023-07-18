import React from 'react';
import Navbar from '../navbar';
import Header from '../header';
import Footer from '../footer';
import Team from './team.module.css';


function team() {
  return (
    <div>
        <Navbar />
        <Header />
        <div className={Team.container}>
            <div className={Team.box}>  
                <h1> Our team</h1>
                <p>Meet our amazing teams that organized this Hackathon. Get an opportunity to learn about and connect with them!</p>
            </div>
            <div className={Team.teamContainer}>
                <div className={Team.teams}>
                    <h2 style={{fontSize: '1.8rem', color: '#18A0FB'}}>Fall 2023 Semester Team</h2>
                    <div className={Team.fall2023Team}>
                        <div className={Team.organizers}>
                            <h3>Organizers</h3>
                            <a href="https://www.linkedin.com/in/tyler-english-62b758230">Tyler English</a>
                            <a href="https://www.linkedin.com/mwlite/in/doubra-daunemigha">Doubra Daunemigha</a>
                            <a href="https://www.linkedin.com/in/hyeon-jang/">Hyun Jang</a>
                            <a href="https://www.linkedin.com/in/kimberly-juarez-5104b923a">Kimberly Juarez</a>
                            <a href="https://www.linkedin.com/in/sophie-kim-090a03218/">Sophie Kim</a>
                            <a href="https://www.linkedin.com/in/mitzi-vite">Mitzi Vite</a>
                            <a href="https://www.linkedin.com/in/jaelee-hutchinson-145851225/">Jaelee Hutchinson</a>
                            <a href="https://www.linkedin.com/in/shelton-macamo-604b001bb">Shelton Macamo</a>
                            <a href="https://www.linkedin.com/in/gloria-ekpo-66668a214">Gloria Ekpo</a>
                            <a href="https://www.linkedin.com/in/matthieucalheiros">Matthieu Calheiros </a>
                        </div>
                        <div className={Team.developers}>
                            <h3>Developers</h3>
                            <a href="https://www.linkedin.com/in/narahkwak">Na Rah Hernandez</a>
                            <a href="https://www.linkedin.com/in/kuan-hsueh-chen-337223223">Kuan Hsueh Chen</a>
                            <a href="https://www.linkedin.com/in/shelton-macamo-604b001bb">Shelton Macamo</a>
                        </div>
                    </div>
                </div>
                <div className={Team.teams}>
                    <h2 style={{fontSize: '1.8rem', color: '#18A0FB'}}>Fall 2024 Semester Team</h2>
                    <div className={Team.fall2023Team}>
                        <div className={Team.organizers}>
                            <h3>Organizers</h3>
                            <p>To Be Determined</p>
                        </div>
                        <div className={Team.developers}>
                            <h3>Developers</h3>
                            <p>To Be Determined</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        
        <Footer /> 

    </div> 
  )
}

export default team