import Navbar from "../navbar";
import Header from "../header";
import Agenda from "./agenda";
import React from "react";
import Card from "./card";
import computer from "../assets/computer.svg";
import lightbulb from "../assets/lightbulb.svg";
import media from "../assets/media.svg";
import team from "../assets/team.svg";
import home from "./homepage.module.css";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Agenda />
      <div class={home.cardBackground}>
        <div class={home.cardContainer}>
          <Card
            imageurl={computer}
            title="Learning and Academic"
            body="Individual and community growth are essential for personal and societal progress, as they promote personal development and collaborative innovation leading to a more productive and innovative society."
          />
          <Card
            imageurl={lightbulb}
            title="Innovation and Creativity"
            body="Innovation and creativity are intrinsic to human nature, as we aspire to design and leave a positive impact on the world."
          />
          <Card
            imageurl={media}
            title="Media and Communication"
            body="Media and communication are crucial for connectivity across the world, promoting harmony and understanding among people from different cultures and backgrounds."
          />
          <Card
            imageurl={team}
            title="Collaboration and Leadership"
            body="Collaboration and leadership are essential for building deep relationships and inspiring visions, creating a sense of purpose and shared goals that drive individuals and teams towards success."
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
