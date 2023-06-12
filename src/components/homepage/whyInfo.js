import React from "react";
import info from "./whyInfo.module.css";
import Outcome from "./outcome";
import Funimage from "../assets/Funimage.svg";
import Learnimage from "../assets/Learnimage.svg";
import Networkimage from "../assets/networkimage.svg";
import Challengimage from "../assets/challengimage.svg";

function whyInfo() {
  return (
    <div className={info.bodycontainer}>
      <div className={info.title}>
        <h2>Why BYU-I Hackathon? </h2>
      </div>
      <div className={info.cardContained}>
        <Outcome
              imageurl={Funimage}
              title="Have Fun"
              body="Hackathons are fun events where you collaborate with others who enjoy programming to create innovative solutions for real-world problems. 
              If you like programming and being creative, join a hackathon for a great time."
            />
        <Outcome
              imageurl={Learnimage}
              title="Learn"
              body="At the hackathon, you can learn from guest speakers, workshops, and other 
              participants. It's a fun opportunity to expand your knowledge and gain new skills. 
              Join us to learn from industry experts and each other!"
            />
        <Outcome
              imageurl={Networkimage}
              title="Network"
              body="Hackathons are a valuable networking opportunity. You can meet professionals, 
              classmates, and other students who share your interests. It's a chance to exchange ideas, collaborate on projects, and even find career opportunities. 
              Join us to network with a diverse group of people at the hackathon!"
            />
        <Outcome
              imageurl={Challengimage}
              title="Be Challenged"
              body="Joining a hackathon is a great challenge. 
              You'll collaborate with others to create a prototype that solves a real-world problem. 
              It's a chance to showcase your problem-solving skills and make a meaningful contribution. 
              Take up the challenge and join us at the hackathon!"
            />
      </div>
    </div>
  );
}

export default whyInfo;
