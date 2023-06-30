import Navbar from "../navbar";
import Header from "../header";
import WhyInfo from "./whyInfo";
import React from "react";
import Card from "./card";
import computer from "../assets/computer.svg";
import lightbulb from "../assets/lightbulb.svg";
import media from "../assets/media.svg";
import team from "../assets/team.svg";
import target from "../assets/target.svg";
import register from "../assets/register.svg"
import home from "./homepage.module.css";
import LeftSide from "./leftSide";
import Agenda from "./agenda";
import Footer from "../footer";
import Sponsor from "../Sponsor/sponsor"
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Header />
      <WhyInfo />
      <div class={home.titles}>
        <h2 class={home.target}>iTarget</h2>
        <img src={target} />
      </div>
      <div class={home.moreInfo}>
        <p>The hackathon will feature four challenge categories that focus on 
          different aspects of computing in the community. </p>
          {/* <button><Link to="/Categories">Explore Categories</Link></button> */}
        </div>
      <div class={home.cardBackground}>
        <div class={home.cardContainer}>
          <Card
            imageurl={computer}
            title="Learning and Academic"
          />
          <Card
            imageurl={lightbulb}
            title="Innovation and Creativity"
          />
          <Card
            imageurl={media}
            title="Media and Communication"
          />
          <Card
            imageurl={team}
            title="Collaboration and Leadership"
          />
        </div>
        
      </div>
      <LeftSide purpose="Register Now" body="Are you excited to demonstrate your 
      problem-solving skills in a friendly and collaborative environment? 
      We warmly invite you to be a part of our hackathon, where you can connect 
      with others who share your interests. Gather a team of 2-4 members, 
      select a challenge category that resonates with you, and together, 
      let's create innovative solutions that positively impact our community. 
      Remember, spots are limited, so don't miss out! At the end of the event, 
      you'll have the opportunity to present your prototype and compete for prizes 
      while making a meaningful difference."
      imageurl={register}/>
      <Agenda/>
      <Sponsor/>
      <Footer />
    </div>
  );
}

export default Homepage;
