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
import register from "../assets/register.svg";
import home from "./homepage.module.css";
import LeftSide from "./leftSide";
import Agenda from "./agenda";
import Footer from "../footer";
import Sponsor from "../Sponsor/sponsor";
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
        <p>
          The hackathon will feature four challenge categories that focus on
          different aspects of computing in the community.{" "}
        </p>
      </div>
      <div class={home.cardBackground}>
        <div class={home.cardContainer}>
          <Card imageurl={computer} title="Inegrity and Might" />
          <Card imageurl={lightbulb} title="Intelligence and Mind" />
          <Card imageurl={media} title="Social and Heart" />
          <Card imageurl={team} title="Innovation and Strength" />
        </div>
      </div>
      <LeftSide
        purpose="Register Now"
        body="Ready to flex those problem-solving muscles? Our hackathon is the place to be! Team up (2-4 members), choose a challenge, and craft innovative solutions for our community. Limited spots, unlimited excitement. Build, compete, and make a difference – join now!"
        imageurl={register}
      />
      <Agenda />
      <Sponsor />
      <Footer />
    </div>
  );
}

export default Homepage;
