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
          body="Energize your coding journey with us! Join the hackathon for creative problem-solving, collaborative coding, and refreshing mini-games with cool prizes."
        />
        <Outcome
          imageurl={Learnimage}
          title="Learn"
          body="Level up at our hackathon! Learn from experts, interactive workshops, and peers. Get unstuck with our support every step of the way."
        />
        <Outcome
          imageurl={Networkimage}
          title="Network"
          body="Connect and thrive! Network with like-minds, collaborate on projects, and explore career avenues at our hackathon. Don't miss the expo to meet sponsors and recruiters."
        />
        <Outcome
          imageurl={Challengimage}
          title="Be Challenged"
          body="Embrace the challenge! Unite to innovate, solve, and shine. Your skills, our stage. Join the hackathon and make your mark!"
        />
      </div>
    </div>
  );
}

export default whyInfo;
